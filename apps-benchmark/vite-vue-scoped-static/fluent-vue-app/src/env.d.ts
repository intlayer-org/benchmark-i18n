/// <reference types="vite/client" />

declare module "*.ftl?raw" {
  const content: string;
  export default content;
}
