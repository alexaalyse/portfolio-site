# UX Portfolio Website

A modern, responsive UX portfolio website built with Next.js, TypeScript, and shadcn/ui components.

## Features

- **Modern Design**: Clean and minimalist design using Tailwind CSS
- **Responsive**: Fully responsive layout that works on all devices
- **Component Library**: Built with shadcn/ui for consistent, accessible components
- **TypeScript**: Full TypeScript support for better development experience
- **Performance**: Optimized with Next.js App Router

## Sections

- **Hero**: Eye-catching introduction with call-to-action
- **About**: Professional background, skills, and statistics
- **Work**: Portfolio showcase with project cards
- **Contact**: Contact form and social links

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your system.

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ux-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update the following files to personalize your portfolio:

- `src/components/Navigation.tsx` - Update your name in the navigation
- `src/components/AboutSection.tsx` - Update your bio, skills, and statistics
- `src/components/WorkSection.tsx` - Replace with your actual projects
- `src/components/ContactSection.tsx` - Update your contact information

### Styling

The project uses Tailwind CSS with a custom color scheme. You can modify the colors in `src/app/globals.css` or update the Tailwind configuration in `tailwind.config.ts`.

### Adding New Projects

To add new projects to your portfolio, update the `projects` array in `src/components/WorkSection.tsx` with your project details.

## Build and Deploy

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deployment

This project can be deployed to any platform that supports Next.js, such as:

- Vercel (recommended)
- Netlify
- AWS Amplify
- Digital Ocean

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Reusable component library
- **Lucide React** - Icon library

## License

MIT License - feel free to use this template for your own portfolio!

## Contributing

Feel free to submit issues and enhancement requests!
