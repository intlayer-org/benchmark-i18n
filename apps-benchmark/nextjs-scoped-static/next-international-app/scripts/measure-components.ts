import path from "node:path";
import { measureComponents } from "test-utils/measure-components";
import pkg from "../package.json" with { type: "json" };

measureComponents({
  appName: pkg.name,
  benchmarkCategory: "nextjs-scoped-static",
  componentDirectories: ["./src/components", "./components"],
  additionalExternalPackages: [
    "next",
    "next/link",
    "next/navigation",
    "next/image",
    "next/script",
  ],
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
