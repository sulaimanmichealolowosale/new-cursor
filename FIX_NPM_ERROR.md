# ⚠️ FIX: npm Install Error

## Problem

```
npm error path /home/mikey/package.json
npm ERR! enoent Could not read package.json
```

## Cause

You ran `npm install` in `/home/mikey` instead of in the project directory.

---

## Solution

### Run These Commands in Terminal

```bash
# 1. Navigate to the project directory
cd "/home/mikey/Desktop/new cursor"

# 2. Verify you're in the right place
pwd
# Should output: /home/mikey/Desktop/new cursor

# 3. Run npm install
npm install
```

### Or Copy-Paste This (All at once)

```bash
cd "/home/mikey/Desktop/new cursor" && npm install
```

---

## After Installation

Once npm install completes, run:

```bash
npm run dev
```

Then open: **http://localhost:3000**

---

## If It Still Fails

Try with legacy peer deps flag:

```bash
cd "/home/mikey/Desktop/new cursor"
npm install --legacy-peer-deps
```

---

## Verify Files Exist

Before running npm install, check that these files exist:

```bash
cd "/home/mikey/Desktop/new cursor"
ls -la package.json
# Should show: package.json exists
```

---

**The key is: Always navigate into the project folder FIRST!** 📁
