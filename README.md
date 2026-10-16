# PS06: ShowTime - TV Show Finder

A responsive single-page web application built with React and React Router to browse television series, search titles, filter by genres, and view detailed show information along with cast members.

## Project Details

- **PS Number**: PS06
- **Project Name**: ShowTime (TV show finder)
- **API Used**: TVMaze Public API (`https://api.tvmaze.com`)
- **Live Link**: [Add your Vercel or Netlify link here]

## Routes

| Route | Page / Description | API Used |
|---|---|---|
| `/` | Hero landing section with "Browse Shows" button | None |
| `/shows` | First 40 shows displayed as cards with posters, titles, genres, ratings, and live search | `https://api.tvmaze.com/shows?page=0` and `https://api.tvmaze.com/search/shows?q=:query` |
| `/shows/:id` | Show detail view with poster, summary, genres, premiere date, rating, and cast list | `https://api.tvmaze.com/shows/:id` and `https://api.tvmaze.com/shows/:id/cast` |
| `/about` | Overview of the project and technical stack | None |
| `*` | 404 Page not found with a link to navigate back home | None |

## Key Features

- **TV Shows Catalog**: Displays 40 popular series from TVMaze with image fallback handling.
- **Search & Filters**: Search shows by query, filter by genre, and sort by rating or alphabetically.
- **Show Details & Clean Summary**: Detailed show pages with HTML tags stripped from summaries.
- **Full Cast List**: Displays actor photo, actor name, and character name for each show.
- **Client-Side Routing**: Built using React Router with seamless navigation.
- **Deployment Ready**: Configured with SPA rewrite rules for direct URL refreshes on Vercel and Netlify.

## Screenshots

### 1. Shows Explorer Page
![Shows Explorer](./public/screenshot-shows.png)

### 2. Show Details & Cast Page
![Show Details](./public/screenshot-details.png)

## How to Run Locally

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```
