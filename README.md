# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshots/desktop.png)
![](./screenshots/desktop-r.png)
![](./screenshots/mobile.png)
![](./screenshots/mobile-r.png)

### Links

- Solution URL: [https://github.com/skhbabez/interactive-rating-component-main](https://github.com/skhbabez/interactive-rating-component-main)
- Live Site URL: [https://skhbabez.github.io/interactive-rating-component-main/](https://skhbabez.github.io/interactive-rating-component-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I learned a bunch about templates and layers, using them to make my code a bit more structured. Layers especially forced me into making my CSS more structured, thinking more about utilities, components, etc. I also focused on accessibility this time around more, putting extra care into making sure the page is readable with a screen reader (NVDA). I am happy with how I structured my HTML, especially finding a neat way to hide a legend while still making it visible to screen readers:

```css
.hidden {
  /*https://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro/35385518#35385518*/
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
}
```

Templates gave me some trouble, as I did not initially fully understand how the DocumentFragment object works. After some research I learned that the reference gets discarded the moment you append it to the DOM. So I had to do all changes to my components before appending them.

### Continued development

I really enjoy layers and I am probably going to use them from this point forward. While they might not add this much benefit to small projects, they force me to think more about how I structure my CSS. I might also try Sass/SCSS next. Templates were more of a novelty thing as I wanted to try them, but I might experiment with web components next.

### Useful resources

- [Hiding legend](https://stackoverflow.com/questions/59120385/should-we-style-a-fieldset-tag-as-hidden-for-accessibility-concerns) - Good css advice on how to hide a legend in an accessible way.
