/**
 * Copyright 2014 Daniel Koch <danielk@foocode.de>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

/* Formatting options */
var catalog = {
    'bold':      {'pre': 1, 'post': 22 },
    'italic':    {'pre': 3, 'post': 23},
    'underline': {'pre': 4, 'post':24},
    'inverse':   {'pre': 7, 'post': 27},

    'black':     {'pre':30, 'post':39},
    'blue':      {'pre':34, 'post':39},
    'cyan':      {'pre':36, 'post':39},
    'green':     {'pre':32, 'post':39},
    'grey':      {'pre':90, 'post':39},
    'magenta':   {'pre':35, 'post':39},
    'red':       {'pre':31, 'post':39},
    'white':     {'pre':37, 'post':39},
    'yellow':    {'pre':33, 'post':39},

    'blackBackground':     {'pre':40, 'post':49},
    'blueBackground':      {'pre':44, 'post':49},
    'cyanBackground':      {'pre':46, 'post':49},
    'greenBackground':     {'pre':42, 'post':49},
    'greyBackground':      {'pre':40, 'post':49},
    'magentaBackground':   {'pre':45, 'post':49},
    'redBackground':       {'pre':41, 'post':49},
    'whiteBackground':     {'pre':47, 'post':49},
    'yellowBackground':    {'pre':43, 'post':49}
};

// Some configuration constants
var constants = {
    'on':  '\u001b[%sm',
    'off': '\u001b[%sm'
};


/* Expose function */

/**
 * Applies colors/formatting to the given object.
 *
 * Very useful for `String` and logging:
 *
 *  var colorzy = require("colorzy");
 *
 *  colorzy.colorize( String.prototype );
 *  console.log("Error".red().underline(), "Something went wrong".yellow());
 *
 * @param {object}  what        Object to extend
 * @param {boolean} force       Force extending. Override existing properties.
 */
exports = module.exports.colorize = function(what,force) {
    if (!what) return;

    for (var key in catalog)
        // Check for existence or if we are allowed to override
        if (!what.hasOwnProperty(key) || force) {
            // Avoid closure problems
            (function (k, a, b) {
                // Apply property
                what[k] = function () {
                    return constants.on.replace(/%s/g, a) +
                        this.toString() +
                        constants.off.replace(/%s/g, b);
                };

            })(key, catalog[key].pre, catalog[key].post);

        }
};

exports = module.exports.elephant = function() {
    for( var key in catalog ) {
        console.log(
                constants.on.replace(/%s/g, catalog[key].pre) +
                key.toString() +
                constants.off.replace(/%s/g, catalog[key].post)
        );
    }
};