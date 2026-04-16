import koAbout from "../messages/ko/about.json";
import koBlog from "../messages/ko/blog.json";
import koCareers from "../messages/ko/careers.json";
import koContact from "../messages/ko/contact.json";
import koFaq from "../messages/ko/faq.json";
import koHome from "../messages/ko/home.json";
import koPricing from "../messages/ko/pricing.json";
import koProducts from "../messages/ko/products.json";
import koRoute from "../messages/ko/route.json";
import koSettings from "../messages/ko/settings.json";
import koShared from "../messages/ko/shared.json";
import koTeam from "../messages/ko/team.json";
import { nestify, mergeAll } from "../i18n/scopedMessages";

export default mergeAll([
  nestify(koAbout),
  nestify(koBlog),
  nestify(koCareers),
  nestify(koContact),
  nestify(koFaq),
  nestify(koHome),
  nestify(koPricing),
  nestify(koProducts),
  nestify(koRoute),
  nestify(koSettings),
  nestify(koShared),
  nestify(koTeam),
]);
