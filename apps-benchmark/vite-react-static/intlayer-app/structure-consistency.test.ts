import { test, expect } from "@playwright/test";
import { registerStructureConsistencyTest } from "test-utils/structure-consistency-test";

registerStructureConsistencyTest(test, expect, 'tanstack-start-react-static');
