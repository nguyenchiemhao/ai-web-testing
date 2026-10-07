import fs from 'fs';
import path from 'path';

const runId = new Date().toISOString().replace(/[:.]/g, '-');
const outDir = path.join('reports', runId);
fs.mkdirSync(outDir, { recursive: true });

const formatArg = process.argv.find(a => a.startsWith('--format=')) || '--format=md';
const format = formatArg.split('=')[1];

const contentMd = `# Test Report

- Run ID: ${runId}
- Summary: Placeholder summary

| Test Case | Group | Status | Evidence |
|---|---|---|---|
| SMK-001 | Smoke | PASS | evidence/${runId}/SMK-001 |

## Bugs
No critical bugs.
`;

if (format === 'md') {
  fs.writeFileSync(path.join(outDir, 'report.md'), contentMd);
} else {
  const html = `<html><body><pre>${contentMd}</pre></body></html>`;
  fs.writeFileSync(path.join(outDir, 'report.html'), html);
}
console.log(`Report generated at ${outDir}`);