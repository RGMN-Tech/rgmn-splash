module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "style.out.css": "style.css",
  });
  eleventyConfig.addPassthroughCopy({
    "_src": "assets",
  });
};