# The Kyverno Website

Source for: https://kyverno.io

## Accessing Earlier Documentation

The Kyverno website follows the same support policy as Kyverno, an N-2 policy. Documentation will be made available for the current release and the two previous minor releases. While this extends to the version list on the website, users may still access earlier versions of the documentation by navigating to a specific version by URL.

Documentation for each version is published at a URL like `https://release-X-Y-0.kyverno.io/` where `X` is the major version and `Y` is the minor version. To access the documentation for version 1.9.0, navigate to the URL [https://release-1-9-0.kyverno.io/](https://release-1-9-0.kyverno.io/).

## Contributors

<a href="https://github.com/kyverno/website/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=kyverno/website" />
</a>

Made with [contributors-img](https://contrib.rocks).

## Contributing

This site makes use of the [Starlight](https://starlight.astro.build/getting-started/) theme and [Node v22+](https://nodejs.org/en/blog/announcements/v22-release-announce) is required to render it.

To contribute changes, use the [fork & pull](https://movi.hashnode.dev/how-to-successfully-fork-clone-signoff-and-make-a-pull-request-ckdyt03sy06utjas18lx1cjer) approach.

1\. First create a [fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) of the Kyverno website repository to your GitHub account. By default, the forked repository will be named `website` but can be changed in the settings for your repository if desired. You will later created a PR (pull request) using this fork.

2\. Next, create a local clone using the command:

```sh
git clone https://github.com/{YOUR-GITHUB-ID}/website kyverno-website/
```

3\. Then navigate to the local folder and build the website for local viewing of changes:

```sh
cd kyverno-website
yarn dev
```

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `yarn install`             | Installs dependencies                            |
| `yarn dev`             | Starts local dev server at `localhost:4321`      |
| `yarn build`           | Build your production site to `./dist/`          |
| `yarn preview`         | Preview your build locally, before deploying     |
| `yarn astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `yarn astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/) or read [the Astro documentation](https://docs.astro.build).
