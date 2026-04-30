# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: reactivity.test.ts >> Measure locale switch reactivity
- Location: ../../../test-utils/src/reactivity-test.ts:316:3

# Error details

```
Error: page.evaluate: Error: LocaleSwitcher <select> not found (expected header select)
    at eval (eval at evaluate (:302:30), <anonymous>:20:12)
    at new Promise (<anonymous>)
    at eval (eval at evaluate (:302:30), <anonymous>:4:7)
    at UtilityScript.evaluate (<anonymous>:304:16)
    at UtilityScript.<anonymous> (<anonymous>:1:44)
```