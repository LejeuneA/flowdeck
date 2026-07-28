# Flowdeck

**Flowdeck** is a creative project management dashboard built with **React**, **TypeScript** and **SCSS**, with a separate **Python / Flask** assistant backend.

This project is part of the personal portfolio of **Açelya Lejeune**. It is made public exclusively for professional review, recruitment evaluation and portfolio presentation.

Flowdeck is not an open-source project, starter template, tutorial, reusable dashboard product or self-hosted application.

## Live Demo Access

The authorized way to experience Flowdeck is through the official live demo published by Açelya Lejeune.

Visitors may interact with the demo only through:

**https://acelyalejeune.com**

The public demo uses temporary browser-session data and a controlled project limit. Changes made by visitors do not affect other users and are not stored as shared production data.

No permission is granted to install, run, deploy, host, self-host, reproduce or use Flowdeck outside the official live demo.

## Portfolio Review Notice

This repository is public so that recruiters, hiring teams and professional collaborators can review:

- project structure
- code organization
- component architecture
- interface logic
- TypeScript usage
- frontend/backend separation
- UX/UI and product thinking

You may view and review the source code for professional evaluation purposes only.

You may not:

- copy or reuse the code
- modify the project
- redistribute or republish it
- deploy or self-host it
- include it in another portfolio
- use it in a tutorial, course or template
- use it in a commercial or personal product
- create derivative work from it
- present it as your own work

Installation, local setup, deployment and self-hosting instructions are intentionally not provided.

## Project Overview

Flowdeck is a creative project management dashboard designed for freelancers, UX/UI designers and small creative teams.

The application helps users understand:

- active projects
- priorities
- deadlines
- progress
- completion status
- workload
- recommended focus areas

Flowdeck combines a responsive React interface with a lightweight Flask assistant backend.

## Current Features

- React + TypeScript frontend
- Vite project setup
- SCSS-based styling
- reusable component architecture
- typed project data
- project creation
- project deletion
- project filtering by status
- dashboard statistics
- progress indicators
- responsive layout
- dark dashboard interface
- dedicated Projects view
- temporary browser-session storage
- maximum 10 projects in demo mode
- controlled demo workspace
- assistant loading and error states
- frontend/backend API communication
- environment-based API configuration

## Flowdeck Assistant

The Flowdeck Assistant is connected to a separate Python and Flask backend.

The assistant can:

- list current projects
- review project tasks
- summarize project status
- identify priorities
- review deadlines
- recommend what to focus on first
- respond using the project list currently available in the user’s demo session

The backend remains stateless and does not store visitor project data.

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- SCSS
- HTML
- CSS
- Fetch API

### Backend Integration

- Python
- Flask
- Flask-CORS
- REST-style HTTP communication

### Development Workflow

- Git
- GitHub
- component-based architecture
- typed data structures
- frontend/backend separation
- environment-based configuration

## Architecture

Flowdeck uses two separate repositories:

- React frontend
- Python / Flask backend

The frontend is responsible for:

- interface layout
- dashboard components
- project state
- project creation and deletion
- filtering
- statistics
- responsive behavior
- assistant panel UI
- API communication

The backend is responsible for:

- request validation
- message processing
- intent detection
- project-aware responses
- priority and deadline analysis
- assistant response generation
- API error handling

The frontend and backend communicate only through HTTP API requests.

## Demo Behaviour

Flowdeck is presented as a controlled portfolio demo.

- Demo data is temporary.
- Project changes are stored only in the current browser session.
- Visitors are limited to a maximum of 10 projects.
- Refreshing the page preserves the current session.
- Closing the browser session may clear temporary changes.
- Visitor data is not stored in a shared database.
- One visitor cannot modify another visitor’s workspace.
- The assistant receives the current project list only for processing the active request.

## Project Purpose

Flowdeck demonstrates my ability to combine:

- UX/UI design
- frontend development
- React architecture
- TypeScript
- responsive interface development
- API integration
- Python and Flask
- AI application thinking
- product-oriented decision making

The project was created as part of my transition toward frontend and AI-powered application development.

## Status

Flowdeck is being prepared for publication as an interactive portfolio demo.

The authorized live version will be available through:

**https://acelyalejeune.com**

The source repository is available for professional review only.

## Portfolio Case Study

Flowdeck case study:

https://acelyalejeune.com/public/flowdeck.html

## Author

**Açelya Lejeune**  
UX/UI Designer · Frontend Developer · AI Application Development

GitHub: [LejeuneA](https://github.com/LejeuneA)  
Portfolio: https://acelyalejeune.com

## License

Copyright © 2026 Açelya Lejeune. All rights reserved.

This project is made publicly visible exclusively for portfolio review, recruitment evaluation and professional presentation.

No license is granted to copy, reuse, modify, reproduce, publish, distribute, sublicense, sell, deploy, host, self-host or use this project or any part of it.

The source code, interface design, visual structure, assets, written content, application logic and project concept remain the exclusive property of Açelya Lejeune.

The only authorized public use of Flowdeck is interaction with the official live demo published through:

**https://acelyalejeune.com**

Any other use requires prior written permission from the author.

Third-party libraries, frameworks and dependencies used in this project remain subject to their respective licenses.
