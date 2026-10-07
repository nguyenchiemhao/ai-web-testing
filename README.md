# AI Web Testing

Portable **web testing skill kit** for any AI coding tool (Copilot, Claude, Codex, etc.) using **Playwright + Chrome DevTools protocol**.

## Goals
- Analyze codebase & changes to define test scope.
- Generate test strategy (Smoke / Functional / Regression).
- Manage reusable test data.
- Execute tests like a QA.
- Generate concise professional reports (MD/HTML).
- Store evidence per test case.

## Quick Start
```bash
npm install
npx playwright install
npm run test:smoke
npm run report:md
```

## Environment Policy
- **local**: full permissions (create/update/delete allowed).
- **qa/uat/staging**: must confirm mutation permissions.
- **prod**: read-only only, mutation test cases are blocked.

See: `config/environments.yaml` and `docs/environment-questionnaire.md`.

## Commands
```bash
npm run test:smoke
npm run test:functional
npm run test:regression
npm run report:md
npm run report:html
```

## Evidence
Saved by run:
- `evidence/<run-id>/<test-case-id>/screenshots`
- `evidence/<run-id>/<test-case-id>/video`
- `evidence/<run-id>/<test-case-id>/trace`

## Report
Generated in:
- `reports/<run-id>/report.md`
- `reports/<run-id>/report.html`
- `reports/<run-id>/bugs.md`