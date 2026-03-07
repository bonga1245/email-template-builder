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
```bash
npm install
ng serve
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
