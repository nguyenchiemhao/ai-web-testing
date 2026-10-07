# AI Web Testing - Skill Definition

## Inputs
- Requirement / PR / changed modules
- Environment (local/qa/uat/staging/prod)
- Test goal (smoke/functional/regression)

## Core Behaviors
1. Analyze project & code changes.
2. Clarify scope with environment-aware policy.
3. Generate strategy + test cases.
4. Prepare reusable test data.
5. Execute via Playwright/Chrome.
6. Capture evidence per test case.
7. Generate report (MD/HTML) + bug list + suggestions.

## Environment Rules
- local: full test permissions.
- non-local (qa/uat/staging): ask confirmation for mutation tests.
- prod: read-only only.