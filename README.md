# 📦 Vanilla Tilt for Svelte

<p align="center">
    <img src="https://www.svgrepo.com/download/354414/svelte.svg" width="240">
    <p>A <strong><u>Svelte</u></strong> plugin that implements <u>Vanilla Tilt JS</u> Library features with <strong>Svelte/SvelteKit</strong>.</p>
</p>

<center>
    
[![MIT License][license-shield]][license-url]
[![Linkedin][linkedin-shield]][linkedin-url]
[![Discord][discord-shield]][discord-url]
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]

[![GitHub license](https://img.shields.io/github/license/rhpo/vanilla-tilt-svelte)](https://github.com/rhpo/vanilla-tilt-svelte/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/rhpo/vanilla-tilt-svelte)](https://github.com/rhpo/vanilla-tilt-svelte/issues)
[![GitHub stars](https://img.shields.io/github/stars/rhpo/vanilla-tilt-svelte)](https://github.com/rhpo/vanilla-tilt-svelte/stargazers)

</center>




---

# ✱ Table of Contents 📖 

- [🎤 Introduction](#introduction)
- [⚒️ Installation](#installation)
- [🤚 Usage](#usage)
- [⚙️ Options](#options)
- [🫂 Contributing](#contributing)
- [📜 License](#license)

---

# 🎤 Introduction

Vanilla Tilt Svelte is a Svelte plugin that allows you to easily incorporate the interactive tilt effect from the Vanilla Tilt JS library into your Svelte applications. With this plugin, you can add a subtle and engaging tilt effect to any element on your page, enhancing the user experience and adding a touch of interactivity.

The plugin is built upon the popular Vanilla Tilt JS library, which provides a simple and lightweight solution for adding tilt effects to elements. By integrating Vanilla Tilt JS with Svelte, Vanilla Tilt Svelte makes it effortless to utilize the library's features within your Svelte or SvelteKit projects.

---

# ⚒️ Installation

To install Vanilla Tilt Svelte, you can use your preferred package manager. Here are a few examples:

### NPM

```shell
npm install vanilla-tilt-svelte
```

### Yarn

```shell
yarn add vanilla-tilt-svelte
```

---

# 🤚 Usage

To use Vanilla Tilt Svelte, follow these steps:

1. Import the `svelteTilt` function from the `vanilla-tilt-svelte` package in your Svelte component.

```html
<script>
   import svelteTilt from 'vanilla-tilt-svelte';
</script>
```

2. Apply the `svelteTilt` function as a Svelte directive to the element you want to apply the tilt effect to, passing the desired options as an object.

```html
<div use:svelteTilt={{
   // Options object
}} />
```

---

# ⚙️ Options

The `svelteTilt` function accepts an options object that allows you to customize the behavior and appearance of the tilt effect. Here are the available options:

- `reverse` (boolean): Reverse the tilt direction.
- `max` (number): Maximum tilt rotation in degrees.
- `startX` (number): Starting tilt on the X-axis in degrees.
- `startY` (number): Starting tilt on the Y-axis in degrees.
- `perspective` (number): Transform perspective; lower values create a more extreme tilt effect.
- `scale` (number): Scaling factor for the element.
- `speed` (number): Speed of the enter/exit transition.
- `transition` (boolean): Enable or disable the transition on enter/exit.
- `axis` (string|null): Enable tilting on a specific axis ("x" or "y").
- `reset` (boolean): Reset the tilt effect on exit.
- `reset-to-start` (boolean): Choose whether the exit reset goes to [0,0] (default) or [startX, startY].
- `easing` (string): Easing function for the enter/exit transition.
- `glare` (boolean): Enable or disable the "glare" effect.
- `max-glare` (number): Maximum opacity of the "glare" effect (1 = 100%, 0.5 = 50%).
- `glare-prerender` (boolean): Whether to create the glare elements automatically or manually.
- `mouse-event-element` (string|null): CSS selector or link to the HTML element to listen for mouse events.
- `gyroscope` (boolean): Enable or disable device orientation detection using the gyroscope.
- `gyroscopeMinAngleX` (number): The minimum angle on the X-axis that triggers tilt based on gyroscope input.
- `gyroscopeMaxAngleX` (number): The maximum angle on the X-axis that triggers tilt based on gyroscope input.
- `gyroscopeMinAngleY` (number): The minimum angle on the Y-axis that triggers tilt based on gyroscope input.
- `gyroscopeMaxAngleY` (number): The maximum angle on the Y-axis that triggers tilt based on gyroscope input.

### ✱ Example of full usage ✱

```html
<div use:svelteTilt={{
   reverse: false,
   max: 35,
   startX: 0,
   startY: 0,
   perspective: 1000,
   scale: 1,
   speed: 300,
   transition: true,
   axis: null,
   reset: true,
   "reset-to-start": true,
   easing: "cubic-bezier(.03,.98,.52,.99)",
   glare: false,
   "max-glare": 1,
   "glare-prerender": false,
   "mouse-event-element": null,
   gyroscope: true,
   gyroscopeMinAngleX: -45,
   gyroscopeMaxAngleX: 45,
   gyroscopeMinAngleY: -45,
   gyroscopeMaxAngleY: 45
}} />
```

---

# 🫂 Contributing

Contributions are welcome! If you would like to contribute to Vanilla Tilt Svelte, please follow these guidelines:

1. Fork the repository and clone it locally.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure that the project builds successfully.
4. Write tests to cover any new functionality or changes.
5. Commit your changes and push them to your fork.
6. Submit a pull request with a detailed description of your changes.

---

# 📜 License

Vanilla Tilt Svelte is released under the ISC License. See the [LICENSE](https://github.com/rhpo/vanilla-tilt-svelte/blob/main/LICENSE) file for more information.

---

**ℹ️ Project Information:**

- Name: vanilla-tilt-svelte
- Version: 1.0.0
- Description: A Svelte plugin that implements Vanilla Tilt JS Library features with Svelte/SvelteKit.
- **Author: Ramy Hadid (<a href="https://github.com/rhpo">@rhpo</a> on GitHub)**
- **Author's website: [https://www.ramey.ml](https://www.ramey.ml)**
- Repository: [https://github.com/rhpo/vanilla-tilt-svelte](https://github.com/rhpo/vanilla-tilt-svelte)
- Bug Reports: [https://github.com/rhpo/vanilla-tilt-svelte/issues](https://github.com/rhpo/vanilla-tilt-svelte)
- Release date: *Thu Jun 22 2023 15:45:55 GMT+0100 (UTC+01:00)*

[contributors-shield]: https://img.shields.io/github/contributors/rhpo/life.js?style=for-the-badge
[contributors-url]: https://github.com/rhpo/life.js/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/rhpo/life.js?style=for-the-badge
[forks-url]: https://github.com/rhpo/life.js/network/members
[stars-shield]: https://img.shields.io/github/stars/rhpo/life.js?style=for-the-badge
[stars-url]: https://github.com/rhpo/life.js/stargazers
[issues-shield]: https://img.shields.io/github/issues/rhpo/life.js?style=for-the-badge
[issues-url]: https://github.com/rhpo/life.js/issues
[license-shield]: https://img.shields.io/github/license/rhpo/life.js?style=for-the-badge
[license-url]: https://github.com/rhpo/life.js/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[discord-shield]: https://img.shields.io/discord/1006994262174478377?color=7289da&label=Discord&logo=discord&logoColor=white&style=for-the-badge
[discord-url]: https://discord.gg/XXa7PpnMbq
[linkedin-url]: https://www.linkedin.com/in/ramy-hadid-15aa70243/

<br><br>

> Written by <a href="https://www.github.com/rhpo">@rhpo</a> with ❤️.

<br>
