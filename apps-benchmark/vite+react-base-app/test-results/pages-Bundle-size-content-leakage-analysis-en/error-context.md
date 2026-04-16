# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pages.test.ts >> Bundle size & content leakage analysis
- Location: ../../test-utils/src/pages-test.ts:537:3

# Error details

```
Error: browserType.launch: Executable doesn't exist at /var/folders/kq/wp486_dx4fq4dnglg5jss6qc0000gn/T/cursor-sandbox-cache/1173f6c09d4a3700527bf47623a65cbe/playwright/chromium_headless_shell-1217/chrome-headless-shell-mac-arm64/chrome-headless-shell
╔════════════════════════════════════════════════════════════╗
║ Looks like Playwright was just installed or updated.       ║
║ Please run the following command to download new browsers: ║
║                                                            ║
║     npx playwright install                                 ║
║                                                            ║
║ <3 Playwright Team                                         ║
╚════════════════════════════════════════════════════════════╝
```