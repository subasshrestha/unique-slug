@subasshrestha/unique-slug
==========================

Generate a unique slug for a given string by appending random string at the end
```
const { slugify, slugifyWithoutRandomText } = require('@subasshrestha/unique-slug');

console.log(slugify("Text for slug"));
// "text-for-slug-aTyp-uYrt"

console.log(slugifyWithoutRandomText("Text for slug"));
// "text-for-slug"
```
### slugify(str, n) → slug of str + (n-n) random string
### default value of n is 4