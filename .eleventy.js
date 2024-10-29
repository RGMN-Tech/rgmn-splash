module.exports = function (eleventyConfig) {
  // Copy style.out.css to _site/style.css
  eleventyConfig.addPassthroughCopy({
    "style.out.css": "style.css",
  });

  // Copy contents of _src directory to _site directory
  eleventyConfig.addPassthroughCopy("src");

  // Watch the style.out.css file for changes
  eleventyConfig.addWatchTarget("style.out.css");
};