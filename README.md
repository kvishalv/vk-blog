# VK Blog

A personal blog built with Astro, featuring insights on engineering leadership, team management, and technical leadership.

## 🚀 About

This blog shares real stories and practical frameworks for engineering leaders, covering topics like:
- 1:1 meeting best practices
- Leadership mistakes and lessons learned
- Team building and management
- Technical leadership insights

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: MDX for blog posts
- **Deployment**: Static site generation

## 📁 Project Structure

```
/
├── public/                 # Static assets
│   ├── resources/         # Downloadable resources
│   └── images/           # Blog images
├── src/
│   ├── components/       # Reusable Astro components
│   ├── content/         # Blog posts and content config
│   │   └── posts/       # MDX blog posts
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages
│   └── styles/          # Global styles
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kvishalv/vk-blog.git
cd vk-blog
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser.

## 📝 Available Scripts

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 📚 Content Management

### Adding New Blog Posts

1. Create a new `.mdx` file in `src/content/posts/`
2. Add frontmatter with required fields:
```yaml
---
title: "Your Post Title"
description: "Brief description of your post"
date: "2024-01-01"
author: "Vishal"
tags: ["leadership", "management"]
draft: false
---
```

### Adding Resources

1. Add downloadable files to `public/resources/`
2. Update the Resources page in `src/pages/resources.astro`

## 🎨 Customization

- **Styling**: Modify `src/styles/global.css` and `tailwind.config.mjs`
- **Layout**: Update components in `src/components/` and `src/layouts/`
- **Content**: Configure content collections in `src/content/config.ts`

## 📄 Resources

The blog includes free downloadable resources for engineering leaders:
- 1:1 Questions Framework
- More resources coming soon...

## 🤝 Contributing

This is a personal blog, but feel free to:
- Report issues
- Suggest improvements
- Share feedback

## 📞 Connect

- **LinkedIn**: [kvishalv](https://linkedin.com/in/kvishalv)
- **GitHub**: [kvishalv](https://github.com/kvishalv)
- **Blog**: [vishal.dev](https://vishal.dev)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
