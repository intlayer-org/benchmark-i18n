# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: reactivity.test.ts >> Measure locale switch reactivity
- Location: ../../../test-utils/src/reactivity-test.ts:317:3

# Error details

```
Error: page.evaluate: Error: E2E timeout: html[lang] did not change to 'fr'
    at eval (eval at evaluate (:302:30), <anonymous>:30:12)
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - strong [ref=e4]: Something went wrong!
  - button "Show Error" [ref=e5]
```