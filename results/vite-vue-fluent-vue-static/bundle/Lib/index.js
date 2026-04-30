import * as Vue from "vue";
import { defineComponent, getCurrentInstance } from "vue";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var lib_exports = __exportAll({
	Vue: () => Vue,
	Vue2: () => void 0,
	del: () => del,
	install: () => install,
	isVue2: () => false,
	isVue3: () => true,
	set: () => set
});
import * as import_vue from "vue";
__reExport(lib_exports, import_vue);
function install() {}
function set(target, key, val) {
	if (Array.isArray(target)) {
		target.length = Math.max(target.length, key);
		target.splice(key, 1, val);
		return val;
	}
	target[key] = val;
	return val;
}
function del(target, key) {
	if (Array.isArray(target)) {
		target.splice(key, 1);
		return;
	}
	delete target[key];
}
var FluentType = class {
	constructor(value) {
		this.value = value;
	}
	valueOf() {
		return this.value;
	}
};
var FluentNone = class extends FluentType {
	constructor(value = "???") {
		super(value);
	}
	toString(scope) {
		return `{${this.value}}`;
	}
};
var FluentNumber = class extends FluentType {
	constructor(value, opts = {}) {
		super(value);
		this.opts = opts;
	}
	toString(scope) {
		if (scope) try {
			return scope.memoizeIntlObject(Intl.NumberFormat, this.opts).format(this.value);
		} catch (err) {
			scope.reportError(err);
		}
		return this.value.toString(10);
	}
};
var FluentDateTime = class FluentDateTime extends FluentType {
	static supportsValue(value) {
		if (typeof value === "number") return true;
		if (value instanceof Date) return true;
		if (value instanceof FluentType) return FluentDateTime.supportsValue(value.valueOf());
		if ("Temporal" in globalThis) {
			const _Temporal = globalThis.Temporal;
			if (value instanceof _Temporal.Instant || value instanceof _Temporal.PlainDateTime || value instanceof _Temporal.PlainDate || value instanceof _Temporal.PlainMonthDay || value instanceof _Temporal.PlainTime || value instanceof _Temporal.PlainYearMonth) return true;
		}
		return false;
	}
	constructor(value, opts = {}) {
		if (value instanceof FluentDateTime) {
			opts = {
				...value.opts,
				...opts
			};
			value = value.value;
		} else if (value instanceof FluentType) value = value.valueOf();
		if (typeof value === "object" && "calendarId" in value && opts.calendar === void 0) opts = {
			...opts,
			calendar: value.calendarId
		};
		super(value);
		this.opts = opts;
	}
	[Symbol.toPrimitive](hint) {
		return hint === "string" ? this.toString() : this.toNumber();
	}
	toNumber() {
		const value = this.value;
		if (typeof value === "number") return value;
		if (value instanceof Date) return value.getTime();
		if ("epochMilliseconds" in value) return value.epochMilliseconds;
		if ("toZonedDateTime" in value) return value.toZonedDateTime("UTC").epochMilliseconds;
		throw new TypeError("Unwrapping a non-number value as a number");
	}
	toString(scope) {
		if (scope) try {
			return scope.memoizeIntlObject(Intl.DateTimeFormat, this.opts).format(this.value);
		} catch (err) {
			scope.reportError(err);
		}
		if (typeof this.value === "number" || this.value instanceof Date) return new Date(this.value).toISOString();
		return this.value.toString();
	}
};
var MAX_PLACEABLES = 100;
var FSI = "⁨";
var PDI = "⁩";
function match(scope, selector, key) {
	if (key === selector) return true;
	if (key instanceof FluentNumber && selector instanceof FluentNumber && key.value === selector.value) return true;
	if (selector instanceof FluentNumber && typeof key === "string") {
		if (key === scope.memoizeIntlObject(Intl.PluralRules, selector.opts).select(selector.value)) return true;
	}
	return false;
}
function getDefault(scope, variants, star) {
	if (variants[star]) return resolvePattern(scope, variants[star].value);
	scope.reportError(/* @__PURE__ */ new RangeError("No default"));
	return new FluentNone();
}
function getArguments(scope, args) {
	const positional = [];
	const named = Object.create(null);
	for (const arg of args) if (arg.type === "narg") named[arg.name] = resolveExpression(scope, arg.value);
	else positional.push(resolveExpression(scope, arg));
	return {
		positional,
		named
	};
}
function resolveExpression(scope, expr) {
	switch (expr.type) {
		case "str": return expr.value;
		case "num": return new FluentNumber(expr.value, { minimumFractionDigits: expr.precision });
		case "var": return resolveVariableReference(scope, expr);
		case "mesg": return resolveMessageReference(scope, expr);
		case "term": return resolveTermReference(scope, expr);
		case "func": return resolveFunctionReference(scope, expr);
		case "select": return resolveSelectExpression(scope, expr);
		default: return new FluentNone();
	}
}
function resolveVariableReference(scope, { name }) {
	let arg;
	if (scope.params) if (Object.prototype.hasOwnProperty.call(scope.params, name)) arg = scope.params[name];
	else return new FluentNone(`$${name}`);
	else if (scope.args && Object.prototype.hasOwnProperty.call(scope.args, name)) arg = scope.args[name];
	else {
		scope.reportError(/* @__PURE__ */ new ReferenceError(`Unknown variable: $${name}`));
		return new FluentNone(`$${name}`);
	}
	if (arg instanceof FluentType) return arg;
	switch (typeof arg) {
		case "string": return arg;
		case "number": return new FluentNumber(arg);
		case "object": if (FluentDateTime.supportsValue(arg)) return new FluentDateTime(arg);
		default:
			scope.reportError(/* @__PURE__ */ new TypeError(`Variable type not supported: $${name}, ${typeof arg}`));
			return new FluentNone(`$${name}`);
	}
}
function resolveMessageReference(scope, { name, attr }) {
	const message = scope.bundle._messages.get(name);
	if (!message) {
		scope.reportError(/* @__PURE__ */ new ReferenceError(`Unknown message: ${name}`));
		return new FluentNone(name);
	}
	if (attr) {
		const attribute = message.attributes[attr];
		if (attribute) return resolvePattern(scope, attribute);
		scope.reportError(/* @__PURE__ */ new ReferenceError(`Unknown attribute: ${attr}`));
		return new FluentNone(`${name}.${attr}`);
	}
	if (message.value) return resolvePattern(scope, message.value);
	scope.reportError(/* @__PURE__ */ new ReferenceError(`No value: ${name}`));
	return new FluentNone(name);
}
function resolveTermReference(scope, { name, attr, args }) {
	const id = `-${name}`;
	const term = scope.bundle._terms.get(id);
	if (!term) {
		scope.reportError(/* @__PURE__ */ new ReferenceError(`Unknown term: ${id}`));
		return new FluentNone(id);
	}
	if (attr) {
		const attribute = term.attributes[attr];
		if (attribute) {
			scope.params = getArguments(scope, args).named;
			const resolved = resolvePattern(scope, attribute);
			scope.params = null;
			return resolved;
		}
		scope.reportError(/* @__PURE__ */ new ReferenceError(`Unknown attribute: ${attr}`));
		return new FluentNone(`${id}.${attr}`);
	}
	scope.params = getArguments(scope, args).named;
	const resolved = resolvePattern(scope, term.value);
	scope.params = null;
	return resolved;
}
function resolveFunctionReference(scope, { name, args }) {
	let func = scope.bundle._functions[name];
	if (!func) {
		scope.reportError(/* @__PURE__ */ new ReferenceError(`Unknown function: ${name}()`));
		return new FluentNone(`${name}()`);
	}
	if (typeof func !== "function") {
		scope.reportError(/* @__PURE__ */ new TypeError(`Function ${name}() is not callable`));
		return new FluentNone(`${name}()`);
	}
	try {
		let resolved = getArguments(scope, args);
		return func(resolved.positional, resolved.named);
	} catch (err) {
		scope.reportError(err);
		return new FluentNone(`${name}()`);
	}
}
function resolveSelectExpression(scope, { selector, variants, star }) {
	let sel = resolveExpression(scope, selector);
	if (sel instanceof FluentNone) return getDefault(scope, variants, star);
	for (const variant of variants) if (match(scope, sel, resolveExpression(scope, variant.key))) return resolvePattern(scope, variant.value);
	return getDefault(scope, variants, star);
}
function resolveComplexPattern(scope, ptn) {
	if (scope.dirty.has(ptn)) {
		scope.reportError(/* @__PURE__ */ new RangeError("Cyclic reference"));
		return new FluentNone();
	}
	scope.dirty.add(ptn);
	const result = [];
	const useIsolating = scope.bundle._useIsolating && ptn.length > 1;
	for (const elem of ptn) {
		if (typeof elem === "string") {
			result.push(scope.bundle._transform(elem));
			continue;
		}
		scope.placeables++;
		if (scope.placeables > MAX_PLACEABLES) {
			scope.dirty.delete(ptn);
			throw new RangeError(`Too many placeables expanded: ${scope.placeables}, max allowed is ${MAX_PLACEABLES}`);
		}
		if (useIsolating) result.push(FSI);
		result.push(resolveExpression(scope, elem).toString(scope));
		if (useIsolating) result.push(PDI);
	}
	scope.dirty.delete(ptn);
	return result.join("");
}
function resolvePattern(scope, value) {
	if (typeof value === "string") return scope.bundle._transform(value);
	return resolveComplexPattern(scope, value);
}
var Scope = class {
	constructor(bundle, errors, args) {
		this.dirty = /* @__PURE__ */ new WeakSet();
		this.params = null;
		this.placeables = 0;
		this.bundle = bundle;
		this.errors = errors;
		this.args = args;
	}
	reportError(error) {
		if (!this.errors || !(error instanceof Error)) throw error;
		this.errors.push(error);
	}
	memoizeIntlObject(ctor, opts) {
		let cache = this.bundle._intls.get(ctor);
		if (!cache) {
			cache = {};
			this.bundle._intls.set(ctor, cache);
		}
		let id = JSON.stringify(opts);
		if (!cache[id]) cache[id] = new ctor(this.bundle.locales, opts);
		return cache[id];
	}
};
function values(opts, allowed) {
	const unwrapped = Object.create(null);
	for (const [name, opt] of Object.entries(opts)) if (allowed.includes(name)) unwrapped[name] = opt.valueOf();
	return unwrapped;
}
var NUMBER_ALLOWED = [
	"unitDisplay",
	"currencyDisplay",
	"useGrouping",
	"minimumIntegerDigits",
	"minimumFractionDigits",
	"maximumFractionDigits",
	"minimumSignificantDigits",
	"maximumSignificantDigits"
];
function NUMBER(args, opts) {
	let arg = args[0];
	if (arg instanceof FluentNone) return new FluentNone(`NUMBER(${arg.valueOf()})`);
	if (arg instanceof FluentNumber) return new FluentNumber(arg.valueOf(), {
		...arg.opts,
		...values(opts, NUMBER_ALLOWED)
	});
	if (arg instanceof FluentDateTime) return new FluentNumber(arg.toNumber(), { ...values(opts, NUMBER_ALLOWED) });
	throw new TypeError("Invalid argument to NUMBER");
}
var DATETIME_ALLOWED = [
	"dateStyle",
	"timeStyle",
	"fractionalSecondDigits",
	"dayPeriod",
	"hour12",
	"weekday",
	"era",
	"year",
	"month",
	"day",
	"hour",
	"minute",
	"second",
	"timeZoneName"
];
function DATETIME(args, opts) {
	let arg = args[0];
	if (arg instanceof FluentNone) return new FluentNone(`DATETIME(${arg.valueOf()})`);
	if (arg instanceof FluentDateTime || arg instanceof FluentNumber) return new FluentDateTime(arg, values(opts, DATETIME_ALLOWED));
	throw new TypeError("Invalid argument to DATETIME");
}
var cache = /* @__PURE__ */ new Map();
function getMemoizerForLocale(locales) {
	const stringLocale = Array.isArray(locales) ? locales.join(" ") : locales;
	let memoizer = cache.get(stringLocale);
	if (memoizer === void 0) {
		memoizer = /* @__PURE__ */ new Map();
		cache.set(stringLocale, memoizer);
	}
	return memoizer;
}
var FluentBundle = class {
	constructor(locales, { functions, useIsolating = true, transform = (v) => v } = {}) {
		this._terms = /* @__PURE__ */ new Map();
		this._messages = /* @__PURE__ */ new Map();
		this.locales = Array.isArray(locales) ? locales : [locales];
		this._functions = {
			NUMBER,
			DATETIME,
			...functions
		};
		this._useIsolating = useIsolating;
		this._transform = transform;
		this._intls = getMemoizerForLocale(locales);
	}
	hasMessage(id) {
		return this._messages.has(id);
	}
	getMessage(id) {
		return this._messages.get(id);
	}
	addResource(res, { allowOverrides = false } = {}) {
		const errors = [];
		for (let i = 0; i < res.body.length; i++) {
			let entry = res.body[i];
			if (entry.id.startsWith("-")) {
				if (allowOverrides === false && this._terms.has(entry.id)) {
					errors.push(/* @__PURE__ */ new Error(`Attempt to override an existing term: "${entry.id}"`));
					continue;
				}
				this._terms.set(entry.id, entry);
			} else {
				if (allowOverrides === false && this._messages.has(entry.id)) {
					errors.push(/* @__PURE__ */ new Error(`Attempt to override an existing message: "${entry.id}"`));
					continue;
				}
				this._messages.set(entry.id, entry);
			}
		}
		return errors;
	}
	formatPattern(pattern, args = null, errors = null) {
		if (typeof pattern === "string") return this._transform(pattern);
		let scope = new Scope(this, errors, args);
		try {
			return resolveComplexPattern(scope, pattern).toString(scope);
		} catch (err) {
			if (scope.errors && err instanceof Error) {
				scope.errors.push(err);
				return new FluentNone().toString(scope);
			}
			throw err;
		}
	}
};
var CachedIterable = class extends Array {
	static from(iterable) {
		if (iterable instanceof this) return iterable;
		return new this(iterable);
	}
};
var CachedSyncIterable = class extends CachedIterable {
	constructor(iterable) {
		super();
		if (Symbol.iterator in Object(iterable)) this.iterator = iterable[Symbol.iterator]();
		else throw new TypeError("Argument must implement the iteration protocol.");
	}
	[Symbol.iterator]() {
		const cached = this;
		let cur = 0;
		return { next() {
			if (cached.length <= cur) cached.push(cached.iterator.next());
			return cached[cur++];
		} };
	}
	touchNext(count = 1) {
		let idx = 0;
		while (idx++ < count) {
			const last = this[this.length - 1];
			if (last && last.done) break;
			this.push(this.iterator.next());
		}
		return this[this.length - 1];
	}
};
function mapBundleSync(bundles, ids) {
	if (!Array.isArray(ids)) return getBundleForId(bundles, ids);
	return ids.map((id) => getBundleForId(bundles, id));
}
function getBundleForId(bundles, id) {
	for (const bundle of bundles) if (bundle.hasMessage(id)) return bundle;
	return null;
}
function inheritBundle(locale, parent) {
	const bundle = new FluentBundle(locale, {
		functions: parent._functions,
		useIsolating: parent._useIsolating,
		transform: parent._transform
	});
	bundle._terms = new Map(parent._terms);
	bundle._messages = new Map(parent._messages);
	return bundle;
}
function assert(condition, message) {
	if (!condition) throw new Error(`[fluent-vue] ${message}`);
}
function warn(message, ...args) {
	console.warn(`[fluent-vue] ${message}`, ...args);
}
var TranslationContext = class {
	constructor(bundles, options) {
		this.options = options;
		this.format = (key, value) => {
			const context = this.getBundle(key);
			const message = this.getMessage(context, key);
			return this._format(context, message, value) ?? key;
		};
		this.formatAttrs = (key, value) => {
			const context = this.getBundle(key);
			const message = this.getMessage(context, key);
			return this._formatAttrs(context, message, value) ?? {};
		};
		this.formatWithAttrs = (key, value) => {
			const context = this.getBundle(key);
			const message = this.getMessage(context, key);
			const formatValue = this._format(context, message, value);
			return {
				value: formatValue ?? key,
				attributes: this._formatAttrs(context, message, value) ?? {},
				hasValue: formatValue !== null
			};
		};
		this.$t = this.format;
		this.$ta = this.formatAttrs;
		this.bundles = bundles;
	}
	getBundle(key) {
		return mapBundleSync(this.bundles.value, key);
	}
	getMessage(bundle, key) {
		const message = bundle?.getMessage(key);
		if (message === void 0) {
			this.options.warnMissing(key);
			return null;
		}
		return message;
	}
	formatPattern(bundle, key, message, value) {
		const errors = [];
		const mappedValue = value;
		if (mappedValue != null && this.options.mapVariable != null) for (const [key, variable] of Object.entries(mappedValue)) {
			const mappedVariable = this.options.mapVariable(variable);
			if (mappedVariable != null) mappedValue[key] = mappedVariable;
		}
		const formatted = bundle.formatPattern(message, mappedValue, errors);
		for (const error of errors) warn(`Error when formatting message with key [${key}]`, error);
		return formatted;
	}
	_format(context, message, value) {
		if (context === null || message === null || message.value === null) return null;
		return this.formatPattern(context, message.id, message.value, value);
	}
	_formatAttrs(context, message, value) {
		if (context === null || message === null) return null;
		const result = {};
		for (const [attrName, attrValue] of Object.entries(message.attributes)) result[attrName] = this.formatPattern(context, message.id, attrValue, value);
		return result;
	}
};
function* flatMap(iterable, mapper) {
	for (const item of iterable) yield* mapper(item);
}
function getContext(rootContext, instance, fromSetup = false) {
	if (instance == null) return rootContext;
	const options = instance.$options ?? instance.type;
	if (options._fluent != null) return options._fluent;
	const context = getMergedContext(rootContext, options.fluent);
	if (!fromSetup && !(typeof window === "undefined")) options._fluent = context;
	return context;
}
function getMergedContext(rootContext, fluent) {
	if (fluent == null) return rootContext;
	return new TranslationContext((0, lib_exports.computed)(() => CachedSyncIterable.from(flatMap(rootContext.bundles.value, (parentBundle) => Object.entries(fluent).map(([locale, resources]) => {
		const locales = locale.split(/[\s+,]/);
		if (parentBundle.locales.filter((bundleLocale) => locales.includes(bundleLocale)).length === 0) return parentBundle;
		const bundle = inheritBundle(locales, parentBundle);
		bundle.addResource(resources, { allowOverrides: true });
		return bundle;
	})))), rootContext.options);
}
var RootContextSymbol = Symbol("root-context");
function useFluent() {
	const instance = (0, lib_exports.getCurrentInstance)();
	assert(instance != null, "useFluent called outside of setup");
	const rootContext = (0, lib_exports.inject)(RootContextSymbol, void 0);
	assert(rootContext != null, "useFluent called without installing plugin");
	return getContext(rootContext, instance.proxy, true);
}
var EmptyComponent_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "EmptyComponent",
	setup(__props, { expose: __expose }) {
		__expose();
		const fluent = useFluent();
		const proxy = getCurrentInstance()?.proxy;
		const __returned__ = {
			fluent,
			proxy,
			value: proxy?.$t("header-home")
		};
		Object.defineProperty(__returned__, "__isScriptSetup", {
			enumerable: false,
			value: true
		});
		return __returned__;
	}
});
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return null;
}
var EmptyComponent_default = _plugin_vue_export_helper_default(EmptyComponent_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/scripts/EmptyComponent.vue"]]);
export { EmptyComponent_default as default };
