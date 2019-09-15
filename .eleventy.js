const htmlmin = require("html-minifier")

module.exports = function (eleventyConfig) {

  // Minify our HTML
  // eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
  //   if (outputPath.endsWith(".html")) {
  //     let minified = htmlmin.minify(content, {
  //       useShortDoctype: true,
  //       removeComments: true,
  //       collapseWhitespace: true
  //     });
  //     return minified;
  //   }
  //   return content;
  // });

  //eleventyConfig.addPassthroughCopy("img");
  //eleventyConfig.addPassthroughCopy("css");
  //eleventyConfig.addPassthroughCopy("js");

  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"],
    dir: {
      input: "source",
      output: "_site"
    }
  };

};