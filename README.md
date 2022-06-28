### Hexlet tests and linter status:
[![Actions Status](https://github.com/mini-mariya/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/mini-mariya/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/4abfa0334159042380e3/maintainability)](https://codeclimate.com/github/mini-mariya/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/4abfa0334159042380e3/test_coverage)](https://codeclimate.com/github/mini-mariya/frontend-project-lvl2/test_coverage)
[![Node CI](https://github.com/mini-mariya/frontend-project-lvl1/actions/workflows/nodejs.yml/badge.svg)](https://github.com/mini-mariya/frontend-project-lvl1/actions/workflows/nodejs.yml)

# Description:

This repository contains a gendiff function that compares two files and shows the difference. The function works with *.yml* *.yaml* and *.json* formats.

## Setup:

1) Clone the repository:
`git@github.com:mini-mariya/frontend-project-lvl2.git`
2) Install depencies:
`make install`
3) Link the package to execute gendiff function:
`make link`
4) Output the utility reference information:
`gendiff -h`  

## To use gendiff, install the library as a dependency in any NPM package.
`
import genDiff from '@hexlet/code';

const diff = genDiff(filepath1, filepath2);
console.log(diff);
`
## Demonstration of the gendiff utility:

### Comparison of flat files:
*.json* format:
[![asciicast](https://asciinema.org/a/qOfxvpEzhCxogAjklecFocElH.svg)](https://asciinema.org/a/qOfxvpEzhCxogAjklecFocElH)
*.yml* *.yaml* format:
[![asciicast](https://asciinema.org/a/3xkdZTRBnJ4YxDbkgbYInk1DJ.svg)](https://asciinema.org/a/3xkdZTRBnJ4YxDbkgbYInk1DJ)

### Recursive comparison:
[![asciicast](https://asciinema.org/a/uVkeDyPpkkAo8yHnuKzY7N9Zu.svg)](https://asciinema.org/a/uVkeDyPpkkAo8yHnuKzY7N9Zu)

### Compare files in json and plain format:
[![asciicast](https://asciinema.org/a/qhHIMIf71wYNfG9KHGtqM9kfy.svg)](https://asciinema.org/a/qhHIMIf71wYNfG9KHGtqM9kfy)
