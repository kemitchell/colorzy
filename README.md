# colorzy

colorzy is a simple tools that adds formatting methods to objects. Most useful with String, I think.

## Changelog

Take a look at the commits/changes on [GitHub](https://github.com/dak0rn/colorzy/commits/master).

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


The **methods** are named like the formatting option, some has a *Background* prefix.
So, to print red text on green background (please don't do that):

```javascript
console.log("hello, world".red().greenBackground())
```

## Elephant

To print all formatting options to the console, use `colorzy.elephant()`.

## Example usage

The following example demonstrates the usage of the tool:

```javascript
var colorzy = require("./index");
var util = require("util");

colorzy.colorize(String.prototype,true);


console.log(" * |  0  1  2  3  4  5  6  7  8  9".green());
console.log("---+------------------------------".green());
for( var i = 0; i < 10; i++ ) {
    util.print((" "+i+" | ").green());

    for( var j = 0; j < 10; j++ ) {
        var v = i * j;
        var r = ""+(i * j);

        if( r <  10 ) r = " "+r;

        if( i == j )
            if( v < 10 )
                r = r.bold().magenta();
            else
                r = r.redBackground().black();
        else if( v < 10 )
            r = r.blue();
        else
            r = r.yellow();

        util.print(r+" ");
    }

    util.print('\n');
}
```