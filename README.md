# WorthCalendar : Professional Tools plateform to improve your appointments and management !

This tool is to discover a new language / Framework. It is in Laravel 11 for Backend/API and VueJs for the Frontend.

Open Source Project with VueJs(TS) : Frontend service for Professionnal Calendar

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

<br/>
<details>
<summary><b>With Docker</b></summary>

## Prerequisites :

> [Install Docker & Docker Compose](https://docs.docker.com/get-started/)

## Setup (after clone it):

```
docker-compose up --build
```

**Backend host :** http://localhost:8000
**Frontend host :** http://localhost:5173

</details>
</br>

<details>
<summary><b>Without Docker</summary>

## Prerequisites :

> [npm, PHP & Laravel](https://laravel.com/docs/11.x#installing-php) > [Composer (:warning: don't forget attribue to the Path variable !:warning:)](https://getcomposer.org/doc/00-intro.md)

## Setup (after clone it):

### Frontend:

```
npm i
cp .env.example .env
npm run dev
```

**Frontend host :** http://localhost:5173
**Backend host :** http://localhost:8000

</details>
<br/>

<details>
<summary> 🚀 Contributing to the Project</summary>

We welcome all contributions, whether you're reporting a bug, suggesting a feature, or improving the codebase! 🎉

### 🐛 Reporting Issues

1. Go to the [Issues](https://github.com/your-repository/issues) tab in this repository.
2. Click on **"New Issue"** to open a ticket.
3. Clearly describe the issue with as much detail as possible. Include screenshots or code snippets if applicable.

---

### 💡 Submitting Pull Requests (PRs)

1. **Fork** the repository by clicking the **"Fork"** button.
2. Clone your forked repository locally:
   ```bash
   git clone https://github.com/your-username/your-repository.git
   ```

---

### 🪲 For Bug fixes :

```bash
   git checkout -b fix/describe-the-bug
```

---

### 🚀 :rocket: For Bug fixes :

```bash
   git checkout -b fix/describe-the-bug
```

</details>
