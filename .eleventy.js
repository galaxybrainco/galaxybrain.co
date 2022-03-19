const { DateTime } = require('luxon');

module.exports = function (config) {
  config.addPassthroughCopy('src/img');
  config.addPassthroughCopy('src/fonts');
  config.addPassthroughCopy('src/CNAME');

  config.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "UTC" }).toLocaleString(DateTime.DATE_MED);
  });

  config.addFilter("smartquotes", (post) => {
    const hawaii = new RegExp(/(?<=<(h|l|p[^r]).*)Hawai'i/g);
    const slang = new RegExp(/'(cause|em|til|twas)/g);
    const apostrophes = new RegExp(/(?<=<(h|l|p[^r]).*)\b'\b/g);
    const years = new RegExp(/(?<=\s)'(?=\d)/g);
    const openDoubles = new RegExp(/(?<=<(h|l|p[^r]).*)(?<=\s|>)&quot;/g);
    const closeDoubles = new RegExp(/(?<=<(h|l|p[^r]).*“.*)&quot;(?=(\s|\p{P}|<))/gu);
    const openSingles = new RegExp(/(?<=<(h|l|p[^r]).*)(?<=\s|>)'/g);
    const closeSingles = new RegExp(/(?<=<(h|l|p[^r]).*‘.*)'(?=(\s|\p{P}|<))/gu);
    return post
      .replace(hawaii, "Hawaiʻi").replace(slang, "’$1")
      .replace(apostrophes, "’").replace(years, "’")
      .replace(openDoubles, "“").replace(closeDoubles, "”")
      .replace(openSingles, "‘").replace(closeSingles, "’");
  });

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: 'dist',
    }
  }
};
