# Development Project Management Platform - Development Documentation

## Table of Contents

- [Development Project Management Platform - Development Documentation](#development-project-management-platform---development-documentation)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Technology Stack](#technology-stack)
  - [Project Structure](#project-structure)
  - [Feature Description](#feature-description)
  - [Installation and Running](#installation-and-running)
    - [1. Clone the repository](#1-clone-the-repository)
    - [2. Install dependencies](#2-install-dependencies)
    - [3. Run the development server](#3-run-the-development-server)
    - [4. Build the production version](#4-build-the-production-version)
  - [Route Design](#route-design)
  - [State Management](#state-management)
  - [Component Design](#component-design)
    - [ProjectCard.vue](#projectcardvue)
    - [ProjectList.vue](#projectlistvue)
    - [ProjectDetail.vue](#projectdetailvue)
  - [API Integration](#api-integration)
    - [API Endpoints](#api-endpoints)
  - [Style Design](#style-design)
  - [Contribution Guide](#contribution-guide)
  - [Running Tests](#running-tests)

## Project Overview

The Development Project Management Platform is a Vue frontend application for displaying all development projects and related content. Users can view project development progress, project details, and other information on the platform. This platform aims to provide a centralized and intuitive interface to help development teams better manage and track project status.

## Technology Stack

- **Frontend Framework**: Vue 3 (using Composition API)
- **Build Tool**: Vite
- **State Management**: Pinia
- **Route Management**: Vue Router
- **Styling**: Tailwind CSS
- **API Authentication**: Google OAuth2 (if authentication is required)

## Project Structure

```bash
project-dashboard/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ProjectCard.vue
│   │   ├── ProjectList.vue
│   │   ├── ProjectDetail.vue
│   ├── views/
│   │   ├── HomePage.vue
│   │   ├── ProjectOverview.vue
│   │   ├── ProgressTracker.vue
│   ├── store/
│   │   ├── projectStore.js
│   ├── router/
│   │   ├── index.js
│   ├── App.vue
│   ├── main.js
├── package.json
├── vite.config.js
└── README.md
```

## Feature Description

- **Project List**: Displays a summary of all development projects (name, progress percentage, responsible person, etc.).
- **Project Detail**: Displays detailed information about a selected project, including a timeline of development progress.
- **Progress Tracking**: Displays the development progress of a selected project, showing the completion status of each development stage.
- **Search and Filter**: Provides search and filter functionality, allowing users to quickly find specific projects or filter projects based on tags.

## Installation and Running

### 1. Clone the repository

```bash
git clone https://github.com/your-repo/project-dashboard.git
cd project-dashboard
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

### 4. Build the production version

```bash
npm run build
```

## Route Design

- **`/`**: Home page, displays project overview and latest progress.
- **`/projects`**: Project list page, displays all projects.
- **`/projectDetail/:id`**: Project detail page, displays the specific project's details.
- **`/progress`**: Development progress tracking page, displays the development progress of all projects based on timeline.

## State Management

Use Pinia to manage project state, including:

- Project list data
- Current selected project details
- Project progress data

```javascript
// src/store/projectStore.js
import { defineStore } from 'pinia'

export const useProjectStore = defineStore('projectStore', {
  state: () => ({
    projects: [],
    selectedProject: null
  }),
  actions: {
    fetchProjects() {
      // API 呼叫來獲取專案列表
    },
    selectProject(id) {
      this.selectedProject = this.projects.find((project) => project.id === id)
    }
  }
})
```

## Component Design

### ProjectCard.vue

- Used to display basic information about a single project
- Accepts project name, progress percentage, responsible person, etc. as props

### ProjectList.vue

- Displays a list of projects
- Uses the ProjectCard component to display each project

### ProjectDetail.vue

- Displays detailed information about the selected project
- Retrieves the current selected project data from the store

## API Integration

All project data and progress tracking data is provided by the backend API, and API requests are made using Axios.

```javascript
import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000
})

// 範例 API 呼叫
api.get('/projects').then((response) => {
  // 處理回應資料
})
```

### API Endpoints

- **GET /projects**: Retrieve a list of all projects.
- **GET /projects/:id**: Retrieve details of a specific project.
- **POST /projects**: Create a new project.
- **PUT /projects/:id**: Update an existing project.
- **DELETE /projects/:id**: Delete a project.

## Style Design

Use Tailwind CSS to style the design, ensuring a clean and maintainable design. Custom styles can be extended to meet specific needs.

## Contribution Guide

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## Running Tests

To run tests, use the following command:

```bash
npm run test
```
