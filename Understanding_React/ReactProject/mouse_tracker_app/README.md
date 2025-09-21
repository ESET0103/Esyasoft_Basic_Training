# Mouse Tracker

A simple project using **React hooks** (`useState`, `useEffect`) and mouse events.

## Features
-> Tracks mouse **X, Y** Coordinates in real time.
-> Uses `useEffect` to add and clean up event listeners.
-> Demonstrates both:
  - Global tracking with `window.addEventListener`.
  - Local tracking with `onMouseMove` on a specific element.
-> Prevents memory leaks by removing event listeners when the component unmounts.
s