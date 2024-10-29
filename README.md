# RGMN Splash

An Eleventy site using Tailwind CSS.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
  - [Development](#development)
  - [Build](#build)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [Dependencies](#dependencies)
- [DevDependencies](#devdependencies)

## Installation

First, clone the repository and navigate into the project directory:

```sh
git clone <repository-url>
cd rgmn-splash
```

Then, install the dependencies:

```sh
npm install
```

## Usage

### Development

To start the development server and watch for changes:

```sh
npm start
```

This will run Eleventy in serve mode and Tailwind CSS in watch mode, ensuring that changes to your files are automatically reflected.

### Build

To build the project for production:

```sh
npm run build
```

This will clean the `dist` directory, build the CSS using Tailwind, and run Eleventy to generate the static site.

## Scripts

- `build`: Cleans the `dist` directory, builds the CSS, and runs Eleventy.
- `start`: Runs Eleventy in serve mode and Tailwind CSS in watch mode in parallel.
- `deploy`: Builds the project and deploys it to GitHub Pages.
- `eleventy`: Runs Eleventy.
- `eleventy:serve`: Runs Eleventy in serve mode.
- `clean:dist`: Cleans the `dist` directory.
- `css:build`: Builds the CSS using Tailwind.
- `css:watch`: Watches for changes in the CSS files and rebuilds them using Tailwind.

## Deployment

To deploy the site to GitHub Pages:

```sh
npm run deploy
```

## Dependencies

- `@11ty/eleventy`: Static site generator.
- `@11ty/eleventy-img`: Image plugin for Eleventy.
- `autoprefixer`: PostCSS plugin to parse CSS and add vendor prefixes.
- `gh-pages`: Utility for deploying projects to GitHub Pages.
- `npm-run-all`: A CLI tool to run multiple npm-scripts in parallel or sequential.
- `postcss`: A tool for transforming CSS with JavaScript plugins.
- `rimraf`: A deep deletion module for Node.
- `tailwindcss`: A utility-first CSS framework.
- `taos`: A Tailwind CSS plugin.

## DevDependencies

- `@11ty/eleventy`: ^2.0.1
- `@11ty/eleventy-img`: ^5.0.0
- `autoprefixer`: ^10.4.14
- `gh-pages`: ^6.2.0
- `npm-run-all`: ^4.1.5
- `postcss`: ^8.4.21
- `rimraf`: ^5.0.1
- `tailwindcss`: ^3.4.14
- `taos`: ^1.0.5