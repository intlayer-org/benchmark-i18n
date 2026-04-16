import esAbout from "../messages/es/about.json";
import esBlog from "../messages/es/blog.json";
import esCareers from "../messages/es/careers.json";
import esContact from "../messages/es/contact.json";
import esFaq from "../messages/es/faq.json";
import esHome from "../messages/es/home.json";
import esPricing from "../messages/es/pricing.json";
import esProducts from "../messages/es/products.json";
import esRoute from "../messages/es/route.json";
import esSettings from "../messages/es/settings.json";
import esShared from "../messages/es/shared.json";
import esTeam from "../messages/es/team.json";
import { nestify, mergeAll } from "../i18n/scopedMessages";

export default mergeAll([
  nestify(esAbout),
  nestify(esBlog),
  nestify(esCareers),
  nestify(esContact),
  nestify(esFaq),
  nestify(esHome),
  nestify(esPricing),
  nestify(esProducts),
  nestify(esRoute),
  nestify(esSettings),
  nestify(esShared),
  nestify(esTeam),
]);
