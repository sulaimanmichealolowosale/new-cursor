# Color Update Guide - INVENTIO Inc Design System

## Quick Find & Replace for All Pages

Use VS Code Find & Replace (Ctrl+H or Cmd+H) to update all files:

### **Step 1: Update Blue Links to Orange**

```
Find: hover:text-blue-600
Replace: hover:text-accent-dark
```

```
Find: hover:text-blue-400
Replace: hover:text-accent-light
```

```
Find: text-blue-600
Replace: text-accent-dark
```

### **Step 2: Update Blue Buttons**

```
Find: bg-blue-600
Replace: bg-accent-dark
```

```
Find: hover:bg-blue-700
Replace: hover:bg-accent-dark/90
```

```
Find: bg-blue-700
Replace: bg-accent-dark
```

```
Find: hover:bg-blue-50
Replace: hover:bg-primary-50 dark:hover:bg-primary-700
```

### **Step 3: Update Gray to Primary**

```
Find: text-gray-900
Replace: text-primary-900 dark:text-white
```

```
Find: text-gray-700
Replace: text-primary-700 dark:text-primary-200
```

```
Find: text-gray-600
Replace: text-primary-600 dark:text-primary-400
```

```
Find: text-gray-300
Replace: text-primary-300 dark:text-primary-400
```

```
Find: border-gray-200
Replace: border-primary-200 dark:border-primary-700
```

```
Find: border-gray-800
Replace: border-primary-700 dark:border-primary-800
```

### **Step 4: Update Backgrounds**

```
Find: bg-white
Replace: bg-white dark:bg-primary-800
```

```
Find: bg-gray-50
Replace: bg-primary-50 dark:bg-primary-800
```

```
Find: bg-gray-900
Replace: bg-primary-900 dark:bg-primary-950
```

### **Step 5: Add Theme Hook to Pages**

Add at top of each page file (if not already there):

```jsx
import { useTheme } from "../context/ThemeContext";

// Inside component:
const { isDark } = useTheme();
```

## **Instructions**

### **Method 1: VS Code Find & Replace**

1. Open each file in VS Code
2. Press `Ctrl+H` (Windows/Linux) or `Cmd+H` (Mac)
3. Use find/replace for each pattern above
4. Click "Replace All" (be careful - verify first!)

### **Method 2: Global Find & Replace**

1. Press `Ctrl+Shift+H` to open Find & Replace across entire workspace
2. Make sure "Match Whole Word" is checked when appropriate
3. Use patterns from above

### **Method 3: Manual (Slowest)**

Edit each file individually using patterns above.

## **Files to Update**

Priority order:

1. `src/pages/Home.jsx` (most content)
2. `src/pages/RadioAdvertising.jsx`
3. `src/pages/BillboardAdvertising.jsx`
4. `src/pages/SocialMediaAdvertising.jsx`
5. `src/pages/BrandDesign.jsx`
6. `src/components/ServiceCard.jsx`
7. `src/components/ScrollRevealSection.jsx`
8. Remaining components

## **Verification Checklist**

After updating, check:

- ✅ Theme toggle works (sun/moon icon)
- ✅ Dark mode colors look good
- ✅ Light mode colors look good
- ✅ Orange accents used for CTAs
- ✅ No remaining blue colors (#0066ff)
- ✅ Text is readable in both modes
- ✅ Hover states show accent colors
- ✅ Mobile responsive still works

## **Common Patterns to Replace**

### Service Card Hover:

```jsx
// Old
hover:bg-blue-50 hover:text-blue-600

// New
hover:bg-primary-50 dark:hover:bg-primary-700 hover:text-accent-dark
```

### Section Backgrounds:

```jsx
// Old
bg-gray-50

// New
bg-primary-50 dark:bg-primary-800
```

### Links/CTAs:

```jsx
// Old
text-blue-600 hover:text-blue-700

// New
text-accent-dark hover:text-accent-dark/90
```

### Text Content:

```jsx
// Old
text-gray-700

// New
text-primary-700 dark:text-primary-200
```

## **Image Updates**

Replace placeholder URLs in `ImageUtils.jsx`:

Current Unsplash URLs (free images):

- Hero: marketing/growth photo
- Radio: microphone/studio
- Billboard: urban advertising
- Social: mobile/digital
- Brand: design/creative

To use your own images:

```jsx
export const placeholderImages = {
  hero: "/images/hero.jpg", // Your image path
  radioAdvertising: "/images/radio.jpg",
  // ... etc
};
```

## **Testing**

```bash
npm run dev
```

Then test:

1. Homepage loads with orange accents
2. Theme toggle works
3. Dark mode is readable
4. Light mode is readable
5. Images load (if using real ones)
6. Mobile responsive
7. All links work

## **After Updates**

```bash
npm run build
```

The build should complete without errors. If you see color-related errors, check class names - make sure you're using Tailwind classes correctly.

## **Need Help?**

If colors aren't showing:

1. Check tailwind.config.js has color definitions
2. Make sure `dark:` prefix is used for dark mode
3. Verify class names are spelled correctly
4. Clear browser cache (Ctrl+Shift+Delete)
5. Restart dev server (`npm run dev`)

---

**Color Palette:**

- **Primary Gray**: #1a1a1a to #f5f5f5
- **Accent Orange**: #d97706 (dark) & #f59e0b (light)
- **Use**: Orange for actions, gray for structure

Good luck! 🎨
