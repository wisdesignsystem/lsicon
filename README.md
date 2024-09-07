<p align="center">
  <a href="https://lsicon.com" target="_blank">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://img.seergb.com/lsicon-logo-white.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://img.seergb.com/lsicon-logo-black.svg">
      <img alt="lsicon" width="216" height="56" style="max-width: 100%" src="https://img.seergb.com/lsicon-logo-black.svg">
    </picture>
  </a>
</p>
<p align="center">
 Elegant and Open-Source Icon Library
<br>Discover over 700 beautifully crafted SVG icons, customizable to fit any project.
<p>

<p align="center">
  <a href="https://lsicon.com"><strong>Browse Lsicon.com &rarr;</strong></a>
</p>

<p align="center">
    <a href="https://github.com/wisdesignsystem/lsicon?tab=MIT-1-ov-file"><img src="https://img.seergb.com/mit.svg" alt="License"></a>
</p>

## Installation
The icon component library is independently provided via npm. To use the icon library components, you need to install [@wisdesign/lsicon](https://www.npmjs.com/package/@wisdesign/lsicon) separately.

### npm
```sh
$ npm install @wisdesign/lsicon --save
```
### yarn
```sh
$ yarn add @wisdesign/lsicon
```
### pnpm
```sh
$ pnpm install @wisdesign/lsicon --save
```

## Basic Usage
```js
import { LeftIcon } from '@wisdesign/lsicon'
 
function () {
  return <LeftIcon />
}
```
## Style

<p align="center">
    <picture>
      <img alt="lsicon" width="208" height="120" style="max-width: 100%" src="https://img.seergb.com/icon-demo.svg">
    </picture>
</p>

```js
//Javascript
import { UrgencyIcon, UrgencyFilledIcon } from "@wisdesign/lsicon";
 
function () {
  return (
    <>
      <UrgencyIcon className={styles.one} />
      <UrgencyFilledIcon className={styles.two} />
      <UrgencyIcon className={styles.three} />
    </>
  )
}
```
```css
/* CSS */
.one {
  font-size: 24px;
  color: #4f46e5;
  padding-right: 16px;
}
 
.two {
  font-size: 32px;
  color: black;
  padding-right: 16px;
}
 
.three {
  font-size: 40px;
  color: #64748b;
  padding-right: 16px;
}
  ```

## Contribution

If you want to fix an icon error or add a new icon:

1. Please first check the Issue list to confirm whether someone has already raised the same or similar issue.
2. If not, you can create a new Issue, detailing the problem you encountered or your suggestions.

**Icon errors** could include issues with the outline/filled types, icon sizes not aligning with the 16px grid standard, ambiguous naming, etc.

**For adding new icons**, please ensure that the new icons have a universal appeal. At the moment, we do not accept requests for personalized icons.


## License

This library is MIT licensed.
