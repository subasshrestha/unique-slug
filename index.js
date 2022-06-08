const randomText = (length = 8) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let str = '';
    for (let i = 0; i < length; i += 1) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return str;
};
  
const slugify = (string) => string
    .toString() // converts input to a string
    .trim() // trims trailing whitespace
    .toLowerCase() // converts to lowercase
    .replace(/\s+/g, '-') // replaces any spaces with '-'
    .replace(/[^\w\-]+/g, '') // removes any non-word, non-hyphen characters
    .replace(/\-\-+/g, '-') // converts multiple hyphens to a single one
    .replace(/^-+/, '') // removes leading hyphens
    .replace(/-+$/, '') // removes trailing hyphens
    .concat(`-${randomText(4)}-${randomText(4)}`); // adds random text to the end of the slug
  
module.exports = {
    randomText,
    slugify,
}