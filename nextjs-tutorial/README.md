### Next.js?
Next.js is a React framework. Think of React as Lego blocks 🧩, and Next.js as the instruction manual that tells you how to arrange those blocks into a real building.

with React:
* Build UI components (buttons, forms)
* But you have to handle routing, SEO, server communication, and optimizations yourself.

With Next.js:
* It adds routing out-of-the-box (pages → URLs).
* It supports server-side rendering (SSR) and static site generation (SSG) → which means your website is faster and more SEO-friendly.
* It gives you API routes, so you don’t even need a separate backend for simple things.
* It handles image optimization, font optimization, deployment, etc.

Next.js = React + Routing + Performance + Backend APIs in one.

### Features
 - Routing: A file-system based router built on top of Server Components that supports layouts, nested routing, loading states, error handling, and more.
 - Rendering: Client-side and Server-side Rendering with Client and Server Components. Further optimized with Static and Dynamic Rendering on the server with Next.js. Streaming on Edge and Node.js runtimes.
 - Data Fetching: Simplified data fetching with async/await in Server Components, and an extended fetch API for request memoization, data caching and revalidation.
 - Styling: Support for your preferred styling methods, including CSS Modules, Tailwind CSS, and CSS-in-JS
 - Optimizations: Image, Fonts, and Script Optimizations to improve your application's Core Web Vitals and User Experience.
 - TypeScript: Improved support for TypeScript, with better type checking and more efficient compilation, as well as custom TypeScript Plugin and type checker.

 
 ### Prerequisites 
 HTML, CSS, React


### Project Structure
```perl
my-app/
 ├── pages/         # Each file here = a route
 │    ├── index.js  # Home page (/)
 │    ├── about.js  # About page (/about)
 ├── public/        # Static files (images, favicon, etc.)
 ├── styles/        # CSS files
 ├── package.json   # Project dependencies
```
Real life analogy:
Think of the pages/ folder like the rooms in a house.
* index.js = the living room (main entry)
* about.js = the kitchen (you can visit it by walking to /about)
Every file = a door that leads to that page.

