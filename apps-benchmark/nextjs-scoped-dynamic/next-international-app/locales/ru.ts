import ruAbout from "../messages/ru/about.json";
import ruBlog from "../messages/ru/blog.json";
import ruCareers from "../messages/ru/careers.json";
import ruContact from "../messages/ru/contact.json";
import ruFaq from "../messages/ru/faq.json";
import ruHome from "../messages/ru/home.json";
import ruPricing from "../messages/ru/pricing.json";
import ruProducts from "../messages/ru/products.json";
import ruRoute from "../messages/ru/route.json";
import ruSettings from "../messages/ru/settings.json";
import ruShared from "../messages/ru/shared.json";
import ruTeam from "../messages/ru/team.json";
import { nestify, mergeAll } from "../i18n/scopedMessages";

export default mergeAll([
  nestify(ruAbout),
  nestify(ruBlog),
  nestify(ruCareers),
  nestify(ruContact),
  nestify(ruFaq),
  nestify(ruHome),
  nestify(ruPricing),
  nestify(ruProducts),
  nestify(ruRoute),
  nestify(ruSettings),
  nestify(ruShared),
  nestify(ruTeam),
]);
