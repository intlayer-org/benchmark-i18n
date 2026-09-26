import { test, expect } from "@playwright/test";
import { registerContentConsistencyTest } from "test-utils/content-consistency-test";
import pkg from "./package.json" with { type: "json" };

registerContentConsistencyTest(test, expect, pkg.name);
