import "./news-article.js";
import { topHeadlinesUrl } from "./newsApi.js";

window.addEventListener("load", () => {
  getNews();
});

async function getNews() {
  const results = await fetch(topHeadlinesUrl);
  const json = await results.json();

  const main = document.querySelector("main");

  json.articles.forEach(article => {
    const el = document.createElement("news-article");
    el.article = article;
    main.appendChild(el);
  });
}
