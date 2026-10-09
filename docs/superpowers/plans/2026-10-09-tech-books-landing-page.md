# Tech Books Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a lightweight, high-performance, and visually stunning RTL landing page for showcasing tech books with interactive 3D book covers, instant search & categorization, and a smooth "Look Inside" preview modal.

**Architecture:** A zero-dependency static web application comprising semantic HTML5 (`index.html`), custom CSS design system with CSS custom properties and 3D transforms (`style.css`), and lightweight modular JavaScript (`app.js`) for reactive filtering and modal management.

**Tech Stack:** HTML5, CSS3 (Custom Properties, Flexbox, Grid, 3D Transforms, Glassmorphism), Vanilla JavaScript (ES6+), Google Fonts (IBM Plex Sans Arabic, JetBrains Mono).

## Global Constraints
- Native Arabic RTL support (`dir="rtl"` and `lang="ar"`).
- Dark warm slate palette (`#0A0F1D` base, `#11192C` surface cards, `#38BDF8` primary accent) for zero eye strain.
- No external heavy runtime dependencies or frameworks (pure Vanilla stack for maximum performance and instant load).
- All book covers must be rendered using elegant CSS/SVG visual mockups to ensure no broken images or placeholders.

---

### Task 1: CSS Design System & Visual Foundation
**Files:**
- Create: `style.css`

**Interfaces:**
- Produces: Complete CSS design system, utility classes, 3D book cover perspective effects, responsive grid, modal styling, animations.

- [ ] **Step 1: Create `style.css` with design tokens, typography, and base resets**
- [ ] **Step 2: Add 3D book cover perspective classes and elevation styling**
- [ ] **Step 3: Add responsive layout styles (Hero, Category Bar, Books Grid, Modal, Footer)**
- [ ] **Step 4: Commit `style.css`**

```bash
git add style.css
git commit -m "feat: add design system and styles for tech books landing page"
```

---

### Task 2: Semantic HTML5 Structure
**Files:**
- Create: `index.html`

**Interfaces:**
- Consumes: Stylesheet from `style.css`, fonts from Google Fonts.
- Produces: Semantic DOM with header, hero showcase, filter bar, books grid container, look-inside modal, why-us section, newsletter, and footer.

- [ ] **Step 1: Create `index.html` with meta tags, font imports, and header navigation**
- [ ] **Step 2: Add Hero section with 3D featured book and key metrics**
- [ ] **Step 3: Add Category filter bar and empty/initial books grid structure**
- [ ] **Step 4: Add "Look Inside" interactive modal skeleton, trust section, newsletter, and footer**
- [ ] **Step 5: Commit `index.html`**

```bash
git add index.html
git commit -m "feat: create semantic HTML structure with Arabic content"
```

---

### Task 3: Interactive Logic & Book Dataset
**Files:**
- Create: `app.js`

**Interfaces:**
- Consumes: DOM nodes from `index.html` (`#books-grid`, `#search-input`, `#filter-chips`, `#preview-modal`).
- Produces: Data-driven book rendering, instant search, category filtering, and modal preview with full TOC and code sample.

- [ ] **Step 1: Define comprehensive tech books dataset with titles, summaries, tags, TOCs, and excerpts in `app.js`**
- [ ] **Step 2: Implement dynamic book card rendering with 3D CSS styling**
- [ ] **Step 3: Implement instant search and category filter event handlers**
- [ ] **Step 4: Implement modal controller (open preview, close with escape key, overlay click)**
- [ ] **Step 5: Add newsletter form submission feedback toast**
- [ ] **Step 6: Commit `app.js`**

```bash
git add app.js
git commit -m "feat: implement interactive search, filtering, and book preview modal"
```

---

### Task 4: Verification & Visual Polish
**Files:**
- Test/Verify: `index.html`, `style.css`, `app.js`

**Interfaces:**
- Validates: Browser rendering, interaction flow, responsive breakpoints, zero console errors.

- [ ] **Step 1: Start local preview server and check console for errors**
- [ ] **Step 2: Verify search, filter by category, and modal opening/closing**
- [ ] **Step 3: Validate mobile responsiveness**
- [ ] **Step 4: Final commit and summary**

```bash
git add .
git commit -m "chore: verify and polish tech books landing page"
```
