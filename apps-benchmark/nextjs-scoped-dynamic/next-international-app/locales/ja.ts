import jaAbout from "../messages/ja/about.json";
import jaBlog from "../messages/ja/blog.json";
import jaCareers from "../messages/ja/careers.json";
import jaContact from "../messages/ja/contact.json";
import jaFaq from "../messages/ja/faq.json";
import jaHome from "../messages/ja/home.json";
import jaPricing from "../messages/ja/pricing.json";
import jaProducts from "../messages/ja/products.json";
import jaRoute from "../messages/ja/route.json";
import jaSettings from "../messages/ja/settings.json";
import jaShared from "../messages/ja/shared.json";
import jaTeam from "../messages/ja/team.json";
import { nestify, mergeAll } from "../i18n/scopedMessages";

export default mergeAll([
  nestify(jaAbout),
  nestify(jaBlog),
  nestify(jaCareers),
  nestify(jaContact),
  nestify(jaFaq),
  nestify(jaHome),
  nestify(jaPricing),
  nestify(jaProducts),
  nestify(jaRoute),
  nestify(jaSettings),
  nestify(jaShared),
  nestify(jaTeam),
]);
