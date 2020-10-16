/**
 * Takes an array of results from Google or Bing and returns a simplified array for easy render
 * @param {array} results The list of results
 */
export const parseResults = results => {
  if(results && results.length) {
    return results.map(result => {
      return {
        title: result.title || result.name,
        link: result.link || result.url,
        description: result.snippet
      }
    });
  } else {
    return [];
  }
}