# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

I'm gonna be installing the following libraries
-three for three.js 3D library
-@react-three/fiber a react renderer for three.js library
-@react-three/drei for useful add-ons for react 3 fiber
maath for math related to math helpers for three.js
valtio for managing react states easily and efficiently
react-color a color picker
framer motion for animations

Then I install and initialized tailwind CSS with vite, all the steps can be viewed here https://tailwindcss.com/docs/guides/vite

Hello,
<Environment path="/hdri/" files="potsdamer_platz_1k.hdr" />
Download this hdr file (https://polyhaven.com/a/potsdamer_platz) and place it inside hdri folder inside public folder and in the component add props like this.

valtio is kind of used as a replacement for context

To use framer motion, put the entire part in an animation tag. Use motion.main, motion.header, motion.section, etc.
Put the animation in the className like = {..slideAnimation('left)}
