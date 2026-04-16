import ptAbout from "../messages/pt/about.json";
import ptBlog from "../messages/pt/blog.json";
import ptCareers from "../messages/pt/careers.json";
import ptContact from "../messages/pt/contact.json";
import ptFaq from "../messages/pt/faq.json";
import ptHome from "../messages/pt/home.json";
import ptPricing from "../messages/pt/pricing.json";
import ptProducts from "../messages/pt/products.json";
import ptRoute from "../messages/pt/route.json";
import ptSettings from "../messages/pt/settings.json";
import ptShared from "../messages/pt/shared.json";
import ptTeam from "../messages/pt/team.json";
import { nestify, mergeAll } from "../i18n/scopedMessages";

export default mergeAll([
  nestify(ptAbout),
  nestify(ptBlog),
  nestify(ptCareers),
  nestify(ptContact),
  nestify(ptFaq),
  nestify(ptHome),
  nestify(ptPricing),
  nestify(ptProducts),
  nestify(ptRoute),
  nestify(ptSettings),
  nestify(ptShared),
  nestify(ptTeam),
]);
