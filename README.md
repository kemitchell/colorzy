# colorzy

colorzy is a simple tools that adds formatting methods to objects. Most useful with String, I think.

## Installation

Available on [npmjs](https://www.npmjs.org/package/colorzy).
Install with `npm`:

```shell
npm install colorzy
```

## Formatting

### General

- Bold
- Italic (does not work everywhere)
- Underline
- Inverse

### Foreground

- Black
- Blue
- Cyan
- Green
- Grey
- Magenta
- Red
- White
- Yellow

### Background

- Black
- Blue
- Cyan
- Green
- Grey
- Magenta
- Red
- White
- Yellow

## Example usage

The following example demonstrates the usage of the tool:

```javascript
var colorzy = require("./index");
colorzy.colorize(String.prototype,true);


// Print some colors
console.log("ERROR".bold().red(), "Something went wrong".yellow());
```