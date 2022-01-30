# Portfolio

Portfolio webpage

## The project

This is the webpage for my portfolio.

It shows who I am, my current skills and a way to get in touch.

## Development

### Technologies

The technologies I used to develop this webpage.

- HTML:
  It is used for the webpage structure and React containers.

- CSS:
  It is used to style and animate some of the elements of the webpage and to ensure responsiveness with different devices.

- Javascript:
  It is used to map the data from the data Javascript object and conditionally render it with React, to handle the navBar for small screens and to handle the formsubmit with axios and formsubmit.co.

- React:
  It's the core of the webpage, all the webpage is made of React components using hooks.

- Others:
  I used gsap for scrolling animations

### Challenges

I faced a few challenges for this webpage in different aspects:

- Design

  - I had some trouble with getting the right design and the right colors for the webpage so they work together and look friendly and professional at the same time.

- Coding
  - I had a challenge with the navBar background, I had to code it so the background color resizes and repositions behind the current navigation section, I used a function that takes and index and according to its value it sets the navigation background size and position.
  - I didn't consider the language change and conditional rendering at the beggining so at the end I had to lift up the state to a language component where the rest of the components are rendered.
  - While designing the projects showcase I had to play a while with sizes and interactivity, I had to disable the links when the project card is not the active project card so I used the pseudoclass ::after to block direct user interaction with the project card.
  - I had a problem with the form section rendering in a weird way, It wouldn't position itself at the bottom of the webpage so I couldn't use GSAP or even vanilla Javascript to get the position of the section and set the navbar background or the animations correctly, I had to set the section display to inline-block so it would behave correctly.

### What I would do different if I do it again

- I would use the useContext hook for the webpage language.
- I would focus on performance issues sooner.
