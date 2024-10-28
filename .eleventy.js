module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "_src": "assets",
  });
  eleventyConfig.addPassthroughCopy({
    "style.out.css": "style.css",
  });
  eleventyConfig.addWatchTarget("style.out.css");
};