# AI_USAGE.md

## Overview

This document outlines how AI tools were strategically used during the development of the responsive landing page project built with Next.js, Tailwind CSS, TypeScript, and App Router. AI support was focused on **solving complex layout issues**, **dynamic component design**, and **grid responsiveness challenges**, rather than generating basic boilerplate.

---

## Tools Used

| Tool         | Purpose                                                                 |
|--------------|-------------------------------------------------------------------------|
| ChatGPT (GPT-4o) | Solving layout bugs, prop-driven design logic, prompt optimization     |
| DeepSeek      | Assisting in type-safe prop structuring and TSX refactoring             |
| Pieces AI     | Providing reusable layout snippets and design breakpoints               |

---

## Key Areas Where AI Was Used Effectively

### 1. 📦 Responsive Grid Layout Issue
**Problem:** Cards inside a 3-column grid were overlapping or leaving excess space on medium and large screens.

**AI Contribution:**
ChatGPT suggested converting the layout from `grid-cols-3` to a more controlled flexbox approach using `min-w`, `max-w`, and `gap-x` combinations. It also introduced consistent inner paddings using `md:px-[83px]` and `p-[15px]` fallback for smaller screens.

---

### 2. 📐 Dynamic Width/Height Props in TypeScript
**Problem:** Need to pass dynamic Tailwind width/height as props safely in a `React.FC`.

**AI Contribution:**
DeepSeek provided the optimal way to type `width` and `height` props as optional `string`, and helped design default props with strict typing, avoiding `"number not assignable to string"` TS errors.

### ⚙️ AI Use Highlights

| Task Area                              | Role of AI                                                |
|----------------------------------------|------------------------------------------------------------|
| **Grid & Flex Layout Optimization**    | Assisted in implementing a responsive 3-column layout that adapts elegantly across breakpoints, ensuring pixel precision from Figma. |
| **Reusable Card Component Design**     | Helped design the `OwnershipCard` component with prop-driven width, height, and conditional icons, improving maintainability. |
| **Typography Responsiveness**          | AI suggested scalable font utilities and positioning logic, aligning design with Tailwind's `text-[size]`, `md:text-[size]`, and spacing classes. |
| **CSS-to-Tailwind Translation**        | Accelerated conversion of Figma absolute positioning into dynamic, clean Tailwind utility classes. |
| **Handling Component Collisions**      | Helped troubleshoot spacing issues where cards overlapped or misaligned on medium screens. |

---

### 🎯 Effective Prompts Used

- *“Convert Figma CSS to Tailwind with responsiveness”*  
  Ensured accurate class mappings with breakpoints.

- *“Create reusable card layout with optional props and icon support”*  
  Helped generate a scalable, clean component structure in TypeScript.

- *“Fix overlapping layout on medium screens in grid setup”*  
  Provided insight into grid gap handling and padding optimizations.

- *“Combine desktop and mobile styles using Tailwind utilities”*  
  Helped clean up redundant classes and streamline mobile-to-desktop transitions.

---

### 🧪 Validation & Refinement Process

To ensure code quality and AI output accuracy:

- All generated code was **manually reviewed**, formatted using **Prettier**, and tested across **multiple viewports**.
- Figma was used as the **pixel-perfect reference**. Each section was cross-verified to match its original spec.
- Component logic, props, and structure were refined to **enforce strong typing** and remove unnecessary complexity.
- Final layout adjustments and spacing logic were performed manually to ensure a **professional, responsive finish**.

---

### 🚧 Challenges Solved Using AI

- **Complex Absolute-to-Relative Layouts**  
  AI helped translate Figma’s fixed positions into a fluid layout system using Tailwind’s utility-first approach.

- **Gap/Spacing Issues on Medium Screens**  
  Diagnosed inconsistencies in spacing between columns and suggested scalable padding strategies.

- **Dynamic Styling via Props**  
  Introduced flexibility in layout components, allowing different height/width values to be passed safely using TypeScript.

- **Reducing Redundancy in JSX**  
  Suggested prop-driven designs to avoid repetitive hard-coded values across sections.

---