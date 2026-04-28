import { test, expect } from "@playwright/test";
import { registerStructureConsistencyTest } from "test-utils/structure-consistency-test";

process.env.STRUCTURE_REFERENCE_BASE_URL ??= "http://localhost:5184";

registerStructureConsistencyTest(test, expect, "tanstack-start-react-static");
