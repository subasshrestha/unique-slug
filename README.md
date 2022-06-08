@subasshrestha/unique-slug
==========================

Generate a unique slug for a given string by appending random string at the end
```
const { slugify } = require('@subasshrestha/unique-slug');

console.log(slugify("Text for slug"));
// "text-for-slug-aTyp-uYrt"
```
### slugify(str) → slug of str + (4-4) random string