# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: reactivity.test.ts >> Measure locale switch reactivity
- Location: ../../../test-utils/src/reactivity-test.ts:405:3

# Error details

```
Error: page.evaluate: Error: LocaleSwitcher <select> not found (expected header select)
    at eval (eval at evaluate (:311:30), <anonymous>:20:12)
    at new Promise (<anonymous>)
    at eval (eval at evaluate (:311:30), <anonymous>:4:7)
    at UtilityScript.evaluate (<anonymous>:313:16)
    at UtilityScript.<anonymous> (<anonymous>:1:44)
```

# Page snapshot

```yaml
- generic [ref=f1e3]:
  - strong [ref=f1e4]: Something went wrong!
  - button "Show Error" [ref=f1e5]
```