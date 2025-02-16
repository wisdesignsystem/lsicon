# Lsicon Icon Manage and Release

<p align="center">
  <a href="https://lsicon.com" target="_blank">
    <picture>
      <img alt="Lsicon Logo" width="216" height="56" style="max-width: 100%" src="https://img.seergb.com/lsicon-logo-black.svg">
    </picture>
  </a>
</p>

![license](https://img.shields.io/github/license/wisdesignsystem/lsicon-figma)

-------

**[Lsicon / Icon Manage and Release](https://www.figma.com/community/plugin/1463361432907984033)** is a Figma plugin designed for designers to streamline the icon management process. It allows you to publish and update icons without relying on other platforms:

- Export SVGs from Figma → GitHub
- Convert to React components
- Publish to npm
- Integrate seamlessly into projects
- Preview your NPM resources via lsicon.com

Developers can easily use these icon components in their projects, with the entire process being highly efficient and requiring minimal manual intervention.

## How It Works

![Workflow](https://github.com/user-attachments/assets/b5c1b110-ac2e-4b70-9295-612c9d673aa0)

Although the process may seem complex, most operations are automated by the plugin. You only need to perform light configuration without delving into technical details.

## Prerequisites

Before using the plugin, ensure you have completed the following preparations:

1. **GitHub Account** - If you don't have a GitHub account, please [sign up](https://github.com/signup).
2. **NPM Account** - If you don't have an npm account, please [sign up](https://www.npmjs.com/signup).

## Configuration Tutorial

If you are using the plugin for the first time, it is recommended to read the tutorial to familiarize yourself with the process. If you are already familiar, you can skip to the relevant section.

- Figma playground file: [Figma Link](https://www.figma.com/design/oCToJkCk9aOZrDXuX9VAwE/Lsicon-Demo?node-id=0-1&p=f&t=9r9El2yjjm2FzEfS-0)
- Video Tutorial: [Youtube Link](https://youtu.be/5cCWFbqdTkg)

### 1. Create a GitHub Repository

You need to create a repository on GitHub to host the icon resources.
- Create New - [Link](https://github.com/new)

### 2. Create a GitHub Personal Access Token

When using the plugin, operations such as submitting, creating PRs, and merging PRs require appropriate permissions. You need to create a dedicated GitHub Personal Access Token.
- Personal access tokens - [Link](https://github.com/settings/personal-access-tokens)
- Enable necessary permissions:
    - *Action: Read and write*
    - *Contents: Read and write*
    - *Metadata: Read-only*
    - *Pull requests: Read and write*
    - *Workflows: Read and write*

### 3. Create an NPM Token

Since the icons will eventually be published to NPM, you need to obtain and save an NPM token.
- [NPM](https://npmjs.com) - Link https://www.npmjs.com/settings/ `yourname` /tokens/granular-access-tokens/new

### 4. Create an Actions Secret Token

To ensure account security, we use GitHub repository secrets to manage the npm token, which is a secure management method. For details, refer to the video below:

> [!IMPORTANT]
> Be sure to use the name `NPM_TOKEN` and do not modify it.

- Create actions secret - Link（https://github.com/ `yourname` / `your-repository` /settings/secrets/actions/new）

### 5. Manage Icons in Figma

You can refer to our [Lsicon Figma Icon Library](https://www.figma.com/community/file/1411589715699221517) structure to design your Figma file. Alternatively, you can open the plugin in Figma and select the Playground file to view an example.

Please ensure that your Figma file meets the following requirements; otherwise, resource synchronization may fail.
- Icons must use Create component set, and the variant name must be named `style`.
- If you have multiple styles, add multiple types under the current component's style, e.g., (style=outline, style=filled, style=colorful...).
- If you have multiple categories, place the icons inside a Frame, and the Frame name will be displayed as the category name.

### 6. Use the Plugin in Figma

🎉 Congratulations, you have completed all configurations. Now, open the **[Lsicon / Icon Manage and Release](https://www.figma.com/community/plugin/1463361432907984033)** plugin in Figma to start using it.
1. GitHub Repository URL: The repository address where the icons will be stored, typically https://github.com/ `name`/ `your-repository`.
2. GitHub Personal Access Token: Enter the Personal Access Token created in the second step.
3. NPM Package Name: Enter your NPM package name or a new package name you wish to create.
4. What Kind of Version: Choose the version you want to publish, referring to [Semantic Versioning (SemVer)](https://semver.org/).
