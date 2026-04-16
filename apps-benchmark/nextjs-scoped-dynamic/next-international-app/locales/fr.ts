import frAbout from "../messages/fr/about.json";
import frBlog from "../messages/fr/blog.json";
import frCareers from "../messages/fr/careers.json";
import frContact from "../messages/fr/contact.json";
import frFaq from "../messages/fr/faq.json";
import frHome from "../messages/fr/home.json";
import frPricing from "../messages/fr/pricing.json";
import frProducts from "../messages/fr/products.json";
import frRoute from "../messages/fr/route.json";
import frSettings from "../messages/fr/settings.json";
import frShared from "../messages/fr/shared.json";
import frTeam from "../messages/fr/team.json";
import { nestify, mergeAll } from "../i18n/scopedMessages";

export default mergeAll([
  nestify(frAbout),
  nestify(frBlog),
  nestify(frCareers),
  nestify(frContact),
  nestify(frFaq),
  nestify(frHome),
  nestify(frPricing),
  nestify(frProducts),
  nestify(frRoute),
  nestify(frSettings),
  nestify(frShared),
  nestify(frTeam),
]);
