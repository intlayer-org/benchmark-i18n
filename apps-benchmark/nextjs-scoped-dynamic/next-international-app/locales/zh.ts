import zhAbout from "../messages/zh/about.json";
import zhBlog from "../messages/zh/blog.json";
import zhCareers from "../messages/zh/careers.json";
import zhContact from "../messages/zh/contact.json";
import zhFaq from "../messages/zh/faq.json";
import zhHome from "../messages/zh/home.json";
import zhPricing from "../messages/zh/pricing.json";
import zhProducts from "../messages/zh/products.json";
import zhRoute from "../messages/zh/route.json";
import zhSettings from "../messages/zh/settings.json";
import zhShared from "../messages/zh/shared.json";
import zhTeam from "../messages/zh/team.json";
import { nestify, mergeAll } from "../i18n/scopedMessages";

export default mergeAll([
  nestify(zhAbout),
  nestify(zhBlog),
  nestify(zhCareers),
  nestify(zhContact),
  nestify(zhFaq),
  nestify(zhHome),
  nestify(zhPricing),
  nestify(zhProducts),
  nestify(zhRoute),
  nestify(zhSettings),
  nestify(zhShared),
  nestify(zhTeam),
]);
