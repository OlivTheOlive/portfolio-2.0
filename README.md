# Portfolio Template

A retro, responsive portfolio template built with Next.js and Tailwind CSS. This template provides a clean and professional way to showcase your work and skills.

## Features

- Retro and minimal design
- Fully responsive
- Built with Next.js and Tailwind CSS
- Easy to customize
- Simple content management
- Dark/Light mode support

## Getting Started

1. Clone this repository
2. Install dependencies with `npm install`
3. Run the development server with `npm run dev`

## Customization

To make this portfolio your own, you only need to:

1. Replace images in the `/public` directory with your own
2. Update the `content.ts` file in the `/src` directory with your information:
   - Personal details
   - Projects
   - Skills
   - Experience
   - Contact information

## Content Structure

The `content.ts` file is structured as follows:

```typescript
PersonalInfo = {
  name: string;
  title: string;
  email: string;
  location: string;
  about: string;
  avatar: string;
  quote: string;
  message: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
  skills: string[];
  experiences: Experience[];
  projects: Project[];
};
```

## Deployment

This template can be easily deployed to platforms like Vercel, Netlify, or GitHub Pages.

## License

This project is open source and available under the MIT License.
