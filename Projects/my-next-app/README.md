# Next.js Project

## First modification
1. Commented out the previous project that came with the initialization.
2. Made a movie list in file `page.tsx`
3. Changed the `global.css` file as well.

![image01](https://github.com/nakibworkspace/frontend/blob/main/Projects/my-next-app/images/image01.png?raw=true)

## Second modification
1. Adding a input box to add movies
2. Created a new file named `page.module.css`
3. useState for interactive components
4. Explanations

use client: Marks this file as a Client Component (needed because we use state, events, and the DOM).

State #1:
movie= current value, setMovie= updated function
<string[]> is a TypeScript hint: it’s an array of strings.


State #2: the current text in the input box (a “controlled input”).

- Adds what’s typed to the list.
- Guard: ignore empty/whitespace input.
- setMovies([...movies, newMovie]) creates a new array (spread operator) with the old items + the new one (React expects immutable updates).


![image02](https://github.com/nakibworkspace/frontend/blob/main/Projects/my-next-app/images/image02.png?raw=true)