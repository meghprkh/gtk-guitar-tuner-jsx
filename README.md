GTK Demo - Guitar Tuner JSX
===========================

This demo shows the usage of JSX to create the Guitar Tuner GTK demo. This
does not have a Virtual DOM implemetation which patches the current DOM, (so
its still not quite React-like) however I am working on it.

Features
========
- Use JSX to create the UI
- Use the latest ES6/7 syntax using Babel
- Import/export modules in the commonjs fashion using webpack
- Use packages from the nodejs ecosystem

Try it out
==========
No setup required for this!!

```
curl https://gist.githubusercontent.com/meghprkh/38067896f6fec003268a684905ec3aef/raw/ > demo_out.js
gjs demo_out.js
```

Setup
=====

You must have nodejs and npm installed.

```
npm install
```

Build & Run
===========

```
npm run demo
```

Run
===

```
gjs build/demo_out.js
```
