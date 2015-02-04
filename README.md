# Atomic Riot

Playing around with [Riotjs](https://muut.com/riotjs/). Based on [Brad Frost's atomic design](http://bradfrost.com/blog/post/atomic-web-design/).

## Getting started

I assume you are already familiar with node and npm.

These are just static files by the way, so you can serve them however you want.

E.g. using *simple-server*:

```
cd riotjs-demo

npm install simple-server -g

simple-server . 8080
# Simple-Server listening to http://localhost:8080/
```

---

### The rules

The logic behind this structure is pretty simple:

- An **atom** is the smallest piece we can have.
- A **molecule** is composed of at least one **atom**, and can only include those.
- An **organism** is composed of at least one **molecule**, and can possibly include atoms too (not sure about whether this is a good idea... but why not?).

So just keep in mind the rules above when you don't know where you should put your tag.

### Adding a new tag: the steps

1. Create a new folder inside `tags/` folder. You have to choose the tag type (atom, molecule or organism).
2. Create the .tag file inside the folder you just created.
3. Add the HTML tag where you want to use it.
4. Include the compiled .js tag in `index.html` (yes, it doesn't exist yet, it's for later). Make sure to do it after having included riot.js.
5. Mount the tag (e.g. `riot.mount('tag-name', {})`).


### Compiling tags

You can compile tags using *riot*:

```
npm install riot -g

riot src dist
```

Or do it automatically by watching the src folder:

```
riot --w src dist
```

That's it. Have fun!
