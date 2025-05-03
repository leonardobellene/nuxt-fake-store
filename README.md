# Nuxt Fake Store

## Intro

This project is a lightweight e-commerce frontend built with Nuxt 3, featuring real-time product search, category filtering, and product detail pages. It fetches live product data from https://api.escuelajs.co and uses Pinia for state management.

## Tech Stack
Nuxt 3

Vue 3

TypeScript

Pinia (state management)

Tailwind CSS (styling)

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

#### Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

#### Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Implemented Features

#### Product Listing with Pagination
Displays a paginated grid of products with dynamic data loading and responsive layout.

#### Search Functionality
Users can search for products using a search bar located in the layout header. The search updates results without changing the page.

#### Category Filtering
Products can be filtered by category via an expandable category panel. Categories are dynamically fetched from the API.

#### Product Detail Page (PDP)
Each product links to a detailed view with title, description, price, category, and image.

#### Favorites and Recently Visited Products
Users can view favorite and recently visited products, stored using Pinia and accessible through quick buttons in the header.

#### State Management with Pinia
Global state for favorites and visited items.

#### Layout with Shared UI
A consistent layout includes a reusable header, search bar, and category panel, shared across all pages using Nuxt’s layout system.

#### Dynamic Data Fetching
Products are fetched live from https://api.escuelajs.co, supporting category-based and query-based filtering.

## Time Report

https://track.toggl.com/shared-report/80cd3b5100c2eed631222e328101b316

Setup & configuration - 30min

Home page & categories - 60min

PLP - 30min

PDP & filtering - 60min

UI - 30min

Final Touch - 30min