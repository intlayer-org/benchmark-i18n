import { expect, test } from "@playwright/test";
import { registerStructureConsistencyTest } from "test-utils/structure-consistency-test";

registerStructureConsistencyTest(test, expect, "vite-svelte-static");
