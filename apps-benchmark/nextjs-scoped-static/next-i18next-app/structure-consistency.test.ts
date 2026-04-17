import { test, expect } from "@playwright/test";
import { registerStructureConsistencyTest } from "test-utils/structure-consistency-test";

registerStructureConsistencyTest(test, expect, 'nextjs-static');
