import enAbout from "../messages/en/about.json";
import enBlog from "../messages/en/blog.json";
import enCareers from "../messages/en/careers.json";
import enContact from "../messages/en/contact.json";
import enFaq from "../messages/en/faq.json";
import enHome from "../messages/en/home.json";
import enPricing from "../messages/en/pricing.json";
import enProducts from "../messages/en/products.json";
import enRoute from "../messages/en/route.json";
import enSettings from "../messages/en/settings.json";
import enShared from "../messages/en/shared.json";
import enTeam from "../messages/en/team.json";
import { nestify, mergeAll } from "../i18n/scopedMessages";

export default mergeAll([
  nestify(enAbout),
  nestify(enBlog),
  nestify(enCareers),
  nestify(enContact),
  nestify(enFaq),
  nestify(enHome),
  nestify(enPricing),
  nestify(enProducts),
  nestify(enRoute),
  nestify(enSettings),
  nestify(enShared),
  nestify(enTeam),
]);
