# Engineering Leadership Blog

A minimalist, purpose-driven blog built with Next.js, showcasing insights on engineering leadership, modern DevOps practices, and human-centered team building.

## 🎯 Purpose

This blog serves as a platform to share original writing on engineering leadership, inspired by the tones of **Simon Sinek**, **Lara Hogan**, and **Cate Huston**. The goal is to create a space that feels both professional and personal—a blend of technical clarity and authentic leadership insights.

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Content**: Markdown-based blog posts with frontmatter
- **Typography**: Inter font family
- **SEO**: OpenGraph metadata, Twitter cards, custom meta tags
- **Deployment**: Optimized for Vercel

## 🎨 Design Language

- **Vibe**: Minimalist, warm, professional
- **Colors**: Soft yellow (#FFD54F) and orange (#FF7043) accents
- **Typography**: Clean, readable Inter font
- **Layout**: Responsive, grid-based design
- **Accessibility**: High contrast, keyboard navigation support

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── blog/              # Blog listing and individual posts
│   ├── about/             # About page
│   └── layout.tsx         # Root layout with metadata
├── components/            # Reusable React components
│   ├── Header.tsx         # Site navigation
│   ├── Footer.tsx         # Site footer
│   └── BlogPostCard.tsx   # Blog post preview card
├── lib/                   # Utility functions
│   ├── blog.ts           # Blog post data fetching
│   └── markdown.ts       # Markdown processing
└── types/                 # TypeScript type definitions
    └── blog.ts           # Blog post interfaces

content/
└── posts/                # Markdown blog posts
    └── why-the-code.md   # Sample blog post
```

## 📝 Content Management

Blog posts are written in Markdown with frontmatter metadata:

```markdown
---
title: "Post Title"
date: "2024-01-15"
excerpt: "Brief description of the post"
tags: ["leadership", "engineering"]
published: true
audioUrl: "optional-audio-file.mp3"
---

# Your content here...
```

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Writing New Posts

1. Create a new `.md` file in `content/posts/`
2. Add frontmatter with required metadata
3. Write your content in Markdown
4. The post will automatically appear in the blog listing

## 🎯 Sample Content

The blog includes a sample post: **"Why the Code? — Starting With Purpose in Engineering Leadership"** - inspired by Simon Sinek's "Start With Why" framework, exploring how engineering leaders can foster purpose-driven teams.

## 🔧 Customization

### Colors
Update the color palette in `tailwind.config.ts`:
- `accent-yellow`: #FFD54F
- `accent-orange`: #FF7043
- `accent-yellow-light`: #FFF8E1
- `accent-orange-light`: #FFE0B2

### Typography
The site uses Inter font family. To change fonts, update:
- `tailwind.config.ts` (font family configuration)
- `src/app/globals.css` (Google Fonts import)

### SEO
Update metadata in `src/app/layout.tsx`:
- Site title and description
- OpenGraph settings
- Twitter card configuration
- Author information

## 🚀 Deployment

The site is optimized for Vercel deployment:

1. **Connect to Vercel**:
   ```bash
   npx vercel
   ```

2. **Deploy**:
   ```bash
   npx vercel --prod
   ```

## 🔮 Future Enhancements

- [ ] Audio player for blog posts
- [ ] Newsletter signup integration
- [ ] Dark/light theme toggle
- [ ] Search functionality
- [ ] Comment system
- [ ] RSS feed
- [ ] CMS integration (Notion/MDX)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

This is a personal blog, but feedback and suggestions are welcome! Feel free to open issues or submit pull requests for improvements.

---

**Building better teams, one post at a time.** 🚀