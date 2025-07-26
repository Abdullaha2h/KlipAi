# 🚀 Responsive Landing Page

This project is a modern, pixel-perfect, responsive landing page built with **Next.js App Router**, **TypeScript (strict mode)**, and **Tailwind CSS**. It follows a component-based architecture with high emphasis on code clarity, responsiveness, accessibility, and performance.

## 📌 Features

- ✅ Pixel-perfect implementation based on Figma designs
- 🎯 Fully responsive for mobile, tablet, and desktop breakpoints
- ⚡ Optimized performance using Next.js Image and App Router
- 💅 Styled using utility-first Tailwind CSS
- 💻 Strictly typed with TypeScript
- 🧩 Component-driven structure for reusability and scalability

## 🛠️ Tech Stack

- **Framework**: [Next.js (App Router)]
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Image Optimization**: Next.js `<Image />`
- **Icon Assets**: SVG / PNG (locally hosted)

## 🔧 Installation

Follow the steps below to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/Abdullaha2h/KlipAi.git
cd KlipAi

## 📐 Figma Mapping

All sections, typography, spacing, and layout have been implemented to match the Figma design exactly. Custom widths and heights (e.g., `w-[411px]`, `h-[838px]`) were used where specified to ensure pixel perfection.

## 📱 Responsiveness

- Tailwind's responsive utilities (`md:`, `lg:`, etc.) are used throughout
- Grid layout adjusts intelligently from mobile (`grid-cols-1`) to desktop (`grid-cols-3`)
- Gaps and padding are responsive and fixed (`gap-[20px]`, `p-[15px]`, `md:p-[83px]`) to ensure consistency across screen sizes

## 🤖 AI Usage Report

### Tools Used
- [ChatGPT (GPT-4o)](https://chat.openai.com/)
- [DeepSeek Developer](https://deepseek.com/)
- GitHub Copilot (minimally)

### Key Areas Where AI Helped
- **Prompt Engineering**: Used to translate Figma CSS into Tailwind utility classes with accuracy
- **Component Architecture Guidance**: Suggested a scalable way to break sections into reusable components (`/sections`, `/components`)
- **Responsive Grid Fixes**: Helped troubleshoot issues with `gap` scaling and fixed-width card alignment
- **Image Placement and Absolute Positioning**: Provided help to implement absolute-positioned text and icons based on Figma specs
- **Debugging Layout Bugs**: Solved overlapping issues in medium screens using precise Tailwind breakpoints

### Validation & Refinement
- All AI-generated suggestions were carefully reviewed and modified for performance and accuracy
- Tailwind classes were validated via browser dev tools and visual matching with Figma
- TypeScript types were manually adjusted to enforce strict safety

## 📈 Performance & Accessibility

- ✅ Lighthouse scores optimized (Accessible, Performant)
- ✅ Next.js Image used for vector icon to ensure lazy loading and optimization
- ✅ Semantic HTML elements used

