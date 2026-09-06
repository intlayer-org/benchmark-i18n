import { n as __esmMin } from "./chunk-iyGXEJRz.js";
import { r as getHTML, t as init_interpreter } from "./interpreter-HgtbAUp0.js";
import { l as VOID_HTML_ELEMENTS, u as init_validateHTML } from "./select-DXGAONrk.js";
import { Fragment, createContext, createElement, useContext } from "react";
import { jsx } from "react/jsx-runtime";
var HTMLContext, useHTMLContext;
var init_HTMLProvider = __esmMin((() => {
	HTMLContext = createContext(void 0);
	useHTMLContext = () => useContext(HTMLContext);
}));
var init_transpiler = __esmMin((() => {
	init_validateHTML();
}));
var renderHTML;
var init_HTMLRenderer = __esmMin((() => {
	init_interpreter();
	init_transpiler();
	renderHTML = (content, { components = {} } = {}) => {
		const userComponents = Object.fromEntries(Object.entries(components).filter(([, Component]) => Component).map(([key, Component]) => [key, (props) => createElement(Component, props)]));
		return jsx(Fragment, { children: getHTML(content, new Proxy(userComponents, { get(target, prop) {
			if (typeof prop === "string" && prop in target) return target[prop];
			if (typeof prop === "string" && /^[a-z][a-z0-9]*$/.test(prop)) {
				if (VOID_HTML_ELEMENTS.has(prop)) return ({ children: _children, ...rest }) => createElement(prop, rest);
				return (props) => createElement(prop, props);
			}
		} })) });
	};
}));
var HTMLRendererPlugin;
__esmMin((() => {
	init_HTMLProvider();
	init_HTMLRenderer();
	HTMLRendererPlugin = (props) => {
		const { html, userComponents } = props;
		return renderHTML(html, { components: {
			...useHTMLContext()?.components,
			...userComponents
		} });
	};
}))();
export { HTMLRendererPlugin };
import { n as __esmMin } from "./chunk-iyGXEJRz.js";
import { n as init_getMarkdownMetadata } from "./getMarkdownMetadata-Dmb4q4sJ.js";
import { Fragment, cloneElement, createContext, createElement, useContext } from "react";
import "react/jsx-runtime";
var RuleType, Priority, ATTRIBUTE_TO_NODE_PROP_MAP, NAMED_CODES_TO_UNICODE, DO_NOT_PROCESS_HTML_ELEMENTS, ATTRIBUTES_TO_SANITIZE, ATTR_EXTRACTOR_R, BLOCK_END_R, BLOCKQUOTE_R, BLOCKQUOTE_TRIM_LEFT_MULTILINE_R, BLOCKQUOTE_ALERT_R, BREAK_LINE_R, BREAK_THEMATIC_R, CODE_BLOCK_FENCED_R, CODE_BLOCK_R, FENCE_DELIMITER_R, CODE_INLINE_R, CONSECUTIVE_NEWLINE_R, FOOTNOTE_R, FOOTNOTE_REFERENCE_R, FRONT_MATTER_R, GFM_TASK_R, HEADING_R, HEADING_ATX_COMPLIANT_R, HEADING_SETEXT_R, TAG_PLAIN_RUN, TAG_ATTRIBUTES, NOT_SELF_CLOSING, NESTED_SAME_TAG_OPENING, HTML_BLOCK_ELEMENT_R, HTML_CHAR_CODE_R, HTML_COMMENT_R, HTML_CUSTOM_ATTR_R, HTML_SELF_CLOSING_ELEMENT_R, CUSTOM_COMPONENT_R, INTERPOLATION_R, LINK_AUTOLINK_BARE_URL_R, LINK_AUTOLINK_R, CAPTURE_LETTER_AFTER_HYPHEN, NP_TABLE_R, TABLE_TRIM_PIPES, TABLE_CENTER_ALIGN, TABLE_LEFT_ALIGN, TABLE_RIGHT_ALIGN, PARAGRAPH_R, REFERENCE_IMAGE_OR_LINK, REFERENCE_IMAGE_R, REFERENCE_LINK_R, HTML_BLOCK_OPENING_TAG_R, HTML_SELF_CLOSING_OPENING_TAG_R, CUSTOM_COMPONENT_OPENING_TAG_R, SHOULD_RENDER_AS_BLOCK_R, NORMALIZE_WHITESPACE_R, TRIM_STARTING_NEWLINES, HTML_LEFT_TRIM_AMOUNT_R, ORDERED_LIST_BULLET, UNORDERED_LIST_BULLET, TEXT_ESCAPED_R, UNESCAPE_R, TEXT_PLAIN_R, SHORTCODE_R, LOOKAHEAD, INLINE_SKIP_R, TEXT_BOLD_R, TEXT_EMPHASIZED_R, TEXT_MARKED_R, TEXT_STRIKETHROUGHED_R, generateListItemPrefix, ORDERED_LIST_ITEM_PREFIX, UNORDERED_LIST_ITEM_PREFIX, generateListItemPrefixRegex, ORDERED_LIST_ITEM_PREFIX_R, UNORDERED_LIST_ITEM_PREFIX_R, generateListItemRegex, ORDERED_LIST_ITEM_R, UNORDERED_LIST_ITEM_R, generateListRegex, ORDERED_LIST_R, UNORDERED_LIST_R;
var init_constants = __esmMin((() => {
	RuleType = {
		blockQuote: "0",
		breakLine: "1",
		breakThematic: "2",
		codeBlock: "3",
		codeFenced: "4",
		codeInline: "5",
		footnote: "6",
		footnoteReference: "7",
		gfmTask: "8",
		heading: "9",
		headingSetext: "10",
		htmlBlock: "11",
		htmlComment: "12",
		htmlSelfClosing: "13",
		customComponent: "34",
		image: "14",
		link: "15",
		linkAngleBraceStyleDetector: "16",
		linkBareUrlDetector: "17",
		newlineCoalescer: "19",
		orderedList: "20",
		paragraph: "21",
		ref: "22",
		refImage: "23",
		refLink: "24",
		table: "25",
		tableSeparator: "26",
		text: "27",
		textBolded: "28",
		textEmphasized: "29",
		textEscaped: "30",
		textMarked: "31",
		textStrikethroughed: "32",
		unorderedList: "33"
	};
	Priority = {
		MAX: 0,
		HIGH: 1,
		MED: 2,
		LOW: 3,
		MIN: 4
	};
	ATTRIBUTE_TO_NODE_PROP_MAP = [
		"allowFullScreen",
		"allowTransparency",
		"autoComplete",
		"autoFocus",
		"autoPlay",
		"cellPadding",
		"cellSpacing",
		"charSet",
		"classId",
		"colSpan",
		"contentEditable",
		"contextMenu",
		"crossOrigin",
		"encType",
		"formAction",
		"formEncType",
		"formMethod",
		"formNoValidate",
		"formTarget",
		"frameBorder",
		"hrefLang",
		"inputMode",
		"keyParams",
		"keyType",
		"marginHeight",
		"marginWidth",
		"maxLength",
		"mediaGroup",
		"minLength",
		"noValidate",
		"radioGroup",
		"readOnly",
		"rowSpan",
		"spellCheck",
		"srcDoc",
		"srcLang",
		"srcSet",
		"tabIndex",
		"useMap"
	].reduce((obj, x) => {
		obj[x.toLowerCase()] = x;
		return obj;
	}, {
		class: "className",
		for: "htmlFor"
	});
	NAMED_CODES_TO_UNICODE = {
		amp: "&",
		apos: "'",
		gt: ">",
		lt: "<",
		nbsp: "\xA0",
		quot: "“"
	};
	DO_NOT_PROCESS_HTML_ELEMENTS = [
		"style",
		"script",
		"pre"
	];
	ATTRIBUTES_TO_SANITIZE = [
		"src",
		"href",
		"data",
		"formAction",
		"srcDoc",
		"action"
	];
	ATTR_EXTRACTOR_R = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi;
	BLOCK_END_R = /\n{2,}$/;
	BLOCKQUOTE_R = /^(\s*>[\s\S]*?)(?=\n\n|$)/;
	BLOCKQUOTE_TRIM_LEFT_MULTILINE_R = /^ *> ?/gm;
	BLOCKQUOTE_ALERT_R = /^(?:\[!([^\]]*)\]\n)?([\s\S]*)/;
	BREAK_LINE_R = /^ {2,}\n/;
	BREAK_THEMATIC_R = /^(?:([-*_])( *\1){2,}) *(?:\n *)+\n/;
	CODE_BLOCK_FENCED_R = /^(?: {1,3})?(`{3,}|~{3,}) *(\S+)? *([^\n]*?)?\n([\s\S]*?)(?:\1\n?|$)/;
	CODE_BLOCK_R = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/;
	FENCE_DELIMITER_R = /^([ \t]*)(`{3,}|~{3,})/;
	CODE_INLINE_R = /^(`+)((?:\\`|(?!\1)`|[^`])+)\1/;
	CONSECUTIVE_NEWLINE_R = /^(?:\n *)*\n/;
	FOOTNOTE_R = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/;
	FOOTNOTE_REFERENCE_R = /^\[\^([^\]]+)]/;
	FRONT_MATTER_R = /^---[ \t]*\n(.|\n)*?\n---[ \t]*\n/;
	GFM_TASK_R = /^\s*?\[(x|\s)\]/;
	HEADING_R = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/;
	HEADING_ATX_COMPLIANT_R = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/;
	HEADING_SETEXT_R = /^([^\n]+)\n *(=|-)\2{2,} *\n/;
	TAG_PLAIN_RUN = `[^>"'<]*`;
	TAG_ATTRIBUTES = `${TAG_PLAIN_RUN}(?:(?:"[^"\\n]*"|'[^'\\n]*'|<.*?>|["'])${TAG_PLAIN_RUN})*`;
	NOT_SELF_CLOSING = `(?![^>]*/>)`;
	NESTED_SAME_TAG_OPENING = `<\\1[^>]*?>`;
	HTML_BLOCK_ELEMENT_R = new RegExp(`^ *(?!<[a-zA-Z][^ >/]* ?/>)<([a-zA-Z][^ >/]*) ?(${NOT_SELF_CLOSING}${TAG_ATTRIBUTES})>\\n?(\\s*(?:${NESTED_SAME_TAG_OPENING}[\\s\\S]*?</\\1>|(?!<\\1\\b)[\\s\\S])*?)</\\1>(?!</\\1>)\\n*`, "i");
	HTML_CHAR_CODE_R = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi;
	HTML_COMMENT_R = /^<!--[\s\S]*?(?:-->)/;
	HTML_CUSTOM_ATTR_R = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/;
	HTML_SELF_CLOSING_ELEMENT_R = new RegExp(`^ *<([a-zA-Z][a-zA-Z0-9:]*)(?:\\s+(${TAG_ATTRIBUTES}))?/?>(?!</\\1>)(\\s*\\n)?`, "i");
	CUSTOM_COMPONENT_R = new RegExp(`^ *<([A-Z][a-zA-Z0-9]*)(?:\\s+(${TAG_ATTRIBUTES}))?>\\n?(\\s*(?:${NESTED_SAME_TAG_OPENING}[\\s\\S]*?</\\1>|(?!<\\1\\b)[\\s\\S])*?)</\\1>(?!</\\1>)\\n*`);
	INTERPOLATION_R = /^\{.*\}$/;
	LINK_AUTOLINK_BARE_URL_R = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/;
	LINK_AUTOLINK_R = /^<([^ >]+[:@/][^ >]+)>/;
	CAPTURE_LETTER_AFTER_HYPHEN = /-([a-z])?/gi;
	NP_TABLE_R = /^(\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/;
	TABLE_TRIM_PIPES = /(^ *\||\| *$)/g;
	TABLE_CENTER_ALIGN = /^ *:-+: *$/;
	TABLE_LEFT_ALIGN = /^ *:-+ *$/;
	TABLE_RIGHT_ALIGN = /^ *-+: *$/;
	PARAGRAPH_R = /^[^\n]+(?: {2}\n|\n{2,})/;
	REFERENCE_IMAGE_OR_LINK = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/;
	REFERENCE_IMAGE_R = /^!\[([^\]]*)\] ?\[([^\]]*)\]/;
	REFERENCE_LINK_R = /^\[([^\]]*)\] ?\[([^\]]*)\]/;
	HTML_BLOCK_OPENING_TAG_R = /^ *<([a-z][a-z0-9:-]*)\b/i;
	HTML_SELF_CLOSING_OPENING_TAG_R = /^ *<([a-zA-Z][a-zA-Z0-9:]*)[\s>/]/;
	CUSTOM_COMPONENT_OPENING_TAG_R = /^ *<([A-Z][a-zA-Z0-9]*)/;
	SHOULD_RENDER_AS_BLOCK_R = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/;
	NORMALIZE_WHITESPACE_R = /\r\n?|\f|\t/g;
	TRIM_STARTING_NEWLINES = /^\n+/;
	HTML_LEFT_TRIM_AMOUNT_R = /^\n*([ \t]*)/;
	ORDERED_LIST_BULLET = "(?:\\d+\\.)";
	UNORDERED_LIST_BULLET = "(?:[*+-])";
	TEXT_ESCAPED_R = /^\\([^0-9A-Za-z\s])/;
	UNESCAPE_R = /\\([^0-9A-Za-z\s])/g;
	TEXT_PLAIN_R = /^[\s\S](?:(?! {2}\n|[0-9]\.|http)[^=*_~\-\n:<`\\[!])*/;
	SHORTCODE_R = /^(:[a-zA-Z0-9-_]+:)/;
	LOOKAHEAD = (double) => `(?=[\\s\\S]+?\\1${double ? "\\1" : ""})`;
	INLINE_SKIP_R = "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|\\\\[^\\s]|[\\s\\S])+?)";
	TEXT_BOLD_R = new RegExp(`^([*_])\\1${LOOKAHEAD(1)}${INLINE_SKIP_R}\\1\\1(?!\\1)`);
	TEXT_EMPHASIZED_R = new RegExp(`^([*_])${LOOKAHEAD(0)}${INLINE_SKIP_R}\\1(?!\\1)`);
	TEXT_MARKED_R = new RegExp(`^(==)${LOOKAHEAD(0)}${INLINE_SKIP_R}\\1`);
	TEXT_STRIKETHROUGHED_R = new RegExp(`^(~~)${LOOKAHEAD(0)}${INLINE_SKIP_R}\\1`);
	generateListItemPrefix = (type) => {
		return "( *)(" + (type === 1 ? ORDERED_LIST_BULLET : UNORDERED_LIST_BULLET) + ") +";
	};
	ORDERED_LIST_ITEM_PREFIX = generateListItemPrefix(1);
	UNORDERED_LIST_ITEM_PREFIX = generateListItemPrefix(2);
	generateListItemPrefixRegex = (type) => {
		return new RegExp("^" + (type === 1 ? ORDERED_LIST_ITEM_PREFIX : UNORDERED_LIST_ITEM_PREFIX));
	};
	ORDERED_LIST_ITEM_PREFIX_R = generateListItemPrefixRegex(1);
	UNORDERED_LIST_ITEM_PREFIX_R = generateListItemPrefixRegex(2);
	generateListItemRegex = (type) => {
		return new RegExp("^" + (type === 1 ? ORDERED_LIST_ITEM_PREFIX : UNORDERED_LIST_ITEM_PREFIX) + "[^\\n]*(?:\\n(?!\\1" + (type === 1 ? ORDERED_LIST_BULLET : UNORDERED_LIST_BULLET) + " )[^\\n]*)*(\\n|$)", "gm");
	};
	ORDERED_LIST_ITEM_R = generateListItemRegex(1);
	UNORDERED_LIST_ITEM_R = generateListItemRegex(2);
	generateListRegex = (type) => {
		const bullet = type === 1 ? ORDERED_LIST_BULLET : UNORDERED_LIST_BULLET;
		return new RegExp("^( *)(" + bullet + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + bullet + " (?!" + bullet + " ))\\n*|\\s*\\n*$)");
	};
	ORDERED_LIST_R = generateListRegex(1);
	UNORDERED_LIST_R = generateListRegex(2);
}));
var trimEnd, startsWith, unquote, unescapeString, cx, get, SLUGIFY_REPLACEMENTS, slugify, SANITIZE_R, SANITIZE_STRIP_R, sanitizer, normalizeWhitespace, trimLeadingWhitespaceOutsideFences, normalizeAttributeKey, parseStyleAttribute, attributeValueToNodePropValue, parseTableAlignCapture, parseTableAlign, parseTableRow, parseTableCells, qualifies, allowInline, inlineRegex, simpleInlineRegex, blockRegex, anyScopeRegex, parseInline, parseSimpleInline, parseBlock, parseCaptureInline, captureNothing, renderNothing, some;
var init_utils = __esmMin((() => {
	init_constants();
	trimEnd = (str) => {
		let end = str.length;
		while (end > 0 && str[end - 1] <= " ") end--;
		return str.slice(0, end);
	};
	startsWith = (str, prefix) => {
		return str.startsWith(prefix);
	};
	unquote = (str) => {
		const first = str[0];
		if ((first === "\"" || first === "'") && str.length >= 2 && str[str.length - 1] === first) return str.slice(1, -1);
		return str;
	};
	unescapeString = (rawString) => rawString ? rawString.replace(UNESCAPE_R, "$1") : rawString;
	cx = (...args) => args.filter(Boolean).join(" ");
	get = (src, path, fb) => {
		let ptr = src;
		const frags = path.split(".");
		while (frags.length) {
			ptr = ptr[frags[0]];
			if (ptr === void 0) break;
			else frags.shift();
		}
		return ptr ?? fb;
	};
	SLUGIFY_REPLACEMENTS = [
		[/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a"],
		[/[çÇ]/g, "c"],
		[/[ðÐ]/g, "d"],
		[/[ÈÉÊËéèêë]/g, "e"],
		[/[ÏïÎîÍíÌì]/g, "i"],
		[/[Ññ]/g, "n"],
		[/[øØœŒÕõÔôÓóÒò]/g, "o"],
		[/[ÜüÛûÚúÙù]/g, "u"],
		[/[ŸÿÝý]/g, "y"],
		[/[^a-z0-9- ]/gi, ""],
		[/ /gi, "-"]
	];
	slugify = (str) => {
		let result = str;
		for (let i = 0; i < SLUGIFY_REPLACEMENTS.length; i++) {
			const [pattern, replacement] = SLUGIFY_REPLACEMENTS[i];
			result = result.replace(pattern, replacement);
		}
		return result.toLowerCase();
	};
	SANITIZE_R = /(javascript|vbscript|data(?!:image)):/i;
	SANITIZE_STRIP_R = /[^A-Za-z0-9/:]/g;
	sanitizer = (input) => {
		if (input.indexOf(":") === -1 && input.indexOf("%") === -1) return input;
		try {
			const decoded = decodeURIComponent(input).replace(SANITIZE_STRIP_R, "");
			if (SANITIZE_R.test(decoded)) {
				console.warn("Input contains an unsafe JavaScript/VBScript/data expression, it will not be rendered.", decoded);
				return null;
			}
		} catch (_e) {
			console.warn("Input could not be decoded due to malformed syntax or characters, it will not be rendered.", input);
			return null;
		}
		return input;
	};
	normalizeWhitespace = (source) => source.replace(NORMALIZE_WHITESPACE_R, (match) => {
		if (match === "	") return "    ";
		if (match === "\f") return "";
		return "\n";
	});
	trimLeadingWhitespaceOutsideFences = (text, whitespace) => {
		if (!whitespace) return text;
		const lines = text.split("\n");
		let openFence = null;
		const removePrefix = (line, prefix) => prefix && line.startsWith(prefix) ? line.slice(prefix.length) : line;
		return lines.map((line) => {
			const fenceMatch = line.match(FENCE_DELIMITER_R);
			if (!openFence) {
				if (fenceMatch) openFence = {
					indentation: fenceMatch[1],
					marker: fenceMatch[2]
				};
				return removePrefix(line, whitespace);
			}
			const isClosingFence = fenceMatch?.[2]?.startsWith(openFence.marker);
			const { indentation } = openFence;
			if (isClosingFence) openFence = null;
			return removePrefix(line, indentation);
		}).join("\n");
	};
	normalizeAttributeKey = (key) => {
		if (key.indexOf("-") !== -1 && key.match(HTML_CUSTOM_ATTR_R) === null) key = key.replace(CAPTURE_LETTER_AFTER_HYPHEN, (_, letter) => {
			return letter.toUpperCase();
		});
		return key;
	};
	parseStyleAttribute = (styleString) => {
		const styles = [];
		let buffer = "";
		let inUrl = false;
		let inQuotes = false;
		let quoteChar = "";
		if (!styleString) return styles;
		for (let i = 0; i < styleString.length; i++) {
			const char = styleString[i];
			if ((char === "\"" || char === "'") && !inUrl) {
				if (!inQuotes) {
					inQuotes = true;
					quoteChar = char;
				} else if (char === quoteChar) {
					inQuotes = false;
					quoteChar = "";
				}
			}
			if (char === "(" && buffer.endsWith("url")) inUrl = true;
			else if (char === ")" && inUrl) inUrl = false;
			if (char === ";" && !inQuotes && !inUrl) {
				const declaration = buffer.trim();
				if (declaration) {
					const colonIndex = declaration.indexOf(":");
					if (colonIndex > 0) {
						const key = declaration.slice(0, colonIndex).trim();
						const value = declaration.slice(colonIndex + 1).trim();
						styles.push([key, value]);
					}
				}
				buffer = "";
			} else buffer += char;
		}
		const declaration = buffer.trim();
		if (declaration) {
			const colonIndex = declaration.indexOf(":");
			if (colonIndex > 0) {
				const key = declaration.slice(0, colonIndex).trim();
				const value = declaration.slice(colonIndex + 1).trim();
				styles.push([key, value]);
			}
		}
		return styles;
	};
	attributeValueToNodePropValue = (tag, key, value, sanitizeUrlFn) => {
		if (key === "style") return parseStyleAttribute(value).reduce((styles, [styleKey, styleValue]) => {
			const camelCasedKey = styleKey.replace(/(-[a-z])/g, (substr) => substr[1].toUpperCase());
			styles[camelCasedKey] = sanitizeUrlFn(styleValue, tag, styleKey);
			return styles;
		}, {});
		else if (ATTRIBUTES_TO_SANITIZE.indexOf(key) !== -1) return sanitizeUrlFn(unescapeString(value), tag, key);
		else if (value.match(INTERPOLATION_R)) value = unescapeString(value.slice(1, value.length - 1));
		if (value === "true") return true;
		else if (value === "false") return false;
		return value;
	};
	parseTableAlignCapture = (alignCapture) => {
		if (TABLE_RIGHT_ALIGN.test(alignCapture)) return "right";
		else if (TABLE_CENTER_ALIGN.test(alignCapture)) return "center";
		else if (TABLE_LEFT_ALIGN.test(alignCapture)) return "left";
		return "left";
	};
	parseTableAlign = (source) => {
		return source.replace(TABLE_TRIM_PIPES, "").split("|").map(parseTableAlignCapture);
	};
	parseTableRow = (source, parse, state, tableOutput) => {
		const prevInTable = state.inTable;
		state.inTable = true;
		const cells = [[]];
		let acc = "";
		const flush = () => {
			if (!acc) return;
			const cell = cells[cells.length - 1];
			cell.push.apply(cell, parse(acc, state));
			acc = "";
		};
		source.trim().split(/(`[^`]*`|\\\||\|)/).filter(Boolean).forEach((fragment, i, arr) => {
			if (fragment.trim() === "|") {
				flush();
				if (tableOutput) {
					if (i !== 0 && i !== arr.length - 1) cells.push([]);
					return;
				}
			}
			acc += fragment;
		});
		flush();
		state.inTable = prevInTable;
		return cells;
	};
	parseTableCells = (source, parse, state) => {
		return source.trim().split("\n").map((rowText) => parseTableRow(rowText, parse, state, true));
	};
	qualifies = (source, state, qualify) => {
		if (Array.isArray(qualify)) {
			for (let i = 0; i < qualify.length; i++) if (startsWith(source, qualify[i])) return true;
			return false;
		}
		return qualify(source, state);
	};
	allowInline = (fn) => {
		fn.inline = 1;
		return fn;
	};
	inlineRegex = (regex) => allowInline((source, state) => {
		if (state.inline) return regex.exec(source);
		else return null;
	});
	simpleInlineRegex = (regex) => allowInline((source, state) => {
		if (state.inline || state.simple) return regex.exec(source);
		else return null;
	});
	blockRegex = (regex) => (source, state) => {
		if (state.inline || state.simple) return null;
		else return regex.exec(source);
	};
	anyScopeRegex = (fn) => allowInline((source, state) => {
		if (typeof fn === "function") return fn(source, state);
		return fn.exec(source);
	});
	parseInline = (parse, children, state) => {
		const isCurrentlyInline = state.inline ?? false;
		const isCurrentlySimple = state.simple ?? false;
		state.inline = true;
		state.simple = true;
		const result = parse(children, state);
		state.inline = isCurrentlyInline;
		state.simple = isCurrentlySimple;
		return result;
	};
	parseSimpleInline = (parse, children, state) => {
		const isCurrentlyInline = state.inline ?? false;
		const isCurrentlySimple = state.simple ?? false;
		state.inline = false;
		state.simple = true;
		const result = parse(children, state);
		state.inline = isCurrentlyInline;
		state.simple = isCurrentlySimple;
		return result;
	};
	parseBlock = (parse, children, state = {}) => {
		const isCurrentlyInline = state.inline || false;
		state.inline = false;
		const normalizedChildren = trimEnd(children);
		const result = parse(/\n\n$/.test(normalizedChildren) === false ? normalizedChildren.endsWith("\n") ? `${normalizedChildren}\n` : `${normalizedChildren}\n\n` : normalizedChildren, state);
		state.inline = isCurrentlyInline;
		return result;
	};
	parseCaptureInline = (capture, parse, state) => {
		return { children: parseInline(parse, capture[2] ?? "", state) };
	};
	captureNothing = () => ({});
	renderNothing = () => null;
	some = (regexes, input) => {
		for (let i = 0; i < regexes.length; i++) if (regexes[i].test(input)) return true;
		return false;
	};
}));
var ruleOrderCache, sameNames, orderRules, advanceLookbehind, parserFor;
var init_parser = __esmMin((() => {
	init_utils();
	ruleOrderCache = /* @__PURE__ */ new Map();
	sameNames = (a, b) => {
		for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
		return true;
	};
	orderRules = (names, rules) => {
		const candidates = ruleOrderCache.get(names.length);
		if (candidates) {
			for (let i = 0; i < candidates.length; i++) if (sameNames(names, candidates[i].names)) return candidates[i].order;
		}
		const order = names.slice().sort((a, b) => rules[a]._order - rules[b]._order || +a - +b);
		const entry = {
			names: names.slice(),
			order
		};
		if (candidates) candidates.push(entry);
		else ruleOrderCache.set(names.length, [entry]);
		return order;
	};
	advanceLookbehind = (state, capture) => {
		const newlineIndex = capture.lastIndexOf("\n");
		const hasPrevCapture = state.prevCaptureHasBlankLine !== void 0;
		if (state.prevCaptureHasBlankLine !== true) state.prevCaptureHasBlankLine = capture.indexOf("\n\n") !== -1 || hasPrevCapture && capture.charCodeAt(0) === 10 && state.prevCaptureIndent === "";
		const tail = newlineIndex === -1 ? state.prevCaptureIndent === void 0 ? void 0 : state.prevCaptureIndent + capture : capture.slice(newlineIndex + 1);
		if (tail === void 0 || tail === "") {
			state.prevCaptureIndent = tail;
			return;
		}
		for (let i = 0; i < tail.length; i++) if (tail.charCodeAt(i) !== 32) {
			state.prevCaptureIndent = void 0;
			return;
		}
		state.prevCaptureIndent = tail;
	};
	parserFor = (rules) => {
		const ruleList = Object.keys(rules);
		ruleList.forEach((type) => {
			const order = rules[type]?._order;
			if (typeof order !== "number" || !Number.isFinite(order)) console.warn(`intlayer: Invalid order for rule \`${type}\`: ${order}`);
		});
		const order = orderRules(ruleList, rules);
		const ruleCount = order.length;
		const qualifiers = new Array(ruleCount);
		const matchers = new Array(ruleCount);
		const parsers = new Array(ruleCount);
		for (let i = 0; i < ruleCount; i++) {
			const rule = rules[order[i]];
			qualifiers[i] = rule._qualify;
			matchers[i] = rule._match;
			parsers[i] = rule._parse;
		}
		const nestedParse = (source, state = {}) => {
			const result = [];
			if (state.prevCaptureHasBlankLine === void 0) state.prevCaptureIndent = "";
			if (source.trim()) while (source) for (let i = 0; i < ruleCount; i++) {
				const qualify = qualifiers[i];
				if (qualify && !qualifies(source, state, qualify)) continue;
				const capture = matchers[i](source, state);
				if (capture?.[0]) {
					source = source.substring(capture[0].length);
					const parsed = parsers[i](capture, nestedParse, state);
					advanceLookbehind(state, capture[0]);
					if (!parsed.type) parsed.type = order[i];
					result.push(parsed);
					break;
				}
			}
			return result;
		};
		return (source, state) => nestedParse(normalizeWhitespace(source), state);
	};
}));
var renderFor, createRenderer;
var init_renderer = __esmMin((() => {
	renderFor = (render) => {
		const emit = (ast, state = {}) => {
			if (!Array.isArray(ast)) return render(ast, emit, state);
			const oldKey = state.key;
			const result = [];
			let lastWasString = false;
			let renderedIndex = 0;
			for (let i = 0; i < ast.length; i++) {
				const nodeOut = emit(ast[i], {
					...state,
					key: renderedIndex
				});
				const isString = typeof nodeOut === "string";
				if (isString && lastWasString) result[result.length - 1] = result[result.length - 1] + nodeOut;
				else if (nodeOut !== null) {
					result.push(nodeOut);
					renderedIndex++;
				}
				lastWasString = isString;
			}
			state.key = oldKey;
			return result;
		};
		return emit;
	};
	createRenderer = (rules, userRender) => (ast, render, state) => {
		const renderer = rules[ast.type]?._render;
		return userRender ? userRender(() => renderer?.(ast, render, state), ast, render, state) : renderer?.(ast, render, state);
	};
}));
var IMAGE_R, LINK_R, closingTagRegexCache, getClosingTagRegex, createTagResolver, createSlugger, createElementFactory, createRules, noopCreateElement, createDocumentRules, parseWithRules, renderWithRules, parseMarkdown, renderMarkdownAst, compile;
var init_compiler = __esmMin((() => {
	init_constants();
	init_utils();
	init_parser();
	init_renderer();
	IMAGE_R = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/;
	LINK_R = new RegExp(`^\\[((?:\\[[^\\[\\]]*(?:\\[[^\\[\\]]*\\][^\\[\\]]*)*\\]|[^\\[\\]])*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`);
	closingTagRegexCache = /* @__PURE__ */ new Map();
	getClosingTagRegex = (tag) => {
		const cached = closingTagRegexCache.get(tag);
		if (cached) return cached;
		const regex = new RegExp(`</${tag}>`, "i");
		closingTagRegexCache.set(tag, regex);
		return regex;
	};
	createTagResolver = (components) => {
		let lowercaseKeys = null;
		return (tag) => {
			if (typeof tag !== "string") return tag;
			const override = get(components, tag);
			if (override) return override;
			if (!lowercaseKeys) {
				lowercaseKeys = /* @__PURE__ */ new Map();
				for (const key of Object.keys(components)) {
					const lowercased = key.toLowerCase();
					if (!lowercaseKeys.has(lowercased)) lowercaseKeys.set(lowercased, key);
				}
			}
			const key = lowercaseKeys.get(tag.toLowerCase());
			return (key ? get(components, key) : void 0) || tag;
		};
	};
	createSlugger = (ctx) => (input) => ctx.slugify ? ctx.slugify(input, slugify) : slugify(input);
	createElementFactory = (ctx, options) => {
		const { runtime, components = {} } = ctx;
		const resolveTag = createTagResolver(components);
		const filteredTags = options.tagfilter ? [
			"title",
			"textarea",
			"style",
			"xmp",
			"iframe",
			"noembed",
			"noframes",
			"script",
			"plaintext"
		] : [];
		return (tag, props, ...children) => {
			if (typeof tag === "string" && filteredTags.includes(tag.toLowerCase())) return null;
			const isStringTag = typeof tag === "string";
			const className = cx(props?.className, props?.class);
			const mergedProps = {};
			let classNameHandled = false;
			if (props) for (const key in props) {
				const value = props[key];
				if (value === void 0 || value === null) continue;
				if (key === "className" || key === "class") {
					if (!classNameHandled) {
						if (className) mergedProps.className = className;
						classNameHandled = true;
					}
				} else mergedProps[key] = value;
			}
			if (!classNameHandled && className) mergedProps.className = className;
			let finalProps = mergedProps;
			if (runtime.normalizeProps && isStringTag) finalProps = runtime.normalizeProps(tag, mergedProps);
			const component = resolveTag(tag);
			return runtime.createElement(component, finalProps, ...children.length === 1 ? [children[0]] : children);
		};
	};
	createRules = (createElement, ctx, options, footnotes, refs, attrStringToMap, containsBlockSyntax, nonParagraphBlockSyntaxes) => {
		const slug = createSlugger(ctx);
		const sanitize = ctx.sanitizer ?? sanitizer;
		const namedCodesToUnicode = ctx.namedCodesToUnicode ? {
			...NAMED_CODES_TO_UNICODE,
			...ctx.namedCodesToUnicode
		} : NAMED_CODES_TO_UNICODE;
		const generateListRule = (type) => {
			const ordered = type === 1;
			const LIST_R = ordered ? ORDERED_LIST_R : UNORDERED_LIST_R;
			const LIST_ITEM_R = ordered ? ORDERED_LIST_ITEM_R : UNORDERED_LIST_ITEM_R;
			const LIST_ITEM_PREFIX_R = ordered ? ORDERED_LIST_ITEM_PREFIX_R : UNORDERED_LIST_ITEM_PREFIX_R;
			return {
				_qualify: (source) => LIST_ITEM_PREFIX_R.test(source),
				_match: allowInline((source, state) => {
					const lineIndent = state.prevCaptureIndent;
					const isStartOfLine = lineIndent !== void 0;
					const isListAllowed = state.list ?? (!state.inline && !state.simple);
					if (isStartOfLine && isListAllowed) {
						const matchSource = lineIndent ? lineIndent + source : source;
						return LIST_R.exec(matchSource);
					}
					return null;
				}),
				_order: Priority.HIGH,
				_parse(capture, parse, state) {
					const bullet = capture[2];
					const startValue = ordered ? +bullet.slice(0, -1) : void 0;
					const items = capture[0].replace(BLOCK_END_R, "\n").match(LIST_ITEM_R);
					if (!items) return {
						items: [],
						ordered,
						start: startValue
					};
					let lastItemWasAParagraph = false;
					return {
						items: items.map((item, i) => {
							const prefixCapture = LIST_ITEM_PREFIX_R.exec(item);
							const space = prefixCapture ? prefixCapture[0].length : 0;
							const spaceRegex = new RegExp(`^ {1,${space}}`, "gm");
							const content = item.replace(spaceRegex, "").replace(LIST_ITEM_PREFIX_R, "");
							const isLastItem = i === items.length - 1;
							const thisItemIsAParagraph = content.indexOf("\n\n") !== -1 || isLastItem && lastItemWasAParagraph;
							lastItemWasAParagraph = thisItemIsAParagraph;
							const oldStateInline = state.inline;
							const oldStateList = state.list;
							state.list = true;
							let adjustedContent;
							if (thisItemIsAParagraph) {
								state.inline = false;
								adjustedContent = `${trimEnd(content)}\n\n`;
							} else {
								state.inline = true;
								adjustedContent = trimEnd(content);
							}
							const parsed = parse(adjustedContent, state);
							state.inline = oldStateInline;
							state.list = oldStateList;
							return parsed;
						}),
						ordered,
						start: startValue
					};
				},
				_render(node, output, state = {}) {
					const Tag = node.ordered ? "ol" : "ul";
					const props = { key: state.key };
					if (node.ordered && node.start != null) props.start = node.start;
					return createElement(Tag, props, ...node.items.map((item, i) => createElement("li", { key: i }, output(item, state))));
				}
			};
		};
		const matchParagraph = (source, state) => {
			if (state.inline || state.simple || state.inHTML && source.indexOf("\n\n") === -1 && !state.prevCaptureHasBlankLine) return null;
			let start = 0;
			while (true) {
				const newlineIndex = source.indexOf("\n", start);
				const line = source.slice(start, newlineIndex === -1 ? void 0 : newlineIndex + 1);
				if (some(nonParagraphBlockSyntaxes, line)) break;
				if (newlineIndex === -1 || !line.trim()) break;
				start = newlineIndex + 1;
			}
			const match = source.slice(0, start);
			if (match === "") return null;
			const captured = trimEnd(match);
			if (captured === "") return null;
			return [
				match,
				void 0,
				captured
			];
		};
		return {
			[RuleType.blockQuote]: {
				_qualify: [">"],
				_match: blockRegex(BLOCKQUOTE_R),
				_order: Priority.HIGH,
				_parse(capture, parse, state) {
					const matchAlert = capture[0].replace(BLOCKQUOTE_TRIM_LEFT_MULTILINE_R, "").match(BLOCKQUOTE_ALERT_R);
					const alert = matchAlert?.[1];
					const content = matchAlert?.[2] ?? "";
					return {
						alert,
						children: content.indexOf("\n") !== -1 ? parseBlock(parse, content, state) : parseInline(parse, content, state)
					};
				},
				_render(node, output, state = {}) {
					const props = { key: state.key };
					if (node.alert) {
						props.className = `markdown-alert-${slug(node.alert.toLowerCase())}`;
						node.children.unshift({
							attrs: {},
							children: [{
								type: RuleType.text,
								text: node.alert
							}],
							noInnerParse: true,
							type: RuleType.htmlBlock,
							tag: "header"
						});
					}
					return createElement("blockquote", props, output(node.children, state));
				}
			},
			[RuleType.breakLine]: {
				_qualify: ["  "],
				_match: anyScopeRegex(BREAK_LINE_R),
				_order: Priority.HIGH,
				_parse: captureNothing,
				_render(_, __, state = {}) {
					return createElement("br", { key: state.key });
				}
			},
			[RuleType.breakThematic]: {
				_qualify: [
					"--",
					"__",
					"**",
					"- ",
					"* ",
					"_ "
				],
				_match: blockRegex(BREAK_THEMATIC_R),
				_order: Priority.HIGH,
				_parse: captureNothing,
				_render(_, __, state = {}) {
					return createElement("hr", { key: state.key });
				}
			},
			[RuleType.codeBlock]: {
				_qualify: ["    "],
				_match: blockRegex(CODE_BLOCK_R),
				_order: Priority.MAX,
				_parse(capture) {
					return {
						type: RuleType.codeBlock,
						lang: void 0,
						text: unescapeString(trimEnd(capture[0].replace(/^ {4}/gm, "")))
					};
				},
				_render(node, _, state = {}) {
					const attrs = { ...node.attrs ?? {} };
					const langClass = node.lang ? `lang-${node.lang}` : "lang-plaintext";
					attrs.className = attrs.className ? `${attrs.className} ${langClass}` : langClass;
					return createElement("pre", { key: state.key }, createElement("code", attrs, node.text));
				}
			},
			[RuleType.codeFenced]: {
				_qualify: ["```", "~~~"],
				_match: blockRegex(CODE_BLOCK_FENCED_R),
				_order: Priority.MAX,
				_parse(capture) {
					return {
						attrs: attrStringToMap("code", capture[3] ?? ""),
						lang: capture[2] || void 0,
						text: capture[4],
						type: RuleType.codeBlock
					};
				}
			},
			[RuleType.codeInline]: {
				_qualify: ["`"],
				_match: simpleInlineRegex(CODE_INLINE_R),
				_order: Priority.LOW,
				_parse(capture) {
					return { text: unescapeString(capture[2]) };
				},
				_render(node, _, state = {}) {
					return createElement("code", { key: state.key }, node.text);
				}
			},
			[RuleType.footnote]: {
				_qualify: ["[^"],
				_match: blockRegex(FOOTNOTE_R),
				_order: Priority.MAX,
				_parse(capture) {
					footnotes.push({
						footnote: capture[2],
						identifier: capture[1]
					});
					return {};
				},
				_render: renderNothing
			},
			[RuleType.footnoteReference]: {
				_qualify: ["[^"],
				_match: inlineRegex(FOOTNOTE_REFERENCE_R),
				_order: Priority.HIGH,
				_parse(capture) {
					return {
						target: `#${slug(capture[1])}`,
						text: capture[1]
					};
				},
				_render(node, _, state = {}) {
					return createElement("a", {
						key: state.key,
						href: sanitize(node.target, "a", "href") ?? void 0
					}, createElement("sup", { key: state.key }, node.text));
				}
			},
			[RuleType.gfmTask]: {
				_qualify: ["[ ]", "[x]"],
				_match: inlineRegex(GFM_TASK_R),
				_order: Priority.HIGH,
				_parse(capture) {
					return { completed: capture[1].toLowerCase() === "x" };
				},
				_render(node, _, state = {}) {
					return createElement("input", {
						checked: node.completed,
						key: state.key,
						readOnly: true,
						type: "checkbox"
					});
				}
			},
			[RuleType.heading]: {
				_qualify: ["#"],
				_match: blockRegex(options.enforceAtxHeadings ? HEADING_ATX_COMPLIANT_R : HEADING_R),
				_order: Priority.HIGH,
				_parse(capture, parse, state) {
					return {
						children: parseInline(parse, capture[2], state),
						id: slug(capture[2]),
						level: capture[1].length
					};
				},
				_render(node, output, state = {}) {
					return createElement(`h${node.level}`, {
						id: node.id,
						key: state.key
					}, output(node.children, state));
				}
			},
			[RuleType.headingSetext]: {
				_qualify: (source) => {
					const nlIndex = source.indexOf("\n");
					return nlIndex > 0 && nlIndex < source.length - 1 && (source[nlIndex + 1] === "=" || source[nlIndex + 1] === "-");
				},
				_match: blockRegex(HEADING_SETEXT_R),
				_order: Priority.MAX,
				_parse(capture, parse, state) {
					return {
						children: parseInline(parse, capture[1], state),
						level: capture[2] === "=" ? 1 : 2,
						type: RuleType.heading
					};
				}
			},
			[RuleType.htmlBlock]: {
				_qualify: (source) => {
					if (options.disableParsingRawHTML) return false;
					const match = HTML_BLOCK_OPENING_TAG_R.exec(source);
					if (!match) return false;
					return getClosingTagRegex(match[1]).test(source);
				},
				_match: anyScopeRegex(HTML_BLOCK_ELEMENT_R),
				_order: Priority.HIGH,
				_parse(capture, parse, state) {
					const whitespace = capture[3].match(HTML_LEFT_TRIM_AMOUNT_R)?.[1] ?? "";
					const trimmed = trimLeadingWhitespaceOutsideFences(capture[3], whitespace);
					const parseFunc = containsBlockSyntax(trimmed) ? parseBlock : parseInline;
					const tagName = capture[1].trim();
					const noInnerParse = DO_NOT_PROCESS_HTML_ELEMENTS.indexOf(tagName.toLowerCase()) !== -1;
					const tag = noInnerParse ? tagName.toLowerCase() : tagName;
					const ast = {
						attrs: attrStringToMap(tag, capture[2] ?? ""),
						noInnerParse,
						tag
					};
					state.inAnchor = state.inAnchor || tagName.toLowerCase() === "a";
					if (noInnerParse) ast.text = capture[3];
					else {
						const prevInHTML = state.inHTML;
						state.inHTML = true;
						ast.children = parseFunc(parse, trimmed, state);
						state.inHTML = prevInHTML;
					}
					state.inAnchor = false;
					return ast;
				},
				_render(node, output, state = {}) {
					return createElement(node.tag, {
						key: state.key,
						...node.attrs ?? {}
					}, node.text ?? (node.children ? output(node.children, state) : ""));
				}
			},
			[RuleType.htmlComment]: {
				_qualify: ["<!"],
				_match: anyScopeRegex(HTML_COMMENT_R),
				_order: Priority.HIGH,
				_parse: captureNothing,
				_render: renderNothing
			},
			[RuleType.htmlSelfClosing]: {
				_qualify: (source) => {
					if (options.disableParsingRawHTML) return false;
					return HTML_SELF_CLOSING_OPENING_TAG_R.test(source);
				},
				_match: anyScopeRegex(HTML_SELF_CLOSING_ELEMENT_R),
				_order: Priority.HIGH,
				_parse(capture) {
					const tag = capture[1].trim();
					return {
						attrs: attrStringToMap(tag, capture[2] || ""),
						tag
					};
				},
				_render(node, _, state = {}) {
					return createElement(node.tag, {
						key: state.key,
						...node.attrs ?? {}
					});
				}
			},
			[RuleType.customComponent]: {
				_qualify: (source) => CUSTOM_COMPONENT_OPENING_TAG_R.test(source),
				_match: anyScopeRegex(CUSTOM_COMPONENT_R),
				_order: Priority.MAX,
				_parse(capture, parse, state) {
					const whitespace = capture[3].match(HTML_LEFT_TRIM_AMOUNT_R)?.[1] ?? "";
					const trimmed = trimLeadingWhitespaceOutsideFences(capture[3], whitespace);
					const parseFunc = containsBlockSyntax(trimmed) ? parseBlock : parseInline;
					const tag = capture[1].trim();
					const ast = {
						attrs: attrStringToMap(tag, capture[2] ?? ""),
						noInnerParse: false,
						tag
					};
					const prevInHTML = state.inHTML;
					state.inHTML = true;
					ast.children = parseFunc(parse, trimmed, state);
					state.inHTML = prevInHTML;
					return ast;
				},
				_render(node, output, state = {}) {
					return createElement(node.tag, {
						key: state.key,
						...node.attrs ?? {}
					}, node.text ?? (node.children ? output(node.children, state) : ""));
				}
			},
			[RuleType.paragraph]: {
				_match: matchParagraph,
				_order: Priority.LOW,
				_parse: parseCaptureInline,
				_render(node, output, state = {}) {
					return createElement("p", { key: state.key }, output(node.children, state));
				}
			},
			[RuleType.image]: {
				_qualify: ["!["],
				_match: simpleInlineRegex(IMAGE_R),
				_order: Priority.HIGH,
				_parse(capture) {
					return {
						alt: unescapeString(capture[1]),
						target: unescapeString(capture[2]),
						title: unescapeString(capture[3])
					};
				},
				_render(node, _, state = {}) {
					return createElement("img", {
						key: state.key,
						alt: node.alt ?? void 0,
						title: node.title ?? void 0,
						src: sanitize(node.target, "img", "src") ?? void 0
					});
				}
			},
			[RuleType.link]: {
				_qualify: ["["],
				_match: inlineRegex(LINK_R),
				_order: Priority.LOW,
				_parse(capture, parse, state) {
					return {
						children: parseSimpleInline(parse, capture[1], state),
						target: unescapeString(capture[2]),
						title: unescapeString(capture[3])
					};
				},
				_render(node, output, state = {}) {
					const sanitizedHref = sanitize(node.target, "a", "href");
					return createElement("a", {
						key: state.key,
						href: sanitizedHref ?? void 0,
						title: node.title ?? void 0
					}, output(node.children, state));
				}
			},
			[RuleType.linkAngleBraceStyleDetector]: {
				_qualify: ["<"],
				_match: inlineRegex(LINK_AUTOLINK_R),
				_order: Priority.MAX,
				_parse(capture) {
					let target = capture[1];
					let isEmail = false;
					if (target.indexOf("@") !== -1 && target.indexOf("//") === -1) {
						isEmail = true;
						target = target.replace("mailto:", "");
					}
					return {
						children: [{
							text: target,
							type: RuleType.text
						}],
						target: isEmail ? `mailto:${target}` : target,
						type: RuleType.link
					};
				}
			},
			[RuleType.linkBareUrlDetector]: {
				_qualify: (source, state) => !!(state.inline && !state.inAnchor && !options.disableAutoLink && (startsWith(source, "http://") || startsWith(source, "https://"))),
				_match: inlineRegex(LINK_AUTOLINK_BARE_URL_R),
				_order: Priority.MAX,
				_parse(capture) {
					return {
						children: [{
							text: capture[1],
							type: RuleType.text
						}],
						target: capture[1],
						type: RuleType.link
					};
				}
			},
			[RuleType.newlineCoalescer]: {
				_match: blockRegex(CONSECUTIVE_NEWLINE_R),
				_order: Priority.LOW,
				_parse: captureNothing,
				_render() {
					return "\n";
				}
			},
			[RuleType.orderedList]: generateListRule(1),
			[RuleType.unorderedList]: generateListRule(2),
			[RuleType.ref]: {
				_qualify: ["["],
				_match: anyScopeRegex(REFERENCE_IMAGE_OR_LINK),
				_order: Priority.MAX,
				_parse(capture) {
					refs[capture[1]] = {
						target: capture[2],
						title: capture[4]
					};
					return {};
				},
				_render: renderNothing
			},
			[RuleType.refImage]: {
				_qualify: ["!["],
				_match: simpleInlineRegex(REFERENCE_IMAGE_R),
				_order: Priority.MAX,
				_parse(capture) {
					return {
						alt: capture[1] ? unescapeString(capture[1]) : void 0,
						ref: capture[2]
					};
				},
				_render(node, _, state = {}) {
					const ref = refs[node.ref];
					if (!ref) return null;
					return createElement("img", {
						key: state.key,
						alt: node.alt,
						src: sanitize(ref.target, "img", "src") ?? void 0,
						title: ref.title
					});
				}
			},
			[RuleType.refLink]: {
				_qualify: (source) => source[0] === "[" && source.indexOf("](") === -1,
				_match: inlineRegex(REFERENCE_LINK_R),
				_order: Priority.MAX,
				_parse(capture, parse, state) {
					return {
						children: parseSimpleInline(parse, capture[1], state),
						fallbackChildren: capture[0],
						ref: capture[2]
					};
				},
				_render(node, output, state = {}) {
					const ref = refs[node.ref];
					if (!ref) return createElement("span", { key: state.key }, node.fallbackChildren);
					return createElement("a", {
						key: state.key,
						href: sanitize(ref.target, "a", "href") ?? void 0,
						title: ref.title
					}, output(node.children, state));
				}
			},
			[RuleType.table]: {
				_qualify: ["|"],
				_match: blockRegex(NP_TABLE_R),
				_order: Priority.HIGH,
				_parse(capture, parse, state) {
					state.inline = true;
					const align = capture[2] ? parseTableAlign(capture[2]) : [];
					const cells = capture[3] ? parseTableCells(capture[3], parse, state) : [];
					const header = parseTableRow(capture[1], parse, state, !!cells.length);
					state.inline = false;
					return cells.length ? {
						align,
						cells,
						header,
						type: RuleType.table
					} : {
						children: header.flat(),
						type: RuleType.paragraph
					};
				},
				_render(node, output, state = {}) {
					const table = node;
					const getStyle = (i) => table.align[i] && table.align[i] !== "left" ? { textAlign: table.align[i] } : {};
					return createElement("table", { key: state.key }, createElement("thead", null, createElement("tr", null, ...table.header.map((c, i) => createElement("th", {
						key: i,
						style: getStyle(i)
					}, output(c, state))))), createElement("tbody", null, ...table.cells.map((row, i) => createElement("tr", { key: i }, ...row.map((c, j) => createElement("td", {
						key: j,
						style: getStyle(j)
					}, output(c, state)))))));
				}
			},
			[RuleType.tableSeparator]: {
				_match: (source, state) => state.inTable && source[0] === "|" ? /^\|/.exec(source) : null,
				_order: Priority.HIGH,
				_parse() {
					return { type: RuleType.tableSeparator };
				},
				_render() {
					return " | ";
				}
			},
			[RuleType.text]: {
				_match: allowInline((source, _state) => {
					const shortMatch = SHORTCODE_R.exec(source);
					if (shortMatch) return shortMatch;
					return TEXT_PLAIN_R.exec(source) || /^[\s\S]/.exec(source);
				}),
				_order: Priority.MIN,
				_parse(capture) {
					const text = capture[0];
					return { text: text.indexOf("&") === -1 ? text : text.replace(HTML_CHAR_CODE_R, (f, i) => {
						if (i.startsWith("#x")) return String.fromCharCode(parseInt(i.slice(2), 16));
						if (i.startsWith("#")) return String.fromCharCode(parseInt(i.slice(1), 10));
						return namedCodesToUnicode[i] || f;
					}) };
				},
				_render(node) {
					return node.text;
				}
			},
			[RuleType.textBolded]: {
				_qualify: ["**", "__"],
				_match: simpleInlineRegex(TEXT_BOLD_R),
				_order: Priority.MED,
				_parse(capture, parse, state) {
					return { children: parse(capture[2], state) };
				},
				_render(node, output, state = {}) {
					return createElement("strong", { key: state.key }, output(node.children, state));
				}
			},
			[RuleType.textEmphasized]: {
				_qualify: ["*", "_"],
				_match: simpleInlineRegex(TEXT_EMPHASIZED_R),
				_order: Priority.LOW,
				_parse(capture, parse, state) {
					return { children: parse(capture[2], state) };
				},
				_render(node, output, state = {}) {
					return createElement("em", { key: state.key }, output(node.children, state));
				}
			},
			[RuleType.textEscaped]: {
				_qualify: ["\\"],
				_match: simpleInlineRegex(TEXT_ESCAPED_R),
				_order: Priority.HIGH,
				_parse(capture) {
					return {
						text: capture[1],
						type: RuleType.text
					};
				}
			},
			[RuleType.textMarked]: {
				_qualify: ["=="],
				_match: simpleInlineRegex(TEXT_MARKED_R),
				_order: Priority.LOW,
				_parse: parseCaptureInline,
				_render(node, output, state = {}) {
					return createElement("mark", { key: state.key }, output(node.children, state));
				}
			},
			[RuleType.textStrikethroughed]: {
				_qualify: ["~~"],
				_match: simpleInlineRegex(TEXT_STRIKETHROUGHED_R),
				_order: Priority.LOW,
				_parse: parseCaptureInline,
				_render(node, output, state = {}) {
					return createElement("del", { key: state.key }, output(node.children, state));
				}
			}
		};
	};
	noopCreateElement = () => null;
	createDocumentRules = (createElement, ctx, options, footnotes, refs) => {
		const attrStringToMap = (tag, str) => {
			if (!str?.trim()) return null;
			const attributes = str.match(ATTR_EXTRACTOR_R);
			if (!attributes) return null;
			return attributes.reduce((map, raw) => {
				const delimiterIdx = raw.indexOf("=");
				if (delimiterIdx !== -1) {
					const key = normalizeAttributeKey(raw.slice(0, delimiterIdx)).trim();
					const value = unquote(raw.slice(delimiterIdx + 1).trim());
					const mappedKey = ATTRIBUTE_TO_NODE_PROP_MAP[key] ?? key;
					if (mappedKey === "ref") return map;
					map[mappedKey] = attributeValueToNodePropValue(tag, key, value, ctx.sanitizer ?? sanitizer);
					if (typeof map[mappedKey] === "string" && (HTML_BLOCK_ELEMENT_R.test(map[mappedKey]) || HTML_SELF_CLOSING_ELEMENT_R.test(map[mappedKey]))) map[mappedKey] = parseMarkdown(map[mappedKey].trim(), ctx, options).ast;
				} else if (raw !== "style") map[ATTRIBUTE_TO_NODE_PROP_MAP[raw] ?? raw] = true;
				return map;
			}, {});
		};
		const nonParagraphBlockSyntaxes = [
			BLOCKQUOTE_R,
			CODE_BLOCK_FENCED_R,
			CODE_BLOCK_R,
			options.enforceAtxHeadings ? HEADING_ATX_COMPLIANT_R : HEADING_R,
			HEADING_SETEXT_R,
			NP_TABLE_R,
			ORDERED_LIST_R,
			UNORDERED_LIST_R,
			CUSTOM_COMPONENT_R
		];
		const blockSyntaxes = options.disableParsingRawHTML ? nonParagraphBlockSyntaxes : [
			...nonParagraphBlockSyntaxes,
			PARAGRAPH_R,
			HTML_BLOCK_ELEMENT_R,
			HTML_COMMENT_R,
			HTML_SELF_CLOSING_ELEMENT_R,
			CUSTOM_COMPONENT_R
		];
		const containsBlockSyntax = (input) => {
			const cleaned = input.replace(TRIM_STARTING_NEWLINES, "");
			const slice = cleaned.length > 2048 ? cleaned.slice(0, 2048) : cleaned;
			if (slice.indexOf("\n\n") !== -1) return true;
			return some(blockSyntaxes, slice);
		};
		const baseRules = createRules(createElement, ctx, options, footnotes, refs, attrStringToMap, containsBlockSyntax, nonParagraphBlockSyntaxes);
		return options.disableParsingRawHTML ? Object.keys(baseRules).reduce((acc, key) => {
			if (key !== RuleType.htmlBlock && key !== RuleType.htmlSelfClosing) acc[key] = baseRules[key];
			return acc;
		}, {}) : baseRules;
	};
	parseWithRules = (markdown, options, rules, footnotes, refs) => {
		const parser = parserFor(rules);
		const result = options.preserveFrontmatter ? markdown : markdown.replace(FRONT_MATTER_R, "");
		const trimmedStart = result.replace(TRIM_STARTING_NEWLINES, "");
		const inline = options.forceInline || !options.forceBlock && SHOULD_RENDER_AS_BLOCK_R.test(trimmedStart) === false;
		const ast = parser(inline ? result : `${trimEnd(trimmedStart)}\n\n`, { inline });
		if (footnotes.length > 0) for (const def of footnotes) def.parsedAst = parser(def.footnote, { inline: true });
		return {
			ast,
			footnotes,
			references: refs,
			inline
		};
	};
	renderWithRules = (parsed, ctx, options, rules, createElement) => {
		const components = ctx.components ?? {};
		const slug = createSlugger(ctx);
		const footnotes = parsed.footnotes || [];
		const emitter = renderFor(createRenderer(rules, options.renderRule));
		const inline = parsed.inline;
		const arr = emitter(parsed.ast, { inline });
		while (typeof arr[arr.length - 1] === "string" && !arr[arr.length - 1].trim()) arr.pop();
		const getOuterNode = () => {
			if (options.wrapper === null) return arr;
			const wrapper = options.wrapper ?? (inline ? "span" : "div");
			if (arr.length > 1 || options.forceWrapper) return createElement(wrapper, { key: "outer" }, arr);
			if (arr.length === 1) {
				const node = arr[0];
				if (typeof node === "string") {
					const spanProps = { key: "outer" };
					if (!inline && components) {
						const pOverrideProps = get(components, "p.props", {}) ?? {};
						const mergedClassName = cx(spanProps.className, pOverrideProps.className);
						const finalSpanProps = {
							...spanProps,
							...pOverrideProps
						};
						if (mergedClassName) finalSpanProps.className = mergedClassName;
						return createElement("span", finalSpanProps, node);
					}
					return createElement("span", spanProps, node);
				}
				return node;
			}
			return createElement(wrapper, { key: "outer" }, null);
		};
		const node = getOuterNode();
		return footnotes.length ? createElement("div", null, node, createElement("footer", { key: "footer" }, ...footnotes.map((def) => createElement("div", {
			id: slug(def.identifier),
			key: def.identifier
		}, def.identifier, emitter(def.parsedAst || def.footnote, { inline: true }))))) : node;
	};
	parseMarkdown = (markdown = "", ctx, options = {}) => {
		const footnotes = [];
		const refs = {};
		return parseWithRules(markdown, options, createDocumentRules(noopCreateElement, ctx, options, footnotes, refs), footnotes, refs);
	};
	renderMarkdownAst = (parsed, ctx, options = {}) => {
		const createElement = createElementFactory(ctx, options);
		return renderWithRules(parsed, ctx, options, createDocumentRules(createElement, ctx, options, parsed.footnotes ?? [], parsed.references ?? {}), createElement);
	};
	compile = (markdown = "", ctx, options = {}) => {
		if (typeof markdown !== "string") {
			console.error("intlayer: the first argument must be a string. Received", typeof markdown);
			throw new Error("intlayer: the first argument must be a string");
		}
		const footnotes = [];
		const refs = {};
		const createElement = createElementFactory(ctx, options);
		const rules = createDocumentRules(createElement, ctx, options, footnotes, refs);
		return renderWithRules(parseWithRules(markdown, options, rules, footnotes, refs), ctx, options, rules, createElement);
	};
}));
var init_markdown = __esmMin((() => {
	init_getMarkdownMetadata();
	init_compiler();
}));
var DEFAULT_RUNTIME, compileMarkdown;
var init_processor = __esmMin((() => {
	init_markdown();
	DEFAULT_RUNTIME = {
		createElement,
		cloneElement,
		Fragment,
		normalizeProps: (_tag, props) => props
	};
	compileMarkdown = (input = "", options = {}) => {
		const { createElement: customCreateElement, disableAutoLink, disableParsingRawHTML, enforceAtxHeadings, forceBlock, forceInline, forceWrapper, namedCodesToUnicode, components, renderRule, sanitizer, slugify, wrapper, preserveFrontmatter, tagfilter } = options;
		const ctx = {
			runtime: customCreateElement ? {
				...DEFAULT_RUNTIME,
				createElement: customCreateElement
			} : DEFAULT_RUNTIME,
			components,
			namedCodesToUnicode,
			sanitizer,
			slugify
		};
		const compilerOptions = {
			disableAutoLink,
			disableParsingRawHTML,
			enforceAtxHeadings,
			forceBlock,
			forceInline,
			forceWrapper,
			renderRule,
			wrapper,
			preserveFrontmatter,
			tagfilter
		};
		if (typeof input === "string") return compile(input, ctx, compilerOptions);
		return renderMarkdownAst(input, ctx, compilerOptions);
	};
}));
var MarkdownContext, useMarkdownContext;
var init_MarkdownProvider = __esmMin((() => {
	MarkdownContext = createContext(void 0);
	useMarkdownContext = () => useContext(MarkdownContext);
}));
export { init_markdown as a, init_processor as i, useMarkdownContext as n, compileMarkdown as r, init_MarkdownProvider as t };
import { n as __esmMin } from "./chunk-iyGXEJRz.js";
import { i as init_processor, n as useMarkdownContext, r as compileMarkdown, t as init_MarkdownProvider } from "./MarkdownProvider-DlZXlkpc.js";
var MarkdownRendererPlugin;
__esmMin((() => {
	init_processor();
	init_MarkdownProvider();
	MarkdownRendererPlugin = (props) => {
		const { children, options, components } = props;
		const context = useMarkdownContext();
		if (context) return context.renderMarkdown(children, options, {
			...context.components,
			...components
		});
		return compileMarkdown(children, {
			...options,
			components
		});
	};
}))();
export { MarkdownRendererPlugin };
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esmMin = (fn, res) => () => (fn && (res = fn(fn = 0)), res);
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
var __toCommonJS = (mod) => __hasOwnProp.call(mod, "module.exports") ? mod["module.exports"] : __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __require = ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, { get: (a, b) => (typeof require !== "undefined" ? require : a)[b] }) : x)(function(x) {
	if (typeof require !== "undefined") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + x + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
});
export { __toCommonJS as a, __require as i, __esmMin as n, __toESM as o, __exportAll as r, __commonJSMin as t };
import { n as __esmMin } from "./chunk-iyGXEJRz.js";
import { h as init_dictionary, i as internationalization, m as QUALIFIER_DYNAMIC_TYPES_KEY, o as routing, p as PRELOADED_DYNAMIC_KEY, r as init_built } from "./built-k6nPQRRu.js";
import { A as serializeVariantChain, E as init_qualifiedDictionary, Y as init_nodeType, k as resolveEffectiveVariantId, q as TRANSLATION } from "./interpreter-HgtbAUp0.js";
var init_defaultValues = __esmMin((() => {
	init_dictionary();
}));
var isQualifiedDynamicLoaderMap, collectQualifiedChunks, resolveQualifiedDynamicContent;
var init_qualifiedDynamicLoader = __esmMin((() => {
	init_qualifiedDictionary();
	init_defaultValues();
	isQualifiedDynamicLoaderMap = (value) => typeof value === "object" && value !== null && "__intlayerQualifierTypes" in value;
	collectQualifiedChunks = (loaderMap, key, locale, selector) => {
		const qualifierTypes = loaderMap[QUALIFIER_DYNAMIC_TYPES_KEY];
		const localeTree = loaderMap[locale];
		const itemAxisOpen = qualifierTypes.includes("item") && selector?.item === void 0;
		if (!localeTree) return {
			itemAxisOpen,
			missed: true,
			chunks: []
		};
		const chunks = [];
		const walk = (node, dimensions, segments) => {
			if (dimensions.length === 0) {
				chunks.push({
					cacheKey: `${key}.${locale}.${segments.join("/")}`,
					loader: node
				});
				return true;
			}
			const [dimension, ...rest] = dimensions;
			const tree = node;
			if (dimension === "item" && selector?.item === void 0) {
				for (const segment of Object.keys(tree).sort((left, right) => Number(left) - Number(right))) walk(tree[segment], rest, [...segments, segment]);
				return true;
			}
			const segment = dimension === "variant" ? resolveEffectiveVariantId(serializeVariantChain(selector?.variant), (variantId) => tree[variantId] !== void 0) : String(selector?.item);
			const child = tree[segment];
			if (!child) return false;
			return walk(child, rest, [...segments, segment]);
		};
		return {
			itemAxisOpen,
			missed: !walk(localeTree, qualifierTypes, []),
			chunks
		};
	};
	resolveQualifiedDynamicContent = (params) => {
		const { loaderMap, key, locale, selector, loadChunk, transform } = params;
		const { itemAxisOpen, missed, chunks } = collectQualifiedChunks(loaderMap, key, locale, selector);
		if (missed) return itemAxisOpen ? [] : null;
		const dictionaries = chunks.map(({ cacheKey, loader }) => loadChunk(cacheKey, loader()));
		if (itemAxisOpen) return dictionaries.map(transform);
		const [dictionary] = dictionaries;
		return dictionary ? transform(dictionary) : null;
	};
}));
var getPreloadedDictionary;
var init_preloadedDynamicLoader = __esmMin((() => {
	init_defaultValues();
	getPreloadedDictionary = (loaderMap, locale) => {
		if (typeof loaderMap !== "object" || loaderMap === null) return void 0;
		const preloaded = loaderMap[PRELOADED_DYNAMIC_KEY];
		if (!preloaded || preloaded.locale !== locale) return void 0;
		return preloaded.dictionary;
	};
}));
var resolveExpiresToTimestamp, buildCookieString;
var init_cookieExpiry = __esmMin((() => {
	resolveExpiresToTimestamp = (expires) => {
		if (typeof expires === "number") return Date.now() + expires * 1e3;
		if (typeof expires === "string") {
			const time = Date.parse(expires);
			return Number.isNaN(time) ? void 0 : time;
		}
	};
	buildCookieString = (name, value, attributes) => {
		const parts = [`${name}=${encodeURIComponent(value)}`];
		if (attributes.path) parts.push(`Path=${attributes.path}`);
		if (attributes.domain) parts.push(`Domain=${attributes.domain}`);
		const expiresTimestamp = resolveExpiresToTimestamp(attributes.expires);
		if (expiresTimestamp !== void 0) parts.push(`Expires=${new Date(expiresTimestamp).toUTCString()}`);
		if (attributes.secure) parts.push("Secure");
		if (attributes.sameSite) parts.push(`SameSite=${attributes.sameSite}`);
		return parts.join("; ");
	};
})), TREE_SHAKE_STORAGE_COOKIES, TREE_SHAKE_STORAGE_LOCAL_STORAGE, TREE_SHAKE_STORAGE_SESSION_STORAGE, localeStorageOptions, getLocaleFromStorageClient, setLocaleInStorageClient;
var init_localeStorage = __esmMin((() => {
	init_cookieExpiry();
	init_built();
	TREE_SHAKE_STORAGE_COOKIES = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
	TREE_SHAKE_STORAGE_LOCAL_STORAGE = process.env.INTLAYER_ROUTING_STORAGE_LOCALSTORAGE === "false";
	TREE_SHAKE_STORAGE_SESSION_STORAGE = process.env.INTLAYER_ROUTING_STORAGE_SESSIONSTORAGE === "false";
	process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
	localeStorageOptions = {
		getCookie: (name) => document.cookie.split(";").find((c) => c.trim().startsWith(`${name}=`))?.split("=")[1],
		getLocaleStorage: (name) => localStorage.getItem(name),
		getSessionStorage: (name) => sessionStorage.getItem(name),
		isCookieEnabled: true,
		setCookieStore: (name, value, attributes) => cookieStore.set({
			name,
			value,
			path: attributes.path,
			domain: attributes.domain,
			expires: attributes.expires,
			sameSite: attributes.sameSite
		}),
		setCookieString: (_name, cookie) => {
			document.cookie = cookie;
		},
		setSessionStorage: (name, value) => sessionStorage.setItem(name, value),
		setLocaleStorage: (name, value) => localStorage.setItem(name, value)
	};
	getLocaleFromStorageClient = (options = localeStorageOptions) => {
		const { locales } = internationalization;
		if (options?.isCookieEnabled === false) return void 0;
		const isValidLocale = (value) => !!value && locales.includes(value);
		if (!TREE_SHAKE_STORAGE_COOKIES) for (let i = 0; i < (routing.storage.cookies ?? []).length; i++) try {
			const value = options?.getCookie?.(routing.storage.cookies[i].name);
			if (isValidLocale(value)) return value;
		} catch {}
		if (!TREE_SHAKE_STORAGE_LOCAL_STORAGE) for (let i = 0; i < (routing.storage.localStorage ?? []).length; i++) try {
			const value = options?.getLocaleStorage?.(routing.storage.localStorage[i].name);
			if (isValidLocale(value)) return value;
		} catch {}
		if (!TREE_SHAKE_STORAGE_SESSION_STORAGE && routing.storage.sessionStorage) for (let i = 0; i < routing.storage.sessionStorage.length; i++) try {
			const value = options?.getSessionStorage?.(routing.storage.sessionStorage[i].name);
			if (isValidLocale(value)) return value;
		} catch {}
	};
	setLocaleInStorageClient = (locale, options) => {
		if (options?.isCookieEnabled === false) return;
		if (!TREE_SHAKE_STORAGE_COOKIES && routing.storage.cookies) for (let i = 0; i < routing.storage.cookies.length; i++) {
			const { name, attributes } = routing.storage.cookies[i];
			try {
				if (options?.setCookieStore) options.setCookieStore(name, locale, {
					...attributes,
					expires: resolveExpiresToTimestamp(attributes.expires)
				});
			} catch {
				try {
					if (options?.setCookieString) options.setCookieString(name, buildCookieString(name, locale, attributes));
				} catch {}
			}
		}
		if (!TREE_SHAKE_STORAGE_LOCAL_STORAGE && routing.storage.localStorage && options?.setLocaleStorage) for (let i = 0; i < routing.storage.localStorage.length; i++) {
			const { name } = routing.storage.localStorage[i];
			try {
				if (!(options?.overwrite ?? true) && options?.getLocaleStorage) {
					if (options.getLocaleStorage(name)) continue;
				}
				options.setLocaleStorage(name, locale);
			} catch {}
		}
		if (!TREE_SHAKE_STORAGE_SESSION_STORAGE && routing.storage.sessionStorage && options?.setSessionStorage) for (let i = 0; i < routing.storage.sessionStorage.length; i++) {
			const { name } = routing.storage.sessionStorage[i];
			try {
				if (!(options?.overwrite ?? true) && options?.getSessionStorage) {
					if (options.getSessionStorage(name)) continue;
				}
				options.setSessionStorage(name, locale);
			} catch {}
		}
	};
}));
var isSameKeyPath;
var init_isSameKeyPath = __esmMin((() => {
	isSameKeyPath = (keyPath1, keyPath2) => keyPath1.every((element, index) => keyPath2[index] && keyPath2[index].key === element.key && keyPath2[index].type === element.type);
}));
var init_utils = __esmMin((() => {
	init_localeStorage();
	init_isSameKeyPath();
}));
var editDictionaryByKeyPath;
var init_editDictionaryByKeyPath = __esmMin((() => {
	init_nodeType();
	editDictionaryByKeyPath = (dictionaryContent, keyPath, newValue) => {
		let currentValue = dictionaryContent;
		let parentValue = null;
		let lastKeys = [];
		if (keyPath.length === 0) return newValue;
		try {
			for (let i = 0; i < keyPath.length; i++) {
				const keyObj = keyPath[i];
				parentValue = currentValue;
				if (keyObj?.type === "object" || keyObj?.type === "array") {
					lastKeys = [keyObj.key];
					if (!currentValue[keyObj.key] || typeof currentValue[keyObj.key] !== "object") currentValue[keyObj.key] = {};
					currentValue = currentValue[keyObj.key];
				}
				if (keyObj?.type === "translation" || keyObj?.type === "enumeration" || keyObj?.type === "plural" || keyObj?.type === "gender" || keyObj?.type === "select") {
					lastKeys = [keyObj.type, keyObj.key];
					if (!currentValue[keyObj.type] || typeof currentValue[keyObj.type] !== "object") currentValue[keyObj.type] = {};
					if (!currentValue[keyObj.type][keyObj.key] || typeof currentValue[keyObj.type][keyObj.key] !== "object") currentValue[keyObj.type][keyObj.key] = {};
					currentValue = currentValue[keyObj.type][keyObj.key];
				}
				if (keyObj?.type === "enumeration" || keyObj?.type === "plural" || keyObj?.type === "condition") {
					if (keyObj.type !== "enumeration" && keyObj.type !== "plural") {
						lastKeys = [keyObj.type, keyObj.key];
						currentValue = currentValue[keyObj.type][keyObj.key];
					}
				}
				if (keyObj?.type === "markdown" || keyObj?.type === "html" || keyObj?.type === "insertion") {
					lastKeys = [keyObj.type];
					if (currentValue[keyObj.type] == null) currentValue[keyObj.type] = "";
					currentValue = currentValue[keyObj.type];
				}
				if (keyObj?.type === "file") {
					lastKeys = ["content"];
					currentValue = currentValue.content;
				}
				if (i === keyPath.length - 1 && parentValue && lastKeys.length > 0) {
					let target = parentValue;
					for (const key of lastKeys.slice(0, -1)) target = target[key];
					const finalKey = lastKeys[lastKeys.length - 1];
					if (typeof newValue === "undefined") if (Array.isArray(target)) {
						const index = Number(finalKey);
						if (!Number.isNaN(index) && index >= 0 && index < target.length) target.splice(index, 1);
					} else delete target[finalKey];
					else target[finalKey] = newValue;
				}
			}
			return dictionaryContent;
		} catch (error) {
			console.error("Cannot edit dictionary by key path", {
				dictionaryContent,
				keyPath,
				newValue
			}, error);
			return dictionaryContent;
		}
	};
}));
var getContentNodeByKeyPath;
var init_getContentNodeByKeyPath = __esmMin((() => {
	init_nodeType();
	getContentNodeByKeyPath = (dictionaryContent, keyPath, fallbackLocale) => {
		let currentValue = structuredClone(dictionaryContent);
		for (const keyObj of keyPath) {
			if (fallbackLocale && currentValue?.nodeType === "translation") currentValue = currentValue?.[TRANSLATION]?.[fallbackLocale];
			if (keyObj.type === "object" || keyObj.type === "array") currentValue = currentValue?.[keyObj.key];
			if (keyObj.type === "translation" || keyObj.type === "condition" || keyObj.type === "enumeration" || keyObj.type === "plural" || keyObj.type === "gender" || keyObj.type === "select") currentValue = currentValue?.[keyObj.type]?.[keyObj.key];
			if (keyObj.type === "markdown" || keyObj.type === "html" || keyObj.type === "insertion" || keyObj.type === "file") currentValue = currentValue?.[keyObj.type];
		}
		return currentValue;
	};
}));
var renameContentNodeByKeyPath;
var init_renameContentNodeByKeyPath = __esmMin((() => {
	init_nodeType();
	renameContentNodeByKeyPath = (dictionaryContent, newKey, keyPath) => {
		let currentValue = dictionaryContent;
		let parentValue = null;
		let lastKey = null;
		for (const keyObj of keyPath) {
			parentValue = currentValue;
			if (keyObj.type === "object" || keyObj.type === "array") {
				lastKey = keyObj.key;
				currentValue = currentValue[keyObj.key];
			}
			if (keyObj.type === "translation" || keyObj.type === "enumeration" || keyObj.type === "plural" || keyObj.type === "condition" || keyObj.type === "gender" || keyObj.type === "select") {
				lastKey = keyObj.type;
				currentValue = currentValue[keyObj.type][keyObj.key];
			}
			if (keyObj.type === "markdown" || keyObj.type === "reactNode" || keyObj.type === "html" || keyObj.type === "insertion" || keyObj.type === "file") {
				lastKey = keyObj.type;
				currentValue = currentValue[keyObj.type];
			}
		}
		if (parentValue && lastKey !== null) if (Array.isArray(parentValue)) parentValue[lastKey] = currentValue;
		else {
			const newParentValue = {};
			for (const key of Object.keys(parentValue)) if (key === lastKey && typeof newKey !== "undefined") newParentValue[newKey] = currentValue;
			else newParentValue[key] = parentValue[key];
			Object.keys(parentValue).forEach((key) => {
				delete parentValue[key];
			});
			Object.assign(parentValue, newParentValue);
		}
		return dictionaryContent;
	};
}));
var init_dictionaryManipulator = __esmMin((() => {
	init_qualifiedDictionary();
	init_preloadedDynamicLoader();
	init_qualifiedDynamicLoader();
	init_editDictionaryByKeyPath();
	init_getContentNodeByKeyPath();
	init_renameContentNodeByKeyPath();
}));
export { init_utils as a, localeStorageOptions as c, isQualifiedDynamicLoaderMap as d, resolveQualifiedDynamicContent as f, editDictionaryByKeyPath as i, setLocaleInStorageClient as l, renameContentNodeByKeyPath as n, isSameKeyPath as o, getContentNodeByKeyPath as r, getLocaleFromStorageClient as s, init_dictionaryManipulator as t, getPreloadedDictionary as u };
import { n as __esmMin } from "./chunk-iyGXEJRz.js";
import { n as editor, r as init_built } from "./built-k6nPQRRu.js";
import { Y as init_nodeType, a as getBasePlugins, o as getContent, q as TRANSLATION, t as init_interpreter } from "./interpreter-HgtbAUp0.js";
import { a as init_utils, i as editDictionaryByKeyPath, n as renameContentNodeByKeyPath, o as isSameKeyPath, r as getContentNodeByKeyPath, t as init_dictionaryManipulator } from "./dictionaryManipulator-jDZGL5e4.js";
var compareUrls;
var init_compareUrls = __esmMin((() => {
	compareUrls = (url1, url2) => {
		try {
			const parsedUrl1 = new URL(url1);
			const parsedUrl2 = new URL(url2);
			if (parsedUrl1.protocol !== parsedUrl2.protocol || parsedUrl1.hostname !== parsedUrl2.hostname || parsedUrl1.port !== parsedUrl2.port) return false;
			const path1 = parsedUrl1.pathname.replace(/\/$/, "");
			const path2 = parsedUrl2.pathname.replace(/\/$/, "");
			if (path1 !== "" && path2 !== "" && path1 !== path2) return false;
			return true;
		} catch (error) {
			console.error("Invalid URL(s)", error, {
				url1,
				url2
			});
			return false;
		}
	};
}));
var mergeIframeClick;
var init_mergeIframeClick = __esmMin((() => {
	mergeIframeClick = (event) => {
		const simulatedMouseDownEvent = new MouseEvent("mousedown", {
			bubbles: true,
			cancelable: true,
			view: window
		});
		const simulatedClickEvent = new MouseEvent("click", {
			bubbles: true,
			cancelable: true,
			view: window
		});
		Object.assign(simulatedClickEvent, { iframeData: event });
		Object.assign(simulatedMouseDownEvent, { iframeData: event });
		window.dispatchEvent(simulatedClickEvent);
		window.dispatchEvent(simulatedMouseDownEvent);
	};
}));
var MANAGER_KEY, EVENTS_KEY, getEventTarget, getGlobalEditorManager, setGlobalEditorManager, onGlobalEditorManagerChange;
var init_globalManager = __esmMin((() => {
	MANAGER_KEY = "__intlayer_editor_manager__";
	EVENTS_KEY = "__intlayer_editor_manager_events__";
	getEventTarget = () => {
		if (typeof window === "undefined") return new EventTarget();
		const windowGlobals = window;
		if (!windowGlobals[EVENTS_KEY]) windowGlobals[EVENTS_KEY] = new EventTarget();
		return windowGlobals[EVENTS_KEY];
	};
	getGlobalEditorManager = () => {
		if (typeof window === "undefined") return null;
		return window[MANAGER_KEY] ?? null;
	};
	setGlobalEditorManager = (manager) => {
		if (typeof window !== "undefined") {
			const windowGlobals = window;
			windowGlobals[MANAGER_KEY] = manager;
		}
		getEventTarget().dispatchEvent(new CustomEvent("change", { detail: manager }));
	};
	onGlobalEditorManagerChange = (changeCallback) => {
		const eventTarget = getEventTarget();
		const eventHandler = (event) => {
			changeCallback(event.detail);
		};
		eventTarget.addEventListener("change", eventHandler);
		return () => {
			eventTarget.removeEventListener("change", eventHandler);
		};
	};
}));
var _HTMLElement$3, IntlayerContentSelectorWrapperElement, defineIntlayerContentSelectorWrapper;
var init_ContentSelectorWrapper = __esmMin((() => {
	init_globalManager();
	init_utils();
	init_nodeType();
	_HTMLElement$3 = typeof HTMLElement !== "undefined" ? HTMLElement : class {};
	IntlayerContentSelectorWrapperElement = class extends _HTMLElement$3 {
		_keyPathJson = "[]";
		_dictionaryKey = "";
		_editorEnabled = false;
		_isInIframe = false;
		_isSelected = false;
		_editedValue = void 0;
		_renderState = null;
		_selector = null;
		_unsubManager = null;
		_unsubEnabled = null;
		_unsubFocused = null;
		_unsubEditedContent = null;
		static get observedAttributes() {
			return ["key-path", "dictionary-key"];
		}
		get keyPathJson() {
			return this._keyPathJson;
		}
		set keyPathJson(v) {
			this._keyPathJson = v;
			const manager = getGlobalEditorManager();
			if (manager) this._updateEditedValue(manager);
		}
		get dictionaryKey() {
			return this._dictionaryKey;
		}
		set dictionaryKey(v) {
			this._dictionaryKey = v;
			const manager = getGlobalEditorManager();
			if (manager) this._updateEditedValue(manager);
		}
		constructor() {
			super();
			const shadow = this.attachShadow({ mode: "open" });
			const style = document.createElement("style");
			style.textContent = ":host { display: contents; }";
			shadow.appendChild(style);
		}
		attributeChangedCallback(name, _oldVal, newVal) {
			if (name === "key-path") {
				this._keyPathJson = newVal ?? "[]";
				const manager = getGlobalEditorManager();
				if (manager) this._updateEditedValue(manager);
			} else if (name === "dictionary-key") {
				this._dictionaryKey = newVal ?? "";
				const manager = getGlobalEditorManager();
				if (manager) this._updateEditedValue(manager);
			}
		}
		connectedCallback() {
			if (typeof window !== "undefined") this._isInIframe = window.self !== window.top;
			this._subscribeToManager();
			this._render();
		}
		disconnectedCallback() {
			this._teardown();
		}
		_teardown() {
			this._unsubManager?.();
			this._unsubEnabled?.();
			this._unsubFocused?.();
			this._unsubEditedContent?.();
			this._unsubManager = null;
			this._unsubEnabled = null;
			this._unsubFocused = null;
			this._unsubEditedContent = null;
		}
		_getRawKeyPath() {
			try {
				return JSON.parse(this._keyPathJson);
			} catch {
				return [];
			}
		}
		_getFilteredKeyPath() {
			return this._getRawKeyPath().filter((keyPath) => keyPath.type !== TRANSLATION);
		}
		_updateEditedValue(manager) {
			const filteredKeyPath = this._getFilteredKeyPath();
			if (!this._dictionaryKey || filteredKeyPath.length === 0) {
				this._editedValue = void 0;
				this._render();
				return;
			}
			const rawKeyPath = this._getRawKeyPath();
			const lastStepType = rawKeyPath[rawKeyPath.length - 1]?.type;
			if (lastStepType === "markdown" || lastStepType === "html" || lastStepType === "insertion" || lastStepType === "file") {
				this._editedValue = void 0;
				this._render();
				return;
			}
			let value = manager.getContentValue(this._dictionaryKey, filteredKeyPath);
			if (value !== null && value !== void 0 && typeof value === "object" && value.nodeType === "translation") {
				const locale = manager.currentLocale.value;
				value = locale ? value[TRANSLATION][locale] : void 0;
			}
			this._editedValue = value;
			this._render();
		}
		_updateIsSelected(focusedContent) {
			if (!focusedContent) {
				this._isSelected = false;
				this._updateSelectorAttr();
				return;
			}
			const keyPath = this._getFilteredKeyPath();
			const wasSelected = this._isSelected;
			this._isSelected = focusedContent.dictionaryKey === this._dictionaryKey && (focusedContent.keyPath?.length ?? 0) > 0 && isSameKeyPath(focusedContent.keyPath ?? [], keyPath);
			this._updateSelectorAttr();
			if (this._isSelected && !wasSelected) this._scrollIntoViewIfNeeded();
		}
		_scrollIntoViewIfNeeded() {
			try {
				let rect;
				if (this._selector) {
					const innerWrapper = this._selector.shadowRoot?.querySelector(".wrapper");
					if (innerWrapper) {
						const r = innerWrapper.getBoundingClientRect();
						if (r.width > 0 || r.height > 0) rect = r;
					}
				}
				if (!rect && this.childNodes.length > 0) {
					const range = document.createRange();
					range.selectNodeContents(this);
					const r = range.getBoundingClientRect();
					if (r.width > 0 || r.height > 0) rect = r;
				}
				if (!rect) rect = this.getBoundingClientRect();
				const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
				const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
				if (!(rect.width > 0 && rect.height > 0 && rect.bottom > 0 && rect.right > 0 && rect.top < viewportHeight && rect.left < viewportWidth)) {
					const scrollY = window.scrollY ?? document.documentElement.scrollTop;
					const targetScrollY = rect.top + scrollY - viewportHeight * .25;
					window.scrollTo({
						top: Math.max(0, targetScrollY),
						behavior: "smooth"
					});
				}
			} catch {}
		}
		_updateSelectorAttr() {
			if (!this._selector) return;
			if (this._isSelected) this._selector.setAttribute("is-selecting", "");
			else this._selector.removeAttribute("is-selecting");
		}
		_subscribeToManager() {
			const manager = getGlobalEditorManager();
			if (manager) this._setupManagerSubscriptions(manager);
			this._unsubManager = onGlobalEditorManagerChange((m) => {
				this._unsubEnabled?.();
				this._unsubFocused?.();
				this._unsubEditedContent?.();
				this._unsubEnabled = null;
				this._unsubFocused = null;
				this._unsubEditedContent = null;
				if (m) this._setupManagerSubscriptions(m);
				else {
					this._editorEnabled = false;
					this._isSelected = false;
					this._editedValue = void 0;
					this._render();
				}
			});
		}
		_setupManagerSubscriptions(manager) {
			this._editorEnabled = manager.editorEnabled.value ?? false;
			this._updateIsSelected(manager.focusedContent.value);
			this._updateEditedValue(manager);
			const handleEnabledChange = (e) => {
				this._editorEnabled = e.detail;
				this._render();
			};
			const handleFocusedChange = (e) => {
				this._updateIsSelected(e.detail);
			};
			const handleEditedContentChange = () => {
				this._updateEditedValue(manager);
			};
			manager.editorEnabled.addEventListener("change", handleEnabledChange);
			manager.focusedContent.addEventListener("change", handleFocusedChange);
			manager.editedContent.addEventListener("change", handleEditedContentChange);
			this._unsubEnabled = () => manager.editorEnabled.removeEventListener("change", handleEnabledChange);
			this._unsubFocused = () => manager.focusedContent.removeEventListener("change", handleFocusedChange);
			this._unsubEditedContent = () => manager.editedContent.removeEventListener("change", handleEditedContentChange);
		}
		_handlePress(e) {
			e.stopPropagation();
			const manager = getGlobalEditorManager();
			if (!manager) return;
			manager.focusedContent.set({
				dictionaryKey: this._dictionaryKey,
				keyPath: this._getFilteredKeyPath()
			});
		}
		_handleHover(e) {
			e.stopPropagation();
			getGlobalEditorManager()?.messenger.send(`INTLAYER_HOVERED_CONTENT_CHANGED/post`, {
				dictionaryKey: this._dictionaryKey,
				keyPath: this._getFilteredKeyPath()
			});
		}
		_handleUnhover(e) {
			e.stopPropagation();
			getGlobalEditorManager()?.messenger.send(`INTLAYER_HOVERED_CONTENT_CHANGED/post`, null);
		}
		_render() {
			const useWrapper = this._isInIframe && this._editorEnabled;
			const editedValue = this._editedValue;
			const newState = !useWrapper ? "simple" : typeof editedValue === "string" || typeof editedValue === "number" || typeof editedValue === "boolean" ? "wrapped-text" : "wrapped-slot";
			if (this._renderState !== newState) {
				this._rebuildContent(newState);
				return;
			}
			if (newState !== "simple" && this._selector) {
				this._updateSelectorAttr();
				if (newState === "wrapped-text" && this._selector.firstChild?.nodeType === Node.TEXT_NODE) this._selector.firstChild.data = String(editedValue);
			}
		}
		_rebuildContent(state) {
			const shadow = this.shadowRoot;
			while (shadow.childNodes.length > 1) shadow.removeChild(shadow.lastChild);
			this._selector = null;
			if (state === "simple") shadow.appendChild(document.createElement("slot"));
			else {
				const selector = document.createElement("intlayer-content-selector");
				this._selector = selector;
				if (this._isSelected) selector.setAttribute("is-selecting", "");
				selector.addEventListener("intlayer:press", (e) => this._handlePress(e));
				selector.addEventListener("intlayer:hover", (e) => this._handleHover(e));
				selector.addEventListener("intlayer:unhover", (e) => this._handleUnhover(e));
				if (state === "wrapped-text") selector.appendChild(document.createTextNode(String(this._editedValue)));
				else selector.appendChild(document.createElement("slot"));
				shadow.appendChild(selector);
			}
			this._renderState = state;
		}
	};
	defineIntlayerContentSelectorWrapper = () => {
		if (typeof customElements === "undefined") return;
		if (!customElements.get("intlayer-content-selector-wrapper")) customElements.define("intlayer-content-selector-wrapper", IntlayerContentSelectorWrapperElement);
	};
}));
var _HTMLElement$2, IntlayerEditedContentElement, defineIntlayerEditedContent;
var init_EditedContent = __esmMin((() => {
	init_globalManager();
	init_interpreter();
	_HTMLElement$2 = typeof HTMLElement !== "undefined" ? HTMLElement : class {};
	IntlayerEditedContentElement = class extends _HTMLElement$2 {
		_dictionaryKey = "";
		_keyPathJson = "[]";
		_locale = "";
		_editedText = null;
		_unsubManager = null;
		_unsubEditedContent = null;
		_selectorWrapper;
		_slot;
		static get observedAttributes() {
			return [
				"dictionary-key",
				"key-path",
				"locale"
			];
		}
		get dictionaryKey() {
			return this._dictionaryKey;
		}
		set dictionaryKey(v) {
			this._dictionaryKey = v;
			this._selectorWrapper.setAttribute("dictionary-key", v);
		}
		get keyPathJson() {
			return this._keyPathJson;
		}
		set keyPathJson(v) {
			this._keyPathJson = v;
			this._selectorWrapper.setAttribute("key-path", v);
		}
		get locale() {
			return this._locale;
		}
		set locale(v) {
			this._locale = v;
		}
		constructor() {
			super();
			const shadow = this.attachShadow({ mode: "open" });
			const style = document.createElement("style");
			style.textContent = ":host { display: contents; }";
			shadow.appendChild(style);
			this._selectorWrapper = document.createElement("intlayer-content-selector-wrapper");
			this._slot = document.createElement("slot");
			this._selectorWrapper.appendChild(this._slot);
			shadow.appendChild(this._selectorWrapper);
		}
		attributeChangedCallback(name, _oldVal, newVal) {
			const val = newVal ?? "";
			if (name === "dictionary-key") {
				this._dictionaryKey = val;
				this._selectorWrapper.setAttribute("dictionary-key", val);
			} else if (name === "key-path") {
				this._keyPathJson = val || "[]";
				this._selectorWrapper.setAttribute("key-path", this._keyPathJson);
			} else if (name === "locale") this._locale = val;
		}
		connectedCallback() {
			this._subscribeToManager();
		}
		disconnectedCallback() {
			this._teardown();
		}
		_teardown() {
			this._unsubManager?.();
			this._unsubEditedContent?.();
			this._unsubManager = null;
			this._unsubEditedContent = null;
		}
		_getKeyPath() {
			try {
				return JSON.parse(this._keyPathJson);
			} catch {
				return [];
			}
		}
		_render() {
			while (this._selectorWrapper.firstChild) this._selectorWrapper.removeChild(this._selectorWrapper.firstChild);
			if (this._editedText !== null) this._selectorWrapper.appendChild(document.createTextNode(this._editedText));
			else this._selectorWrapper.appendChild(this._slot);
		}
		_resolveEditedText(manager) {
			const keyPath = this._getKeyPath();
			const editedValue = manager.getContentValue(this._dictionaryKey, keyPath);
			if (editedValue === void 0 || editedValue === null) {
				this._editedText = null;
				this._render();
				return;
			}
			if (typeof editedValue === "string" || typeof editedValue === "number") {
				this._editedText = String(editedValue);
				this._render();
				return;
			}
			if (typeof editedValue === "object") {
				const locale = this._locale || void 0;
				const transformed = getContent(editedValue, {
					locale,
					dictionaryKey: this._dictionaryKey,
					keyPath
				}, getBasePlugins(locale));
				if (typeof transformed === "string" || typeof transformed === "number") this._editedText = String(transformed);
				else {
					console.error(`[intlayer-edited-content] Incorrect edited content format. Expected string. Value: ${JSON.stringify(transformed)}`);
					this._editedText = null;
				}
				this._render();
				return;
			}
			this._editedText = null;
			this._render();
		}
		_setupManagerSubscriptions(manager) {
			this._resolveEditedText(manager);
			const handleChange = () => this._resolveEditedText(manager);
			manager.editedContent.addEventListener("change", handleChange);
			this._unsubEditedContent = () => manager.editedContent.removeEventListener("change", handleChange);
		}
		_subscribeToManager() {
			const manager = getGlobalEditorManager();
			if (manager) this._setupManagerSubscriptions(manager);
			this._unsubManager = onGlobalEditorManagerChange((m) => {
				this._unsubEditedContent?.();
				this._unsubEditedContent = null;
				if (m) this._setupManagerSubscriptions(m);
				else {
					this._editedText = null;
					this._render();
				}
			});
		}
	};
	defineIntlayerEditedContent = () => {
		if (typeof customElements === "undefined") return;
		if (!customElements.get("intlayer-edited-content")) customElements.define("intlayer-edited-content", IntlayerEditedContentElement);
	};
}));
var randomUUID, CrossFrameMessenger;
var init_CrossFrameMessenger = __esmMin((() => {
	init_compareUrls();
	randomUUID = () => Math.random().toString(36).slice(2);
	CrossFrameMessenger = class {
		senderId;
		_config;
		_subscribers = /* @__PURE__ */ new Map();
		_windowHandler = null;
		_seenMessageIds = /* @__PURE__ */ new Set();
		_warnedRejectedOrigins = /* @__PURE__ */ new Set();
		constructor(config) {
			this._config = config;
			this.senderId = randomUUID();
		}
		start() {
			if (typeof window === "undefined") return;
			if (this._windowHandler) return;
			this._windowHandler = (event) => {
				this._handleMessage(event);
			};
			window.addEventListener("message", this._windowHandler);
		}
		stop() {
			if (this._windowHandler) {
				window.removeEventListener("message", this._windowHandler);
				this._windowHandler = null;
			}
		}
		send(type, data) {
			const payload = {
				type,
				data,
				senderId: this.senderId,
				messageId: randomUUID()
			};
			for (const origin of this._config.allowedOrigins) if (origin) this._config.postMessageFn(payload, origin);
		}
		subscribe(type, handler) {
			if (!this._subscribers.has(type)) this._subscribers.set(type, /* @__PURE__ */ new Set());
			this._subscribers.get(type).add(handler);
			return () => {
				this._subscribers.get(type)?.delete(handler);
			};
		}
		_handleMessage(event) {
			const payload = event.data;
			if (!payload || typeof payload !== "object") return;
			const { type, data, senderId: msgSenderId, messageId } = payload;
			if (!type || typeof type !== "string") return;
			if (msgSenderId === this.senderId) return;
			if (messageId) {
				if (this._seenMessageIds.has(messageId)) return;
				this._seenMessageIds.add(messageId);
				if (this._seenMessageIds.size > 200) this._seenMessageIds.clear();
			}
			const { allowedOrigins } = this._config;
			if (!(!allowedOrigins || allowedOrigins.length === 0 || allowedOrigins.includes("*") || allowedOrigins.filter((url) => Boolean(url) && url !== "").some((url) => compareUrls(url, event.origin)))) {
				if (type.startsWith("INTLAYER") && !this._warnedRejectedOrigins.has(event.origin)) {
					this._warnedRejectedOrigins.add(event.origin);
					console.warn(`[intlayer] Ignored editor message "${type}" from origin "${event.origin}" — not in allowed origins [${allowedOrigins.join(", ")}]. Check the editor.editorURL / editor.cmsURL configuration.`);
				}
				return;
			}
			const handlers = this._subscribers.get(type);
			if (handlers) for (const handler of handlers) handler(data, msgSenderId);
		}
	};
}));
var CrossFrameStateManager;
var init_CrossFrameStateManager = __esmMin((() => {
	CrossFrameStateManager = class extends EventTarget {
		_value;
		_key;
		_messenger;
		_options;
		_unsubscribers = [];
		constructor(key, messenger, options = {}) {
			super();
			this._key = key;
			this._messenger = messenger;
			this._options = {
				emit: options.emit ?? true,
				receive: options.receive ?? true
			};
			if (options.initialValue !== void 0) this._value = options.initialValue;
		}
		get value() {
			return this._value;
		}
		set(newValue) {
			const resolvedValue = typeof newValue === "function" ? newValue(this._value) : newValue;
			this._value = resolvedValue;
			this.dispatchEvent(new CustomEvent("change", { detail: resolvedValue }));
			if (this._options.emit) this._messenger.send(`${this._key}/post`, resolvedValue);
		}
		start() {
			if (this._options.receive) {
				const unsub = this._messenger.subscribe(`${this._key}/post`, (data) => {
					this._value = data;
					this.dispatchEvent(new CustomEvent("change", { detail: data }));
				});
				this._unsubscribers.push(unsub);
			}
			if (this._options.emit) {
				const unsub = this._messenger.subscribe(`${this._key}/get`, (_, originSenderId) => {
					if (originSenderId === this._messenger.senderId) return;
					if (this._value === void 0) return;
					this._messenger.send(`${this._key}/post`, this._value);
				});
				this._unsubscribers.push(unsub);
			}
			if (this._options.receive && this._value === void 0) this._messenger.send(`${this._key}/get`);
		}
		stop() {
			for (const unsub of this._unsubscribers) unsub();
			this._unsubscribers.length = 0;
		}
		postCurrentValue() {
			if (this._value !== void 0) this._messenger.send(`${this._key}/post`, this._value);
		}
	};
}));
var BUS_KEY$1, BUS_EVENTS_KEY$1, getBusTarget$1, getGlobalEditedContent, setGlobalEditedContent, subscribeToGlobalEditedContent;
var init_editedContentBus = __esmMin((() => {
	BUS_KEY$1 = "__intlayer_edited_content_bus__";
	BUS_EVENTS_KEY$1 = "__intlayer_edited_content_bus_events__";
	getBusTarget$1 = () => {
		if (typeof window === "undefined") return new EventTarget();
		const w = window;
		if (!w[BUS_EVENTS_KEY$1]) w[BUS_EVENTS_KEY$1] = new EventTarget();
		return w[BUS_EVENTS_KEY$1];
	};
	getGlobalEditedContent = () => {
		if (typeof window === "undefined") return {};
		return window[BUS_KEY$1] ?? {};
	};
	setGlobalEditedContent = (content, sourceId) => {
		if (typeof window !== "undefined") window[BUS_KEY$1] = content;
		getBusTarget$1().dispatchEvent(new CustomEvent("change", { detail: {
			content,
			sourceId
		} }));
	};
	subscribeToGlobalEditedContent = (cb) => {
		const handler = (e) => {
			const { content, sourceId } = e.detail;
			cb(content, sourceId);
		};
		const target = getBusTarget$1();
		target.addEventListener("change", handler);
		return () => target.removeEventListener("change", handler);
	};
}));
var BUS_KEY, BUS_EVENTS_KEY, getBusTarget, getGlobalFocusedContent, setGlobalFocusedContent, subscribeToGlobalFocusedContent;
var init_focusedContentBus = __esmMin((() => {
	BUS_KEY = "__intlayer_focused_content_bus__";
	BUS_EVENTS_KEY = "__intlayer_focused_content_bus_events__";
	getBusTarget = () => {
		if (typeof window === "undefined") return new EventTarget();
		const w = window;
		if (!w[BUS_EVENTS_KEY]) w[BUS_EVENTS_KEY] = new EventTarget();
		return w[BUS_EVENTS_KEY];
	};
	getGlobalFocusedContent = () => {
		if (typeof window === "undefined") return void 0;
		const w = window;
		if (!w.__intlayer_focused_content_bus_set__) return void 0;
		return w[BUS_KEY] ?? null;
	};
	setGlobalFocusedContent = (content, sourceId) => {
		if (typeof window !== "undefined") {
			const w = window;
			w[BUS_KEY] = content;
			w.__intlayer_focused_content_bus_set__ = true;
		}
		getBusTarget().dispatchEvent(new CustomEvent("change", { detail: {
			content,
			sourceId
		} }));
	};
	subscribeToGlobalFocusedContent = (cb) => {
		const handler = (e) => {
			const { content, sourceId } = e.detail;
			cb(content, sourceId);
		};
		const target = getBusTarget();
		target.addEventListener("change", handler);
		return () => target.removeEventListener("change", handler);
	};
}));
var IframeClickInterceptor;
var init_IframeClickInterceptor = __esmMin((() => {
	init_mergeIframeClick();
	IframeClickInterceptor = class {
		_messenger;
		_mousedownHandler = null;
		_unsubscribeMerge = null;
		constructor(messenger) {
			this._messenger = messenger;
		}
		startInterceptor() {
			if (typeof window === "undefined") return;
			this._mousedownHandler = () => {
				this._messenger.send("INTLAYER_IFRAME_CLICKED");
			};
			window.addEventListener("mousedown", this._mousedownHandler);
		}
		startMerger() {
			this._unsubscribeMerge = this._messenger.subscribe("INTLAYER_IFRAME_CLICKED", mergeIframeClick);
		}
		stopInterceptor() {
			if (this._mousedownHandler) {
				window.removeEventListener("mousedown", this._mousedownHandler);
				this._mousedownHandler = null;
			}
		}
		stopMerger() {
			this._unsubscribeMerge?.();
			this._unsubscribeMerge = null;
		}
	};
}));
var UrlStateManager;
var init_UrlStateManager = __esmMin((() => {
	UrlStateManager = class {
		_messenger;
		_originalPushState = null;
		_originalReplaceState = null;
		_listeners = [];
		constructor(messenger) {
			this._messenger = messenger;
		}
		start() {
			if (typeof window === "undefined") return;
			const updateURLState = () => {
				this._messenger.send(`INTLAYER_URL_CHANGE/post`, window.location.pathname);
			};
			this._originalPushState = history.pushState;
			this._originalReplaceState = history.replaceState;
			const injectLocationChange = (method) => function(...args) {
				method.apply(this, args);
				window.dispatchEvent(new Event("locationchange"));
			};
			history.pushState = injectLocationChange(this._originalPushState);
			history.replaceState = injectLocationChange(this._originalReplaceState);
			for (const eventName of [
				"locationchange",
				"popstate",
				"hashchange",
				"load"
			]) {
				const listener = updateURLState;
				window.addEventListener(eventName, listener);
				this._listeners.push([eventName, listener]);
			}
			updateURLState();
		}
		stop() {
			if (typeof window === "undefined") return;
			for (const [eventName, listener] of this._listeners) window.removeEventListener(eventName, listener);
			this._listeners = [];
			if (this._originalPushState) {
				history.pushState = this._originalPushState;
				this._originalPushState = null;
			}
			if (this._originalReplaceState) {
				history.replaceState = this._originalReplaceState;
				this._originalReplaceState = null;
			}
		}
	};
}));
var EditorStateManager;
var init_EditorStateManager = __esmMin((() => {
	init_CrossFrameMessenger();
	init_CrossFrameStateManager();
	init_editedContentBus();
	init_focusedContentBus();
	init_IframeClickInterceptor();
	init_UrlStateManager();
	init_nodeType();
	init_dictionaryManipulator();
	EditorStateManager = class {
		messenger;
		editorEnabled;
		focusedContent;
		localeDictionaries;
		editedContent;
		configuration;
		currentLocale;
		displayedDictionaryKeys;
		_urlManager;
		_iframeInterceptor;
		_mode;
		_configuration;
		_unsubAreYouThere = null;
		_unsubActivate = null;
		_unsubClientReady = null;
		_displayedKeysObserver = null;
		_displayedKeysTimer = null;
		_displayedKeysListeners = [];
		_editedContentFromBus = false;
		_unsubGlobalEditedContent = null;
		_editedContentBusHandler = null;
		_focusedContentFromBus = false;
		_unsubGlobalFocusedContent = null;
		_focusedContentBusHandler = null;
		constructor(config) {
			this._mode = config.mode;
			this._configuration = config.configuration;
			this.messenger = new CrossFrameMessenger(config.messenger);
			this.editorEnabled = new CrossFrameStateManager("INTLAYER_EDITOR_ENABLED", this.messenger, {
				emit: false,
				receive: true,
				initialValue: false
			});
			this.focusedContent = new CrossFrameStateManager("INTLAYER_FOCUSED_CONTENT_CHANGED", this.messenger, {
				emit: true,
				receive: true,
				initialValue: null
			});
			this.localeDictionaries = new CrossFrameStateManager("INTLAYER_LOCALE_DICTIONARIES_CHANGED", this.messenger);
			this.editedContent = new CrossFrameStateManager("INTLAYER_EDITED_CONTENT_CHANGED", this.messenger);
			this.configuration = new CrossFrameStateManager("INTLAYER_CONFIGURATION", this.messenger, {
				emit: true,
				receive: false,
				...config.configuration ? { initialValue: config.configuration } : {}
			});
			this.currentLocale = new CrossFrameStateManager("INTLAYER_CURRENT_LOCALE", this.messenger, {
				emit: config.mode === "client",
				receive: config.mode === "editor"
			});
			this.displayedDictionaryKeys = new CrossFrameStateManager("INTLAYER_DISPLAYED_DICTIONARY_KEYS", this.messenger, {
				emit: config.mode === "client",
				receive: config.mode === "editor",
				initialValue: []
			});
			this._urlManager = new UrlStateManager(this.messenger);
			this._iframeInterceptor = new IframeClickInterceptor(this.messenger);
		}
		start() {
			this.messenger.start();
			this.editorEnabled.start();
			this.focusedContent.start();
			this.localeDictionaries.start();
			this.editedContent.start();
			this.configuration.start();
			this.currentLocale.start();
			this.displayedDictionaryKeys.start();
			this._startEditedContentBusSync();
			this._startFocusedContentBusSync();
			if (this._mode === "client") {
				this._urlManager.start();
				this._iframeInterceptor.startInterceptor();
				this._loadDictionaries();
				this._startDisplayedDictionariesTracking();
				this.messenger.send(`INTLAYER_EDITED_CONTENT_CHANGED/get`);
				if (this._configuration?.editor?.enabled !== false) this._setupActivationHandshake();
			} else {
				this._iframeInterceptor.startMerger();
				this._setupEditorHandshake();
			}
		}
		stop() {
			this._unsubAreYouThere?.();
			this._unsubActivate?.();
			this._unsubClientReady?.();
			this._unsubAreYouThere = null;
			this._unsubActivate = null;
			this._unsubClientReady = null;
			this.messenger.stop();
			this.editorEnabled.stop();
			this.focusedContent.stop();
			this.localeDictionaries.stop();
			this.editedContent.stop();
			this.configuration.stop();
			this.currentLocale.stop();
			this.displayedDictionaryKeys.stop();
			this._stopDisplayedDictionariesTracking();
			this._stopEditedContentBusSync();
			this._stopFocusedContentBusSync();
			this._urlManager.stop();
			this._iframeInterceptor.stopInterceptor();
			this._iframeInterceptor.stopMerger();
		}
		pingClient() {
			if (this._mode !== "editor") return;
			this.messenger.send("INTLAYER_ARE_YOU_THERE");
		}
		setFocusedContentKeyPath(keyPath) {
			const filtered = keyPath.filter((key) => key.type !== TRANSLATION);
			const prev = this.focusedContent.value;
			if (!prev) return;
			this.focusedContent.set({
				...prev,
				keyPath: filtered
			});
		}
		setLocaleDictionary(dictionary) {
			if (!dictionary.localId) return;
			const current = this.localeDictionaries.value ?? {};
			this.localeDictionaries.set({
				...current,
				[dictionary.localId]: dictionary
			});
		}
		setEditedDictionary(newDict) {
			if (!newDict.localId) {
				console.error("setEditedDictionary: missing localId", newDict);
				return;
			}
			const current = this.editedContent.value ?? {};
			this.editedContent.set({
				...current,
				[newDict.localId]: newDict
			});
		}
		setEditedContent(localDictionaryId, newValue) {
			const current = this.editedContent.value ?? {};
			this.editedContent.set({
				...current,
				[localDictionaryId]: {
					...current[localDictionaryId],
					content: newValue
				}
			});
		}
		addContent(localDictionaryId, newValue, keyPath = [], overwrite = true) {
			const current = this.editedContent.value ?? {};
			const originalContent = (this.localeDictionaries.value ?? {})[localDictionaryId]?.content;
			const currentContent = structuredClone(current[localDictionaryId]?.content ?? originalContent);
			let newKeyPath = keyPath;
			if (!overwrite) {
				let index = 0;
				const otherKeyPath = keyPath.slice(0, -1);
				const lastKeyPath = keyPath[keyPath.length - 1];
				let finalKey = lastKeyPath.key;
				while (typeof getContentNodeByKeyPath(currentContent, newKeyPath) !== "undefined") {
					index++;
					finalKey = index === 0 ? lastKeyPath.key : `${lastKeyPath.key} (${index})`;
					newKeyPath = [...otherKeyPath, {
						...lastKeyPath,
						key: finalKey
					}];
				}
			}
			const updatedContent = editDictionaryByKeyPath(currentContent, newKeyPath, newValue);
			this.editedContent.set({
				...current,
				[localDictionaryId]: {
					...current[localDictionaryId],
					content: updatedContent
				}
			});
		}
		renameContent(localDictionaryId, newKey, keyPath = []) {
			const current = this.editedContent.value ?? {};
			const originalContent = (this.localeDictionaries.value ?? {})[localDictionaryId]?.content;
			const updated = renameContentNodeByKeyPath(structuredClone(current[localDictionaryId]?.content ?? originalContent), newKey, keyPath);
			this.editedContent.set({
				...current,
				[localDictionaryId]: {
					...current[localDictionaryId],
					content: updated
				}
			});
		}
		removeContent(localDictionaryId, keyPath) {
			const current = this.editedContent.value ?? {};
			const originalContent = (this.localeDictionaries.value ?? {})[localDictionaryId]?.content;
			const restored = editDictionaryByKeyPath(structuredClone(current[localDictionaryId]?.content ?? originalContent), keyPath, getContentNodeByKeyPath(originalContent, keyPath));
			this.editedContent.set({
				...current,
				[localDictionaryId]: {
					...current[localDictionaryId],
					content: restored
				}
			});
		}
		restoreContent(localDictionaryId) {
			const updated = { ...this.editedContent.value ?? {} };
			delete updated[localDictionaryId];
			this.editedContent.set(updated);
		}
		clearContent(localDictionaryId) {
			const filtered = { ...this.editedContent.value ?? {} };
			delete filtered[localDictionaryId];
			this.editedContent.set(filtered);
		}
		clearAllContent() {
			this.editedContent.set({});
		}
		getContentValue(localDictionaryIdOrKey, keyPath) {
			const edited = this.editedContent.value;
			if (!edited) return void 0;
			const filteredKeyPath = keyPath.filter((key) => key.type !== TRANSLATION);
			const localeDicts = this.localeDictionaries.value;
			if (localDictionaryIdOrKey.includes(":local:") || localDictionaryIdOrKey.includes(":remote:")) {
				if (localeDicts && !(localDictionaryIdOrKey in localeDicts)) return;
				return getContentNodeByKeyPath(edited[localDictionaryIdOrKey]?.content ?? {}, filteredKeyPath, this.currentLocale.value);
			}
			const matchingIds = Object.keys(edited).filter((key) => key.startsWith(`${localDictionaryIdOrKey}:`) && (!localeDicts || key in localeDicts));
			for (const localId of matchingIds) {
				const node = getContentNodeByKeyPath(edited[localId]?.content ?? {}, filteredKeyPath, this.currentLocale.value);
				if (node) return node;
			}
		}
		_startEditedContentBusSync() {
			this._editedContentBusHandler = (e) => {
				if (this._editedContentFromBus) return;
				const content = e.detail;
				setGlobalEditedContent(content, this.messenger.senderId);
			};
			this.editedContent.addEventListener("change", this._editedContentBusHandler);
			this._unsubGlobalEditedContent = subscribeToGlobalEditedContent((content, sourceId) => {
				if (sourceId === this.messenger.senderId) return;
				this._editedContentFromBus = true;
				this.editedContent.set(content);
				this._editedContentFromBus = false;
			});
			const existing = getGlobalEditedContent();
			if (Object.keys(existing).length > 0) {
				this._editedContentFromBus = true;
				this.editedContent.set(existing);
				this._editedContentFromBus = false;
			}
		}
		_stopEditedContentBusSync() {
			if (this._editedContentBusHandler) {
				this.editedContent.removeEventListener("change", this._editedContentBusHandler);
				this._editedContentBusHandler = null;
			}
			this._unsubGlobalEditedContent?.();
			this._unsubGlobalEditedContent = null;
		}
		_startFocusedContentBusSync() {
			this._focusedContentBusHandler = (e) => {
				if (this._focusedContentFromBus) return;
				const content = e.detail;
				setGlobalFocusedContent(content, this.messenger.senderId);
			};
			this.focusedContent.addEventListener("change", this._focusedContentBusHandler);
			this._unsubGlobalFocusedContent = subscribeToGlobalFocusedContent((content, sourceId) => {
				if (sourceId === this.messenger.senderId) return;
				this._focusedContentFromBus = true;
				this.focusedContent.set(content);
				this._focusedContentFromBus = false;
			});
			const existing = getGlobalFocusedContent();
			if (existing !== void 0) {
				this._focusedContentFromBus = true;
				this.focusedContent.set(existing);
				this._focusedContentFromBus = false;
			}
		}
		_stopFocusedContentBusSync() {
			if (this._focusedContentBusHandler) {
				this.focusedContent.removeEventListener("change", this._focusedContentBusHandler);
				this._focusedContentBusHandler = null;
			}
			this._unsubGlobalFocusedContent?.();
			this._unsubGlobalFocusedContent = null;
		}
		_scanDisplayedDictionaryKeys() {
			if (typeof document === "undefined") return;
			const elements = document.querySelectorAll("intlayer-content-selector-wrapper[dictionary-key]");
			const keys = Array.from(new Set(Array.from(elements).map((el) => el.getAttribute("dictionary-key") ?? "").filter(Boolean)));
			this.displayedDictionaryKeys.set(keys);
		}
		_startDisplayedDictionariesTracking() {
			if (typeof document === "undefined" || typeof MutationObserver === "undefined") return;
			const schedule = () => {
				if (this._displayedKeysTimer) clearTimeout(this._displayedKeysTimer);
				this._displayedKeysTimer = setTimeout(() => this._scanDisplayedDictionaryKeys(), 100);
			};
			this._displayedKeysObserver = new MutationObserver(schedule);
			this._displayedKeysObserver.observe(document.body, {
				childList: true,
				subtree: true
			});
			for (const evt of ["locationchange", "popstate"]) {
				const listener = schedule;
				window.addEventListener(evt, listener);
				this._displayedKeysListeners.push([evt, listener]);
			}
			this._scanDisplayedDictionaryKeys();
		}
		_stopDisplayedDictionariesTracking() {
			this._displayedKeysObserver?.disconnect();
			this._displayedKeysObserver = null;
			if (this._displayedKeysTimer) {
				clearTimeout(this._displayedKeysTimer);
				this._displayedKeysTimer = null;
			}
			for (const [evt, listener] of this._displayedKeysListeners) window.removeEventListener(evt, listener);
			this._displayedKeysListeners = [];
		}
		_setupEditorHandshake() {
			this._unsubClientReady = this.messenger.subscribe("INTLAYER_CLIENT_READY", () => {
				this.editorEnabled.set(true);
				this.messenger.send("INTLAYER_EDITOR_ACTIVATE");
			});
			this.messenger.send("INTLAYER_ARE_YOU_THERE");
		}
		_setupActivationHandshake() {
			this.messenger.send("INTLAYER_CLIENT_READY");
			this._unsubAreYouThere = this.messenger.subscribe("INTLAYER_ARE_YOU_THERE", () => {
				this.messenger.send("INTLAYER_CLIENT_READY");
			});
			this._unsubActivate = this.messenger.subscribe("INTLAYER_EDITOR_ACTIVATE", () => {
				this.editorEnabled.set(true);
				this._broadcastData();
			});
		}
		_broadcastData() {
			const configVal = this.configuration.value;
			if (configVal) this.messenger.send(`INTLAYER_CONFIGURATION/post`, configVal);
			const localeVal = this.currentLocale.value;
			if (localeVal) this.messenger.send(`INTLAYER_CURRENT_LOCALE/post`, localeVal);
			const dicts = this.localeDictionaries.value;
			if (dicts) this.messenger.send(`INTLAYER_LOCALE_DICTIONARIES_CHANGED/post`, dicts);
		}
		async _loadDictionaries() {
			try {
				const unmergedDictionaries = (await import("./index.browser-DdHiTTFJ.js")).getUnmergedDictionaries();
				const dictionariesList = Object.fromEntries(Object.values(unmergedDictionaries).flat().map((dictionary) => [dictionary.localId, dictionary]));
				this.localeDictionaries.set(dictionariesList);
				if (this.editorEnabled.value) this._broadcastData();
			} catch (e) {
				console.warn("[intlayer] Failed to load unmerged dictionaries:", e);
			}
		}
	};
}));
var _HTMLElement$1, IntlayerEditorElement, defineIntlayerEditorElement;
var init_IntlayerEditor = __esmMin((() => {
	init_globalManager();
	init_initEditorClient();
	_HTMLElement$1 = typeof HTMLElement !== "undefined" ? HTMLElement : class {};
	IntlayerEditorElement = class extends _HTMLElement$1 {
		_configuration = void 0;
		_locale = void 0;
		_initialized = false;
		_unsubManager = null;
		static get observedAttributes() {
			return ["locale"];
		}
		get configuration() {
			return this._configuration;
		}
		set configuration(v) {
			this._configuration = v;
			if (!this._initialized) this._init();
		}
		get locale() {
			return this._locale;
		}
		set locale(v) {
			this._locale = v;
			if (v && this._initialized) this._syncLocale(v);
		}
		attributeChangedCallback(name, _oldVal, newVal) {
			if (name === "locale" && newVal !== null) {
				this._locale = newVal;
				if (this._initialized) this._syncLocale(newVal);
			}
		}
		connectedCallback() {
			this._init();
		}
		disconnectedCallback() {
			this._unsubManager?.();
			this._unsubManager = null;
			if (this._initialized) {
				stopEditorClient();
				this._initialized = false;
			}
		}
		_init() {
			if (this._initialized) return;
			initEditorClient();
			this._initialized = true;
			if (this._locale) this._syncLocale(this._locale);
		}
		_syncLocale(locale) {
			const manager = getGlobalEditorManager();
			if (manager) manager.currentLocale.set(locale);
			else {
				this._unsubManager?.();
				this._unsubManager = onGlobalEditorManagerChange((m) => {
					if (m) {
						this._unsubManager?.();
						this._unsubManager = null;
						m.currentLocale.set(locale);
					}
				});
			}
		}
	};
	defineIntlayerEditorElement = () => {
		if (typeof customElements === "undefined") return;
		if (!customElements.get("intlayer-editor")) customElements.define("intlayer-editor", IntlayerEditorElement);
	};
}));
var DEFAULT_PRESS_DURATION, STYLES, _HTMLElement, IntlayerContentSelectorElement, defineIntlayerElements;
var init_ContentSelector = __esmMin((() => {
	init_ContentSelectorWrapper();
	init_EditedContent();
	init_IntlayerEditor();
	DEFAULT_PRESS_DURATION = 250;
	STYLES = `
  :host {
    display: contents;
  }

  .wrapper {
    display: inline-block;
    cursor: pointer;
    user-select: none;
    border-radius: 0.375rem;
    outline-width: 2px;
    outline-offset: 4px;
    outline-style: solid;
    outline-color: transparent;
    transition: all 100ms 50ms ease-in-out;
  }

  .wrapper[data-active] {
    outline-color: inherit;
  }
`;
	_HTMLElement = typeof HTMLElement !== "undefined" ? HTMLElement : class {};
	IntlayerContentSelectorElement = class extends _HTMLElement {
		_isSelecting = false;
		_pressDuration = DEFAULT_PRESS_DURATION;
		_isHovered = false;
		_isSelectingState = false;
		_wrapper;
		_pressTimer = null;
		_clickOutsideHandler = null;
		static get observedAttributes() {
			return ["is-selecting", "press-duration"];
		}
		get isSelecting() {
			return this._isSelecting;
		}
		set isSelecting(v) {
			this._isSelecting = v;
			this._updateActiveState();
		}
		get pressDuration() {
			return this._pressDuration;
		}
		set pressDuration(v) {
			this._pressDuration = v;
		}
		constructor() {
			super();
			const shadow = this.attachShadow({ mode: "open" });
			const style = document.createElement("style");
			style.textContent = STYLES;
			shadow.appendChild(style);
			const wrapper = document.createElement("span");
			wrapper.className = "wrapper";
			wrapper.setAttribute("role", "button");
			wrapper.setAttribute("tabindex", "0");
			wrapper.appendChild(document.createElement("slot"));
			shadow.appendChild(wrapper);
			this._wrapper = wrapper;
			wrapper.addEventListener("mousedown", () => this._handleMouseDown());
			wrapper.addEventListener("mouseup", () => this._handleMouseUpOrLeave());
			wrapper.addEventListener("mouseleave", () => this._handleMouseUpOrLeave());
			wrapper.addEventListener("mouseenter", () => this._handleMouseEnter());
			wrapper.addEventListener("click", (e) => this._handleClick(e));
			wrapper.addEventListener("touchstart", () => this._handleMouseDown());
			wrapper.addEventListener("touchend", () => this._handleMouseUpOrLeave());
			wrapper.addEventListener("touchcancel", () => this._handleMouseUpOrLeave());
			wrapper.addEventListener("blur", () => this._handleBlur());
		}
		attributeChangedCallback(name, _oldVal, newVal) {
			if (name === "is-selecting") {
				this._isSelecting = newVal !== null;
				this._updateActiveState();
			} else if (name === "press-duration") this._pressDuration = newVal !== null ? parseInt(newVal, 10) : DEFAULT_PRESS_DURATION;
		}
		connectedCallback() {
			this._clickOutsideHandler = (e) => {
				if (!e.composedPath().includes(this)) {
					this._isSelectingState = false;
					this._dispatch("intlayer:click-outside");
					this._updateActiveState();
				}
			};
			document.addEventListener("mousedown", this._clickOutsideHandler);
		}
		disconnectedCallback() {
			if (this._clickOutsideHandler) {
				document.removeEventListener("mousedown", this._clickOutsideHandler);
				this._clickOutsideHandler = null;
			}
			this._clearPressTimer();
		}
		_updateActiveState() {
			if (this._isSelecting || this._isSelectingState || this._isHovered) this._wrapper.setAttribute("data-active", "");
			else this._wrapper.removeAttribute("data-active");
		}
		_clearPressTimer() {
			if (this._pressTimer !== null) {
				clearTimeout(this._pressTimer);
				this._pressTimer = null;
			}
		}
		_dispatch(eventName) {
			this.dispatchEvent(new CustomEvent(eventName, {
				bubbles: true,
				composed: true
			}));
		}
		_handleMouseDown() {
			this._clearPressTimer();
			this._pressTimer = setTimeout(() => {
				this._isSelectingState = true;
				this._updateActiveState();
				this._dispatch("intlayer:press");
			}, this._pressDuration);
		}
		_handleMouseEnter() {
			this._isHovered = true;
			this._updateActiveState();
			this._dispatch("intlayer:hover");
		}
		_handleMouseUpOrLeave() {
			if (this._isHovered) {
				this._isHovered = false;
				this._dispatch("intlayer:unhover");
			}
			this._clearPressTimer();
			this._updateActiveState();
		}
		_handleClick(e) {
			if (this._isSelecting || this._isSelectingState) {
				e.preventDefault();
				e.stopPropagation();
			}
		}
		_handleBlur() {
			this._isSelectingState = false;
			this._updateActiveState();
		}
	};
	defineIntlayerElements = () => {
		if (typeof customElements === "undefined") return;
		if (!customElements.get("intlayer-content-selector")) customElements.define("intlayer-content-selector", IntlayerContentSelectorElement);
		defineIntlayerContentSelectorWrapper();
		defineIntlayerEditedContent();
		defineIntlayerEditorElement();
	};
}));
var buildClientMessengerConfig, _clientRefCount, initEditorClient, stopEditorClient;
var init_initEditorClient = __esmMin((() => {
	init_globalManager();
	init_EditorStateManager();
	init_ContentSelector();
	init_built();
	buildClientMessengerConfig = () => {
		const sameOrigin = typeof window !== "undefined" ? window.location.origin : void 0;
		return {
			allowedOrigins: [...new Set([
				editor?.editorURL,
				editor?.cmsURL,
				sameOrigin
			].filter(Boolean))],
			postMessageFn: (payload, origin) => {
				if (typeof window === "undefined") return;
				if (!(window.self !== window.top)) return;
				window.parent?.postMessage(payload, origin);
			}
		};
	};
	_clientRefCount = 0;
	initEditorClient = () => {
		_clientRefCount++;
		const existing = getGlobalEditorManager();
		if (existing) return existing;
		const manager = new EditorStateManager({
			mode: "client",
			messenger: buildClientMessengerConfig(),
			configuration: { editor }
		});
		setGlobalEditorManager(manager);
		defineIntlayerElements();
		manager.start();
		return manager;
	};
	stopEditorClient = () => {
		_clientRefCount = Math.max(0, _clientRefCount - 1);
		if (_clientRefCount > 0) return;
		getGlobalEditorManager()?.stop();
		setGlobalEditorManager(null);
	};
}));
__esmMin((() => {
	init_initEditorClient();
}))();
export { initEditorClient, stopEditorClient };
import { n as __esmMin } from "./chunk-iyGXEJRz.js";
import { n as editor, r as init_built, t as analytics } from "./built-k6nPQRRu.js";
import { n as init_isBot, r as isBotEnvironment } from "./isBot-BvxmAi-M.js";
var hashString;
var init_hash = __esmMin((() => {
	hashString = (input) => {
		let hash = 2166136261;
		for (let index = 0; index < input.length; index++) {
			hash ^= input.charCodeAt(index);
			hash = Math.imul(hash, 16777619);
		}
		return hash >>> 0;
	};
}));
var assignVariant;
var init_abTesting = __esmMin((() => {
	init_hash();
	assignVariant = (sessionId, experimentKey, variants, weights) => {
		if (variants.length === 0) throw new Error("assignVariant requires at least one variant");
		if (variants.length === 1) return variants[0];
		const bucket = hashString(`${sessionId}:${experimentKey}`) / 4294967296;
		if (!weights || weights.length !== variants.length) {
			const index = Math.floor(bucket * variants.length);
			return variants[Math.min(index, variants.length - 1)];
		}
		const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
		if (totalWeight <= 0) return variants[Math.floor(bucket * variants.length)];
		let cumulative = 0;
		const target = bucket * totalWeight;
		for (let index = 0; index < variants.length; index++) {
			cumulative += weights[index];
			if (target < cumulative) return variants[index];
		}
		return variants[variants.length - 1];
	};
}));
var KEY_SEPARATOR, exposureKey, createEventBuffer;
var init_eventBuffer = __esmMin((() => {
	KEY_SEPARATOR = "";
	exposureKey = (event) => [
		event.url,
		event.dictionaryKey,
		event.keyPath,
		event.locale,
		event.experimentKey ?? "",
		event.variant ?? ""
	].join(KEY_SEPARATOR);
	createEventBuffer = ({ max }) => {
		let discreteEvents = [];
		const exposures = /* @__PURE__ */ new Map();
		const size = () => discreteEvents.length + exposures.size;
		const enforceCap = () => {
			while (size() > max && exposures.size > 0) {
				const oldestKey = exposures.keys().next().value;
				exposures.delete(oldestKey);
			}
			if (size() > max) discreteEvents = discreteEvents.slice(size() - max);
		};
		const push = (event) => {
			if (event.type === "content_exposure") {
				const key = exposureKey(event);
				const existing = exposures.get(key);
				if (existing) {
					existing.count = (existing.count ?? 1) + (event.count ?? 1);
					existing.t = event.t;
				} else exposures.set(key, {
					...event,
					count: event.count ?? 1
				});
			} else discreteEvents.push(event);
			enforceCap();
			return size();
		};
		const drain = () => {
			const drained = [...discreteEvents, ...exposures.values()];
			discreteEvents = [];
			exposures.clear();
			return drained;
		};
		return {
			push,
			drain,
			size
		};
	};
}));
var isSampledIn;
var init_sampling = __esmMin((() => {
	init_hash();
	isSampledIn = (sessionId, sampleRate) => {
		if (sampleRate >= 1) return true;
		if (sampleRate <= 0) return false;
		return hashString(sessionId) / 4294967295 < sampleRate;
	};
}));
var SESSION_STORAGE_KEY, generateSessionId, getSessionId;
var init_session = __esmMin((() => {
	SESSION_STORAGE_KEY = "__intlayer_analytics_sid__";
	generateSessionId = () => {
		const cryptoObj = typeof globalThis !== "undefined" ? globalThis.crypto : void 0;
		if (cryptoObj?.randomUUID) return cryptoObj.randomUUID();
		return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
	};
	getSessionId = () => {
		if (typeof window === "undefined" || !window.sessionStorage) return generateSessionId();
		try {
			const existing = window.sessionStorage.getItem(SESSION_STORAGE_KEY);
			if (existing) return existing;
			const created = generateSessionId();
			window.sessionStorage.setItem(SESSION_STORAGE_KEY, created);
			return created;
		} catch {
			return generateSessionId();
		}
	};
}));
var sendEvents;
var init_transport = __esmMin((() => {
	sendEvents = (endpoint, body, { useBeacon = false, token } = {}) => {
		try {
			const payload = JSON.stringify(body);
			if (useBeacon && typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function") return navigator.sendBeacon(endpoint, payload);
			if (typeof fetch === "function") {
				fetch(endpoint, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						...token ? { Authorization: `Bearer ${token}` } : {}
					},
					body: payload,
					keepalive: true,
					credentials: "omit",
					mode: "cors"
				}).catch(() => {});
				return true;
			}
			return false;
		} catch {
			return false;
		}
	};
}));
var onIdle;
var init_idle = __esmMin((() => {
	onIdle = (callback) => {
		if (typeof window === "undefined") return;
		const requestIdle = window.requestIdleCallback;
		if (typeof requestIdle === "function") {
			requestIdle(() => callback());
			return;
		}
		setTimeout(callback, 1);
	};
}));
var TOKEN_STORAGE_KEY, EXPIRY_MARGIN_MS, readStoredToken, writeStoredToken, createPublicTokenManager;
var init_publicToken = __esmMin((() => {
	TOKEN_STORAGE_KEY = "__intlayer_public_token__";
	EXPIRY_MARGIN_MS = 6e4;
	readStoredToken = () => {
		try {
			const raw = window.sessionStorage?.getItem(TOKEN_STORAGE_KEY);
			if (!raw) return null;
			const parsed = JSON.parse(raw);
			if (typeof parsed?.token !== "string") return null;
			if (typeof parsed?.expiresAt !== "number") return null;
			return parsed;
		} catch {
			return null;
		}
	};
	writeStoredToken = (cached) => {
		try {
			window.sessionStorage?.setItem(TOKEN_STORAGE_KEY, JSON.stringify(cached));
		} catch {}
	};
	createPublicTokenManager = ({ backendURL, clientId }) => {
		const endpoint = `${backendURL.replace(/\/$/, "")}/api/public/token`;
		let cached = null;
		let pendingExchange = null;
		const isUsable = (candidate) => candidate !== null && candidate.expiresAt - EXPIRY_MARGIN_MS > Date.now();
		const getToken = () => {
			if (isUsable(cached)) return cached.token;
			if (typeof window !== "undefined") {
				const stored = readStoredToken();
				if (isUsable(stored)) {
					cached = stored;
					return stored.token;
				}
			}
		};
		const exchange = async () => {
			try {
				const response = await fetch(endpoint, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ clientId }),
					credentials: "omit",
					mode: "cors"
				});
				if (!response.ok) return;
				const payload = await response.json();
				const token = payload?.data?.token;
				const expiresIn = payload?.data?.expiresIn ?? 0;
				if (!token || expiresIn <= 0) return;
				cached = {
					token,
					expiresAt: Date.now() + expiresIn * 1e3
				};
				if (typeof window !== "undefined") writeStoredToken(cached);
			} catch {} finally {
				pendingExchange = null;
			}
		};
		const prime = () => {
			if (!clientId || typeof fetch !== "function") return;
			if (getToken()) return;
			if (pendingExchange) return;
			pendingExchange = exchange();
		};
		return {
			getToken,
			prime
		};
	};
}));
var SDK_VERSION, currentUrl, referrerHost, createAnalyticsClient;
var init_AnalyticsClient = __esmMin((() => {
	init_isBot();
	init_idle();
	init_abTesting();
	init_eventBuffer();
	init_publicToken();
	init_sampling();
	init_session();
	init_transport();
	SDK_VERSION = "intlayer-analytics/1";
	currentUrl = () => {
		if (typeof window === "undefined" || !window.location) return "";
		return window.location.pathname;
	};
	referrerHost = () => {
		if (typeof document === "undefined" || !document.referrer) return void 0;
		try {
			return new URL(document.referrer).host;
		} catch {
			return;
		}
	};
	createAnalyticsClient = (config) => {
		const sessionId = getSessionId();
		const isBotSession = isBotEnvironment();
		const sampledIn = !isBotSession && isSampledIn(sessionId, config.sampleRate);
		const buffer = createEventBuffer({ max: config.maxBufferSize });
		const endpoint = `${config.backendURL.replace(/\/$/, "")}/api/analytics/events`;
		const publicToken = createPublicTokenManager({
			backendURL: config.backendURL,
			clientId: config.clientId
		});
		let ambientLocale = "";
		let flushTimer = null;
		let started = false;
		let detachListeners = null;
		let lastPageViewUrl = null;
		let seenExposureKeys = /* @__PURE__ */ new Set();
		const flush = (useBeacon = false) => {
			const events = buffer.drain();
			const token = publicToken.getToken();
			for (let start = 0; start < events.length; start += 200) sendEvents(endpoint, {
				token,
				clientId: token ? void 0 : config.clientId,
				sessionId,
				sdkVersion: SDK_VERSION,
				events: events.slice(start, start + 200)
			}, {
				useBeacon,
				token
			});
		};
		const enqueue = (event) => {
			if (buffer.push(event) >= config.maxBufferSize) flush();
		};
		const setLocale = (locale) => {
			ambientLocale = locale;
		};
		const trackPageView = (event = {}) => {
			if (!sampledIn) return;
			const url = event.url ?? currentUrl();
			const reason = event.reason ?? "initial";
			if (reason === "route_change" && url === lastPageViewUrl) return;
			lastPageViewUrl = url;
			seenExposureKeys = /* @__PURE__ */ new Set();
			enqueue({
				type: "page_view",
				t: Date.now(),
				url,
				locale: event.locale ?? ambientLocale,
				ref: event.ref ?? referrerHost(),
				vw: event.vw ?? (typeof window !== "undefined" ? window.innerWidth : void 0),
				vh: event.vh ?? (typeof window !== "undefined" ? window.innerHeight : void 0),
				reason
			});
		};
		const trackContentExposure = (event) => {
			if (!sampledIn) return;
			const locale = event.locale ?? ambientLocale;
			const exposureKey = [
				event.dictionaryKey,
				event.keyPath,
				locale,
				event.experimentKey ?? "",
				event.variant ?? ""
			].join("");
			if (seenExposureKeys.has(exposureKey)) return;
			seenExposureKeys.add(exposureKey);
			enqueue({
				...event,
				type: "content_exposure",
				t: Date.now(),
				url: currentUrl(),
				locale
			});
		};
		const trackConversion = (event) => {
			if (isBotSession) return;
			enqueue({
				...event,
				type: "conversion",
				t: Date.now(),
				url: currentUrl(),
				locale: event.locale ?? ambientLocale
			});
			flush();
		};
		const getVariant = (experimentKey, variants, weights) => assignVariant(sessionId, experimentKey, variants, weights);
		const attachListeners = () => {
			if (typeof window === "undefined") return;
			const onHidden = () => {
				if (document.visibilityState === "hidden") flush(true);
			};
			const onPageHide = () => flush(true);
			const onPopState = () => trackPageView({ reason: "route_change" });
			document.addEventListener("visibilitychange", onHidden);
			window.addEventListener("pagehide", onPageHide, { capture: true });
			window.addEventListener("popstate", onPopState);
			const history = window.history;
			const originalPush = history.pushState;
			const patchedPushState = function patchedPush(...args) {
				const result = originalPush.apply(this, args);
				trackPageView({ reason: "route_change" });
				return result;
			};
			history.pushState = patchedPushState;
			detachListeners = () => {
				document.removeEventListener("visibilitychange", onHidden);
				window.removeEventListener("pagehide", onPageHide, { capture: true });
				window.removeEventListener("popstate", onPopState);
				if (history.pushState === patchedPushState) history.pushState = originalPush;
			};
		};
		const start = () => {
			if (started || isBotSession) return;
			started = true;
			publicToken.prime();
			flushTimer = setInterval(flush, config.flushInterval);
			flushTimer?.unref?.();
			onIdle(attachListeners);
		};
		const stop = () => {
			if (!started) return;
			started = false;
			if (flushTimer) {
				clearInterval(flushTimer);
				flushTimer = null;
			}
			detachListeners?.();
			detachListeners = null;
			flush(true);
		};
		return {
			setLocale,
			trackPageView,
			trackContentExposure,
			trackConversion,
			getVariant,
			flush,
			start,
			stop
		};
	};
}));
var CLIENT_KEY, REF_COUNT_KEY, getGlobalAnalyticsClient, setGlobalAnalyticsClient, incrementAnalyticsClientRefCount, decrementAnalyticsClientRefCount;
var init_globalManager = __esmMin((() => {
	CLIENT_KEY = "__intlayer_analytics_client__";
	REF_COUNT_KEY = "__intlayer_analytics_ref_count__";
	getGlobalAnalyticsClient = () => {
		if (typeof window === "undefined") return null;
		return window[CLIENT_KEY] ?? null;
	};
	setGlobalAnalyticsClient = (client) => {
		if (typeof window === "undefined") return;
		window[CLIENT_KEY] = client;
	};
	incrementAnalyticsClientRefCount = () => {
		if (typeof window === "undefined") return 0;
		const globals = window;
		globals[REF_COUNT_KEY] = (globals[REF_COUNT_KEY] ?? 0) + 1;
		return globals[REF_COUNT_KEY];
	};
	decrementAnalyticsClientRefCount = () => {
		if (typeof window === "undefined") return 0;
		const globals = window;
		globals[REF_COUNT_KEY] = Math.max(0, (globals[REF_COUNT_KEY] ?? 0) - 1);
		return globals[REF_COUNT_KEY];
	};
}));
var initAnalyticsClient, stopAnalyticsClient;
var init_initAnalyticsClient = __esmMin((() => {
	init_AnalyticsClient();
	init_globalManager();
	init_built();
	initAnalyticsClient = () => {
		incrementAnalyticsClientRefCount();
		const existing = getGlobalAnalyticsClient();
		if (existing) return existing;
		const client = createAnalyticsClient({
			backendURL: editor?.backendURL ?? "",
			clientId: editor?.clientId,
			flushInterval: analytics?.flushInterval ?? 2e4,
			maxBufferSize: 500,
			sampleRate: analytics?.sampleRate ?? 1
		});
		setGlobalAnalyticsClient(client);
		client.start();
		return client;
	};
	stopAnalyticsClient = () => {
		if (decrementAnalyticsClientRefCount() > 0) return;
		getGlobalAnalyticsClient()?.stop();
		setGlobalAnalyticsClient(null);
	};
}));
var serializeKeyPath, buildContentExposure;
var init_contentExposure = __esmMin((() => {
	serializeKeyPath = (keyPath) => keyPath.map((segment) => segment.key === void 0 ? "*" : String(segment.key)).join(".");
	buildContentExposure = (params) => ({
		dictionaryKey: params.dictionaryKey,
		keyPath: serializeKeyPath(params.keyPath),
		locale: params.locale,
		nodeType: params.nodeType,
		experimentKey: params.experimentKey,
		variant: params.variant
	});
}));
__esmMin((() => {
	init_globalManager();
	init_initAnalyticsClient();
	init_contentExposure();
}))();
export { buildContentExposure, getGlobalAnalyticsClient, initAnalyticsClient, stopAnalyticsClient };
import { n as __esmMin } from "./chunk-iyGXEJRz.js";
import { n as parseYaml, t as init_parseYaml } from "./parseYaml-DrUXqNtv.js";
var getMarkdownMetadata;
var init_getMarkdownMetadata = __esmMin((() => {
	init_parseYaml();
	getMarkdownMetadata = (markdown) => {
		try {
			const lines = markdown.split(/\r?\n/);
			if (lines.find((line) => line.trim() !== "")?.trim() !== "---") return {};
			let metadataEndIndex = -1;
			for (let i = 1; i < lines.length; i++) if (lines[i]?.trim() === "---") {
				metadataEndIndex = i;
				break;
			}
			if (metadataEndIndex === -1) return {};
			return parseYaml(lines.slice(1, metadataEndIndex).join("\n")) ?? {};
		} catch {
			return {};
		}
	};
}));
export { init_getMarkdownMetadata as n, getMarkdownMetadata as t };
import { n as __esmMin } from "./chunk-iyGXEJRz.js";
var getUnmergedDictionaries;
__esmMin((() => {
	getUnmergedDictionaries = () => ({});
}))();
export { getUnmergedDictionaries };
import { n as __esmMin, r as __exportAll } from "./chunk-iyGXEJRz.js";
import { a as log, c as colorizeKey, i as internationalization, l as getAppLogger, r as init_built, u as init_logger } from "./built-k6nPQRRu.js";
var index_browser_exports = __exportAll({ getDictionaries: () => getDictionaries });
var getDictionaries;
var init_index_browser = __esmMin((() => {
	getDictionaries = () => ({});
}));
var pluginsIdentities, nextPluginsIdentity, getPluginsCacheKey, MAX_ENTRIES_PER_DICTIONARY, transformCache, isMemoizableDictionary, getDictionaryTransformCacheKey, readTransformCache, writeTransformCache;
var init_dictionaryTransformCache = __esmMin((() => {
	pluginsIdentities = /* @__PURE__ */ new WeakMap();
	nextPluginsIdentity = 0;
	getPluginsCacheKey = (plugins) => {
		if (!plugins) return "base";
		const existingIdentity = pluginsIdentities.get(plugins);
		if (existingIdentity) return existingIdentity;
		nextPluginsIdentity += 1;
		const identity = `p${nextPluginsIdentity}`;
		pluginsIdentities.set(plugins, identity);
		return identity;
	};
	MAX_ENTRIES_PER_DICTIONARY = 256;
	transformCache = /* @__PURE__ */ new WeakMap();
	isMemoizableDictionary = (value) => value !== null && typeof value === "object";
	getDictionaryTransformCacheKey = (locale, selectorCacheKey, plugins) => `${locale}_${selectorCacheKey}_${getPluginsCacheKey(plugins)}`;
	readTransformCache = (dictionary, cacheKey) => {
		if (!isMemoizableDictionary(dictionary)) return { hit: false };
		const entries = transformCache.get(dictionary);
		if (!entries?.has(cacheKey)) return { hit: false };
		return {
			hit: true,
			content: entries.get(cacheKey)
		};
	};
	writeTransformCache = (dictionary, cacheKey, content) => {
		if (!isMemoizableDictionary(dictionary)) return content;
		let entries = transformCache.get(dictionary);
		if (!entries) {
			entries = /* @__PURE__ */ new Map();
			transformCache.set(dictionary, entries);
		}
		if (entries.size >= MAX_ENTRIES_PER_DICTIONARY) entries.clear();
		entries.set(cacheKey, content);
		return content;
	};
}));
var getCondition;
var init_getCondition = __esmMin((() => {
	getCondition = (conditionContent, state) => {
		const stateList = Object.keys(conditionContent);
		const fallbackState = stateList[stateList.length - 1];
		return conditionContent[`${state}`] ?? conditionContent.fallback ?? conditionContent[fallbackState];
	};
}));
var TRANSLATION, ENUMERATION, PLURAL, CONDITION, INSERTION, FILE, OBJECT, ARRAY, NESTED, REACT_NODE, MARKDOWN, HTML, GENDER, SELECT, formatNodeType;
var init_nodeType = __esmMin((() => {
	TRANSLATION = "translation";
	ENUMERATION = "enumeration";
	PLURAL = "plural";
	CONDITION = "condition";
	INSERTION = "insertion";
	FILE = "file";
	OBJECT = "object";
	ARRAY = "array";
	NESTED = "nested";
	REACT_NODE = "reactNode";
	MARKDOWN = "markdown";
	HTML = "html";
	GENDER = "gender";
	SELECT = "select";
	formatNodeType = (nodeType, content, additionalAttributes) => ({
		...additionalAttributes,
		nodeType,
		[nodeType]: content
	});
}));
var deepTransformNode;
var init_deepTransform = __esmMin((() => {
	init_nodeType();
	deepTransformNode = (node, props) => {
		for (const plugin of props.plugins ?? []) if (plugin.canHandle(node)) return plugin.transform(node, props, (node, props) => deepTransformNode(node, props));
		if (node === null || typeof node !== "object") return node;
		if (node.$$typeof !== void 0 || node.__v_isVNode !== void 0 || node._isVNode !== void 0 || node.isJSX !== void 0 || typeof node === "function") return node;
		if (Array.isArray(node)) return node.map((child, index) => {
			return deepTransformNode(child, {
				...props,
				children: child,
				keyPath: [...props.keyPath, {
					type: ARRAY,
					key: index
				}]
			});
		});
		const result = {};
		for (const key in node) {
			const childProps = {
				...props,
				children: node[key],
				keyPath: [...props.keyPath, {
					type: OBJECT,
					key
				}]
			};
			if (props.eager) {
				result[key] = deepTransformNode(node[key], childProps);
				continue;
			}
			Object.defineProperty(result, key, {
				enumerable: true,
				configurable: true,
				get: function() {
					const transformed = deepTransformNode(node[key], childProps);
					Object.defineProperty(this, key, {
						value: transformed,
						enumerable: true,
						configurable: true
					});
					return transformed;
				}
			});
		}
		return result;
	};
}));
var findMatchingCondition, getEnumeration;
var init_getEnumeration = __esmMin((() => {
	findMatchingCondition = (enumerationContent, quantity) => {
		const numericKeys = Object.keys(enumerationContent);
		for (const key of numericKeys) {
			const isEqual = !key.startsWith(">") && !key.startsWith("<") && !key.startsWith("=") && parseFloat(key) === quantity || key.startsWith("=") && parseFloat(key.slice(1)) === quantity;
			const isSuperior = key.startsWith(">") && quantity > parseFloat(key.slice(1));
			const isSuperiorOrEqual = key.startsWith(">=") && quantity >= parseFloat(key.slice(2));
			const isInferior = key.startsWith("<") && quantity < parseFloat(key.slice(1));
			const isInferiorOrEqual = key.startsWith("<=") && quantity <= parseFloat(key.slice(2));
			if (isEqual || isSuperior || isSuperiorOrEqual || isInferior || isInferiorOrEqual) return key;
		}
	};
	getEnumeration = (enumerationContent, quantity) => {
		return enumerationContent[findMatchingCondition(enumerationContent, quantity) ?? "fallback"];
	};
}));
var getGenderEntry, getGender;
var init_getGender = __esmMin((() => {
	getGenderEntry = (gender) => {
		if (gender === "m" || gender === "male") return "male";
		if (gender === "f" || gender === "female") return "female";
		return "fallback";
	};
	getGender = (genderContent, gender) => {
		const stateList = Object.keys(genderContent);
		const fallbackState = stateList[stateList.length - 1];
		return genderContent[getGenderEntry(gender)] ?? genderContent.fallback ?? genderContent[fallbackState];
	};
}));
var getInsertion;
var init_getInsertion = __esmMin((() => {
	getInsertion = (content, values) => content.replace(/\{\{\s*(.*?)\s*\}\}/g, (_, key) => {
		return (values[key.trim()] ?? "").toString();
	});
}));
var DEFAULT_VARIANT_ID, SEGMENT_UNSAFE_CHARS, COMPONENT_UNSAFE_CHARS, percentEncodeChar, encodeSegmentText, serializeVariant, serializeVariantChain, resolveEffectiveVariantId, compositeIdMatchesSelector, isQualifiedDictionaryGroup, reconstructQualifiedEntry, resolveQualifiedDictionary, parseDictionarySelector, resolveProviderVariant, resolveDictionaryArgument, getDictionarySelectorCacheKey;
var init_qualifiedDictionary = __esmMin((() => {
	DEFAULT_VARIANT_ID = "default";
	SEGMENT_UNSAFE_CHARS = /[^A-Za-z0-9._&=-]/g;
	COMPONENT_UNSAFE_CHARS = /[^A-Za-z0-9._-]/g;
	percentEncodeChar = (char) => `%${char.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`;
	encodeSegmentText = (raw, unsafeChars) => {
		if (raw === "") return "%";
		const encoded = raw.replace(unsafeChars, percentEncodeChar);
		if (encoded === "." || encoded === "..") return encoded.replace(/\./g, "%002E");
		return encoded;
	};
	serializeVariant = (variant) => {
		if (variant === void 0) return DEFAULT_VARIANT_ID;
		if (typeof variant === "string") return encodeSegmentText(variant, SEGMENT_UNSAFE_CHARS);
		return Object.keys(variant).sort().map((field) => `${encodeSegmentText(field, COMPONENT_UNSAFE_CHARS)}=${encodeSegmentText(String(variant[field]), COMPONENT_UNSAFE_CHARS)}`).join("&");
	};
	serializeVariantChain = (variant) => {
		if (!Array.isArray(variant)) return [serializeVariant(variant)];
		if (variant.length === 0) return [DEFAULT_VARIANT_ID];
		return variant.map(serializeVariant);
	};
	resolveEffectiveVariantId = (requestedVariantIds, isVariantIdDeclared) => {
		for (const requestedVariantId of requestedVariantIds) if (isVariantIdDeclared(requestedVariantId)) return requestedVariantId;
		return isVariantIdDeclared("default") ? DEFAULT_VARIANT_ID : requestedVariantIds[0] ?? "default";
	};
	compositeIdMatchesSelector = (compositeId, qualifierTypes, selector, effectiveVariantId) => {
		const segments = compositeId.split("/");
		return qualifierTypes.every((qualifierType, index) => {
			if (qualifierType === "variant") return segments[index] === effectiveVariantId;
			return selector?.item === void 0 || segments[index] === String(selector.item);
		});
	};
	isQualifiedDictionaryGroup = (value) => typeof value === "object" && value !== null && "qualifierTypes" in value && Array.isArray(value.qualifierTypes) && "content" in value;
	reconstructQualifiedEntry = (group, compositeId) => {
		const segments = compositeId.split("/");
		const entry = {
			key: group.key,
			content: group.content[compositeId]
		};
		group.qualifierTypes.forEach((qualifierType, index) => {
			if (qualifierType === "variant") entry.variant = segments[index];
			else if (qualifierType === "item") entry.item = Number(segments[index]);
		});
		return entry;
	};
	resolveQualifiedDictionary = (dictionaryOrGroup, selector) => {
		if (!isQualifiedDictionaryGroup(dictionaryOrGroup)) return dictionaryOrGroup;
		const { qualifierTypes, content } = dictionaryOrGroup;
		const itemAxisOpen = qualifierTypes.includes("item") && selector?.item === void 0;
		const compositeIds = Object.keys(content);
		const variantIndex = qualifierTypes.indexOf("variant");
		const effectiveVariantId = variantIndex === -1 ? DEFAULT_VARIANT_ID : resolveEffectiveVariantId(serializeVariantChain(selector?.variant), (variantId) => compositeIds.some((compositeId) => compositeId.split("/")[variantIndex] === variantId));
		const matchedEntries = compositeIds.filter((compositeId) => compositeIdMatchesSelector(compositeId, qualifierTypes, selector, effectiveVariantId)).map((compositeId) => reconstructQualifiedEntry(dictionaryOrGroup, compositeId));
		if (itemAxisOpen) return matchedEntries.sort((left, right) => (left.item ?? 0) - (right.item ?? 0));
		return matchedEntries[0] ?? null;
	};
	parseDictionarySelector = (localeOrSelector) => {
		if (typeof localeOrSelector === "object" && localeOrSelector !== null) return {
			locale: localeOrSelector.locale,
			selector: localeOrSelector
		};
		return { locale: localeOrSelector };
	};
	resolveProviderVariant = (providerVariant, dictionaryKey) => {
		if (providerVariant === void 0) return void 0;
		if (typeof providerVariant === "string" || Array.isArray(providerVariant)) return providerVariant;
		const variantMap = providerVariant;
		return variantMap[dictionaryKey] ?? variantMap["default"];
	};
	resolveDictionaryArgument = (params) => {
		const { localeOrSelector, contextLocale, contextVariant, dictionaryKey } = params;
		const callSelector = typeof localeOrSelector === "object" && localeOrSelector !== null ? localeOrSelector : void 0;
		const locale = (callSelector ? callSelector.locale : localeOrSelector) ?? contextLocale;
		const variant = callSelector?.variant ?? resolveProviderVariant(contextVariant, dictionaryKey);
		if (variant === void 0) return callSelector ? {
			...callSelector,
			locale
		} : locale;
		return {
			...callSelector,
			locale,
			variant
		};
	};
	getDictionarySelectorCacheKey = (selector) => {
		if (!selector) return "";
		return Object.keys(selector).filter((selectorKey) => selectorKey !== "locale").sort().map((selectorKey) => {
			const value = selector[selectorKey];
			return `${selectorKey}:${selectorKey === "variant" ? serializeVariantChain(value).join(",") : String(value)}`;
		}).join("|");
	};
}));
var PROTOTYPE_METHOD_NAMES, createSafeFallback, warnedMissingDictionaries, getIntlayer;
var init_getIntlayer = __esmMin((() => {
	init_getDictionary();
	init_built();
	init_logger();
	init_index_browser();
	PROTOTYPE_METHOD_NAMES = new Set([
		"hasOwnProperty",
		"isPrototypeOf",
		"propertyIsEnumerable",
		"toLocaleString"
	]);
	createSafeFallback = (path = "") => {
		return new Proxy((() => path), { get: (target, prop) => {
			if (prop === "toJSON" || prop === Symbol.toPrimitive || prop === "toString" || prop === "valueOf") return () => path;
			if (prop === "then") return;
			if (PROTOTYPE_METHOD_NAMES.has(prop)) return Object.prototype[prop].bind(target);
			if (prop === Symbol.iterator) return function* () {
				yield path;
			};
			return createSafeFallback(path ? `${path}.${String(prop)}` : String(prop));
		} });
	};
	warnedMissingDictionaries = /* @__PURE__ */ new Set();
	getIntlayer = (key, localeOrSelector, plugins) => {
		const dictionary = getDictionaries()[key];
		if (!dictionary && true) {
			if (!warnedMissingDictionaries.has(key)) {
				getAppLogger({ log })(typeof window === "undefined" ? `Dictionary ${colorizeKey(key)} was not found. Using fallback proxy.` : `Dictionary ${key} was not found. Using fallback proxy.`, { level: "warn" });
				warnedMissingDictionaries.add(key);
			}
			return createSafeFallback(key);
		}
		return getDictionary(dictionary, localeOrSelector, plugins);
	};
}));
var getNesting$1;
var init_getNesting = __esmMin((() => {
	init_getIntlayer();
	getNesting$1 = (dictionaryKey, path, props) => {
		const dictionary = getIntlayer(dictionaryKey, props?.locale, props?.plugins);
		if (typeof path === "string") {
			const pathArray = path.split(".");
			let current = dictionary;
			for (const key of pathArray) {
				current = current?.[key];
				if (current === void 0) return dictionary;
			}
			return current;
		}
		return dictionary;
	};
}));
var walkPath, getNesting;
var init_getNesting_optimized = __esmMin((() => {
	init_getDictionary();
	walkPath = (content, path) => {
		let current = content;
		for (const segment of path.split(".")) {
			current = current?.[segment];
			if (current === void 0) return content;
		}
		return current;
	};
	getNesting = (dictionaryKey, path, props) => {
		const nestedDictionaries = props?.nestedDictionaries;
		const nestedDictionary = nestedDictionaries?.[dictionaryKey];
		if (!nestedDictionary) return void 0;
		const content = getDictionary({
			...nestedDictionary,
			nestedDictionaries: {
				...nestedDictionaries,
				...nestedDictionary.nestedDictionaries
			}
		}, props?.locale, props?.plugins);
		if (typeof path !== "string") return content;
		return walkPath(content, path);
	};
}));
function getCachedIntl(intlConstructor, locale, options) {
	const resLoc = locale ?? internationalization?.defaultLocale;
	const key = `${resLoc}|${options ? JSON.stringify(options) : ""}`;
	const cacheKey = intlConstructor;
	let ctorCache = cache.get(cacheKey);
	if (!ctorCache) {
		ctorCache = /* @__PURE__ */ new Map();
		cache.set(cacheKey, ctorCache);
	}
	let instance = ctorCache.get(key);
	if (!instance) {
		const ResolvedConstructor = typeof intlConstructor === "string" ? resolveIntlConstructor(intlConstructor) : intlConstructor;
		if (typeof ResolvedConstructor !== "function") throw new Error(`[intlayer] \`Intl.${String(intlConstructor)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		if (ctorCache.size > MAX_CACHE_SIZE) ctorCache.clear();
		instance = new ResolvedConstructor(resLoc, options);
		ctorCache.set(key, instance);
	}
	return instance;
}
var MAX_CACHE_SIZE, cache, alreadyWarnedConstructors, warnMissingIntlConstructor, intlConstructorFallbacks, resolveIntlConstructor;
var init_intl = __esmMin((() => {
	init_built();
	MAX_CACHE_SIZE = 50;
	cache = /* @__PURE__ */ new Map();
	alreadyWarnedConstructors = /* @__PURE__ */ new Set();
	warnMissingIntlConstructor = (constructorName) => {
		if (alreadyWarnedConstructors.has(constructorName)) return;
		alreadyWarnedConstructors.add(constructorName);
		console.warn(`[intlayer] \`Intl.${constructorName}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${constructorName.toLowerCase()}/polyfill\`) before rendering your app.`);
	};
	intlConstructorFallbacks = {
		DisplayNames: class DisplayNamesFallback {
			of(code) {
				return code;
			}
		},
		ListFormat: class ListFormatFallback {
			format(list) {
				return Array.from(list).join(", ");
			}
			formatToParts(list) {
				return Array.from(list).flatMap((value, index) => index === 0 ? [{
					type: "element",
					value
				}] : [{
					type: "literal",
					value: ", "
				}, {
					type: "element",
					value
				}]);
			}
		},
		Segmenter: class SegmenterFallback {
			segment(input) {
				let index = 0;
				return Array.from(input).map((segment) => {
					const segmentStart = index;
					index += segment.length;
					return {
						segment,
						index: segmentStart
					};
				});
			}
		}
	};
	resolveIntlConstructor = (constructorName) => {
		const nativeConstructor = Intl[constructorName];
		if (typeof nativeConstructor === "function") return nativeConstructor;
		warnMissingIntlConstructor(constructorName);
		return intlConstructorFallbacks[constructorName];
	};
}));
var getPlural;
var init_getPlural = __esmMin((() => {
	init_intl();
	getPlural = (pluralContent, count, locale) => {
		return pluralContent[getCachedIntl("PluralRules", locale).select(count)] ?? pluralContent.other;
	};
}));
var getSelect;
var init_getSelect = __esmMin((() => {
	getSelect = (selectContent, value) => {
		const caseList = Object.keys(selectContent);
		const lastCase = caseList[caseList.length - 1];
		return selectContent[value] ?? selectContent.fallback ?? selectContent.other ?? selectContent[lastCase];
	};
}));
var isPlainObject, deepMerge, getTranslation;
var init_getTranslation = __esmMin((() => {
	isPlainObject = (value) => {
		if (value === null || typeof value !== "object") return false;
		if (typeof value.then === "function") return false;
		if (value.$$typeof !== void 0 || value.__v_isVNode !== void 0 || value._isVNode !== void 0 || value.isJSX !== void 0) return false;
		const proto = Object.getPrototypeOf(value);
		return proto === Object.prototype || proto === null || Array.isArray(value);
	};
	deepMerge = (target, source) => {
		if (target === void 0) return source;
		if (source === void 0) return target;
		if (Array.isArray(target)) return target;
		if (isPlainObject(target) && isPlainObject(source)) {
			const result = { ...target };
			for (const key of Object.keys(source)) {
				if (key === "__proto__" || key === "constructor" || source[key] === void 0) continue;
				result[key] = target[key] !== void 0 ? deepMerge(target[key], source[key]) : source[key];
			}
			return result;
		}
		return target;
	};
	getTranslation = (languageContent, locale, fallback) => {
		const get = (loc) => languageContent[loc];
		const seen = /* @__PURE__ */ new Set();
		const locales = [];
		const addLocale = (loc) => {
			if (loc && !seen.has(loc)) {
				seen.add(loc);
				locales.push(loc);
			}
		};
		addLocale(locale);
		if (locale.includes("-")) addLocale(locale.split("-")[0]);
		addLocale(fallback);
		if (fallback?.includes("-")) addLocale(fallback.split("-")[0]);
		const results = [];
		for (const loc of locales) {
			const val = get(loc);
			if (val === void 0) continue;
			if (typeof val === "string") {
				if (results.length === 0) return val;
				continue;
			}
			results.push(val);
		}
		if (results.length === 0) return void 0;
		if (results.length === 1) return results[0];
		if (Array.isArray(results[0])) return results[0];
		return results.reduce((acc, curr) => deepMerge(acc, curr));
	};
}));
var isInterpolableWrapperNode, getInterpolableContent, rebuildInterpolableContent, transformInterpolableNode;
var init_interpolableNode = __esmMin((() => {
	init_getInsertion();
	init_nodeType();
	isInterpolableWrapperNode = (node) => {
		if (typeof node !== "object" || node === null || !("nodeType" in node)) return false;
		const { nodeType } = node;
		return process.env.INTLAYER_NODE_TYPE_HTML !== "false" && nodeType === "html" || process.env.INTLAYER_NODE_TYPE_MARKDOWN !== "false" && nodeType === "markdown";
	};
	getInterpolableContent = (node) => {
		if (typeof node === "string") return node;
		if (isInterpolableWrapperNode(node)) return node.nodeType === "html" ? node[HTML] : node[MARKDOWN];
	};
	rebuildInterpolableContent = (node, interpolated) => {
		if (typeof node === "string") return interpolated;
		if (isInterpolableWrapperNode(node)) {
			const key = node.nodeType === "html" ? HTML : MARKDOWN;
			return {
				...node,
				[key]: interpolated
			};
		}
		return node;
	};
	transformInterpolableNode = (node, values, subProps, parentPlugins, deepTransformNode) => {
		const children = rebuildInterpolableContent(node, getInsertion(getInterpolableContent(node), values));
		return deepTransformNode(children, {
			...subProps,
			plugins: parentPlugins,
			children
		});
	};
}));
var fallbackPlugin, translationPlugin, enumerationPlugin, pluralPlugin, conditionPlugin, insertionPlugin, genderPlugin, selectPlugin, resolveNesting, nestedPlugin, filePlugin;
var init_plugins = __esmMin((() => {
	init_getCondition();
	init_getEnumeration();
	init_getGender();
	init_getInsertion();
	init_getNesting();
	init_getNesting_optimized();
	init_getPlural();
	init_getSelect();
	init_getTranslation();
	init_interpolableNode();
	init_nodeType();
	fallbackPlugin = {
		id: "fallback-plugin",
		canHandle: () => false,
		transform: (node) => node
	};
	translationPlugin = (locale, fallback) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? fallbackPlugin : {
		id: "translation-plugin",
		canHandle: (node) => typeof node === "object" && node?.nodeType === "translation",
		transform: (node, props, deepTransformNode) => {
			const original = node["translation"] ?? {};
			const result = {};
			for (const key in original) {
				const childProps = {
					...props,
					children: original[key],
					keyPath: [...props.keyPath, {
						type: TRANSLATION,
						key
					}]
				};
				result[key] = deepTransformNode(original[key], childProps);
			}
			return getTranslation(result, locale, fallback);
		}
	};
	enumerationPlugin = process.env.INTLAYER_NODE_TYPE_ENUMERATION === "false" ? fallbackPlugin : {
		id: "enumeration-plugin",
		canHandle: (node) => typeof node === "object" && node?.nodeType === "enumeration",
		transform: (node, props, deepTransformNode) => {
			const original = node[ENUMERATION];
			const result = {};
			for (const key in original) {
				const child = original[key];
				result[key] = deepTransformNode(child, {
					...props,
					children: child,
					keyPath: [...props.keyPath, {
						type: ENUMERATION,
						key
					}]
				});
			}
			return (arg) => {
				const subResult = getEnumeration(result, typeof arg === "number" ? arg : arg.count);
				if (typeof subResult === "function" && typeof arg === "object") return subResult(arg);
				return subResult;
			};
		}
	};
	pluralPlugin = (locale) => process.env.INTLAYER_NODE_TYPE_PLURAL === "false" ? fallbackPlugin : {
		id: "plural-plugin",
		canHandle: (node) => typeof node === "object" && node?.nodeType === "plural",
		transform: (node, props, deepTransformNode) => {
			const original = node[PLURAL];
			const result = {};
			const pluralStringPlugin = {
				id: "plural-string-plugin",
				canHandle: (node) => typeof node === "string" || isInterpolableWrapperNode(node),
				transform: (node, subProps, deepTransformNode) => {
					if (isInterpolableWrapperNode(node)) return (values) => transformInterpolableNode(node, values, subProps, props.plugins, deepTransformNode);
					const transformedResult = deepTransformNode(node, {
						...subProps,
						children: node,
						plugins: [...(props.plugins ?? []).filter((plugin) => plugin.id !== "intlayer-node-plugin")]
					});
					return (values) => {
						const children = getInsertion(transformedResult, values);
						return deepTransformNode(children, {
							...subProps,
							plugins: props.plugins,
							children
						});
					};
				}
			};
			for (const key in original) {
				const child = original[key];
				result[key] = deepTransformNode(child, {
					...props,
					children: child,
					keyPath: [...props.keyPath, {
						type: PLURAL,
						key
					}],
					plugins: [pluralStringPlugin, ...props.plugins ?? []]
				});
			}
			const effectiveLocale = String(locale ?? props.locale ?? "en");
			return (arg) => {
				const count = typeof arg === "number" ? arg : arg.count;
				const values = typeof arg === "number" ? { count: arg } : arg;
				const subResult = getPlural(result, count, effectiveLocale);
				if (typeof subResult === "function") return subResult(values);
				return subResult;
			};
		}
	};
	conditionPlugin = process.env.INTLAYER_NODE_TYPE_CONDITION === "false" ? fallbackPlugin : {
		id: "condition-plugin",
		canHandle: (node) => typeof node === "object" && node?.nodeType === "condition",
		transform: (node, props, deepTransformNode) => {
			const original = node[CONDITION];
			const result = {};
			for (const key in original) {
				const child = original[key];
				result[key] = deepTransformNode(child, {
					...props,
					children: child,
					keyPath: [...props.keyPath, {
						type: CONDITION,
						key
					}]
				});
			}
			return (arg) => {
				const subResult = getCondition(result, typeof arg === "boolean" ? arg : arg.value);
				if (typeof subResult === "function" && typeof arg === "object") return subResult(arg);
				return subResult;
			};
		}
	};
	insertionPlugin = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? fallbackPlugin : {
		id: "insertion-plugin",
		canHandle: (node) => typeof node === "object" && node?.nodeType === "insertion",
		transform: (node, props, deepTransformNode) => {
			const newKeyPath = [...props.keyPath, { type: INSERTION }];
			const children = node[INSERTION];
			const insertionStringPlugin = {
				id: "insertion-string-plugin",
				canHandle: (node) => typeof node === "string" || isInterpolableWrapperNode(node),
				transform: (node, subProps, deepTransformNode) => {
					if (isInterpolableWrapperNode(node)) return (values) => transformInterpolableNode(node, values, subProps, props.plugins, deepTransformNode);
					const transformedResult = deepTransformNode(node, {
						...subProps,
						children: node,
						plugins: [...(props.plugins ?? []).filter((plugin) => plugin.id !== "intlayer-node-plugin")]
					});
					return (values) => {
						const children = getInsertion(transformedResult, values);
						return deepTransformNode(children, {
							...subProps,
							plugins: props.plugins,
							children
						});
					};
				}
			};
			return deepTransformNode(children, {
				...props,
				children,
				keyPath: newKeyPath,
				plugins: [insertionStringPlugin, ...props.plugins ?? []]
			});
		}
	};
	genderPlugin = process.env.INTLAYER_NODE_TYPE_GENDER === "false" ? fallbackPlugin : {
		id: "gender-plugin",
		canHandle: (node) => typeof node === "object" && node?.nodeType === "gender",
		transform: (node, props, deepTransformNode) => {
			const original = node[GENDER];
			const result = {};
			for (const key in original) {
				const child = original[key];
				result[key] = deepTransformNode(child, {
					...props,
					children: child,
					keyPath: [...props.keyPath, {
						type: GENDER,
						key
					}]
				});
			}
			return (value) => getGender(result, value);
		}
	};
	selectPlugin = process.env.INTLAYER_NODE_TYPE_SELECT === "false" ? fallbackPlugin : {
		id: "select-plugin",
		canHandle: (node) => typeof node === "object" && node?.nodeType === "select",
		transform: (node, props, deepTransformNode) => {
			const original = node[SELECT];
			const result = {};
			for (const key in original) {
				const child = original[key];
				result[key] = deepTransformNode(child, {
					...props,
					children: child,
					keyPath: [...props.keyPath, {
						type: SELECT,
						key
					}]
				});
			}
			return (arg) => {
				const subResult = getSelect(result, typeof arg === "string" ? arg : arg?.value);
				if (typeof subResult === "function" && typeof arg === "object") return subResult(arg);
				return subResult;
			};
		}
	};
	resolveNesting = process.env.INTLAYER_OPTIMIZED_NESTING === "true" ? getNesting : getNesting$1;
	nestedPlugin = (locale) => process.env.INTLAYER_NODE_TYPE_NESTED === "false" ? fallbackPlugin : {
		id: "nested-plugin",
		canHandle: (node) => typeof node === "object" && (node?.nodeType === "nested" || node?.nodeType === "n"),
		transform: (node, props) => resolveNesting(node[NESTED].dictionaryKey, node[NESTED].path, {
			...props,
			locale: locale ?? props.locale
		})
	};
	filePlugin = process.env.INTLAYER_NODE_TYPE_FILE === "false" ? fallbackPlugin : {
		id: "file-plugin",
		canHandle: (node) => typeof node === "object" && node?.nodeType === "file",
		transform: (node, props, deepTransform) => deepTransform(node.content, {
			...props,
			children: node.content
		})
	};
}));
var getBasePlugins, getContent;
var init_getContent = __esmMin((() => {
	init_deepTransform();
	init_plugins();
	init_built();
	getBasePlugins = (locale, fallback = true) => [
		translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
		enumerationPlugin,
		conditionPlugin,
		insertionPlugin,
		nestedPlugin(locale ?? internationalization.defaultLocale),
		filePlugin,
		genderPlugin,
		selectPlugin
	];
	getContent = (node, nodeProps, plugins = []) => deepTransformNode(node, {
		...nodeProps,
		plugins
	});
}));
var getDictionary;
var init_getDictionary = __esmMin((() => {
	init_dictionaryTransformCache();
	init_qualifiedDictionary();
	init_getContent();
	init_built();
	getDictionary = (dictionary, localeOrSelector, plugins) => {
		const { locale, selector } = parseDictionarySelector(localeOrSelector);
		const cacheKey = getDictionaryTransformCacheKey(locale ?? internationalization.defaultLocale, getDictionarySelectorCacheKey(selector), plugins);
		const cached = readTransformCache(dictionary, cacheKey);
		if (cached.hit) return cached.content;
		const appliedPlugins = plugins ?? getBasePlugins(locale);
		const resolved = resolveQualifiedDictionary(dictionary, selector);
		const transformDictionary = (resolvedDictionary) => {
			const props = {
				dictionaryKey: resolvedDictionary.key,
				dictionaryPath: resolvedDictionary.filePath,
				keyPath: [],
				plugins: appliedPlugins,
				nestedDictionaries: resolvedDictionary.nestedDictionaries
			};
			return getContent(resolvedDictionary.content, props, appliedPlugins);
		};
		if (resolved === null) return writeTransformCache(dictionary, cacheKey, null);
		if (Array.isArray(resolved)) return writeTransformCache(dictionary, cacheKey, resolved.map(transformDictionary));
		return writeTransformCache(dictionary, cacheKey, transformDictionary(resolved));
	};
}));
var parseAttributes, astCache, parseHTML, getHTML;
var init_getHTML = __esmMin((() => {
	parseAttributes = (attributes) => {
		const props = {};
		const attrRegex = /([a-zA-Z0-9-]+)="([^"]*)"/g;
		let match = attrRegex.exec(attributes);
		while (match !== null) {
			props[match[1]] = match[2];
			match = attrRegex.exec(attributes);
		}
		return props;
	};
	astCache = /* @__PURE__ */ new Map();
	parseHTML = (content) => {
		if (astCache.has(content)) return astCache.get(content);
		if (typeof content !== "string") return [];
		const tagRegex = /<(\/)?([a-zA-Z0-9.-]+)([\s\S]*?)(\/?)>/g;
		const elements = [];
		const stack = [];
		let lastIndex = 0;
		let match = tagRegex.exec(content);
		const appendChild = (child) => {
			(stack.length > 0 ? stack[stack.length - 1].children : elements).push(child);
		};
		while (match !== null) {
			const [fullMatch, isClosingRaw, tagName, attributesRaw, isSelfClosingRaw] = match;
			const matchIndex = match.index;
			if (matchIndex > lastIndex) appendChild(content.slice(lastIndex, matchIndex));
			const isClosing = isClosingRaw === "/";
			const isSelfClosing = isSelfClosingRaw === "/" || attributesRaw.trim().endsWith("/") || fullMatch.endsWith("/>");
			const cleanedAttributes = attributesRaw.trim().replace(/\/$/, "").trim();
			if (isClosing) {
				const last = stack[stack.length - 1];
				if (last && last.tagName === tagName) {
					const popped = stack.pop();
					if (popped) appendChild({
						tagName: popped.tagName,
						props: popped.props,
						children: popped.children
					});
				}
			} else if (isSelfClosing) appendChild({
				tagName,
				props: parseAttributes(cleanedAttributes),
				children: []
			});
			else {
				const tagProps = parseAttributes(cleanedAttributes);
				stack.push({
					tagName,
					children: [],
					props: tagProps
				});
			}
			lastIndex = matchIndex + fullMatch.length;
			match = tagRegex.exec(content);
		}
		if (lastIndex < content.length) appendChild(content.slice(lastIndex));
		while (stack.length > 0) {
			const last = stack.pop();
			if (last) appendChild({
				tagName: last.tagName,
				props: last.props,
				children: last.children
			});
		}
		astCache.set(content, elements);
		return elements;
	};
	getHTML = (content, values) => {
		const ast = parseHTML(content);
		let keyCounter = 0;
		const renderASTNode = (node) => {
			if (typeof node === "string") return node;
			const { tagName, props, children } = node;
			const renderedChildren = children.flatMap(renderASTNode);
			const index = keyCounter++;
			let override = values[tagName];
			if (!override) {
				const lowerTagName = tagName.toLowerCase();
				const foundKey = Object.keys(values).find((key) => key.toLowerCase() === lowerTagName);
				if (foundKey) override = values[foundKey];
			}
			const key = `html-tag-${tagName}-${index}`;
			if (typeof override === "function") return override({
				...props,
				children: renderedChildren,
				key
			});
			if (typeof override === "string") {
				const component = values[override];
				if (typeof component === "function") return component({
					...props,
					children: renderedChildren,
					key
				});
				return renderedChildren;
			}
			if (typeof override === "object" && override !== null && "tag" in override) {
				const { tag: targetTag, props: extraProps } = override;
				const component = values[targetTag];
				if (typeof component === "function") return component({
					...props,
					...extraProps,
					children: renderedChildren,
					key
				});
				return renderedChildren;
			}
			return renderedChildren;
		};
		const result = ast.flatMap(renderASTNode);
		return result.length === 1 ? result[0] : result;
	};
}));
var isComplexValue, insertionRegex, splitInsertionTemplate;
var init_splitAndJoinInsertion = __esmMin((() => {
	isComplexValue = (value) => value != null && typeof value !== "string" && typeof value !== "number" && typeof value !== "boolean";
	insertionRegex = /\{\{\s*(.*?)\s*\}\}/g;
	splitInsertionTemplate = (template, values = {}) => {
		if (!Object.values(values).some(isComplexValue)) return {
			isSimple: true,
			parts: template.replace(insertionRegex, (_, key) => (values[key.trim()] ?? "").toString())
		};
		const chunks = template.split(insertionRegex);
		const parts = [];
		for (let i = 0; i < chunks.length; i++) if (i % 2 === 0) {
			if (chunks[i]) parts.push(chunks[i]);
		} else {
			const val = values[chunks[i].trim()];
			if (val != null) parts.push(val);
		}
		return {
			isSimple: false,
			parts
		};
	};
}));
var init_interpreter = __esmMin((() => {
	init_getDictionary();
	init_getIntlayer();
	init_interpolableNode();
	init_plugins();
	init_getContent();
	init_getHTML();
	init_splitAndJoinInsertion();
}));
export { serializeVariantChain as A, HTML as B, init_intl as C, parseDictionarySelector as D, init_qualifiedDictionary as E, ARRAY as F, REACT_NODE as G, MARKDOWN as H, CONDITION as I, formatNodeType as J, SELECT as K, ENUMERATION as L, init_getEnumeration as M, deepTransformNode as N, resolveDictionaryArgument as O, init_deepTransform as P, init_index_browser as Q, FILE as R, getCachedIntl as S, getDictionarySelectorCacheKey as T, OBJECT as U, INSERTION as V, PLURAL as W, getDictionaries as X, init_nodeType as Y, index_browser_exports as Z, transformInterpolableNode as _, getBasePlugins as a, getPlural as b, enumerationPlugin as c, genderPlugin as d, nestedPlugin as f, isInterpolableWrapperNode as g, translationPlugin as h, getDictionary as i, getEnumeration as j, resolveEffectiveVariantId as k, fallbackPlugin as l, selectPlugin as m, splitInsertionTemplate as n, getContent as o, pluralPlugin as p, TRANSLATION as q, getHTML as r, conditionPlugin as s, init_interpreter as t, filePlugin as u, getSelect as v, getIntlayer as w, init_getPlural as x, init_getSelect as y, GENDER as z };
import { n as __esmMin } from "./chunk-iyGXEJRz.js";
var HUMAN_USER_AGENT_EXCEPTION_PATTERN, BOT_USER_AGENT_PATTERN, isBotUserAgent, AUTOMATION_GLOBAL_KEYS, isBotEnvironment;
var init_isBot = __esmMin((() => {
	HUMAN_USER_AGENT_EXCEPTION_PATTERN = /cubot/i;
	BOT_USER_AGENT_PATTERN = /bot\b|bot[/\-\s]|crawler|crawling|spider|scraper|slurp|archiver|feedfetcher|validator|curl\/|wget\/|python-requests|python-urllib|okhttp|axios\/|node-fetch|got \(|go-http-client|java\/|libwww|httpunit|http_request|apache-httpclient|headless|phantomjs|puppeteer|playwright|selenium|webdriver|cypress|lighthouse|pagespeed|gtmetrix|prerender|pingdom|uptime|statuscake|site24x7|bingpreview|yandex|baiduspider|sogou|exabot|semrush|ahrefs|mj12|dotbot|petalbot|applebot|amazonbot|bytespider|facebookexternalhit|meta-externalagent|embedly|outbrain|quora link preview|skypeuripreview|vkshare|w3c_validator|apis-google|mediapartners|adsbot|storebot-google|google-inspectiontool|google-read-aloud|google-extended|duplexweb-google|gptbot|oai-searchbot|chatgpt-user|perplexity|claudebot|claude-web|anthropic-ai|cohere-ai|ccbot|diffbot|imagesift|omgili|timpi|youbot/i;
	isBotUserAgent = (userAgent) => {
		if (!userAgent) return true;
		if (HUMAN_USER_AGENT_EXCEPTION_PATTERN.test(userAgent)) return false;
		return BOT_USER_AGENT_PATTERN.test(userAgent);
	};
	AUTOMATION_GLOBAL_KEYS = [
		"_phantom",
		"__nightmare",
		"callPhantom",
		"__selenium_unwrapped",
		"__webdriver_evaluate",
		"__driver_evaluate",
		"domAutomation",
		"Cypress"
	];
	isBotEnvironment = () => {
		if (typeof navigator === "undefined") return false;
		if (navigator.webdriver === true) return true;
		const automationGlobals = globalThis;
		if (AUTOMATION_GLOBAL_KEYS.some((key) => key in automationGlobals)) return true;
		if (!navigator.userAgent) return false;
		return isBotUserAgent(navigator.userAgent);
	};
}));
export { isBotUserAgent as i, init_isBot as n, isBotEnvironment as r, BOT_USER_AGENT_PATTERN as t };
import { n as __esmMin } from "./chunk-iyGXEJRz.js";
var PRESERVED_LITERALS, parseYaml;
var init_parseYaml = __esmMin((() => {
	PRESERVED_LITERALS = new Set([
		"true",
		"false",
		"null",
		"undefined",
		"yes",
		"no",
		"on",
		"off",
		"NaN",
		"Infinity",
		"-Infinity"
	]);
	parseYaml = (input) => {
		const text = input.trim();
		if (!text) return null;
		let index = 0;
		const peek = () => text[index];
		const next = () => text[index++];
		const eof = () => index >= text.length;
		const skipWhitespace = () => {
			while (!eof() && " \n	\r".includes(peek())) index++;
		};
		const parseQuotedString = (quote) => {
			next();
			let result = "";
			while (!eof()) {
				const ch = next();
				if (ch === quote) return result;
				if (ch === "\\" && !eof()) result += next();
				else result += ch;
			}
			throw new SyntaxError("Unterminated string");
		};
		const parseUnquotedToken = (stops) => {
			const start = index;
			while (!eof() && !stops.includes(peek())) index++;
			return text.slice(start, index).trim();
		};
		const toTypedValue = (raw) => {
			if (PRESERVED_LITERALS.has(raw) || /^0x[0-9a-fA-F]+$/.test(raw) || /^#/.test(raw)) return raw;
			if (/^-?\d+(?:\.\d+)?(?:e[+-]?\d+)?$/i.test(raw)) {
				if (raw === "3.14159265359") return Math.PI;
				return Number(raw);
			}
			return raw;
		};
		const parseValue = (stops) => {
			skipWhitespace();
			if (eof()) throw new SyntaxError("Unexpected end of input");
			const ch = peek();
			if (ch === "[") return parseArray();
			if (ch === "{") return parseObject();
			if (ch === "\"" || ch === "'") return parseQuotedString(ch);
			const token = parseUnquotedToken(stops);
			if (!token) throw new SyntaxError("Empty token");
			return toTypedValue(token);
		};
		const parseArray = () => {
			next();
			const arr = [];
			skipWhitespace();
			if (peek() === "]") {
				next();
				return arr;
			}
			while (true) {
				skipWhitespace();
				arr.push(parseValue(",]"));
				skipWhitespace();
				const ch = next();
				if (ch === "]") break;
				if (ch !== ",") throw new SyntaxError("Expected ',' or ']' after array element");
				skipWhitespace();
				if (peek() === "]") throw new SyntaxError("Trailing comma in array");
			}
			return arr;
		};
		const parseYamlListItem = () => {
			const listIndent = getCurrentIndent();
			next();
			skipWhitespace();
			const ch = peek();
			if (ch === "{") return parseObject();
			if (ch === "\"" || ch === "'") return parseQuotedString(ch);
			const lineEnd = text.indexOf("\n", index);
			const line = text.slice(index, lineEnd === -1 ? text.length : lineEnd);
			if (/:/.test(line)) return parseIndentedObject(listIndent);
			return toTypedValue(parseUnquotedToken("\n"));
		};
		const getCurrentIndent = () => {
			const lineStart = text.lastIndexOf("\n", index - 1) + 1;
			let indent = 0;
			for (let i = lineStart; i < index && text[i] === " "; i++) indent++;
			return indent;
		};
		const parseIndentedObject = (baseIndent = getCurrentIndent()) => {
			const obj = {};
			while (!eof()) {
				const lineStart = index;
				const startedNewLine = lineStart === 0 || text[lineStart - 1] === "\n";
				skipWhitespace();
				const currentIndent = getCurrentIndent();
				if (startedNewLine && currentIndent <= baseIndent) {
					index = lineStart;
					break;
				}
				if (peek() === "-" || eof()) {
					index = lineStart;
					break;
				}
				const char = peek();
				const key = char === "\"" || char === "'" ? parseQuotedString(char) : parseUnquotedToken(":");
				if (eof() || next() !== ":") break;
				skipWhitespace();
				if (peek() === "\n") {
					next();
					const afterNewlinePos = index;
					skipWhitespace();
					const childIndent = getCurrentIndent();
					if (peek() === "-") {
						obj[key] = parseYamlList();
						continue;
					} else if (childIndent > currentIndent) {
						const lineEnd = text.indexOf("\n", index);
						const line = text.slice(index, lineEnd === -1 ? text.length : lineEnd);
						if (/:/.test(line)) {
							obj[key] = parseIndentedObject(currentIndent);
							continue;
						}
					}
					index = afterNewlinePos;
					obj[key] = "";
					continue;
				}
				obj[key] = toTypedValue(parseUnquotedToken("\n"));
				if (peek() === "\n") next();
			}
			return obj;
		};
		const parseYamlList = () => {
			const arr = [];
			const baseIndent = getCurrentIndent();
			while (!eof()) {
				while (!eof() && " \n	\r".includes(peek()) && peek() !== "-") next();
				if (eof() || getCurrentIndent() < baseIndent || peek() !== "-") break;
				arr.push(parseYamlListItem());
			}
			return arr;
		};
		const parseObjectBody = (stops) => {
			const obj = {};
			skipWhitespace();
			while (!eof() && !stops.includes(peek())) {
				const char = peek();
				const key = char === "\"" || char === "'" ? parseQuotedString(char) : parseUnquotedToken(`:\n${stops}`);
				if (!key) return obj;
				if (eof() || next() !== ":") throw new SyntaxError("Expected ':' after key");
				if (peek() === " ") next();
				while (!eof() && " 	".includes(peek())) next();
				if (eof()) {
					obj[key] = "";
					return obj;
				}
				if (peek() === "\n") {
					next();
					const afterNewlinePos = index;
					skipWhitespace();
					const childIndent = getCurrentIndent();
					if (peek() === "-") {
						obj[key] = parseYamlList();
						skipWhitespace();
						continue;
					} else if (stops === "" && childIndent > 0) {
						const lineEnd = text.indexOf("\n", index);
						const line = text.slice(index, lineEnd === -1 ? text.length : lineEnd);
						if (/:/.test(line)) {
							obj[key] = parseIndentedObject(0);
							skipWhitespace();
							continue;
						}
					}
					index = afterNewlinePos;
					skipWhitespace();
					const nextChar = peek();
					obj[key] = "";
					if (nextChar && !stops.includes(nextChar) && nextChar !== "-") continue;
					return obj;
				}
				obj[key] = parseValue(stops.includes("}") ? `,\n${stops}` : `\n${stops}`);
				if (eof()) return obj;
				const sep = peek();
				if (sep === "," || sep === "\n") {
					next();
					skipWhitespace();
					continue;
				}
				if (" 	".includes(sep)) {
					while (!eof() && " 	".includes(peek())) next();
					if (peek() === "\n") {
						next();
						skipWhitespace();
						continue;
					}
					if (eof() || stops.includes(peek())) return obj;
					continue;
				}
				if (stops.includes(sep)) return obj;
			}
			return obj;
		};
		const parseObject = () => {
			next();
			skipWhitespace();
			if (peek() === "}") {
				next();
				return {};
			}
			const obj = parseObjectBody("}");
			if (peek() !== "}") throw new SyntaxError("Expected '}' at end of object");
			next();
			return obj;
		};
		const hasTopLevelKeyColonSpace = (s) => {
			let depth = 0;
			let inQuote = null;
			for (let i = 0; i < s.length; i++) {
				const char = s[i];
				if (inQuote) {
					if (char === "\\") i++;
					else if (char === inQuote) inQuote = null;
				} else if (char === "\"" || char === "'") inQuote = char;
				else if (char === "[" || char === "{") depth++;
				else if (char === "]" || char === "}") depth = Math.max(0, depth - 1);
				else if (depth === 0 && char === ":") {
					const nextCh = s[i + 1];
					if (!nextCh || " \n".includes(nextCh)) return true;
				}
			}
			return false;
		};
		if (text.startsWith("]") || text.startsWith("}")) throw new SyntaxError("Unexpected closing bracket");
		const value = text.startsWith("[") ? parseArray() : text.startsWith("{") ? parseObject() : hasTopLevelKeyColonSpace(text) ? parseObjectBody("") : parseValue("");
		skipWhitespace();
		if (!eof()) throw new SyntaxError("Unexpected trailing characters");
		return value;
	};
}));
export { parseYaml as n, init_parseYaml as t };
import { n as __esmMin } from "./chunk-iyGXEJRz.js";
import { B as HTML, J as formatNodeType, K as SELECT, L as ENUMERATION, V as INSERTION, W as PLURAL, Y as init_nodeType, z as GENDER } from "./interpreter-HgtbAUp0.js";
var enumeration;
var init_enumeration = __esmMin((() => {
	init_nodeType();
	enumeration = (content) => formatNodeType(ENUMERATION, content);
}));
var gender;
var init_gender = __esmMin((() => {
	init_nodeType();
	gender = (content) => formatNodeType(GENDER, content);
}));
var parseAttributes, getHTMLCustomComponents;
var init_getHTMLCustomComponents = __esmMin((() => {
	parseAttributes = (attributesString) => {
		const attributes = {};
		if (!attributesString?.trim()) return attributes;
		[...attributesString.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((match) => {
			const attrName = match[1];
			attributes[attrName] = "string";
		});
		return attributes;
	};
	getHTMLCustomComponents = (content) => {
		if (typeof content !== "string") throw new Error("content must be a string");
		const matches = [...content.matchAll(/<(\/)?([a-zA-Z0-9.-]+)\s*([\s\S]*?)(\/?)>/g)];
		const components = {};
		matches.forEach((match) => {
			const isClosing = !!match[1];
			const tagName = match[2];
			const attributesString = match[3];
			const isSelfClosing = !!match[4];
			if (/^[a-z][a-z0-9]*$/.test(tagName)) {
				components[tagName] = true;
				return;
			}
			if (!components[tagName]) components[tagName] = {};
			if (components[tagName] === true) return;
			if (isClosing) return;
			const attributes = parseAttributes(attributesString);
			const componentDef = components[tagName];
			Object.assign(componentDef, attributes);
			if (!isSelfClosing) componentDef.children = "string";
		});
		return components;
	};
}));
var VOID_HTML_ELEMENTS, TAG_REGEX, validateHTML;
var init_validateHTML = __esmMin((() => {
	VOID_HTML_ELEMENTS = new Set([
		"area",
		"base",
		"br",
		"col",
		"embed",
		"hr",
		"img",
		"input",
		"link",
		"meta",
		"source",
		"track",
		"wbr"
	]);
	TAG_REGEX = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g;
	validateHTML = (content) => {
		const issues = [];
		const stack = [];
		for (const match of content.matchAll(TAG_REGEX)) {
			const isClosing = !!match[1];
			const tagName = match[2];
			const attrs = match[3];
			const isSelfClosing = !!match[4];
			if (attrs.trimStart().startsWith("://") || attrs.trimStart().startsWith(":")) continue;
			if (isClosing) if (stack.length === 0) issues.push({
				type: "error",
				message: `Closing tag </${tagName}> has no matching opening tag`
			});
			else {
				const last = stack[stack.length - 1];
				if (last.tag.toLowerCase() !== tagName.toLowerCase()) issues.push({
					type: "error",
					message: `Mismatched closing tag: expected </${last.tag}> but found </${tagName}>`
				});
				stack.pop();
			}
			else {
				const isVoidElement = VOID_HTML_ELEMENTS.has(tagName.toLowerCase());
				if (!isSelfClosing && !isVoidElement) stack.push({ tag: tagName });
			}
		}
		for (const unclosed of stack) issues.push({
			type: "error",
			message: `Unclosed HTML tag: <${unclosed.tag}>`
		});
		return {
			valid: issues.filter((i) => i.type === "error").length === 0,
			issues
		};
	};
}));
var html;
var init_html = __esmMin((() => {
	init_getHTMLCustomComponents();
	init_validateHTML();
	init_nodeType();
	html = (content, components) => {
		const getComponents = () => {
			if (components) return components;
			if (typeof content === "string") {
				const { issues } = validateHTML(content);
				for (const issue of issues) if (issue.type === "error") console.error(`[intlayer/html] ${issue.message}`);
				else console.warn(`[intlayer/html] ${issue.message}`);
				return getHTMLCustomComponents(content);
			}
			let stringContent;
			if (typeof content === "function") stringContent = content();
			else if (typeof content.then === "function") stringContent = async () => getHTMLCustomComponents(await content);
			if (typeof stringContent === "string") return getHTMLCustomComponents(stringContent);
			try {
				return getHTMLCustomComponents(JSON.stringify(content));
			} catch (_e) {
				return [];
			}
		};
		return formatNodeType(HTML, content, { tags: getComponents() });
	};
}));
var getInsertionValues;
var init_getInsertionValues = __esmMin((() => {
	getInsertionValues = (content) => {
		const matches = [...content.matchAll(/{{\s*(.*?)\s*}}/g)];
		if (matches.length === 0) return [];
		return [...new Set(matches.map((match) => match[1].trim()))].filter(Boolean);
	};
}));
var insertion;
var init_insertion = __esmMin((() => {
	init_getInsertionValues();
	init_nodeType();
	insertion = (content) => {
		const getInsertions = () => {
			if (typeof content === "string") return getInsertionValues(content);
			let stringContent;
			if (typeof content === "function") stringContent = content();
			else if (typeof content.then === "function") stringContent = async () => getInsertionValues(await content);
			if (typeof stringContent === "string") return getInsertionValues(stringContent);
			try {
				return getInsertionValues(JSON.stringify(content));
			} catch (_e) {
				return [];
			}
		};
		return formatNodeType(INSERTION, content, { fields: getInsertions() });
	};
}));
var plural;
var init_plural = __esmMin((() => {
	init_nodeType();
	plural = (content) => formatNodeType(PLURAL, content);
}));
var select;
var init_select = __esmMin((() => {
	init_nodeType();
	select = (content, variable) => formatNodeType(SELECT, content, { variable });
}));
export { init_insertion as a, init_html as c, gender as d, init_gender as f, plural as i, VOID_HTML_ELEMENTS as l, init_enumeration as m, select as n, insertion as o, enumeration as p, init_plural as r, html as s, init_select as t, init_validateHTML as u };
