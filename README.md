# Gamebook Studio

Write, organise, test and export interactive gamebooks — choose-your-own-path adventure books in the tradition of *Fighting Fantasy* and *Lone Wolf*, with numbered sections, dice, stats, inventory and combat.

**▶ Open the app: <https://kilovd.github.io/gamebook-studio/>**

Free, no accounts, no servers, nothing uploaded. Your gamebooks live as ordinary files on your own device, and the app itself works offline once installed.

## Install it as an app

The page works in any modern browser, but installing gives you a fullscreen app with its own icon that runs offline:

- **Android (Chrome):** open the link → tap the **⋮** menu → **Install app** (older versions: *Add to Home screen*).
- **Windows / macOS / Linux (Chrome or Edge):** click the install icon at the right end of the address bar, or menu → *Install*.
- **iPhone / iPad (Safari):** Share button → **Add to Home Screen**.

After the first visit the app is cached on your device — no internet connection is needed to write, test or export. When you are online it quietly picks up new versions.

## Quick start

1. The app opens with a one-section starter book. To see a complete example first, open the menu (**☰**) → **Load sample book** and play *The Warren of Korrak* in Play mode.
2. There are four modes, in the top bar (or `Ctrl+1…4`):
   - **Write** — the section editor. `Alt+N` adds a section. Add choices below the text; in a choice's target box, type a section number or title — or type a brand-new title and pick **+ create** to make and link the section in one stroke.
   - **Sheet** — every section as a spreadsheet row: sort, filter, edit titles/statuses/tags inline, see word counts and link counts.
   - **Graph** — your book as a mindmap. Drag nodes to arrange them, drag out of the **⊕** port on a selected node to link it to another section (or drop on empty space to create a new linked one), double-click empty space for a new section, and edit everything in the side panel.
   - **Play** — read and test your book with a real rules engine: dice-rolled stats, requirement-gated choices, dice tests, combat, endings. Step **Back** through choices, or **Play from current** to test from the section you're editing.
3. **Save** (`Ctrl+S`) writes a single `*.gamebook.json` project file. Keep it anywhere — including OneDrive/Drive/Dropbox folders if you want your own sync. The app also autosaves to browser storage continuously and keeps your last 12 saves as restorable backups (menu → Backups…).
4. **Export** (`Ctrl+E`):
   - **Markdown** — a classic numbered gamebook (“…turn to 47”) for print or typesetting;
   - **Playable HTML** — a single self-contained file anyone can open in a browser and play, dice and combat included — share your finished book as one file;
   - **Project JSON** — a copy of the project file.

## The rules system

Everything is structured — no scripting required:

- **Stats** — named numbers (e.g. SKILL, STAMINA, LUCK, GOLD) with fixed or dice-rolled starting values (`2d6+12`) and optional min/max.
- **Items** — inventory, optionally carried from the start.
- **Conditions** — true/false facts about a playthrough (“heard the warning”, “poisoned”).
- **Requirements** on a choice — has/lacks an item, condition set or not, stat comparisons. Unmet choices show greyed out with the reason, or can be hidden entirely.
- **Effects** — on arriving at a section or on picking a choice: gain/lose items, set/clear conditions, adjust stats, roll dice into a stat.
- **Dice tests** — a choice can be a test (e.g. roll `2d6` ≤ LUCK) with separate success and failure destinations.
- **Combat** — enemies with SKILL/STAMINA fought round by round (2d6 + skill contests), with win, lose and escape destinations.

Sections are linked by stable internal ids; the printed **numbers are just labels**. Shuffle them (menu → Tools → Shuffle numbers, with per-section locks) or compact them to 1…N — links never break. Continuous **validation** flags broken links, dead ends, unreachable sections, incomplete tests and more, live as you write.

## Keyboard

| Keys | Action |
|---|---|
| `Ctrl+K` / `Ctrl+P` | Command palette — jump to any section or command |
| `Ctrl+1…4` | Write · Sheet · Graph · Play |
| `Ctrl+S` / `Ctrl+O` / `Ctrl+E` | Save / Open / Export |
| `Alt+N` / `Alt+C` | New section / new choice |
| `Alt+←` `Alt+→` | Back / forward through visited sections |
| `Ctrl+Z` | Undo structural changes |
| `?` | Help |

## Your data

Project files are yours, on your device — the app has no backend at all. Browser autosave and backups are per-device/per-browser, so when moving between devices, carry the `.gamebook.json` file (or keep it in a cloud-synced folder). The **playable HTML export** is the best way to share a finished book with readers.

## Self-hosting

This is a static site — five files, no build, no dependencies. Fork the repo or download the files and host them on any static host, or simply save `index.html` and open it locally (installing as an app requires HTTPS, but the page itself runs fine from a local file).

---

Made by [Daniel Kilov](https://github.com/KilovD), built with Claude. Feedback and bug reports welcome via GitHub issues.
