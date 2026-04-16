import itAbout from "../messages/it/about.json";
import itBlog from "../messages/it/blog.json";
import itCareers from "../messages/it/careers.json";
import itContact from "../messages/it/contact.json";
import itFaq from "../messages/it/faq.json";
import itHome from "../messages/it/home.json";
import itPricing from "../messages/it/pricing.json";
import itProducts from "../messages/it/products.json";
import itRoute from "../messages/it/route.json";
import itSettings from "../messages/it/settings.json";
import itShared from "../messages/it/shared.json";
import itTeam from "../messages/it/team.json";
import { nestify, mergeAll } from "../i18n/scopedMessages";

export default mergeAll([
  nestify(itAbout),
  nestify(itBlog),
  nestify(itCareers),
  nestify(itContact),
  nestify(itFaq),
  nestify(itHome),
  nestify(itPricing),
  nestify(itProducts),
  nestify(itRoute),
  nestify(itSettings),
  nestify(itShared),
  nestify(itTeam),
]);
