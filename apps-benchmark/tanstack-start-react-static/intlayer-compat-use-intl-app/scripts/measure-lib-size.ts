import path from "node:path";
import { measureLibSize } from "test-utils/measure-components";
import pkg from "../package.json" with { type: "json" };
import { useIntlCompatAlias } from "./compat-alias-plugin";

measureLibSize({
  appName: pkg.name,
  benchmarkCategory: "tanstack-start-react-static",
  additionalPlugins: [useIntlCompatAlias()],
  wrapperTemplate: (componentPath) => `
    import React from 'react';
    import Component from '${componentPath}';
    import Wrapper from '${path.resolve("./scripts/Wrapper.tsx").replace(/\\/g, "/")}';

    export default function Wrapped() {
      return (
        <Wrapper>
          <Component />
        </Wrapper>
      );
    }
  `,
}).catch(console.error);
