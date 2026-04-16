import deAbout from "../messages/de/about.json";
import deBlog from "../messages/de/blog.json";
import deCareers from "../messages/de/careers.json";
import deContact from "../messages/de/contact.json";
import deFaq from "../messages/de/faq.json";
import deHome from "../messages/de/home.json";
import dePricing from "../messages/de/pricing.json";
import deProducts from "../messages/de/products.json";
import deRoute from "../messages/de/route.json";
import deSettings from "../messages/de/settings.json";
import deShared from "../messages/de/shared.json";
import deTeam from "../messages/de/team.json";
import { nestify, mergeAll } from "../i18n/scopedMessages";

export default mergeAll([
  nestify(deAbout),
  nestify(deBlog),
  nestify(deCareers),
  nestify(deContact),
  nestify(deFaq),
  nestify(deHome),
  nestify(dePricing),
  nestify(deProducts),
  nestify(deRoute),
  nestify(deSettings),
  nestify(deShared),
  nestify(deTeam),
]);
