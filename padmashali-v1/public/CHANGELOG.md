# Changelog — Padmashali Community App

## [v16] — 2025-08-23
**Locked Stable Version**

### Added
- Unified **banner header** (logo, title, tagline, language, theme, logout pills).
- Separate **hero image** (`assets/banner.png`) below banner for all pages.
- Full **dark/light mode toggle** support.
- **Telugu/English language toggle** with translations in `i18n.js`.
- **Logout pill** (visible on all inner pages, hidden on index).
- **Glassmorphism UI** across cards/tiles for modern look.

### Pages
- `index.html` → PIN entry for Members (1111), Committee (5555), Admin (9999).
- `members.html` → Directory, Events, Halls, Fees, Loans tiles.
- `committee.html` → Directory, Events Manage, Approvals, Loan Desk, Finance.
- `admin.html` → Directory Manage, Events Manage, Hall Approvals, Loan Review, Finance + Reset Sessions.
- Inner Pages: `directory.html`, `directory-manage.html`, `events.html`, `events-manage.html`, `fees.html`, `fees-manage.html`, `loan-requests.html`, `loan-review.html`, `hall-booking.html`, `hall-approvals.html`.

### Fixed
- Removed duplicate banners and stray raw logo renders.
- Corrected spacing/alignment between banner, hero, and content tiles.
- Removed placeholder `_title/_sub` strings.
- Correct hero image reference (locked to `assets/banner.png`).

### Locked
This version is declared **stable**.  
Future changes will branch from here (v17+).
