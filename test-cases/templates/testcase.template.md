# Test Case: {{TEST_CASE_ID}} - {{TITLE}}

- **Group**: Smoke | Functional | Regression
- **Priority**: P0 | P1 | P2
- **Severity if fail**: Critical | Major | Minor
- **Mutation Level**: READ_ONLY | CREATE | UPDATE | DELETE | DESTRUCTIVE
- **Environment**: local | qa | uat | staging | prod
- **Preconditions**:
  - [ ] User is authenticated as {{ROLE}}
  - [ ] Required data exists: {{DATA_REF}}
- **Test Data**:
  - Account: {{ACCOUNT_ID}}
  - Input: {{INPUT_DATA}}
  - Attachments: {{FILE_PATHS}}

## Steps
| Step | Action | Expected |
|---|---|---|
| 1 | {{ACTION_1}} | {{EXPECTED_1}} |
| 2 | {{ACTION_2}} | {{EXPECTED_2}} |
| 3 | {{ACTION_3}} | {{EXPECTED_3}} |

## Assertions
- [ ] UI assertion: {{UI_ASSERT}}
- [ ] API/network assertion: {{API_ASSERT}}
- [ ] DB/business rule assertion (if allowed): {{RULE_ASSERT}}

## Evidence
- Screenshot: `evidence/{{RUN_ID}}/{{TEST_CASE_ID}}/screenshots/`
- Video: `evidence/{{RUN_ID}}/{{TEST_CASE_ID}}/video/`
- Trace: `evidence/{{RUN_ID}}/{{TEST_CASE_ID}}/trace/`
- Network log (CDP/HAR): `evidence/{{RUN_ID}}/{{TEST_CASE_ID}}/network/`
- Console log: `evidence/{{RUN_ID}}/{{TEST_CASE_ID}}/console/`

## Result
- **Status**: PASS | FAIL | BLOCKED | SKIPPED
- **Notes**: {{NOTES}}