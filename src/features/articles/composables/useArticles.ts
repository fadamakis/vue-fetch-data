export default function useArticles() {
  function fetchLatestArticles() {
    const mediumUrl =
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@fadamakis";

    return new Promise((resolve) => {
      const articles = fetch(mediumUrl).then((res) => res.json());
      setTimeout(resolve, 2000, articles);
    });
  }

  function fetchLatestArticle() {
    return fetchLatestArticles().then((response: any) => response.items[0])
  }

  return { fetchLatestArticle, fetchLatestArticles };
}
