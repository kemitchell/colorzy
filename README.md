# colorzy

colorzy is a simple tools that adds formatting methods to objects. Most useful with String, I think.

## Installation

## Example usage

The following example demonstrates the usage of the tool:

```javascript
var colorzy = require("./index");
colorzy.colorize(String.prototype,true);


// Print some colors
console.log("ERROR".bold().red(), "Something went wrong".yellow());
```