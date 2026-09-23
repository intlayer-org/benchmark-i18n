import e, { Suspense as t, useCallback as n, useContext as r, useEffect as i, useId as a, useMemo as o, useRef as s, useState as c } from "react";
import l from "../../../i18n/locales/de/route.json";
import u from "../../../i18n/locales/de/header.json";
import d from "../../../i18n/locales/de/footer.json";
import f from "../../../i18n/locales/de/themeToggle.json";
import p from "../../../i18n/locales/de/hero.json";
import m from "../../../i18n/locales/de/whyItMatters.json";
import h from "../../../i18n/locales/de/understandingImpact.json";
import g from "../../../i18n/locales/de/resultsTable.json";
import _ from "../../../i18n/locales/de/aboutHeader.json";
import v from "../../../i18n/locales/de/aboutGrid.json";
import y from "../../../i18n/locales/de/whatWeMeasure.json";
import b from "../../../i18n/locales/de/blogHeader.json";
import x from "../../../i18n/locales/de/blogList.json";
import S from "../../../i18n/locales/de/careersHeader.json";
import ee from "../../../i18n/locales/de/careersBenefits.json";
import te from "../../../i18n/locales/de/openPositions.json";
import C from "../../../i18n/locales/de/contactHeader.json";
import w from "../../../i18n/locales/de/contactForm.json";
import T from "../../../i18n/locales/de/faqHeader.json";
import ne from "../../../i18n/locales/de/faqList.json";
import re from "../../../i18n/locales/de/pricingHeader.json";
import ie from "../../../i18n/locales/de/pricingTiers.json";
import ae from "../../../i18n/locales/de/productsHeader.json";
import oe from "../../../i18n/locales/de/productsGrid.json";
import se from "../../../i18n/locales/de/settingsHeader.json";
import ce from "../../../i18n/locales/de/profileSection.json";
import le from "../../../i18n/locales/de/preferencesSection.json";
import ue from "../../../i18n/locales/de/apiAccessSection.json";
import de from "../../../i18n/locales/de/settingsFooter.json";
import fe from "../../../i18n/locales/de/teamHeader.json";
import pe from "../../../i18n/locales/de/teamGrid.json";
import me from "../../../i18n/locales/de/common.json";
import he from "../../../i18n/locales/de/home.json";
import ge from "../../../i18n/locales/de/about.json";
import _e from "../../../i18n/locales/de/blog.json";
import ve from "../../../i18n/locales/de/careers.json";
import ye from "../../../i18n/locales/de/contact.json";
import be from "../../../i18n/locales/de/faq.json";
import xe from "../../../i18n/locales/de/pricing.json";
import Se from "../../../i18n/locales/de/products.json";
import Ce from "../../../i18n/locales/de/settings.json";
import we from "../../../i18n/locales/de/team.json";
import Te from "../../../i18n/locales/es/route.json";
import Ee from "../../../i18n/locales/es/header.json";
import De from "../../../i18n/locales/es/footer.json";
import Oe from "../../../i18n/locales/es/themeToggle.json";
import ke from "../../../i18n/locales/es/hero.json";
import Ae from "../../../i18n/locales/es/whyItMatters.json";
import je from "../../../i18n/locales/es/understandingImpact.json";
import Me from "../../../i18n/locales/es/resultsTable.json";
import Ne from "../../../i18n/locales/es/aboutHeader.json";
import Pe from "../../../i18n/locales/es/aboutGrid.json";
import Fe from "../../../i18n/locales/es/whatWeMeasure.json";
import Ie from "../../../i18n/locales/es/blogHeader.json";
import Le from "../../../i18n/locales/es/blogList.json";
import Re from "../../../i18n/locales/es/careersHeader.json";
import ze from "../../../i18n/locales/es/careersBenefits.json";
import Be from "../../../i18n/locales/es/openPositions.json";
import Ve from "../../../i18n/locales/es/contactHeader.json";
import He from "../../../i18n/locales/es/contactForm.json";
import Ue from "../../../i18n/locales/es/faqHeader.json";
import We from "../../../i18n/locales/es/faqList.json";
import Ge from "../../../i18n/locales/es/pricingHeader.json";
import Ke from "../../../i18n/locales/es/pricingTiers.json";
import qe from "../../../i18n/locales/es/productsHeader.json";
import Je from "../../../i18n/locales/es/productsGrid.json";
import Ye from "../../../i18n/locales/es/settingsHeader.json";
import Xe from "../../../i18n/locales/es/profileSection.json";
import Ze from "../../../i18n/locales/es/preferencesSection.json";
import Qe from "../../../i18n/locales/es/apiAccessSection.json";
import $e from "../../../i18n/locales/es/settingsFooter.json";
import et from "../../../i18n/locales/es/teamHeader.json";
import tt from "../../../i18n/locales/es/teamGrid.json";
import nt from "../../../i18n/locales/es/common.json";
import rt from "../../../i18n/locales/es/home.json";
import it from "../../../i18n/locales/es/about.json";
import at from "../../../i18n/locales/es/blog.json";
import ot from "../../../i18n/locales/es/careers.json";
import st from "../../../i18n/locales/es/contact.json";
import ct from "../../../i18n/locales/es/faq.json";
import lt from "../../../i18n/locales/es/pricing.json";
import ut from "../../../i18n/locales/es/products.json";
import dt from "../../../i18n/locales/es/settings.json";
import ft from "../../../i18n/locales/es/team.json";
import pt from "../../../i18n/locales/fr/route.json";
import mt from "../../../i18n/locales/fr/header.json";
import ht from "../../../i18n/locales/fr/footer.json";
import gt from "../../../i18n/locales/fr/themeToggle.json";
import _t from "../../../i18n/locales/fr/hero.json";
import vt from "../../../i18n/locales/fr/whyItMatters.json";
import yt from "../../../i18n/locales/fr/understandingImpact.json";
import bt from "../../../i18n/locales/fr/resultsTable.json";
import xt from "../../../i18n/locales/fr/aboutHeader.json";
import St from "../../../i18n/locales/fr/aboutGrid.json";
import Ct from "../../../i18n/locales/fr/whatWeMeasure.json";
import wt from "../../../i18n/locales/fr/blogHeader.json";
import Tt from "../../../i18n/locales/fr/blogList.json";
import Et from "../../../i18n/locales/fr/careersHeader.json";
import Dt from "../../../i18n/locales/fr/careersBenefits.json";
import Ot from "../../../i18n/locales/fr/openPositions.json";
import kt from "../../../i18n/locales/fr/contactHeader.json";
import At from "../../../i18n/locales/fr/contactForm.json";
import jt from "../../../i18n/locales/fr/faqHeader.json";
import Mt from "../../../i18n/locales/fr/faqList.json";
import Nt from "../../../i18n/locales/fr/pricingHeader.json";
import Pt from "../../../i18n/locales/fr/pricingTiers.json";
import Ft from "../../../i18n/locales/fr/productsHeader.json";
import It from "../../../i18n/locales/fr/productsGrid.json";
import Lt from "../../../i18n/locales/fr/settingsHeader.json";
import Rt from "../../../i18n/locales/fr/profileSection.json";
import zt from "../../../i18n/locales/fr/preferencesSection.json";
import Bt from "../../../i18n/locales/fr/apiAccessSection.json";
import Vt from "../../../i18n/locales/fr/settingsFooter.json";
import Ht from "../../../i18n/locales/fr/teamHeader.json";
import Ut from "../../../i18n/locales/fr/teamGrid.json";
import Wt from "../../../i18n/locales/fr/common.json";
import Gt from "../../../i18n/locales/fr/home.json";
import Kt from "../../../i18n/locales/fr/about.json";
import qt from "../../../i18n/locales/fr/blog.json";
import Jt from "../../../i18n/locales/fr/careers.json";
import Yt from "../../../i18n/locales/fr/contact.json";
import Xt from "../../../i18n/locales/fr/faq.json";
import Zt from "../../../i18n/locales/fr/pricing.json";
import Qt from "../../../i18n/locales/fr/products.json";
import $t from "../../../i18n/locales/fr/settings.json";
import en from "../../../i18n/locales/fr/team.json";
import tn from "../../../i18n/locales/it/route.json";
import nn from "../../../i18n/locales/it/header.json";
import rn from "../../../i18n/locales/it/footer.json";
import an from "../../../i18n/locales/it/themeToggle.json";
import on from "../../../i18n/locales/it/hero.json";
import sn from "../../../i18n/locales/it/whyItMatters.json";
import cn from "../../../i18n/locales/it/understandingImpact.json";
import ln from "../../../i18n/locales/it/resultsTable.json";
import un from "../../../i18n/locales/it/aboutHeader.json";
import dn from "../../../i18n/locales/it/aboutGrid.json";
import fn from "../../../i18n/locales/it/whatWeMeasure.json";
import pn from "../../../i18n/locales/it/blogHeader.json";
import mn from "../../../i18n/locales/it/blogList.json";
import hn from "../../../i18n/locales/it/careersHeader.json";
import gn from "../../../i18n/locales/it/careersBenefits.json";
import _n from "../../../i18n/locales/it/openPositions.json";
import vn from "../../../i18n/locales/it/contactHeader.json";
import yn from "../../../i18n/locales/it/contactForm.json";
import bn from "../../../i18n/locales/it/faqHeader.json";
import xn from "../../../i18n/locales/it/faqList.json";
import Sn from "../../../i18n/locales/it/pricingHeader.json";
import Cn from "../../../i18n/locales/it/pricingTiers.json";
import wn from "../../../i18n/locales/it/productsHeader.json";
import Tn from "../../../i18n/locales/it/productsGrid.json";
import En from "../../../i18n/locales/it/settingsHeader.json";
import Dn from "../../../i18n/locales/it/profileSection.json";
import On from "../../../i18n/locales/it/preferencesSection.json";
import kn from "../../../i18n/locales/it/apiAccessSection.json";
import An from "../../../i18n/locales/it/settingsFooter.json";
import jn from "../../../i18n/locales/it/teamHeader.json";
import Mn from "../../../i18n/locales/it/teamGrid.json";
import Nn from "../../../i18n/locales/it/common.json";
import Pn from "../../../i18n/locales/it/home.json";
import Fn from "../../../i18n/locales/it/about.json";
import In from "../../../i18n/locales/it/blog.json";
import Ln from "../../../i18n/locales/it/careers.json";
import Rn from "../../../i18n/locales/it/contact.json";
import zn from "../../../i18n/locales/it/faq.json";
import Bn from "../../../i18n/locales/it/pricing.json";
import Vn from "../../../i18n/locales/it/products.json";
import Hn from "../../../i18n/locales/it/settings.json";
import Un from "../../../i18n/locales/it/team.json";
import Wn from "../../../i18n/locales/ja/route.json";
import Gn from "../../../i18n/locales/ja/header.json";
import Kn from "../../../i18n/locales/ja/footer.json";
import qn from "../../../i18n/locales/ja/themeToggle.json";
import Jn from "../../../i18n/locales/ja/hero.json";
import Yn from "../../../i18n/locales/ja/whyItMatters.json";
import Xn from "../../../i18n/locales/ja/understandingImpact.json";
import Zn from "../../../i18n/locales/ja/resultsTable.json";
import Qn from "../../../i18n/locales/ja/aboutHeader.json";
import $n from "../../../i18n/locales/ja/aboutGrid.json";
import er from "../../../i18n/locales/ja/whatWeMeasure.json";
import tr from "../../../i18n/locales/ja/blogHeader.json";
import nr from "../../../i18n/locales/ja/blogList.json";
import rr from "../../../i18n/locales/ja/careersHeader.json";
import ir from "../../../i18n/locales/ja/careersBenefits.json";
import ar from "../../../i18n/locales/ja/openPositions.json";
import or from "../../../i18n/locales/ja/contactHeader.json";
import sr from "../../../i18n/locales/ja/contactForm.json";
import cr from "../../../i18n/locales/ja/faqHeader.json";
import lr from "../../../i18n/locales/ja/faqList.json";
import ur from "../../../i18n/locales/ja/pricingHeader.json";
import dr from "../../../i18n/locales/ja/pricingTiers.json";
import fr from "../../../i18n/locales/ja/productsHeader.json";
import pr from "../../../i18n/locales/ja/productsGrid.json";
import mr from "../../../i18n/locales/ja/settingsHeader.json";
import hr from "../../../i18n/locales/ja/profileSection.json";
import gr from "../../../i18n/locales/ja/preferencesSection.json";
import _r from "../../../i18n/locales/ja/apiAccessSection.json";
import vr from "../../../i18n/locales/ja/settingsFooter.json";
import yr from "../../../i18n/locales/ja/teamHeader.json";
import br from "../../../i18n/locales/ja/teamGrid.json";
import xr from "../../../i18n/locales/ja/common.json";
import Sr from "../../../i18n/locales/ja/home.json";
import Cr from "../../../i18n/locales/ja/about.json";
import wr from "../../../i18n/locales/ja/blog.json";
import Tr from "../../../i18n/locales/ja/careers.json";
import Er from "../../../i18n/locales/ja/contact.json";
import Dr from "../../../i18n/locales/ja/faq.json";
import Or from "../../../i18n/locales/ja/pricing.json";
import kr from "../../../i18n/locales/ja/products.json";
import Ar from "../../../i18n/locales/ja/settings.json";
import jr from "../../../i18n/locales/ja/team.json";
import Mr from "../../../i18n/locales/ko/route.json";
import Nr from "../../../i18n/locales/ko/header.json";
import Pr from "../../../i18n/locales/ko/footer.json";
import Fr from "../../../i18n/locales/ko/themeToggle.json";
import Ir from "../../../i18n/locales/ko/hero.json";
import Lr from "../../../i18n/locales/ko/whyItMatters.json";
import Rr from "../../../i18n/locales/ko/understandingImpact.json";
import zr from "../../../i18n/locales/ko/resultsTable.json";
import Br from "../../../i18n/locales/ko/aboutHeader.json";
import Vr from "../../../i18n/locales/ko/aboutGrid.json";
import Hr from "../../../i18n/locales/ko/whatWeMeasure.json";
import Ur from "../../../i18n/locales/ko/blogHeader.json";
import Wr from "../../../i18n/locales/ko/blogList.json";
import Gr from "../../../i18n/locales/ko/careersHeader.json";
import Kr from "../../../i18n/locales/ko/careersBenefits.json";
import qr from "../../../i18n/locales/ko/openPositions.json";
import Jr from "../../../i18n/locales/ko/contactHeader.json";
import Yr from "../../../i18n/locales/ko/contactForm.json";
import Xr from "../../../i18n/locales/ko/faqHeader.json";
import Zr from "../../../i18n/locales/ko/faqList.json";
import Qr from "../../../i18n/locales/ko/pricingHeader.json";
import $r from "../../../i18n/locales/ko/pricingTiers.json";
import ei from "../../../i18n/locales/ko/productsHeader.json";
import ti from "../../../i18n/locales/ko/productsGrid.json";
import ni from "../../../i18n/locales/ko/settingsHeader.json";
import ri from "../../../i18n/locales/ko/profileSection.json";
import ii from "../../../i18n/locales/ko/preferencesSection.json";
import ai from "../../../i18n/locales/ko/apiAccessSection.json";
import oi from "../../../i18n/locales/ko/settingsFooter.json";
import si from "../../../i18n/locales/ko/teamHeader.json";
import ci from "../../../i18n/locales/ko/teamGrid.json";
import li from "../../../i18n/locales/ko/common.json";
import ui from "../../../i18n/locales/ko/home.json";
import di from "../../../i18n/locales/ko/about.json";
import fi from "../../../i18n/locales/ko/blog.json";
import pi from "../../../i18n/locales/ko/careers.json";
import mi from "../../../i18n/locales/ko/contact.json";
import hi from "../../../i18n/locales/ko/faq.json";
import gi from "../../../i18n/locales/ko/pricing.json";
import _i from "../../../i18n/locales/ko/products.json";
import vi from "../../../i18n/locales/ko/settings.json";
import yi from "../../../i18n/locales/ko/team.json";
import bi from "../../../i18n/locales/pt/route.json";
import xi from "../../../i18n/locales/pt/header.json";
import Si from "../../../i18n/locales/pt/footer.json";
import Ci from "../../../i18n/locales/pt/themeToggle.json";
import wi from "../../../i18n/locales/pt/hero.json";
import Ti from "../../../i18n/locales/pt/whyItMatters.json";
import Ei from "../../../i18n/locales/pt/understandingImpact.json";
import Di from "../../../i18n/locales/pt/resultsTable.json";
import Oi from "../../../i18n/locales/pt/aboutHeader.json";
import ki from "../../../i18n/locales/pt/aboutGrid.json";
import Ai from "../../../i18n/locales/pt/whatWeMeasure.json";
import ji from "../../../i18n/locales/pt/blogHeader.json";
import Mi from "../../../i18n/locales/pt/blogList.json";
import Ni from "../../../i18n/locales/pt/careersHeader.json";
import Pi from "../../../i18n/locales/pt/careersBenefits.json";
import Fi from "../../../i18n/locales/pt/openPositions.json";
import Ii from "../../../i18n/locales/pt/contactHeader.json";
import Li from "../../../i18n/locales/pt/contactForm.json";
import Ri from "../../../i18n/locales/pt/faqHeader.json";
import zi from "../../../i18n/locales/pt/faqList.json";
import Bi from "../../../i18n/locales/pt/pricingHeader.json";
import Vi from "../../../i18n/locales/pt/pricingTiers.json";
import Hi from "../../../i18n/locales/pt/productsHeader.json";
import Ui from "../../../i18n/locales/pt/productsGrid.json";
import Wi from "../../../i18n/locales/pt/settingsHeader.json";
import Gi from "../../../i18n/locales/pt/profileSection.json";
import Ki from "../../../i18n/locales/pt/preferencesSection.json";
import qi from "../../../i18n/locales/pt/apiAccessSection.json";
import Ji from "../../../i18n/locales/pt/settingsFooter.json";
import Yi from "../../../i18n/locales/pt/teamHeader.json";
import Xi from "../../../i18n/locales/pt/teamGrid.json";
import Zi from "../../../i18n/locales/pt/common.json";
import Qi from "../../../i18n/locales/pt/home.json";
import $i from "../../../i18n/locales/pt/about.json";
import ea from "../../../i18n/locales/pt/blog.json";
import ta from "../../../i18n/locales/pt/careers.json";
import na from "../../../i18n/locales/pt/contact.json";
import ra from "../../../i18n/locales/pt/faq.json";
import ia from "../../../i18n/locales/pt/pricing.json";
import aa from "../../../i18n/locales/pt/products.json";
import oa from "../../../i18n/locales/pt/settings.json";
import sa from "../../../i18n/locales/pt/team.json";
import ca from "../../../i18n/locales/ru/route.json";
import la from "../../../i18n/locales/ru/header.json";
import ua from "../../../i18n/locales/ru/footer.json";
import da from "../../../i18n/locales/ru/themeToggle.json";
import fa from "../../../i18n/locales/ru/hero.json";
import pa from "../../../i18n/locales/ru/whyItMatters.json";
import ma from "../../../i18n/locales/ru/understandingImpact.json";
import ha from "../../../i18n/locales/ru/resultsTable.json";
import ga from "../../../i18n/locales/ru/aboutHeader.json";
import _a from "../../../i18n/locales/ru/aboutGrid.json";
import va from "../../../i18n/locales/ru/whatWeMeasure.json";
import ya from "../../../i18n/locales/ru/blogHeader.json";
import ba from "../../../i18n/locales/ru/blogList.json";
import xa from "../../../i18n/locales/ru/careersHeader.json";
import Sa from "../../../i18n/locales/ru/careersBenefits.json";
import Ca from "../../../i18n/locales/ru/openPositions.json";
import wa from "../../../i18n/locales/ru/contactHeader.json";
import Ta from "../../../i18n/locales/ru/contactForm.json";
import Ea from "../../../i18n/locales/ru/faqHeader.json";
import Da from "../../../i18n/locales/ru/faqList.json";
import Oa from "../../../i18n/locales/ru/pricingHeader.json";
import ka from "../../../i18n/locales/ru/pricingTiers.json";
import Aa from "../../../i18n/locales/ru/productsHeader.json";
import ja from "../../../i18n/locales/ru/productsGrid.json";
import Ma from "../../../i18n/locales/ru/settingsHeader.json";
import Na from "../../../i18n/locales/ru/profileSection.json";
import Pa from "../../../i18n/locales/ru/preferencesSection.json";
import Fa from "../../../i18n/locales/ru/apiAccessSection.json";
import Ia from "../../../i18n/locales/ru/settingsFooter.json";
import La from "../../../i18n/locales/ru/teamHeader.json";
import Ra from "../../../i18n/locales/ru/teamGrid.json";
import za from "../../../i18n/locales/ru/common.json";
import Ba from "../../../i18n/locales/ru/home.json";
import Va from "../../../i18n/locales/ru/about.json";
import Ha from "../../../i18n/locales/ru/blog.json";
import Ua from "../../../i18n/locales/ru/careers.json";
import Wa from "../../../i18n/locales/ru/contact.json";
import Ga from "../../../i18n/locales/ru/faq.json";
import Ka from "../../../i18n/locales/ru/pricing.json";
import qa from "../../../i18n/locales/ru/products.json";
import Ja from "../../../i18n/locales/ru/settings.json";
import Ya from "../../../i18n/locales/ru/team.json";
import Xa from "../../../i18n/locales/zh/route.json";
import Za from "../../../i18n/locales/zh/header.json";
import Qa from "../../../i18n/locales/zh/footer.json";
import $a from "../../../i18n/locales/zh/themeToggle.json";
import eo from "../../../i18n/locales/zh/hero.json";
import to from "../../../i18n/locales/zh/whyItMatters.json";
import no from "../../../i18n/locales/zh/understandingImpact.json";
import ro from "../../../i18n/locales/zh/resultsTable.json";
import io from "../../../i18n/locales/zh/aboutHeader.json";
import ao from "../../../i18n/locales/zh/aboutGrid.json";
import oo from "../../../i18n/locales/zh/whatWeMeasure.json";
import so from "../../../i18n/locales/zh/blogHeader.json";
import co from "../../../i18n/locales/zh/blogList.json";
import lo from "../../../i18n/locales/zh/careersHeader.json";
import uo from "../../../i18n/locales/zh/careersBenefits.json";
import fo from "../../../i18n/locales/zh/openPositions.json";
import po from "../../../i18n/locales/zh/contactHeader.json";
import mo from "../../../i18n/locales/zh/contactForm.json";
import ho from "../../../i18n/locales/zh/faqHeader.json";
import go from "../../../i18n/locales/zh/faqList.json";
import _o from "../../../i18n/locales/zh/pricingHeader.json";
import vo from "../../../i18n/locales/zh/pricingTiers.json";
import yo from "../../../i18n/locales/zh/productsHeader.json";
import bo from "../../../i18n/locales/zh/productsGrid.json";
import xo from "../../../i18n/locales/zh/settingsHeader.json";
import So from "../../../i18n/locales/zh/profileSection.json";
import Co from "../../../i18n/locales/zh/preferencesSection.json";
import wo from "../../../i18n/locales/zh/apiAccessSection.json";
import To from "../../../i18n/locales/zh/settingsFooter.json";
import Eo from "../../../i18n/locales/zh/teamHeader.json";
import Do from "../../../i18n/locales/zh/teamGrid.json";
import Oo from "../../../i18n/locales/zh/common.json";
import ko from "../../../i18n/locales/zh/home.json";
import Ao from "../../../i18n/locales/zh/about.json";
import jo from "../../../i18n/locales/zh/blog.json";
import Mo from "../../../i18n/locales/zh/careers.json";
import No from "../../../i18n/locales/zh/contact.json";
import Po from "../../../i18n/locales/zh/faq.json";
import Fo from "../../../i18n/locales/zh/pricing.json";
import Io from "../../../i18n/locales/zh/products.json";
import Lo from "../../../i18n/locales/zh/settings.json";
import Ro from "../../../i18n/locales/zh/team.json";
import { jsx as E, jsxs as D } from "react/jsx-runtime";
var zo = Object.defineProperty, Bo = Object.getOwnPropertySymbols, Vo = Object.prototype.hasOwnProperty, Ho = Object.prototype.propertyIsEnumerable, Uo = (e, t, n) => t in e ? zo(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Wo = (e, t) => {
	for (var n in t ||= {}) Vo.call(t, n) && Uo(e, n, t[n]);
	if (Bo) for (var n of Bo(t)) Ho.call(t, n) && Uo(e, n, t[n]);
	return e;
}, Go;
function Ko(e, t) {
	for (var n = 0; n < t.length; n++) {
		let r = t[n];
		if (typeof r != "string" && !Array.isArray(r)) {
			for (let t in r) if (t !== "default" && !(t in e)) {
				let n = Object.getOwnPropertyDescriptor(r, t);
				n && Object.defineProperty(e, t, n.get ? n : {
					enumerable: !0,
					get: () => r[t]
				});
			}
		}
	}
	return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function O(e) {
	return !!(e && typeof e.then == "function");
}
function k(e, t) {
	return O(e) ? Promise.resolve(e).then(t) : t(e);
}
function A(e, t, n) {
	function r(n) {
		let r = t(n);
		throw e.emit(r), console.error(r), r;
	}
	try {
		let e = n();
		return O(e) ? e.catch(r) : e;
	} catch (e) {
		r(e);
	}
}
function j(e) {
	let t = (Array.isArray(e) ? e : [e]).map((e) => `'${e}'`), n = t.slice(-2).join(" or ");
	return `Tolgee: You need to specify ${[...t.slice(0, -2), n].join(", ")} option`;
}
function qo(e) {
	return typeof e == "object" && !Array.isArray(e) && e !== null;
}
function Jo(e) {
	if (typeof e == "string") return [e];
	if (Array.isArray(e)) return e;
}
function M(e) {
	return Jo(e) || [];
}
function Yo(e, t) {
	return qo(t) ? M(t?.[e]) : M(t);
}
function N(e) {
	return Array.from(new Set(e));
}
function Xo(e) {
	return e && e.replace(/\/+$/, "");
}
function Zo(e) {
	if (typeof e == "string") return e;
	if (typeof e?.message == "string") return e.message;
}
var Qo = (e, t) => fetch(e, t);
function $o(e) {
	return Object.fromEntries(new Headers(e).entries());
}
var P = (e = Qo) => (t, n) => {
	let r = $o(n?.headers);
	return r["x-api-key"] && (r = Object.assign({
		"x-tolgee-sdk-type": "JS",
		"x-tolgee-sdk-version": "prerelease"
	}, r)), e(t, Object.assign(Object.assign({}, n), { headers: r }));
}, F = (e, t) => {
	let n = [];
	return {
		listen(e) {
			let t = (t) => {
				e(t);
			};
			return n.push(t), { unsubscribe() {
				n = n.filter((e) => t !== e);
			} };
		},
		emit(r) {
			t() && n.forEach((t) => t({
				type: e,
				value: r
			}));
		}
	};
};
function es(e) {
	let t = [], n = [];
	function r() {
		if (n.length === 0) return;
		let e = n;
		n = [], t.forEach((t) => {
			t(e);
		});
	}
	return Object.freeze({
		listen(e) {
			let n = (t) => {
				e(t);
			};
			return t.push(n), { unsubscribe() {
				t = t.filter((e) => n !== e);
			} };
		},
		emit(t, i) {
			e() && e() && (n.push(t), i ? setTimeout(r, 0) : r());
		}
	});
}
function ts() {
	let e = !0;
	function t() {
		return e;
	}
	let n = Object.freeze({
		onPendingLanguageChange: F("pendingLanguage", t),
		onLanguageChange: F("language", t),
		onLoadingChange: F("loading", t),
		onFetchingChange: F("fetching", t),
		onInitialLoaded: F("initialLoad", t),
		onRunningChange: F("running", t),
		onCacheChange: F("cache", t),
		onPermanentChange: F("permanentChange", t),
		onError: F("error", t),
		onUpdate: es(t),
		setEmitterActive(t) {
			e = t;
		},
		on: (e, t) => {
			switch (e) {
				case "pendingLanguage": return n.onPendingLanguageChange.listen(t);
				case "language": return n.onLanguageChange.listen(t);
				case "loading": return n.onLoadingChange.listen(t);
				case "fetching": return n.onFetchingChange.listen(t);
				case "initialLoad": return n.onInitialLoaded.listen(t);
				case "running": return n.onRunningChange.listen(t);
				case "cache": return n.onCacheChange.listen(t);
				case "update": return n.onUpdate.listen(t);
				case "permanentChange": return n.onPermanentChange.listen(t);
				case "error": return n.onError.listen(t);
			}
		}
	});
	return n.onInitialLoaded.listen((e) => n.onUpdate.emit(e, !1)), n.onLanguageChange.listen((e) => n.onUpdate.emit(e, !1)), n.onCacheChange.listen((e) => n.onUpdate.emit(e, !0)), n;
}
var I = class extends Error {
	constructor(e, t, n = !1) {
		let { language: r, namespace: i } = e;
		super(`Tolgee: Failed to fetch record for "${r}"${i && ` and "${i}"`}`), this.cause = t, this.isDev = n, this.name = "RecordFetchError", this.language = r, this.namespace = i;
	}
}, ns = class extends Error {
	constructor(e, t) {
		super(e), this.cause = t, this.name = "LanguageDetectorError";
	}
}, L = class extends Error {
	constructor(e, t) {
		super(e), this.cause = t, this.name = "LanguageStorageError";
	}
}, R = (e) => {
	let t = /* @__PURE__ */ new Map();
	return Object.entries(e).forEach(([e, n]) => {
		if (n != null) {
			if (typeof n == "object") {
				R(n).forEach((n, r) => {
					t.set(e + "." + r, n);
				});
				return;
			}
			t.set(e, n);
		}
	}), t;
}, z = (e) => Object.fromEntries(R(e).entries()), B = (e) => {
	let [t, ...n] = e.split(":");
	return {
		language: t,
		namespace: n.join(":") || ""
	};
}, V = ({ language: e, namespace: t }) => t ? `${e}:${t}` : e;
function rs(e, t, n, r, i, a, o) {
	let s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), l = {}, u = 0;
	function d(t, n, r) {
		let i = V(t);
		c.set(i, {
			data: z(n),
			version: r
		}), e.onCacheChange.emit(B(i));
	}
	async function f(n) {
		function r(t) {
			let r = new I(n, t);
			throw e.onError.emit(r), console.error(r), r;
		}
		let i = t(n);
		if (O(i)) {
			let e = await i.catch(r);
			if (e !== void 0) return e;
		}
		let a = l[V(n)];
		if (typeof a == "function") try {
			return await a();
		} catch (e) {
			r(e);
		}
		else return a;
	}
	async function p(t, r) {
		let i;
		if (r) try {
			i = await n(t);
		} catch (n) {
			let r = new I(t, n, !0);
			e.onError.emit(r), console.warn(r);
		}
		return i ||= await f(t), i;
	}
	let m = Object.freeze({
		addStaticData(e) {
			if (Array.isArray(e)) for (let t of e) {
				let e = V(t), n = c.get(e);
				(!n || n.version === 0) && d(t, z(t.data), 0);
			}
			else e && (l = Object.assign(Object.assign({}, l), e), Object.entries(e).forEach(([e, t]) => {
				if (typeof t != "function") {
					let n = B(e), r = c.get(e);
					(!r || r.version === 0) && d(n, z(t), 0);
				}
			}));
		},
		invalidate() {
			s.clear(), u += 1;
		},
		addRecord(e, t) {
			d(e, z(t), u);
		},
		exists(e, t = !1) {
			let n = c.get(V(e));
			return n && t ? n.version === u : !!n;
		},
		getRecord(e) {
			let t = r(e), n = V(t), i = c.get(n);
			if (i) return Object.assign(Object.assign({}, t), {
				cacheKey: n,
				data: i.data
			});
		},
		getAllRecords() {
			return Array.from(c.entries()).map(([e]) => m.getRecord(B(e)));
		},
		getTranslation(e, t) {
			return c.get(V(e))?.data[t];
		},
		getTranslationNs(e, t, n) {
			for (let r of e) for (let e of t) if (c.get(V({
				language: e,
				namespace: r
			}))?.data[n] != null) return [r];
			return N(e);
		},
		getTranslationFallback(e, t, n) {
			for (let r of e) for (let e of t) {
				let t = c.get(V({
					language: e,
					namespace: r
				}))?.data[n];
				if (t != null) return t;
			}
		},
		changeTranslation(t, n, r) {
			let i = c.get(V(t))?.data;
			i && (i[n] = r, e.onCacheChange.emit(Object.assign(Object.assign({}, t), { key: n })));
		},
		isFetching(e) {
			if (i()) return !0;
			if (e === void 0) return s.size > 0;
			let t = M(e);
			return !!Array.from(s.keys()).find((e) => t.includes(B(e).namespace));
		},
		isLoading(e, t) {
			let n = M(t);
			return i() ? !0 : !!Array.from(s.keys()).find((t) => {
				let r = B(t);
				return (!n.length || n.includes(r.namespace)) && !m.exists({
					namespace: r.namespace,
					language: e
				});
			});
		},
		async loadRecords(e, t) {
			let n = e.map((e) => {
				let n = r(e), i = V(n);
				if (t?.useCache && m.exists(n, !0)) return Object.assign(Object.assign({}, n), {
					new: !1,
					cacheKey: i,
					data: m.getRecord(n).data
				});
				let a = s.get(i);
				if (a) return Object.assign(Object.assign({}, n), {
					new: !1,
					promise: a,
					cacheKey: i
				});
				let o = p(n, !t?.noDev) || Promise.resolve(void 0);
				return s.set(i, o), Object.assign(Object.assign({}, n), {
					new: !0,
					promise: o,
					cacheKey: i
				});
			});
			a.notify(), o.notify();
			let i = n.map((e) => e.promise).filter(Boolean), c = await Promise.all(i);
			return n.forEach((e) => {
				e.promise && (e.data = z(c[0] ?? {}), c.shift());
				let t = s.get(e.cacheKey) !== e.promise;
				e.new && !t && (s.delete(e.cacheKey), e.data ? m.addRecord(e, e.data) : m.getRecord(e) || m.addRecord(e, {}));
			}), a.notify(), o.notify(), n.map((e) => ({
				language: e.language,
				namespace: e.namespace,
				data: e.data ?? {},
				cacheKey: e.cacheKey
			}));
		}
	});
	return m;
}
function is(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
var as = {
	tagAttributes: {
		textarea: ["placeholder"],
		input: ["value", "placeholder"],
		img: ["alt"],
		"*": ["aria-label", "title"]
	},
	restrictedElements: ["script", "style"],
	highlightKeys: ["Alt"],
	highlightColor: "rgb(255, 0, 0)",
	highlightWidth: 5,
	inputPrefix: "%-%tolgee:",
	inputSuffix: "%-%",
	passToParent: ["option", "optgroup"],
	fullKeyEncode: !1
}, H = "invalid", os = {
	observerOptions: as,
	observerType: "invisible",
	onFormatError: H,
	apiUrl: "https://app.tolgee.io",
	autoLoadRequiredData: !0,
	fetch: P(),
	onTranslationMissing: ({ key: e }) => e
}, U = (...e) => {
	let t = {};
	return e.forEach((e) => {
		t = Object.assign(Object.assign(Object.assign({}, t), e), { observerOptions: Object.assign(Object.assign({}, t.observerOptions), e?.observerOptions) });
	}), t;
};
function ss(e, t) {
	let n = U(os, t?.initialOptions, e);
	return n.apiUrl = Xo(n.apiUrl), e?.fetch && (n.fetch = P(e.fetch)), {
		initialOptions: n,
		activeNamespaces: t?.activeNamespaces || /* @__PURE__ */ new Map(),
		language: t?.language,
		pendingLanguage: t?.language,
		isInitialLoading: !1,
		isRunning: !1
	};
}
function cs(e, t, n, r, i, a, o, s) {
	let c = { ui: void 0 }, l = {
		formatters: [],
		finalFormatter: void 0,
		observer: void 0,
		devBackend: void 0,
		backends: [],
		ui: void 0,
		languageDetector: void 0,
		languageStorage: void 0
	}, u = async ({ keysAndDefaults: e, target: t }) => {
		var n;
		let o = e.map(({ key: e, ns: t, defaultValue: n }) => ({
			key: e,
			defaultValue: n,
			fallbackNamespaces: r(t),
			namespace: i({
				key: e,
				ns: t
			})[0],
			translation: a({
				key: e,
				ns: t
			})
		}));
		(n = l.ui) == null || n.handleElementClick(o, t);
	}, d = (e, t) => l.observer?.findPositions(e, t) || [];
	function f(e) {
		let t = a({
			key: e.key,
			ns: e.ns
		});
		return T.formatTranslation(Object.assign(Object.assign({}, e), {
			translation: t,
			formatEnabled: !0
		}));
	}
	function p() {
		return { fetch: t().fetch };
	}
	function m(e) {
		l.observer = e?.();
	}
	function h() {
		return !!l.observer;
	}
	function g(e) {
		e && l.formatters.push(e);
	}
	function _(e) {
		l.finalFormatter = e;
	}
	function v(e) {
		c.ui = e;
	}
	function y() {
		return !!c.ui;
	}
	function b(e) {
		l.languageStorage = e;
	}
	function x(e) {
		l.languageDetector = e;
	}
	function S() {
		return A(s.onError, (e) => new L("Tolgee: Failed to load language", e), () => l.languageStorage?.getLanguage(p()));
	}
	function ee() {
		if (!l.languageDetector) return;
		let e = n();
		return A(s.onError, (e) => new ns("Tolgee: Failed to detect language", e), () => l.languageDetector?.getLanguage(Object.assign({ availableLanguages: e }, p())));
	}
	function te(e) {
		e && l.backends.push(e);
	}
	function C(e) {
		l.devBackend = e;
	}
	function w(e, t) {
		t(e, Object.freeze({
			setFinalFormatter: _,
			addFormatter: g,
			setObserver: m,
			hasObserver: h,
			setUi: v,
			hasUi: y,
			setDevBackend: C,
			addBackend: te,
			setLanguageDetector: x,
			setLanguageStorage: b
		}));
	}
	let T = Object.freeze({
		addPlugin: w,
		findPositions: d,
		run() {
			var e;
			let { apiKey: n, apiUrl: r, projectId: i, branch: a, observerOptions: p, tagNewKeys: m, filterTag: h } = t();
			l.ui = c.ui?.call(c, {
				apiKey: n,
				apiUrl: r,
				projectId: i,
				branch: a,
				highlight: T.highlight,
				changeTranslation: o,
				findPositions: d,
				onPermanentChange: (e) => s.onPermanentChange.emit(e),
				tagNewKeys: m,
				filterTag: h
			}), (e = l.observer) == null || e.run({
				mouseHighlight: !!l.ui,
				options: p,
				translate: f,
				onClick: u
			});
		},
		stop() {
			var e;
			l.ui = void 0, (e = l.observer) == null || e.stop();
		},
		getLanguageStorage() {
			return l.languageStorage;
		},
		getInitialLanguage() {
			let e = n();
			return k(S(), (t) => (!e || e.includes(t)) && t ? t : ee());
		},
		setStoredLanguage(e) {
			return A(s.onError, (e) => new L("Tolgee: Failed to store language", e), () => l.languageStorage?.setLanguage(e, p()));
		},
		getDevBackend() {
			return l.devBackend;
		},
		getBackendRecord: async ({ language: e, namespace: t }) => {
			for (let n of l.backends) {
				let r = await n.getRecord(Object.assign({
					language: e,
					namespace: t
				}, p()));
				if (r !== void 0) return r;
			}
		},
		getBackendDevRecord: async ({ language: e, namespace: n }) => {
			let { apiKey: r, apiUrl: i, projectId: a, branch: o, filterTag: s } = t();
			if (!(!r || !i || !T.hasDevBackend())) return l.devBackend?.getRecord(Object.assign({
				apiKey: r,
				apiUrl: i,
				projectId: a,
				branch: o,
				language: e,
				namespace: n,
				filterTag: s
			}, p()));
		},
		getLanguageDetector() {
			return l.languageDetector;
		},
		retranslate() {
			var e;
			(e = l.observer) == null || e.retranslate();
		},
		highlight: (e, t) => {
			var n;
			return ((n = l.observer)?.highlight)?.call(n, e, t) || { unhighlight() {} };
		},
		unwrap(e) {
			return l.observer ? l.observer?.unwrap(e) : {
				text: e,
				keys: []
			};
		},
		wrap(e) {
			return l.observer ? l.observer?.wrap(e) : e.translation;
		},
		hasDevBackend() {
			return !!T.getDevBackend();
		},
		formatTranslation(n) {
			var { formatEnabled: r } = n, i = is(n, ["formatEnabled"]);
			let { key: a, translation: o, defaultValue: s, noWrap: c, params: u, ns: d, orEmpty: f } = i, p = o ?? s, m = "";
			o ?? (m = t().onTranslationMissing(i));
			let h = p ?? (f ? "" : m), g = e(), _ = r || !l.observer?.outputNotFormattable, v = (e) => l.observer && !c ? l.observer.wrap({
				key: a,
				translation: e,
				defaultValue: s,
				params: u,
				ns: d
			}) : e;
			h = v(h);
			try {
				if (p && g && _) for (let e of l.formatters) h = e.format({
					translation: h,
					language: g,
					params: u
				});
				l.finalFormatter && p && g && _ && (h = l.finalFormatter.format({
					translation: h,
					language: g,
					params: u
				}));
			} catch (e) {
				console.error(e);
				let n = Zo(e) || H, r = t().onFormatError, a = typeof r;
				h = a === "string" ? r : a === "function" ? r(n, i) : H, h = v(h);
			}
			return h;
		}
	});
	return T;
}
var ls = (e, t, n) => {
	let r = e;
	return Object.freeze({
		init(e) {
			r = e;
		},
		notify() {
			let e = t();
			r !== e && n(e), r = e;
		}
	});
};
function us(e, t, n) {
	let r = ss(), i, a = Object.freeze({
		init(e) {
			r = ss(e, r);
		},
		isRunning() {
			return r.isRunning;
		},
		setRunning(e) {
			r.isRunning !== e && (r.isRunning = e, n.emit(e));
		},
		isInitialLoading() {
			return r.isInitialLoading;
		},
		setInitialLoading(e) {
			r.isInitialLoading = e;
		},
		getLanguage() {
			return r.language || r.initialOptions.language;
		},
		setLanguage(t) {
			r.language !== t && (r.language = t, e.emit(t));
		},
		getPendingLanguage() {
			return r.pendingLanguage || a.getLanguage();
		},
		setPendingLanguage(e) {
			r.pendingLanguage !== e && (r.pendingLanguage = e, t.emit(e));
		},
		getInitialOptions() {
			return Object.assign(Object.assign({}, r.initialOptions), i);
		},
		addActiveNs(e) {
			M(e).forEach((e) => {
				let t = r.activeNamespaces.get(e);
				t === void 0 ? r.activeNamespaces.set(e, 1) : r.activeNamespaces.set(e, t + 1);
			});
		},
		removeActiveNs(e) {
			M(e).forEach((e) => {
				let t = r.activeNamespaces.get(e);
				t !== void 0 && t > 1 ? r.activeNamespaces.set(e, t - 1) : r.activeNamespaces.delete(e);
			});
		},
		getRequiredNamespaces() {
			return N([
				a.getDefaultNs(),
				...r.initialOptions.ns || [],
				...M(r.initialOptions.fallbackNs),
				...r.activeNamespaces.keys()
			]);
		},
		getFallbackLangs(e) {
			let t = e || a.getLanguage();
			return t ? N([t, ...Yo(t, r.initialOptions.fallbackLanguage)]) : [];
		},
		getFallbackNs() {
			return M(r.initialOptions.fallbackNs);
		},
		getNs() {
			return r.initialOptions.ns?.length ? r.initialOptions.ns : [r.initialOptions.defaultNs ?? ""];
		},
		getDefaultNs(e) {
			return e === void 0 ? r.initialOptions.defaultNs ?? r.initialOptions.ns?.[0] ?? "" : e;
		},
		getAvailableLanguages() {
			if (r.initialOptions.availableLanguages) return r.initialOptions.availableLanguages;
			if (r.initialOptions.staticData) {
				let e = Object.keys(r.initialOptions.staticData).map((e) => B(e).language);
				return Array.from(new Set(e));
			}
		},
		getAvailableNs() {
			return r.initialOptions.availableNs;
		},
		withDefaultNs(e) {
			return {
				namespace: e.namespace === void 0 ? a.getDefaultNs() : e.namespace,
				language: e.language
			};
		},
		overrideCredentials(e) {
			i = e ? Object.assign(Object.assign({}, e), { apiUrl: Xo(e.apiUrl) }) : void 0;
		}
	});
	return a;
}
function ds(e) {
	var { ns: t, noWrap: n, orEmpty: r, params: i, language: a } = e, o = is(e, [
		"ns",
		"noWrap",
		"orEmpty",
		"params",
		"language"
	]);
	return Object.assign(Object.assign({}, {
		ns: t,
		noWrap: n,
		orEmpty: r,
		language: a
	}), { params: Object.assign({}, o) });
}
var fs = (e, ...t) => {
	let n = {}, r;
	return typeof e == "object" && e ? n = e : (n.key = e, typeof t[0] == "string" ? (n.defaultValue = t[0], r = t[1]) : typeof t[0] == "object" && (r = t[0])), r && (n = Object.assign(Object.assign({}, ds(r)), n)), n;
};
function ps({ options: e }) {
	let t = ts(), n = ls(!1, () => o.isFetching(), t.onFetchingChange.emit), r = ls(!1, () => S.isLoading(), t.onLoadingChange.emit), i = us(t.onLanguageChange, t.onPendingLanguageChange, t.onRunningChange), a = cs(i.getLanguage, i.getInitialOptions, i.getAvailableLanguages, u, _, v, f, t), o = rs(t, a.getBackendRecord, a.getBackendDevRecord, i.withDefaultNs, i.isInitialLoading, n, r);
	e && p(e);
	let s;
	t.onUpdate.listen(() => {
		i.isRunning() && a.retranslate();
	});
	function c() {
		return i.getFallbackNs();
	}
	function l(e) {
		return i.getDefaultNs(e);
	}
	function u(e) {
		return N([...M(l(e)), ...c()]);
	}
	function d(e) {
		return N([...M(e ?? l()), ...i.getRequiredNamespaces()]);
	}
	function f(e, t, n) {
		let r = i.withDefaultNs(e), a = o.getTranslation(r, t);
		return o.changeTranslation(r, t, n), { revert() {
			o.changeTranslation(r, t, a);
		} };
	}
	function p(e) {
		i.init(e), o.addStaticData(i.getInitialOptions().staticData);
	}
	function m(e, t) {
		let n = i.getFallbackLangs(e), r = d(t), a = [];
		return n.forEach((e) => {
			r.forEach((t) => {
				a.push({
					language: e,
					namespace: t
				});
			});
		}), a;
	}
	function h(e, t) {
		return m(e, t).filter((e) => !o.exists(e, !0));
	}
	function g(e) {
		let t = [], n = [];
		if (Array.isArray(e.languages)) t = e.languages;
		else if (e.languages === "all") {
			let e = S.getAvailableLanguages();
			if (!e) throw Error(j("availableLanguages"));
			t = e;
		}
		if (Array.isArray(e.namespaces)) n = e.namespaces;
		else if (e.namespaces === "all") {
			let e = S.getAvailableNs();
			if (!e) throw Error(j("availableNs"));
			n = e;
		}
		let r = [];
		return t.forEach((e) => {
			n.forEach((t) => {
				r.push({
					language: e,
					namespace: t
				});
			});
		}), r;
	}
	function _({ key: e, ns: t }) {
		let n = i.getFallbackLangs(), r = u(t ?? void 0);
		return o.getTranslationNs(r, n, e);
	}
	function v({ key: e, ns: t, language: n }) {
		let r = u(t ?? void 0), a = i.getFallbackLangs(n);
		return o.getTranslationFallback(r, a, e);
	}
	function y() {
		let e = k(b(), () => {
			let e = h();
			if (e.length && i.getInitialOptions().autoLoadRequiredData) return o.loadRecords(e, { useCache: !0 });
		});
		if (O(e)) return i.setInitialLoading(!0), n.notify(), r.notify(), Promise.resolve(e).then(() => {
			i.setInitialLoading(!1), n.notify(), r.notify(), t.onInitialLoaded.emit();
		});
		t.onInitialLoaded.emit();
	}
	function b() {
		if (!i.getLanguage()) return k(a.getInitialLanguage(), (e) => {
			let t = e || i.getInitialOptions().defaultLanguage;
			t && i.setLanguage(t);
		});
	}
	function x() {
		if ((a.getLanguageDetector() || a.getLanguageStorage()) && !i.getAvailableLanguages()) throw Error(j("availableLanguages"));
		if (!i.getLanguage() && !i.getInitialOptions().defaultLanguage) throw Error(j(["defaultLanguage", "language"]));
	}
	let S = Object.freeze(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, t), i), a), o), {
		init: p,
		getTranslation: v,
		changeTranslation: f,
		getTranslationNs: _,
		getDefaultAndFallbackNs: u,
		findPositions: a.findPositions,
		getRequiredDescriptors: m,
		async changeLanguage(e) {
			i.getPendingLanguage() === e && i.getLanguage() === e || (i.setPendingLanguage(e), i.isRunning() && i.getInitialOptions().autoLoadRequiredData && await o.loadRecords(m(e), { useCache: !0 }), e === i.getPendingLanguage() && (i.setLanguage(e), await a.setStoredLanguage(e)));
		},
		async addActiveNs(e, t) {
			t || i.addActiveNs(e), i.isRunning() && await o.loadRecords(m(void 0, e), { useCache: !0 });
		},
		async loadRecord(e, t) {
			return (await S.loadRecords([e], t))[0]?.data;
		},
		isLoading(e) {
			return o.isLoading(i.getLanguage(), e);
		},
		isLoaded(e) {
			let t = i.getLanguage();
			if (!t) return !1;
			let n = i.getFallbackLangs(t), r = d(e), a = [];
			return n.forEach((e) => {
				r.forEach((t) => {
					o.exists({
						language: e,
						namespace: t
					}) || a.push({
						language: e,
						namespace: t
					});
				});
			}), a.length === 0;
		},
		t: (...e) => {
			let t = fs(...e), n = v(t);
			return a.formatTranslation(Object.assign(Object.assign({}, t), { translation: n }));
		},
		isDev() {
			return !!(i.getInitialOptions().apiKey && i.getInitialOptions().apiUrl);
		},
		async loadRequired(e) {
			e?.language || await b();
			let t = m(e?.language);
			return S.loadRecords(t, e);
		},
		async loadMatrix(e) {
			let t = g(e);
			return S.loadRecords(t, e);
		},
		run() {
			return x(), i.isRunning() || (i.setRunning(!0), a.run(), s = y()), Promise.resolve(s);
		},
		stop() {
			i.isRunning() && (a.stop(), i.setRunning(!1));
		}
	}));
	return S;
}
function ms(e) {
	let t = ps({ options: e });
	t.isDev() && t.invalidate();
	function n(e) {
		let n = t.isRunning();
		n && t.stop(), e(), t.isDev() && t.invalidate(), n && t.run();
	}
	let r = Object.freeze({
		on: t.on,
		setEmitterActive: t.setEmitterActive,
		getLanguage: t.getLanguage,
		getPendingLanguage: t.getPendingLanguage,
		changeLanguage: t.changeLanguage,
		changeTranslation: t.changeTranslation,
		addActiveNs: t.addActiveNs,
		removeActiveNs: t.removeActiveNs,
		loadRequired: t.loadRequired,
		loadMatrix: t.loadMatrix,
		loadRecords: t.loadRecords,
		loadRecord: t.loadRecord,
		addStaticData: t.addStaticData,
		getRecord: t.getRecord,
		getAllRecords: t.getAllRecords,
		isLoaded: t.isLoaded,
		getRequiredDescriptors: t.getRequiredDescriptors,
		isInitialLoading: t.isInitialLoading,
		isLoading: t.isLoading,
		isFetching: t.isFetching,
		isRunning: t.isRunning,
		run: t.run,
		stop: t.stop,
		t: t.t,
		highlight: t.highlight,
		findPositions: t.findPositions,
		getInitialOptions: t.getInitialOptions,
		isDev: t.isDev,
		wrap: t.wrap,
		unwrap: t.unwrap,
		overrideCredentials(e) {
			n(() => t.overrideCredentials(e));
		},
		addPlugin(e) {
			e && n(() => t.addPlugin(r, e));
		},
		updateOptions(e) {
			e && n(() => t.init(e));
		}
	});
	return r;
}
var hs = () => {
	let e = {
		plugins: [],
		options: {}
	}, t = Object.freeze({
		use(n) {
			return e.plugins.push(n), t;
		},
		updateDefaults(n) {
			return e.options = U(e.options, n), t;
		},
		init(t) {
			let n = ms(U(e.options, t));
			return e.plugins.forEach(n.addPlugin), n;
		}
	});
	return t;
}, gs = 0, W = 1, _s = 2, vs = class extends Error {
	constructor(e, t, n) {
		let r, i = "";
		e === gs ? r = "Empty parameter" : e === W ? (r = "Unexpected character", i = "Did you forget to use FormatIcu to render ICU message syntax?") : r = "Unexpected end", super(`Tolgee parser: ${r} at ${t} in "${n}"` + (i ? "\n" + i : "")), this.code = e, this.index = t;
	}
};
function ys(e) {
	return /\s/.test(e);
}
var G = 0, K = 1, q = 2, J = 3, Y = 4, bs = new Set([
	q,
	K,
	G
]), X = "'", xs = new Set([
	"{",
	"}",
	X
]), Ss = (e) => /[0-9a-zA-Z_]/.test(e);
function Cs(e) {
	let t = G, n = "", r = "", i = "", a = [], o = [], s = 0;
	function c(t) {
		throw new vs(t, s, e);
	}
	let l = () => {
		a.push(n), n = "";
	}, u = () => {
		Ss(i) || c(W), r += i;
	}, d = () => {
		r === "" && c(gs), o.push(r), r = "";
	};
	for (s = 0; s < e.length; s++) switch (i = e[s], t) {
		case G:
			i === X ? (n += i, t = K) : i === "{" ? (l(), t = J) : (n += i, t = G);
			break;
		case K:
			xs.has(i) ? (n = n.slice(0, -1) + i, t = q) : (n += i, t = G);
			break;
		case q:
			i === X ? t = G : (n += i, t = q);
			break;
		case J:
			i === "}" ? (d(), t = G) : ys(i) ? r !== "" && (d(), t = Y) : (u(), t = J);
			break;
		case Y: i == "}" ? t = G : ys(i) ? t = Y : c(W);
	}
	return bs.has(t) || c(_s), l(), [a, o];
}
function ws(e, t) {
	let [n, r] = Cs(e), i = [n[0]];
	for (let a = 1; a < n.length; a++) {
		let o = t?.[r[a - 1]];
		if (o === void 0) throw Error(`Missing parameter "${r[a - 1]}" in "${e}"`);
		i.push(String(o)), i.push(n[a]);
	}
	return i.join("");
}
function Ts() {
	return { format: ({ translation: e, params: t }) => ws(e, t) };
}
var Es = () => (e, t) => (t.setFinalFormatter(Ts()), e), Ds = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Os = {};
(function(e) {
	function t(e, t) {
		var n;
		return n = e instanceof Buffer ? e : Buffer.from(e.buffer, e.byteOffset, e.byteLength), n.toString(t);
	}
	var n = function(e) {
		return Buffer.from(e);
	};
	function r(e) {
		for (var t = 0, n = Math.min(256 * 256, e.length + 1), r = new Uint16Array(n), i = [], a = 0;;) {
			var o = t < e.length;
			if (!o || a >= n - 1) {
				var s = r.subarray(0, a);
				if (i.push(String.fromCharCode.apply(null, s)), !o) return i.join("");
				e = e.subarray(t), t = 0, a = 0;
			}
			var c = e[t++];
			if (!(c & 128)) r[a++] = c;
			else if ((c & 224) == 192) {
				var l = e[t++] & 63;
				r[a++] = (c & 31) << 6 | l;
			} else if ((c & 240) == 224) {
				var l = e[t++] & 63, u = e[t++] & 63;
				r[a++] = (c & 31) << 12 | l << 6 | u;
			} else if ((c & 248) == 240) {
				var l = e[t++] & 63, u = e[t++] & 63, d = e[t++] & 63, f = (c & 7) << 18 | l << 12 | u << 6 | d;
				f > 65535 && (f -= 65536, r[a++] = f >>> 10 & 1023 | 55296, f = 56320 | f & 1023), r[a++] = f;
			}
		}
	}
	function i(e) {
		for (var t = 0, n = e.length, r = 0, i = Math.max(32, n + (n >>> 1) + 7), a = new Uint8Array(i >>> 3 << 3); t < n;) {
			var o = e.charCodeAt(t++);
			if (o >= 55296 && o <= 56319) {
				if (t < n) {
					var s = e.charCodeAt(t);
					(s & 64512) == 56320 && (++t, o = ((o & 1023) << 10) + (s & 1023) + 65536);
				}
				if (o >= 55296 && o <= 56319) continue;
			}
			if (r + 4 > a.length) {
				i += 8, i *= 1 + t / e.length * 2, i = i >>> 3 << 3;
				var c = new Uint8Array(i);
				c.set(a), a = c;
			}
			if (!(o & 4294967168)) {
				a[r++] = o;
				continue;
			} else if (!(o & 4294965248)) a[r++] = o >>> 6 & 31 | 192;
			else if (!(o & 4294901760)) a[r++] = o >>> 12 & 15 | 224, a[r++] = o >>> 6 & 63 | 128;
			else if (!(o & 4292870144)) a[r++] = o >>> 18 & 7 | 240, a[r++] = o >>> 12 & 63 | 128, a[r++] = o >>> 6 & 63 | 128;
			else continue;
			a[r++] = o & 63 | 128;
		}
		return a.slice ? a.slice(0, r) : a.subarray(0, r);
	}
	var a = "Failed to ", o = function(e, t, n) {
		if (e) throw Error(`${a}${t}: the '${n}' option is unsupported.`);
	}, s = typeof Buffer == "function" && Buffer.from, c = s ? n : i;
	function l() {
		this.encoding = "utf-8";
	}
	l.prototype.encode = function(e, t) {
		return o(t && t.stream, "encode", "stream"), c(e);
	};
	function u(e) {
		var t;
		try {
			var n = new Blob([e], { type: "text/plain;charset=UTF-8" });
			t = URL.createObjectURL(n);
			var r = new XMLHttpRequest();
			return r.open("GET", t, !1), r.send(), r.responseText;
		} finally {
			t && URL.revokeObjectURL(t);
		}
	}
	var d = !s && typeof Blob == "function" && typeof URL == "function" && typeof URL.createObjectURL == "function", f = [
		"utf-8",
		"utf8",
		"unicode-1-1-utf-8"
	], p = r;
	s ? p = t : d && (p = function(e) {
		try {
			return u(e);
		} catch {
			return r(e);
		}
	});
	var m = "construct 'TextDecoder'", h = `${a} ${m}: the `;
	function g(e, t) {
		o(t && t.fatal, m, "fatal"), e ||= "utf-8";
		var n;
		if (n = s ? Buffer.isEncoding(e) : f.indexOf(e.toLowerCase()) !== -1, !n) throw RangeError(`${h} encoding label provided ('${e}') is invalid.`);
		this.encoding = e, this.fatal = !1, this.ignoreBOM = !1;
	}
	g.prototype.decode = function(e, t) {
		o(t && t.stream, "decode", "stream");
		var n;
		return n = e instanceof Uint8Array ? e : e.buffer instanceof ArrayBuffer ? new Uint8Array(e.buffer) : new Uint8Array(e), p(n, this.encoding);
	}, e.TextEncoder = e.TextEncoder || l, e.TextDecoder = e.TextDecoder || g;
})(typeof window < "u" ? window : Ds);
var ks = Ko({
	__proto__: null,
	default: Os
}, [Os]);
(Go = console.assert) == null || Go.call(console, ks), RegExp(`([${["‌", "‍"].join("")}]{9})+`, "g");
function As(e, t) {
	let n = (n) => {
		e.includes(n.data?.type) && t(n.data?.data);
	};
	return window.addEventListener("message", n, !1), { unsubscribe() {
		window.removeEventListener("message", n);
	} };
}
function js({ message: e, recievingMessage: t, data: n, attempts: r = 1, timeout: i = 300 }) {
	let a = !1, o = () => new Promise((r, a) => {
		let o = As(t, c);
		window.postMessage({
			type: e,
			data: n
		}, window.origin);
		let s = setTimeout(u, i);
		function c(e) {
			clearTimeout(s), l(), r(e);
		}
		function l() {
			o.unsubscribe();
		}
		function u() {
			l(), a();
		}
	});
	return {
		cancel() {
			a = !0;
		},
		promise: (async () => {
			for (let e = 0; e < r; e++) {
				if (a) return new Promise(() => {});
				try {
					return await o();
				} catch {
					continue;
				}
			}
			if (!a) throw `Didn't recieve ${t.join(" or ")} in time.`;
			return new Promise(() => {});
		})()
	};
}
function Ms() {
	let e;
	async function t(t) {
		e?.();
		let { cancel: n, promise: r } = js({
			message: "TOLGEE_READY",
			recievingMessage: ["TOLGEE_PLUGIN_READY", "TOLGEE_PLUGIN_UPDATED"],
			data: t,
			attempts: 4
		});
		return e = n, r;
	}
	return { update: t };
}
var Ns = "tolgee-in-context-tools.umd.min.js", Ps = "@tolgee/in-context-tools", Fs = "InContextTools", Is = "https://cdn.jsdelivr.net/npm";
function Ls(e) {
	return new Promise((t, n) => {
		let r = document.createElement("script");
		r.src = e, r.addEventListener("load", () => t()), r.addEventListener("error", (e) => n(e.error)), document.head.appendChild(r);
	});
}
var Rs = null;
function zs(e) {
	return Rs ||= Ls(`${Is}/@tolgee/web@${e}/dist/${Ns}`).then(() => window[Ps][Fs]), Rs;
}
var Bs = "__tolgee_apiKey", Vs = "__tolgee_apiUrl", Hs = "__tolgee_branch";
function Us() {
	let e = sessionStorage.getItem(Bs) || void 0, t = sessionStorage.getItem(Vs) || void 0, n = sessionStorage.getItem(Hs) || void 0;
	if (!(!e || !t)) return Wo({
		apiKey: e,
		apiUrl: t
	}, n === void 0 ? {} : { branch: n });
}
function Ws() {
	sessionStorage.removeItem(Bs), sessionStorage.removeItem(Vs), sessionStorage.removeItem(Hs);
}
function Gs(e) {
	document.readyState === "loading" ? document.addEventListener && document.addEventListener("DOMContentLoaded", e) : Promise.resolve().then(() => {
		e();
	});
}
var Ks = () => (e) => e;
(() => {
	if (typeof window > "u") return !1;
	try {
		return typeof sessionStorage < "u" && sessionStorage;
	} catch (e) {
		return console.error("sessionStorage not available", e), !1;
	}
})() && (Ks = () => (e) => {
	let t = Ms(), n = () => ({
		uiPresent: !0,
		uiVersion: void 0,
		mode: e.isDev() ? "development" : "production",
		config: {
			apiUrl: e.getInitialOptions().apiUrl || "",
			apiKey: e.getInitialOptions().apiKey || "",
			branch: e.getInitialOptions().branch
		}
	});
	return e.on("running", ({ value: e }) => {
		e && Gs(() => {
			t.update(n()).catch(Ws);
		});
	}), Us() && (async () => {
		let e = await zs("prerelease");
		return (t) => {
			let n = Us();
			return t.addPlugin(e({ credentials: n })), t;
		};
	})().then((t) => {
		e.addPlugin(t);
	}).catch((e) => {
		console.error("Tolgee: Failed to load in-context tools"), console.error(e);
	}), e;
});
function qs() {
	return hs().use(Ks());
}
var Js = {
	oopsPageNotFound: "Oops! Page not found.",
	returnToHome: "Return to Home",
	"route.couldNotMeasureHydrationDuration": "Could not measure hydration duration:",
	"route.oopsPageNotFound": "Oops! Page not found",
	"route.returnToHome": "Return to Home"
}, Ys = {
	home: "Home",
	methodology: "Methodology",
	mockPages: "Mock Pages",
	products: "Products",
	pricing: "Pricing",
	team: "Team",
	blog: "Blog",
	careers: "Careers",
	faq: "FAQ",
	contact: "Contact",
	settings: "Settings",
	goToGithub: "Go to GitHub"
}, Xs = {
	resources: "Resources",
	contact: "Contact",
	github: "GitHub",
	methodology: "Methodology",
	contributing: "Contributing",
	builtWith: "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.",
	anOpenSourceTestApplication: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity."
}, Zs = {
	themeModeAutoSystemClick: "Theme mode: auto (system). Click to switch to light mode.",
	themeModeLightClick: "Theme mode: light. Click to switch to dark mode.",
	themeModeDarkClick: "Theme mode: dark. Click to switch to auto (system) mode.",
	themeAuto: "Theme: Auto",
	themeDark: "Theme: Dark",
	themeLight: "Theme: Light"
}, Qs = {
	aTestApplicationDesignedTo: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
	viewResults: "View Results"
}, $s = {
	whyTheseMetricsMatter: "Why These Metrics Matter",
	bundleSize: "Bundle Size",
	theBundleIsTheData: "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
	renderingHydration: "Rendering & Hydration",
	connectingALargeJson: "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
	dynamicLoading: "Dynamic Loading",
	loadingAllTranslationsUpfront: "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
}, ec = {
	cacheInvalidation: "Cache invalidation:",
	contextBasedArchitecturesCan: "Context-based architectures can cause the entire app to re-render when the language changes. For large apps with thousands of components, this can lead to noticeable lag during locale switches.",
	contextBasedArchitecturesCanCause: "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
	duringServerSideRenderingThe: "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.",
	flashOfUntranslatedContent: "Flash of Untranslated Content (FOUC)",
	flashOfUntranslatedContentFouc: "Flash of untranslated content (FOUC):",
	manyI18nLibrariesStore: "Many i18n libraries store translations in large JSON files that are loaded upfront. This can significantly increase the \"Time to Interactive\" as the browser must download and parse these files before the app can be used.",
	manyI18nLibrariesStoreTranslations: "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
	splittingTranslationsIntoPerRoute: "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
	theAppMustFirstLoad: "The app must first load the core library (e.g., i18next) which adds to the initial bundle size. Even \"lightweight\" libraries can add 10-20KB of minified JS.",
	theJsonMustBeParsed: "The JSON must be parsed on every page load — blocking the main thread.",
	theTradeOffsOfDynamic: "The trade-offs of dynamic loading",
	thisTestAppProvidesA: "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.",
	understandingTheImpact: "Understanding the Impact",
	updatingTranslationsRequiresCache: "Updating translations often requires a full rebuild or clearing the CDN cache, which can delay the roll-out of critical copy changes.",
	usersMayBrieflySeeTranslation: "Users may briefly see translation keys or English text while the library and translation files are being loaded.",
	waterfallRequests: "Waterfall requests:",
	whatThisBenchmarkMeasures: "What this benchmark measures",
	whyASingleLargeJson: "Why a single large JSON can hurt performance"
}, tc = {
	bundleSize: "Bundle Size",
	lazyLoading: "Lazy Loading",
	library: "Library",
	lookupTime: "Lookup Time",
	sampleResults: "Sample Results"
}, nc = {
	aboutThisBenchmark: "About This Benchmark",
	methodology: "Methodology",
	thisIsAnOpenSource: "This is an open-source test application for measuring the real-world impact of internationalization libraries.",
	weDesignedThisBenchmarkTo: "We designed this benchmark to provide fair, reproducible, and meaningful comparisons of i18n libraries. Here's our approach."
}, rc = {
	allBenchmarksRunOn: "All benchmarks run on the same hardware (M2 MacBook Pro, 16 GB RAM), same browser (Chromium 120 via Playwright), and same network conditions (simulated 4G). Each test is repeated 50 times and we report the median with P95/P99 percentiles.",
	applicationDesign: "Application Design",
	choosingAnI18nLibrary: "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
	eachI18nLibraryIsIntegrated: "Each i18n library is integrated following its official documentation and best practices. We consult maintainers when possible to ensure optimal configuration. The same React app, same Vite config, same deployment.",
	fairComparison: "Fair Comparison",
	measurementMethodology: "Measurement Methodology",
	methodology: "Methodology",
	testEnvironment: "Test Environment",
	theBenchmarkAppHas10: "The benchmark app has 10 pages with realistic content — navigation, forms, dynamic lists, and static text. Each page uses 15–30 translation keys to represent real-world usage patterns rather than synthetic micro-benchmarks.",
	theSame10PageApp: "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.",
	weUseBrowserNativeApis: "We use browser-native APIs (Performance Timeline, Resource Timing, Layout Instability) combined with React Profiler data. Bundle sizes are measured post-gzip using source-map-explorer for accuracy.",
	whyThisExists: "Why This Exists"
}, ic = {
	bundleSizeImpact: "Bundle size impact",
	duringSsrTranslationDataIs: "During SSR, translation data is serialized into the HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
	duringSsrTranslationDataIsSerialized: "During SSR, translation data is serialized into the HTML. We measure the size of this payload and its effect on Time to Interactive (TTI).",
	howFastTheAppCan: "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
	howFastTheAppCanSwitchFromOne: "How fast the app can switch from one language to another. We measure the re-render time and any network delays for lazy-loaded locales.",
	howMuchExtraTimeThe: "How much extra time the i18n layer adds to each component render — measured using React Profiler's actualDuration.",
	howMuchExtraTimeTheLibraryAdds: "How much extra time the library adds to the initial page load. This includes script execution and the time to fetch/parse translation data.",
	hydrationCost: "Hydration cost",
	lazyLoadingEffectiveness: "Lazy loading effectiveness",
	localeSwitchSpeed: "Locale switch speed",
	renderingOverhead: "Rendering overhead",
	theAdditionalJavascriptBytes: "The additional Javascript bytes that the library adds to your production build. We measure both the library itself and its mandatory dependencies.",
	theAdditionalJavascriptBytesSent: "The additional JavaScript bytes sent to the client specifically due to the i18n library runtime, plus the translation files for the current locale.",
	whatWeMeasure: "What We Measure",
	whetherSplittingTranslationsByRoute: "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity)."
}, ac = {
	blog: "Blog",
	insightsDeepDivesAnd: "Insights, deep dives, and updates from the i18n benchmarking community.",
	insightsTutorialsAndAnalysis: "Insights, Tutorials, and Analysis"
}, oc = {
	aStepByStepGuide: "A step-by-step guide for migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
	aStepByStepGuideOnMigrating: "A step-by-step guide on migrating from legacy i18n solutions to modern, high-performance libraries.",
	aTransparentLookAtOur: "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
	aTransparentLookAtOurBenchmarking: "A transparent look at our benchmarking process, from hardware specs to measurement techniques.",
	anOverviewOfTheCurrent: "An overview of the current i18n ecosystem, comparing approaches from message catalogs to compiler-based solutions.",
	anOverviewOfTheCurrentI18n: "An overview of the current i18n landscape and how different libraries stack up in 2026.",
	analysis: "Analysis",
	benchmark: "Benchmark",
	benchmarkMethodologyHowWe: "Benchmark Methodology: How We Test",
	benchmarkMethodologyHowWeTest: "Benchmark Methodology: How We Test",
	comparingI18nLibrariesIn: "Comparing i18n Libraries in 2026: A Deep Dive",
	february12026: "February 1, 2026",
	february152026: "February 15, 2026",
	february282026: "February 28, 2026",
	howToReduceYourI18n: "How to Reduce Your i18n Bundle by 60%",
	i18nBenchmark2026Results: "i18n Benchmark 2026 Results",
	january202026: "January 20, 2026",
	march152026: "March 15, 2026",
	march82026: "March 8, 2026",
	meta: "Meta",
	migratingFromReactI18nextTo: "Migrating from react-i18next to Lingui",
	practicalStrategiesForOptimizingTranslation: "Practical strategies for optimizing translation file loading, tree-shaking unused locales, and leveraging build-time compilation.",
	reactServerComponentsIntroduceNew: "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
	readMore: "Read More →",
	serverComponentsAndI18nWhat: "Server Components and i18n: What Changes?",
	theStateOfInternationalizationIn: "The State of Internationalization in 2026",
	tutorial: "Tutorial",
	weTested12DifferentInternationalization: "We tested 12 different internationalization libraries across 10 pages. Here are the detailed results with interactive charts."
}, sc = {
	careers: "Careers",
	joinOurMission: "Join our mission to make internationalization fast, easy, and performant for everyone.",
	joinOurMissionToMake: "Join our mission to make the web faster and more accessible for everyone, everywhere."
}, cc = {
	allOurWorkIs: "All our work is open source. Build your public portfolio while making an impact.",
	competitivePay: "Competitive pay",
	impactful: "Impactful",
	openSource: "Open Source",
	openSourceTime: "Open source time",
	percentTimeForOss: "20% time for OSS contributions",
	remoteFirst: "Remote-First",
	topOfMarketCompensation: "Top-of-market compensation",
	whyJoinUs: "Why Join Us?",
	workFromAnywhere: "Work from anywhere in the world",
	workFromAnywhereFully: "Work from anywhere. Fully distributed team across 6 time zones.",
	yourWorkDirectlyHelps: "Your work directly helps developers build better, faster internationalized applications."
}, lc = {
	applyNow: "Apply Now",
	backendEngineer: "Backend Engineer",
	buildAndMaintainOur: "Build and maintain our benchmarking suite and core application infrastructure.",
	buildAndMaintainThe: "Build and maintain the benchmark dashboard, comparison tools, and interactive visualizations.",
	community: "Community",
	createAndMaintainDocumentation: "Create and maintain documentation, blog posts, and educational content about i18n performance best practices.",
	createComprehensiveGuidesApi: "Create comprehensive guides, API references, and tutorials for the community.",
	designAndMaintainThe: "Design and maintain the CI/CD pipeline that runs benchmarks automatically on every library update.",
	designAndScaleOur: "Design and scale our data ingestion pipelines and statistical analysis engines.",
	devOpsEngineer: "DevOps Engineer",
	devrelEngineer: "DevRel Engineer",
	documentation: "Documentation",
	engageWithTheI18n: "Engage with the i18n community, write blog posts, and speak at conferences.",
	engineering: "Engineering",
	ensureTheAccuracyAnd: "Ensure the accuracy and reliability of our benchmarks through rigorous testing.",
	frontendDeveloper: "Frontend Developer",
	fullTime: "Full-time",
	leadBenchmarkDesignAnd: "Lead benchmark design and implementation. Deep knowledge of V8 internals, browser performance APIs, and statistical analysis required.",
	openPositions: "Open Positions",
	partTime: "Part-time",
	qaEngineer: "QA Engineer",
	remote: "Remote",
	seniorFrontendEngineer: "Senior Frontend Engineer",
	seniorPerformanceEngineer: "Senior Performance Engineer",
	sfRemote: "San Francisco / Remote",
	technicalWriter: "Technical Writer"
}, uc = {
	contactUs: "Contact Us",
	getInTouch: "Get in Touch",
	haveIdeasFoundABug: "Have ideas? Found a bug? We'd love to hear from you.",
	haveQuestionsOrWantTo: "Have questions or want to contribute? We'd love to hear from you."
}, dc = {
	bugReport: "Bug Report",
	contribution: "Contribution",
	email: "Email",
	emailPlaceholder: "you@example.com",
	message: "Message",
	messagePlaceholder: "Your message...",
	methodologyQuestion: "Methodology Question",
	name: "Name",
	newBenchmarkIdea: "New Benchmark Idea",
	other: "Other",
	sendMessage: "Send Message",
	subject: "Subject",
	topic: "Topic",
	wellGetBackTo: "We'll get back to you within 48 hours.",
	yourName: "Your name"
}, fc = {
	everythingYouNeedToKnow: "Everything you need to know about i18n Benchmark.",
	frequentlyAskedQuestions: "Frequently Asked Questions"
}, pc = {
	absolutelyWeWelcomeCommunity: "Absolutely! We welcome community contributions. Fork the repository, add your library integration following our template, and submit a pull request. See the Contributing guide for details.",
	allBenchmarksAreRun: "All benchmarks are run using Playwright on a consistent hardware setup (M2 MacBook Pro) with simulated 4G network conditions. Each test runs 50 iterations and we report median, P95, and P99 values.",
	areTheResultsStatistically: "Are the results statistically significant?",
	benchmarksRunAutomaticallyVia: "Benchmarks run automatically via CI on every dependency update and weekly on the main branch. Results are published to the dashboard within 24 hours.",
	canIContributeA: "Can I contribute a new library integration?",
	canISubmitMyOwnBenchmarks: "Can I submit my own benchmarks?",
	doYouOfferConsultingServices: "Do you offer consulting services?",
	howAreBenchmarksConducted: "How are benchmarks conducted?",
	howAreTheBenchmarks: "How are the benchmarks run?",
	howCanIContribute: "How can I contribute?",
	howOftenAreBenchmarksUpdated: "How often are benchmarks updated?",
	howOftenAreResults: "How often are results updated?",
	i18nBenchmarkIsAnOpenSource: "i18n Benchmark is an open-source project dedicated to measuring the real-world performance impact of internationalization libraries.",
	isTheDataReliable: "Is the data reliable?",
	thereAreManyWaysToContribute: "There are many ways to contribute, from submitting new benchmarks to improving our methodology documentation.",
	weCurrentlyBenchmarkReactI18next: "We currently benchmark react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl, and Paraglide. We plan to add more based on community requests.",
	weFollowRigorousStatisticalMethodologyIncluding: "We follow rigorous statistical methodology, including outlier detection and multiple test runs to ensure accuracy.",
	weReRunAllBenchmarksWeekly: "We re-run all benchmarks weekly against the latest versions of each library.",
	weRunStandardizedTestsInIsolated: "We run standardized tests in isolated environments, measuring bundle size, render time, and memory usage across dozens of libraries.",
	weSupportReactI18nextReactIntl: "We support react-i18next, react-intl, Lingui, Tolgee, and several other popular React i18n solutions.",
	whatIsI18nBenchmark: "What is i18n Benchmark?",
	whatLibrariesAreCurrently: "What libraries are currently tested?",
	whichLibrariesAreCurrentlySupported: "Which libraries are currently supported?",
	yesCommunityBenchmarkSubmissionsAre: "Yes! Community benchmark submissions are encouraged and reviewed by our core team.",
	yesOurEnterprisePlanIncludesConsulting: "Yes, our Enterprise plan includes consulting services for optimizing your app's i18n performance.",
	yesWeUseThe: "Yes. We use the Mann-Whitney U test with a significance level of 0.05 to compare distributions. We also report confidence intervals and effect sizes."
}, mc = {
	pricing: "Pricing",
	transparentPricingForEvery: "Transparent pricing for every stage of your i18n journey."
}, hc = {
	freeTier: "Free Tier",
	free: "Free",
	publicBenchmarkDashboard: "Public benchmark dashboard",
	basicLibraryComparisons: "Basic library comparisons",
	communityForumAccess: "Community forum access",
	monthlyResultDigest: "Monthly result digest",
	getStarted: "Get Started",
	proTier: "Pro Tier",
	perMonth: "/month",
	allFreeFeatures: "All Free features",
	customBenchmarkConfigurations: "Custom benchmark configurations",
	privateResultsDashboard: "Private results dashboard",
	apiAccess1000Requests: "API access (1,000 requests/day)",
	slackIntegration: "Slack integration",
	subscribeToPro: "Subscribe to Pro",
	enterpriseTier: "Enterprise Tier",
	custom: "Custom",
	allProFeatures: "All Pro features",
	dedicatedBenchmarkInfrastructure: "Dedicated benchmark infrastructure",
	customLibraryIntegrations: "Custom library integrations",
	slaGuarantees: "SLA guarantees",
	prioritySupport: "Priority support",
	contactSales: "Contact Sales"
}, gc = {
	products: "Products",
	toolsAndServicesTo: "Tools and services to help you optimize your internationalization strategy."
}, _c = {
	benchmarkDashboard: "Benchmark Dashboard",
	interactiveChartsAndTables: "Interactive charts and tables comparing i18n libraries across bundle size, render time, and hydration cost.",
	bundleAnalyzer: "Bundle Analyzer",
	uploadYourBuildOutput: "Upload your build output and get a detailed breakdown of how much of your bundle is i18n overhead.",
	migrationAssistant: "Migration Assistant",
	automatedCodemodsAndGuides: "Automated codemods and guides for migrating between i18n libraries with minimal disruption.",
	performanceMonitor: "Performance Monitor",
	continuousPerformanceTrackingFor: "Continuous performance tracking for your i18n implementation. Get alerts when translation loading degrades.",
	learnMore: "Learn More"
}, vc = {
	manageYourAccount: "Manage your account settings and preferences.",
	manageYourAccountPreferences: "Manage your account preferences and configuration.",
	settings: "Settings"
}, yc = {
	profile: "Profile",
	displayName: "Display Name",
	email: "Email"
}, bc = {
	arabicAr: "Arabic (ar)",
	chineseSimplifiedZhCn: "Chinese (Simplified, zh-CN)",
	darkMode: "Dark Mode",
	defaultLanguage: "Default Language",
	emailNotifications: "Email Notifications",
	englishEn: "English (en)",
	frenchFr: "French (fr)",
	germanDe: "German (de)",
	japaneseJa: "Japanese (ja)",
	preferences: "Preferences",
	receiveWeeklyBenchmark: "Receive weekly benchmark reports",
	receiveWeeklyBenchmarkReports: "Receive weekly benchmark reports",
	spanishEs: "Spanish (es)",
	toggleDarkMode: "Toggle dark mode",
	toggleNotifications: "Toggle Notifications",
	useDarkColorScheme: "Use dark color scheme"
}, xc = {
	apiAccess: "API Access",
	apiKey: "API Key",
	useThisKeyTo: "Use this key to access the benchmarking API programmatically.",
	copy: "Copy"
}, Sc = {
	cancel: "Cancel",
	saveChanges: "Save Changes"
}, Cc = {
	ourTeam: "Our Team",
	meetThePeopleBehindI18n: "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
}, wc = {
	aishaPatel: "Aisha Patel",
	communityManager: "Community Manager",
	dataAnalyst: "Data Analyst",
	developerAdvocate: "Developer Advocate",
	elenaKowalski: "Elena Kowalski",
	ensuresStatisticalRigorIn: "Ensures statistical rigor in our data collection and analysis.",
	ensuresStatisticalRigorInAll: "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.",
	formerGoogleEngineerWith: "Former Google engineer with a passion for web performance and open source.",
	formerGoogleEngineerWith10: "Former Google engineer with 10 years of experience building internationalization systems at scale.",
	founderLeadEngineer: "Founder & Lead Engineer",
	fullStackDeveloper: "Full-Stack Developer",
	maintainsTheBenchmarkingInfrastructure: "Maintains the benchmarking infrastructure and CI/CD pipelines.",
	maintainsTheBenchmarkingInfrastructureAnd: "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.",
	managesCommunityContributions: "Manages community contributions and open source outreach.",
	managesCommunityContributionsPartnershipsAnd: "Manages community contributions, partnerships, and events. Background in open source governance.",
	marcusWeber: "Marcus Weber",
	passionateAboutDeveloperExperience: "Passionate about developer experience and building intuitive APIs.",
	passionateAboutDeveloperExperienceAnd: "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.",
	performanceEngineer: "Performance Engineer",
	sarahChen: "Sarah Chen",
	specializesInJavascriptPerformance: "Specializes in JavaScript performance optimization and React internals.",
	specializesInJavascriptPerformanceOptimization: "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.",
	tomasRodriguez: "Tomás Rodríguez",
	yukiTanaka: "Yuki Tanaka"
}, Tc = {
	cancel: "Cancel",
	copy: "Copy",
	"footer.anOpenSourceTestApplication": "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
	"footer.builtWith": "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.",
	"footer.contact": "Contact",
	"footer.contributing": "Contributing",
	"footer.github": "GitHub",
	"footer.methodology": "Methodology",
	"footer.resources": "Resources",
	"header.blog": "Blog",
	"header.careers": "Careers",
	"header.contact": "Contact",
	"header.faq": "FAQ",
	"header.goToGithub": "Go to GitHub",
	"header.home": "Home",
	"header.methodology": "Methodology",
	"header.mockPages": "Mock Pages",
	"header.pricing": "Pricing",
	"header.products": "Products",
	"header.settings": "Settings",
	"header.team": "Team",
	mockBanner: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.",
	readMore: "Read More",
	saveChanges: "Save Changes",
	"themeToggle.themeAuto": "Theme: Auto",
	"themeToggle.themeDark": "Theme: Dark",
	"themeToggle.themeLight": "Theme: Light",
	"themeToggle.themeModeAutoSystemClick": "Theme mode: auto (system). Click to switch to light mode.",
	"themeToggle.themeModeDarkClick": "Theme mode: dark. Click to switch to auto (system) mode.",
	"themeToggle.themeModeLightClick": "Theme mode: light. Click to switch to dark mode."
}, Ec = {
	"hero.aTestApplicationDesignedTo": "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
	"hero.viewResults": "View Results",
	"whyItMatters.whyTheseMetricsMatter": "Why These Metrics Matter",
	"whyItMatters.bundleSize": "Bundle Size",
	"whyItMatters.theBundleIsTheData": "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
	"whyItMatters.renderingHydration": "Rendering & Hydration",
	"whyItMatters.connectingALargeJson": "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
	"whyItMatters.dynamicLoading": "Dynamic Loading",
	"whyItMatters.loadingAllTranslationsUpfront": "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.",
	"understandingImpact.understandingTheImpact": "Understanding the Impact",
	"understandingImpact.whyASingleLargeJson": "Why a single large JSON can hurt performance",
	"understandingImpact.manyI18nLibrariesStoreTranslations": "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
	"understandingImpact.theJsonMustBeParsed": "The JSON must be parsed on every page load — blocking the main thread.",
	"understandingImpact.contextBasedArchitecturesCanCause": "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
	"understandingImpact.duringServerSideRenderingThe": "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.",
	"understandingImpact.theTradeOffsOfDynamic": "The trade-offs of dynamic loading",
	"understandingImpact.splittingTranslationsIntoPerRoute": "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
	"understandingImpact.waterfallRequests": "Waterfall requests:",
	"understandingImpact.flashOfUntranslatedContentFouc": "Flash of untranslated content (FOUC):",
	"understandingImpact.cacheInvalidation": "Cache invalidation:",
	"understandingImpact.whatThisBenchmarkMeasures": "What this benchmark measures",
	"understandingImpact.thisTestAppProvidesA": "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.",
	"resultsTable.sampleResults": "Sample Results",
	"resultsTable.bundleSize": "Bundle Size",
	"resultsTable.lookupTime": "Lookup Time",
	"resultsTable.lazyLoading": "Lazy Loading"
}, Dc = {
	"aboutHeader.methodology": "Methodology",
	"aboutHeader.weDesignedThisBenchmarkTo": "We designed this benchmark to provide fair, reproducible, and meaningful comparisons of i18n libraries. Here's our approach.",
	"aboutGrid.testEnvironment": "Test Environment",
	"aboutGrid.allBenchmarksRunOn": "All benchmarks run on the same hardware (M2 MacBook Pro, 16 GB RAM), same browser (Chromium 120 via Playwright), and same network conditions (simulated 4G). Each test is repeated 50 times and we report the median with P95/P99 percentiles.",
	"aboutGrid.applicationDesign": "Application Design",
	"aboutGrid.theBenchmarkAppHas10": "The benchmark app has 10 pages with realistic content — navigation, forms, dynamic lists, and static text. Each page uses 15–30 translation keys to represent real-world usage patterns rather than synthetic micro-benchmarks.",
	"aboutGrid.measurementMethodology": "Measurement Methodology",
	"aboutGrid.weUseBrowserNativeApis": "We use browser-native APIs (Performance Timeline, Resource Timing, Layout Instability) combined with React Profiler data. Bundle sizes are measured post-gzip using source-map-explorer for accuracy.",
	"aboutGrid.fairComparison": "Fair Comparison",
	"aboutGrid.eachI18nLibraryIsIntegrated": "Each i18n library is integrated following its official documentation and best practices. We consult maintainers when possible to ensure optimal configuration. The same React app, same Vite config, same deployment.",
	"whatWeMeasure.bundleSizeImpact": "Bundle size impact",
	"whatWeMeasure.theAdditionalJavascriptBytesSent": "The additional JavaScript bytes sent to the client specifically due to the i18n library runtime, plus the translation files for the current locale.",
	"whatWeMeasure.renderingOverhead": "Rendering overhead",
	"whatWeMeasure.howMuchExtraTimeThe": "How much extra time the i18n layer adds to each component render — measured using React Profiler's actualDuration.",
	"whatWeMeasure.hydrationCost": "Hydration cost",
	"whatWeMeasure.duringSsrTranslationDataIs": "During SSR, translation data is serialized into the HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
	"whatWeMeasure.lazyLoadingEffectiveness": "Lazy loading effectiveness",
	"whatWeMeasure.whetherSplittingTranslationsByRoute": "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).",
	"whatWeMeasure.localeSwitchSpeed": "Locale switch speed",
	"whatWeMeasure.howFastTheAppCan": "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
	"whatWeMeasure.whatWeMeasure": "What We Measure"
}, Oc = {
	"blogHeader.blog": "Blog",
	"blogHeader.insightsDeepDivesAnd": "Insights, deep dives, and updates from the i18n benchmarking community.",
	"blogList.i18nBenchmark2026Results": "i18n Benchmark 2026 Results",
	"blogList.march152026": "March 15, 2026",
	"blogList.weTested12DifferentInternationalization": "We tested 12 different internationalization libraries across 10 pages. Here are the detailed results with interactive charts.",
	"blogList.howToReduceYourI18n": "How to Reduce Your i18n Bundle by 60%",
	"blogList.march82026": "March 8, 2026",
	"blogList.practicalStrategiesForOptimizingTranslation": "Practical strategies for optimizing translation file loading, tree-shaking unused locales, and leveraging build-time compilation.",
	"blogList.theStateOfInternationalizationIn": "The State of Internationalization in 2026",
	"blogList.february282026": "February 28, 2026",
	"blogList.anOverviewOfTheCurrent": "An overview of the current i18n ecosystem, comparing approaches from message catalogs to compiler-based solutions.",
	"blogList.migratingFromReactI18nextTo": "Migrating from react-i18next to Lingui",
	"blogList.february152026": "February 15, 2026",
	"blogList.aStepByStepGuide": "A step-by-step guide for migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
	"blogList.serverComponentsAndI18nWhat": "Server Components and i18n: What Changes?",
	"blogList.february12026": "February 1, 2026",
	"blogList.reactServerComponentsIntroduceNew": "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
	"blogList.benchmarkMethodologyHowWeTest": "Benchmark Methodology: How We Test",
	"blogList.january202026": "January 20, 2026",
	"blogList.aTransparentLookAtOur": "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
	"blogList.readMore": "Read More →"
}, kc = {
	"careersHeader.careers": "Careers",
	"careersHero.fromAnywhere": "from anywhere in the world",
	"careersBenefits.competitivePay": "Competitive pay",
	"careersBenefits.topOfMarket": "Top-of-market compensation",
	"careersBenefits.openSourceTime": "Open source time",
	"careersBenefits.twentyPercentTime": "20% time for OSS",
	"careersPositions.seniorFrontendEngineer": "Senior Frontend Engineer",
	"careersPositions.seniorFrontendEngineerDesc": "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
	"openPositions.openPositions": "Open Positions",
	"openPositions.remote": "Remote",
	"openPositions.fullTime": "Full-time",
	"openPositions.engineering": "Engineering",
	"openPositions.applyNow": "Apply Now"
}, Ac = {
	"contactHeader.contactUs": "Contact Us",
	"contactHeader.haveQuestionsOrWantTo": "Have questions or want to contribute? We'd love to hear from you.",
	"contactForm.name": "Name",
	"contactForm.email": "Email",
	"contactForm.subject": "Subject",
	"contactForm.message": "Message",
	"contactForm.sendMessage": "Send Message",
	"contactForm.wellGetBackTo": "We'll get back to you within 48 hours."
}, jc = {
	"faqHeader.frequentlyAskedQuestions": "Frequently Asked Questions",
	"faqHeader.everythingYouNeedTo": "Everything you need to know about the i18n Benchmark project.",
	"faqList.howAreTheBenchmarks": "How are the benchmarks run?",
	"faqList.allBenchmarksAreRun": "All benchmarks are run using Playwright on a consistent hardware setup (M2 MacBook Pro) with simulated 4G network conditions. Each test runs 50 iterations and we report median, P95, and P99 values.",
	"faqList.whatLibrariesAreCurrently": "What libraries are currently tested?",
	"faqList.weCurrentlyBenchmarkReactI18next": "We currently benchmark react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl, and Paraglide. We plan to add more based on community requests.",
	"faqList.canIContributeA": "Can I contribute a new library integration?",
	"faqList.absolutelyWeWelcomeCommunity": "Absolutely! We welcome community contributions. Fork the repository, add your library integration following our template, and submit a pull request. See the Contributing guide for details.",
	"faqList.howOftenAreResults": "How often are results updated?",
	"faqList.benchmarksRunAutomaticallyVia": "Benchmarks run automatically via CI on every dependency update and weekly on the main branch. Results are published to the dashboard within 24 hours.",
	"faqList.areTheResultsStatistically": "Are the results statistically significant?",
	"faqList.yesWeUseThe": "Yes. We use the Mann-Whitney U test with a significance level of 0.05 to compare distributions. We also report confidence intervals and effect sizes."
}, Mc = {
	"pricingTiers.starterTier": "Starter",
	"pricingTiers.starterPrice": "$0",
	"pricingTiers.forever": "forever",
	"pricingTiers.runsPerDay": "5 benchmark runs/day",
	"pricingTiers.libraries3": "3 libraries",
	"pricingTiers.communitySupport": "Community support",
	"pricingTiers.publicResults": "Public results",
	"pricingTiers.getStarted": "Get Started",
	"pricingTiers.proTier": "Pro",
	"pricingTiers.proPrice": "$29",
	"pricingTiers.perMonth": "/month",
	"pricingTiers.unlimitedRuns": "Unlimited runs",
	"pricingTiers.allLibraries": "All libraries",
	"pricingTiers.prioritySupport": "Priority support",
	"pricingTiers.privateResults": "Private results",
	"pricingTiers.ciIntegration": "CI integration",
	"pricingTiers.historicalData": "Historical data",
	"pricingTiers.enterpriseTier": "Enterprise",
	"pricingTiers.custom": "Custom",
	"pricingTiers.everythingInPro": "Everything in Pro",
	"pricingTiers.onPremiseOption": "On-premise option",
	"pricingTiers.ssoSaml": "SSO & SAML",
	"pricingTiers.dedicatedAccountManager": "Dedicated account manager",
	"pricingTiers.customSLAs": "Custom SLAs",
	"pricingTiers.auditLogs": "Audit logs",
	"pricingTiers.trainingSessions": "Training sessions",
	"pricingTiers.contactSales": "Contact Sales",
	"pricingHeader.pricing": "Pricing",
	"pricingHeader.transparentPricingForEvery": "Transparent pricing for every stage of your i18n journey."
}, Nc = {
	"productsHeader.products": "Products",
	"productsHeader.toolsAndServicesTo": "Tools and services to help you optimize your internationalization strategy.",
	"productsGrid.benchmarkDashboard": "Benchmark Dashboard",
	"productsGrid.interactiveChartsAndTables": "Interactive charts and tables comparing i18n libraries across bundle size, render time, and hydration cost.",
	"productsGrid.bundleAnalyzer": "Bundle Analyzer",
	"productsGrid.uploadYourBuildOutput": "Upload your build output and get a detailed breakdown of how much of your bundle is i18n overhead.",
	"productsGrid.migrationAssistant": "Migration Assistant",
	"productsGrid.automatedCodemodsAndGuides": "Automated codemods and guides for migrating between i18n libraries with minimal disruption.",
	"productsGrid.performanceMonitor": "Performance Monitor",
	"productsGrid.continuousPerformanceTrackingFor": "Continuous performance tracking for your i18n implementation. Get alerts when translation loading degrades.",
	"productsGrid.learnMore": "Learn More"
}, Pc = {
	"settingsHeader.settings": "Settings",
	"settingsHeader.manageYourAccountPreferences": "Manage your account preferences and configuration.",
	"profileSection.profile": "Profile",
	"profileSection.displayName": "Display Name",
	"profileSection.email": "Email",
	"preferencesSection.preferences": "Preferences",
	"preferencesSection.emailNotifications": "Email Notifications",
	"preferencesSection.receiveWeeklyBenchmarkReports": "Receive weekly benchmark reports",
	"preferencesSection.darkMode": "Dark Mode",
	"preferencesSection.useDarkColorScheme": "Use dark color scheme",
	"preferencesSection.defaultLanguage": "Default Language",
	"apiAccessSection.apiAccess": "API Access",
	"apiAccessSection.apiKey": "API Key",
	"apiAccessSection.useThisKeyTo": "Use this key to access the benchmarking API programmatically.",
	"apiAccessSection.copy": "Copy",
	"settingsFooter.cancel": "Cancel",
	"settingsFooter.saveChanges": "Save Changes"
}, Fc = {
	"teamHeader.ourTeam": "Our Team",
	"teamHeader.meetThePeopleBehindI18n": "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.",
	"teamGrid.sarahChen": "Sarah Chen",
	"teamGrid.founderLeadEngineer": "Founder & Lead Engineer",
	"teamGrid.formerGoogleEngineerWith10": "Former Google engineer with 10 years of experience building internationalization systems at scale.",
	"teamGrid.marcusWeber": "Marcus Weber",
	"teamGrid.performanceEngineer": "Performance Engineer",
	"teamGrid.specializesInJavascriptPerformanceOptimization": "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.",
	"teamGrid.aishaPatel": "Aisha Patel",
	"teamGrid.developerAdvocate": "Developer Advocate",
	"teamGrid.passionateAboutDeveloperExperienceAnd": "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.",
	"teamGrid.tomasRodriguez": "Tomás Rodríguez",
	"teamGrid.fullStackDeveloper": "Full-Stack Developer",
	"teamGrid.maintainsTheBenchmarkingInfrastructureAnd": "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.",
	"teamGrid.yukiTanaka": "Yuki Tanaka",
	"teamGrid.dataAnalyst": "Data Analyst",
	"teamGrid.ensuresStatisticalRigorInAll": "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.",
	"teamGrid.elenaKowalski": "Elena Kowalski",
	"teamGrid.communityManager": "Community Manager",
	"teamGrid.managesCommunityContributionsPartnershipsAnd": "Manages community contributions, partnerships, and events. Background in open source governance."
}, Ic = {
	de: {
		route: l,
		header: u,
		footer: d,
		themeToggle: f,
		hero: p,
		whyItMatters: m,
		understandingImpact: h,
		resultsTable: g,
		aboutHeader: _,
		aboutGrid: v,
		whatWeMeasure: y,
		blogHeader: b,
		blogList: x,
		careersHeader: S,
		careersBenefits: ee,
		openPositions: te,
		contactHeader: C,
		contactForm: w,
		faqHeader: T,
		faqList: ne,
		pricingHeader: re,
		pricingTiers: ie,
		productsHeader: ae,
		productsGrid: oe,
		settingsHeader: se,
		profileSection: ce,
		preferencesSection: le,
		apiAccessSection: ue,
		settingsFooter: de,
		teamHeader: fe,
		teamGrid: pe,
		common: me,
		...me,
		home: he,
		about: ge,
		blog: _e,
		careers: ve,
		contact: ye,
		faq: be,
		pricing: xe,
		products: Se,
		settings: Ce,
		team: we
	},
	en: {
		route: Js,
		header: Ys,
		footer: Xs,
		themeToggle: Zs,
		hero: Qs,
		whyItMatters: $s,
		understandingImpact: ec,
		resultsTable: tc,
		aboutHeader: nc,
		aboutGrid: rc,
		whatWeMeasure: ic,
		blogHeader: ac,
		blogList: oc,
		careersHeader: sc,
		careersBenefits: cc,
		openPositions: lc,
		contactHeader: uc,
		contactForm: dc,
		faqHeader: fc,
		faqList: pc,
		pricingHeader: mc,
		pricingTiers: hc,
		productsHeader: gc,
		productsGrid: _c,
		settingsHeader: vc,
		profileSection: yc,
		preferencesSection: bc,
		apiAccessSection: xc,
		settingsFooter: Sc,
		teamHeader: Cc,
		teamGrid: wc,
		common: Tc,
		...Tc,
		home: Ec,
		about: Dc,
		blog: Oc,
		careers: kc,
		contact: Ac,
		faq: jc,
		pricing: Mc,
		products: Nc,
		settings: Pc,
		team: Fc
	},
	es: {
		route: Te,
		header: Ee,
		footer: De,
		themeToggle: Oe,
		hero: ke,
		whyItMatters: Ae,
		understandingImpact: je,
		resultsTable: Me,
		aboutHeader: Ne,
		aboutGrid: Pe,
		whatWeMeasure: Fe,
		blogHeader: Ie,
		blogList: Le,
		careersHeader: Re,
		careersBenefits: ze,
		openPositions: Be,
		contactHeader: Ve,
		contactForm: He,
		faqHeader: Ue,
		faqList: We,
		pricingHeader: Ge,
		pricingTiers: Ke,
		productsHeader: qe,
		productsGrid: Je,
		settingsHeader: Ye,
		profileSection: Xe,
		preferencesSection: Ze,
		apiAccessSection: Qe,
		settingsFooter: $e,
		teamHeader: et,
		teamGrid: tt,
		common: nt,
		...nt,
		home: rt,
		about: it,
		blog: at,
		careers: ot,
		contact: st,
		faq: ct,
		pricing: lt,
		products: ut,
		settings: dt,
		team: ft
	},
	fr: {
		route: pt,
		header: mt,
		footer: ht,
		themeToggle: gt,
		hero: _t,
		whyItMatters: vt,
		understandingImpact: yt,
		resultsTable: bt,
		aboutHeader: xt,
		aboutGrid: St,
		whatWeMeasure: Ct,
		blogHeader: wt,
		blogList: Tt,
		careersHeader: Et,
		careersBenefits: Dt,
		openPositions: Ot,
		contactHeader: kt,
		contactForm: At,
		faqHeader: jt,
		faqList: Mt,
		pricingHeader: Nt,
		pricingTiers: Pt,
		productsHeader: Ft,
		productsGrid: It,
		settingsHeader: Lt,
		profileSection: Rt,
		preferencesSection: zt,
		apiAccessSection: Bt,
		settingsFooter: Vt,
		teamHeader: Ht,
		teamGrid: Ut,
		common: Wt,
		...Wt,
		home: Gt,
		about: Kt,
		blog: qt,
		careers: Jt,
		contact: Yt,
		faq: Xt,
		pricing: Zt,
		products: Qt,
		settings: $t,
		team: en
	},
	it: {
		route: tn,
		header: nn,
		footer: rn,
		themeToggle: an,
		hero: on,
		whyItMatters: sn,
		understandingImpact: cn,
		resultsTable: ln,
		aboutHeader: un,
		aboutGrid: dn,
		whatWeMeasure: fn,
		blogHeader: pn,
		blogList: mn,
		careersHeader: hn,
		careersBenefits: gn,
		openPositions: _n,
		contactHeader: vn,
		contactForm: yn,
		faqHeader: bn,
		faqList: xn,
		pricingHeader: Sn,
		pricingTiers: Cn,
		productsHeader: wn,
		productsGrid: Tn,
		settingsHeader: En,
		profileSection: Dn,
		preferencesSection: On,
		apiAccessSection: kn,
		settingsFooter: An,
		teamHeader: jn,
		teamGrid: Mn,
		common: Nn,
		...Nn,
		home: Pn,
		about: Fn,
		blog: In,
		careers: Ln,
		contact: Rn,
		faq: zn,
		pricing: Bn,
		products: Vn,
		settings: Hn,
		team: Un
	},
	ja: {
		route: Wn,
		header: Gn,
		footer: Kn,
		themeToggle: qn,
		hero: Jn,
		whyItMatters: Yn,
		understandingImpact: Xn,
		resultsTable: Zn,
		aboutHeader: Qn,
		aboutGrid: $n,
		whatWeMeasure: er,
		blogHeader: tr,
		blogList: nr,
		careersHeader: rr,
		careersBenefits: ir,
		openPositions: ar,
		contactHeader: or,
		contactForm: sr,
		faqHeader: cr,
		faqList: lr,
		pricingHeader: ur,
		pricingTiers: dr,
		productsHeader: fr,
		productsGrid: pr,
		settingsHeader: mr,
		profileSection: hr,
		preferencesSection: gr,
		apiAccessSection: _r,
		settingsFooter: vr,
		teamHeader: yr,
		teamGrid: br,
		common: xr,
		...xr,
		home: Sr,
		about: Cr,
		blog: wr,
		careers: Tr,
		contact: Er,
		faq: Dr,
		pricing: Or,
		products: kr,
		settings: Ar,
		team: jr
	},
	ko: {
		route: Mr,
		header: Nr,
		footer: Pr,
		themeToggle: Fr,
		hero: Ir,
		whyItMatters: Lr,
		understandingImpact: Rr,
		resultsTable: zr,
		aboutHeader: Br,
		aboutGrid: Vr,
		whatWeMeasure: Hr,
		blogHeader: Ur,
		blogList: Wr,
		careersHeader: Gr,
		careersBenefits: Kr,
		openPositions: qr,
		contactHeader: Jr,
		contactForm: Yr,
		faqHeader: Xr,
		faqList: Zr,
		pricingHeader: Qr,
		pricingTiers: $r,
		productsHeader: ei,
		productsGrid: ti,
		settingsHeader: ni,
		profileSection: ri,
		preferencesSection: ii,
		apiAccessSection: ai,
		settingsFooter: oi,
		teamHeader: si,
		teamGrid: ci,
		common: li,
		...li,
		home: ui,
		about: di,
		blog: fi,
		careers: pi,
		contact: mi,
		faq: hi,
		pricing: gi,
		products: _i,
		settings: vi,
		team: yi
	},
	pt: {
		route: bi,
		header: xi,
		footer: Si,
		themeToggle: Ci,
		hero: wi,
		whyItMatters: Ti,
		understandingImpact: Ei,
		resultsTable: Di,
		aboutHeader: Oi,
		aboutGrid: ki,
		whatWeMeasure: Ai,
		blogHeader: ji,
		blogList: Mi,
		careersHeader: Ni,
		careersBenefits: Pi,
		openPositions: Fi,
		contactHeader: Ii,
		contactForm: Li,
		faqHeader: Ri,
		faqList: zi,
		pricingHeader: Bi,
		pricingTiers: Vi,
		productsHeader: Hi,
		productsGrid: Ui,
		settingsHeader: Wi,
		profileSection: Gi,
		preferencesSection: Ki,
		apiAccessSection: qi,
		settingsFooter: Ji,
		teamHeader: Yi,
		teamGrid: Xi,
		common: Zi,
		...Zi,
		home: Qi,
		about: $i,
		blog: ea,
		careers: ta,
		contact: na,
		faq: ra,
		pricing: ia,
		products: aa,
		settings: oa,
		team: sa
	},
	ru: {
		route: ca,
		header: la,
		footer: ua,
		themeToggle: da,
		hero: fa,
		whyItMatters: pa,
		understandingImpact: ma,
		resultsTable: ha,
		aboutHeader: ga,
		aboutGrid: _a,
		whatWeMeasure: va,
		blogHeader: ya,
		blogList: ba,
		careersHeader: xa,
		careersBenefits: Sa,
		openPositions: Ca,
		contactHeader: wa,
		contactForm: Ta,
		faqHeader: Ea,
		faqList: Da,
		pricingHeader: Oa,
		pricingTiers: ka,
		productsHeader: Aa,
		productsGrid: ja,
		settingsHeader: Ma,
		profileSection: Na,
		preferencesSection: Pa,
		apiAccessSection: Fa,
		settingsFooter: Ia,
		teamHeader: La,
		teamGrid: Ra,
		common: za,
		...za,
		home: Ba,
		about: Va,
		blog: Ha,
		careers: Ua,
		contact: Wa,
		faq: Ga,
		pricing: Ka,
		products: qa,
		settings: Ja,
		team: Ya
	},
	zh: {
		route: Xa,
		header: Za,
		footer: Qa,
		themeToggle: $a,
		hero: eo,
		whyItMatters: to,
		understandingImpact: no,
		resultsTable: ro,
		aboutHeader: io,
		aboutGrid: ao,
		whatWeMeasure: oo,
		blogHeader: so,
		blogList: co,
		careersHeader: lo,
		careersBenefits: uo,
		openPositions: fo,
		contactHeader: po,
		contactForm: mo,
		faqHeader: ho,
		faqList: go,
		pricingHeader: _o,
		pricingTiers: vo,
		productsHeader: yo,
		productsGrid: bo,
		settingsHeader: xo,
		profileSection: So,
		preferencesSection: Co,
		apiAccessSection: wo,
		settingsFooter: To,
		teamHeader: Eo,
		teamGrid: Do,
		common: Oo,
		...Oo,
		home: ko,
		about: Ao,
		blog: jo,
		careers: Mo,
		contact: No,
		faq: Po,
		pricing: Fo,
		products: Io,
		settings: Lo,
		team: Ro
	}
};
function Lc(e) {
	return Ic[e] || Ic.en;
}
var Rc = [
	"en",
	"fr",
	"es",
	"de",
	"it",
	"pt",
	"zh",
	"ja",
	"ko",
	"ru"
];
function zc(e) {
	return Object.assign(Object.assign({}, e), { t(...t) {
		let n = fs(...t);
		return e.t(Object.assign(Object.assign({}, n), { noWrap: !0 }));
	} });
}
function Bc(e, t, n, r = !0) {
	let [a] = c(() => zc(e)), [s, l] = c(r);
	return i(() => {
		l(!1);
	}, []), o(() => {
		r && (e.setEmitterActive(!1), e.addStaticData(n), e.changeLanguage(t), e.setEmitterActive(!0));
	}, [
		t,
		n,
		e
	]), c(() => {
		if (!e.isLoaded() && r) {
			let n = e.getRequiredDescriptors(t), r = e.getAllRecords(), i = n.map(({ namespace: e, language: t }) => e ? `${e}:${t}` : t).filter((e) => !r.find((t) => t?.cacheKey === e));
			console.warn(`Tolgee: Missing records in "staticData" for proper SSR functionality: ${i.map((e) => `"${e}"`).join(", ")}`);
		}
	}), s ? a : e;
}
var Vc = { useSuspense: !1 }, Hc, Uc = () => (Hc ||= e.createContext(void 0), Hc), Z = void 0, Wc = ({ tolgee: n, options: r, children: a, fallback: o, ssr: s }) => {
	i(() => {
		Z?.run !== n.run && (Z && Z.stop(), Z = n, n.run().catch((e) => {
			console.error(e);
		}).finally(() => {
			p(!1);
		}));
	}, [n]);
	let l = n, { language: u, staticData: d } = typeof s == "object" ? s : {};
	l = Bc(n, u, d, !!s);
	let [f, p] = c(!l.isLoaded()), m = Object.assign(Object.assign({}, Vc), r), h = Uc();
	return m.useSuspense ? e.createElement(h.Provider, { value: {
		tolgee: l,
		options: m
	} }, f ? o : e.createElement(t, { fallback: o || null }, a)) : e.createElement(h.Provider, { value: {
		tolgee: l,
		options: m
	} }, f ? o : a);
}, Gc;
function Kc() {
	return Gc;
}
var qc = () => {
	let e = r(Uc()) || Kc();
	if (!e) throw Error("Couldn't find tolgee instance, did you forgot to use `TolgeeProvider`?");
	return e;
}, Jc = () => {
	let [e, t] = c(0);
	return {
		instance: e,
		rerender: n(() => {
			t((e) => e + 1);
		}, [t])
	};
}, Yc = (e, t) => {
	let { tolgee: r, options: a } = qc(), o = Jo(e), c = M(o).join(":"), l = Object.assign(Object.assign({}, a), t), { rerender: u, instance: d } = Jc(), f = s([]);
	f.current = [];
	let p = r.isLoaded(o);
	i(() => {
		let e = r.on("update", u);
		return () => {
			e.unsubscribe();
		};
	}, [c, r]), i(() => (r.addActiveNs(o), () => r.removeActiveNs(o)), [c, r]);
	let m = n((e) => {
		let t = e.ns ?? o?.[0];
		return r.t(Object.assign(Object.assign({}, e), { ns: t }));
	}, [r, d]);
	if (l.useSuspense && !p) throw r.addActiveNs(o, !0);
	return {
		t: m,
		isLoading: !p
	};
};
function Xc(e) {
	return Array.isArray(e) && e.length === 1 ? e[0] : e;
}
var Zc = (t) => {
	if (!t) return;
	let n = {};
	return Object.entries(t || {}).forEach(([t, r]) => {
		if (typeof r == "function") n[t] = (e) => r(Q(e));
		else if (e.isValidElement(r)) {
			let i = r;
			n[t] = (t) => i.props.children === void 0 && t?.length ? e.cloneElement(i, {}, Q(t)) : e.cloneElement(i);
		} else n[t] = r;
	}), n;
};
function Qc(e) {
	return typeof e == "function" ? e() : e;
}
var Q = (t) => {
	let n = Xc(t);
	return Array.isArray(n) ? n.map((t, n) => e.createElement(e.Fragment, { key: n }, Qc(t))) : Qc(n);
}, $c = (t) => {
	let n = t.keyName || t.children;
	n === void 0 && console.error("T component: keyName not defined");
	let r = t.defaultValue || (t.keyName ? t.children : void 0), i = Q(t.t({
		key: n,
		params: Zc(t.params),
		defaultValue: r,
		noWrap: t.noWrap,
		ns: t.ns,
		language: t.language
	}));
	return e.createElement(e.Fragment, null, i);
}, el = (t) => {
	let { t: n } = Yc();
	return e.createElement($c, Object.assign({ t: n }, t));
}, tl = Rc.reduce((e, t) => (e[t] = Lc(t), e), {}), nl = qs().use(Es()).init({
	language: "en",
	apiUrl: void 0,
	apiKey: void 0,
	staticData: tl
});
function $(e) {
	return E(el, { ...e });
}
function rl() {
	let e = a();
	return D("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [E("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: E($, {
				keyName: "apiAccessSection.apiAccess",
				defaultValue: "API Access"
			})
		}), D("div", { children: [
			E("label", {
				htmlFor: e,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: E($, {
					keyName: "apiAccessSection.apiKey",
					defaultValue: "API Key"
				})
			}),
			D("div", {
				className: "flex gap-2",
				children: [E("input", {
					id: e,
					readOnly: !0,
					defaultValue: "sk_bench_xxxxxxxxxxxxxxxxxxxx",
					className: "flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground"
				}), E("button", {
					type: "button",
					className: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors",
					children: E($, {
						keyName: "common.copy",
						defaultValue: "Copy"
					})
				})]
			}),
			E("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: E($, {
					keyName: "apiAccessSection.useThisKeyTo",
					defaultValue: "Use this key to access the benchmarking API programmatically."
				})
			})
		] })]
	});
}
var il = Lc("en");
function al({ children: e }) {
	return E(Wc, {
		tolgee: nl,
		options: { useSuspense: !1 },
		ssr: {
			language: "en",
			staticData: { en: il }
		},
		children: e
	});
}
function ol() {
	return E(al, { children: E(rl, {}) });
}
export { ol as default };
