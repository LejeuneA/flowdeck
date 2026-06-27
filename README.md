# Flowdeck

**Flowdeck** is a creative project management dashboard built with **React** and **TypeScript**.

The project is designed as a learning and portfolio project. Its main goal is to practise modern frontend development while building a realistic product interface for freelancers, UX/UI designers, and small creative teams.

## Project Overview

Flowdeck helps creative professionals track projects, clients, deadlines, priorities, progress, and completion status in one simple dashboard.

The current version focuses on the foundations of a React + TypeScript application:

* reusable components
* typed project data
* props
* union types
* arrays and objects
* rendering lists with `map()`
* clean project structure
* Git and GitHub workflow

This project will grow step by step into a more complete dashboard application.

## Current Features

* React + TypeScript setup with Vite
* reusable `ProjectCard` component
* shared `Project` type
* project data stored in an array
* project cards rendered with `map()`
* project details:

  * title
  * client
  * status
  * priority
  * deadline
  * category
  * progress
  * completed state
* basic boolean rendering for completed projects
* GitHub repository setup

## Tech Stack

* React
* TypeScript
* Vite
* HTML
* CSS
* Git
* GitHub

## Project Structure

```txt
src/
├── components/
│   └── ProjectCard.tsx
├── types/
│   └── Project.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Learning Goals

This project is part of my transition from UX/UI design into frontend and AI-powered application development.

Through Flowdeck, I am practising:

* building reusable React components
* passing and typing props
* working with TypeScript types
* using arrays and objects in React
* rendering dynamic UI with `map()`
* keeping data and UI structure organized
* writing code I can understand, explain, and improve
* building a portfolio project step by step instead of copying a finished template

## Roadmap

Planned next steps:

* improve the dashboard layout
* add filtering by status and priority
* add project statistics
* add project creation form
* add edit and delete functionality
* store projects in `localStorage`
* create a dark theme UI
* improve responsive design
* add accessibility improvements
* add a small mock Flowdeck Assistant
* later explore real AI-powered features

## Future AI Ideas

Flowdeck may later include a small assistant that can help users understand project status and risks.

Possible features:

* summarize active projects
* detect projects that need attention
* suggest next tasks based on project type
* generate short client update messages
* identify low-progress or risky projects

The first version of this assistant will be a simple mock assistant based on project data. A real AI API integration may be added later.

## Status

This project is currently in early development.

The focus right now is learning and building strong React + TypeScript foundations before adding advanced features.

## Author

**Açelya Lejeune**
Senior UX/UI Designer · Frontend Developer · AI Application Developer

GitHub: [LejeuneA](https://github.com/LejeuneA)

## License

Copyright © 2026 Açelya Lejeune. All rights reserved.

This source code is provided for portfolio and evaluation purposes only.
No permission is granted to copy, modify, distribute, sublicense, or use this project or any part of it without prior written permission from the author.
