# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Screenshot](./screenshots/desktop-view.png)
![Screenshot](./screenshots/mobile-view.png)

### Links

- Solution URL: [Add your solution URL here](https://your-solution-url.com)
- Live Site URL: [Add your live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- SCSS (Sass)
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript
- [Karla](https://fonts.google.com/specimen/Karla) font from Google Fonts (weights 400 & 700)

### What I learned

This project reinforced my understanding of:

- Accessible form design using `aria-*` attributes
- Custom form validation with JavaScript
- Dynamic styling using SCSS variables and mixins
- Responsive design using `clamp()` and `media queries`

```scss
input:invalid {
  border: 2px solid red;
}
```
