# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: reactivity.test.ts >> Measure locale switch reactivity
- Location: ../../../test-utils/src/reactivity-test.ts:394:3

# Error details

```
Error: page.evaluate: Error: LocaleSwitcher <select> not found
    at eval (eval at evaluate (:302:30), <anonymous>:23:12)
    at new Promise (<anonymous>)
    at eval (eval at evaluate (:302:30), <anonymous>:3:7)
    at UtilityScript.evaluate (<anonymous>:304:16)
    at UtilityScript.<anonymous> (<anonymous>:1:44)
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - strong [ref=e4]: Something went wrong!
  - button "Show Error" [ref=e5]
```