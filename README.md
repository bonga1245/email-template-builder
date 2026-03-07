# Email Template Builder

An Angular application for building simple email templates from reusable content blocks.

## Stack
- Angular 17+ with standalone components
- TypeScript strict mode
- SCSS
- Bootstrap 5
- Angular Signals
- Storybook for component documentation
- Jasmine/Karma for tests

## Setup

> **Prerequisites:** Install [Node.js LTS](https://nodejs.org) (v18 or v20 recommended) and [Git](https://git-scm.com)

```bash
git clone https://github.com/bonga1245/your-repo.git
cd email-template-builder
npm install
npm start
```

Open `http://localhost:4200`.

## Storybook
```bash
npm run storybook
```

## Tests
```bash
ng test
```

## How to Use

1. Select a block type from the **Build Your Template** sidebar and click **Add**.
2. Click on any block in the preview to select it and edit its properties in the sidebar.
3. To delete a block, hover over it in the preview — a **Remove** button will appear in the top-right corner of the block.

## Approach
The app is split into two layers:

1. **Design system components**  
   Presentational standalone components with `@Input()` APIs and `ChangeDetectionStrategy.OnPush`.

2. **Template builder**  
   A container component that uses `TemplateService` and Angular Signals to add, select, edit, and remove blocks.  
   The sidebar edits update the preview in real time.

## Assumptions / Trade-offs
- No persistence is included, state is in-memory only.
- No routing or backend integration.
- Storybook config is included
- Bootstrap is used for layout/utilities only; component styling relies on SCSS tokens.

## What I Would Improve Given More Time
- **Drag-and-drop reordering** — allow users to reorder blocks via drag-and-drop using the Angular CDK `DragDropModule`.
- **Improve look and feel of UI** — enhance the overall visual design with better typography, spacing, color palette, and responsive layout to create a more polished and intuitive user experience.
- **Centralise constants** — introduce a dedicated constants file (e.g. `constants.ts`) to store hardcoded values such as default block labels, size limits, and placeholder text, rather than scattering magic values across HTML templates and components.
- **Save & load templates** — persist the current template via an API or `localStorage` so it survives a page refresh, and allow users to save and restore named templates.
- **UX Enhancements**:
  - Add form validation feedback in the sidebar (e.g. min/max character warnings).
  - Add a confirmation dialog before deleting a block to prevent accidental removal.
