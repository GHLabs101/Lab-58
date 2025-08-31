# Lab 58 – Cache Demo (Node)

Minimal Node project to demonstrate dependency caching in GitHub Actions.

## What’s inside
- **index.js**: tiny app using lodash + dayjs
- **scripts/build.js**: writes `dist/info.txt` with versions & timestamp
- **scripts/smoke-test.js**: verifies the build output exists
- **.github/workflows/cache-demo.yml**: workflow with two jobs
  - **setup-node cache** (recommended)
  - **manual actions/cache** (advanced)

## Prerequisites
- Node 18+ (Node 20 recommended)
- npm

## First-time setup (to generate lockfile for CI)
1. Install deps locally to create `package-lock.json`:
   ```bash
   npm install
