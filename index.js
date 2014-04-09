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
    'yellow':    {'pre':33, 'post':39}
};

// Some configuration constants
var constants = {
    'on':  '\u001b[%sm',
    'off': '\u001b[%sm',
    'pattern': '%s'
}


