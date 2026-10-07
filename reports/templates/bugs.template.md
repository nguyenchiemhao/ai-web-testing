# Bug Report

- **Project**: {{PROJECT_NAME}}
- **Run ID**: {{RUN_ID}}
- **Environment**: {{ENV}}
- **Build/Commit**: {{BUILD_OR_SHA}}
- **Reported by**: AI Web Testing
- **Date**: {{DATE}}

---

## {{BUG_ID}} - {{BUG_TITLE}}
- **Severity**: Critical | Major | Minor
- **Priority**: P0 | P1 | P2
- **Status**: Open
- **Module**: {{MODULE}}
- **Test Case ID**: {{TEST_CASE_ID}}
- **Mutation Level**: READ_ONLY | CREATE | UPDATE | DELETE | DESTRUCTIVE

### Summary
{{SHORT_SUMMARY}}

### Preconditions
- {{PRECONDITION_1}}
- {{PRECONDITION_2}}

### Steps to Reproduce
1. {{STEP_1}}
2. {{STEP_2}}
3. {{STEP_3}}

### Expected Result
{{EXPECTED_RESULT}}

### Actual Result
{{ACTUAL_RESULT}}

### Frequency
Always | Intermittent (x/y)

### Impact / Risk
{{IMPACT}}

### Evidence
- Screenshot(s): `evidence/{{RUN_ID}}/{{TEST_CASE_ID}}/screenshots/...`
- Video: `evidence/{{RUN_ID}}/{{TEST_CASE_ID}}/video/...`
- Trace: `evidence/{{RUN_ID}}/{{TEST_CASE_ID}}/trace/...`
- Network/Console: `evidence/{{RUN_ID}}/{{TEST_CASE_ID}}/...`

### Suspected Root Cause
{{ROOT_CAUSE_HINT}}

### Suggested Fix
{{SUGGESTED_FIX}}

### Retest Notes
{{RETEST_PLAN}}