// API key here
const API_KEY = "YOUR_API_KEY_HERE";

// News API endpoint URL here
const url = "https://newsapi.org/v2/everything?q=";

// Fetch data from News API
window.addEventListener("load", () => fetchNews("India"));

// Reload the page when the user clicks the "Reload" button
function reload() {
  window.location.reload();
}

// Fetch news from the given query and bind it to the HTML elements
async function fetchNews(query) {
  const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
  const data = await res.json();
  bindData(data.articles);
}

// When a navigation item is clicked, fetch news from the corresponding query and update the displayed news
function bindData(articles) {
  const cardsContainer = document.getElementById("cards-container");
  const newsCardTemplate = document.getElementById("template-news-card");

  // Clear the existing news cards and create new ones based on the fetched data
  cardsContainer.innerHTML = "";

  // Create a new card for each article and append it to the container
  articles.forEach((article) => {
    if (!article.urlToImage) return;
    const cardClone = newsCardTemplate.content.cloneNode(true);
    fillDataInCard(cardClone, article);
    cardsContainer.appendChild(cardClone);
  });
}

// Example usage: Fetch news from India and create new articles for each article and append them to the container
function fillDataInCard(cardClone, article) {
  const newsImg = cardClone.querySelector("#news-img");
  const newsTitle = cardClone.querySelector("#news-title");
  const newsSource = cardClone.querySelector("#news-source");
  const newsDesc = cardClone.querySelector("#news-desc");

  // Example: Replace the default image with the fetched image
  newsImg.src = article.urlToImage;

  // Example: Update the title, description, and source of the news article
  newsTitle.innerHTML = article.title;

  newsDesc.innerHTML = article.description;

  // Example: Format the date and time of the news article, using the local timezone of Jakarta (Asia/Jakarta)
  const date = new Date(article.publishedAt).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta",
  });

  // Example: Update the source and date of the news article in the card's footer
  newsSource.innerHTML = `${article.source.name} · ${date}`;

  // Example: Add an event listener to open the article's URL in a new tab when clicked on the card title
  cardClone.firstElementChild.addEventListener("click", () => {
    window.open(article.url, "_blank");
  });
}

// Example usage: Handle the click event on the navigation items
let curSelectedNav = null;
function onNavItemClick(id) {
  fetchNews(id);
  const navItem = document.getElementById(id);
  curSelectedNav?.classList.remove("active");
  curSelectedNav = navItem;
  curSelectedNav.classList.add("active");
}

// Example usage: Handle the search functionality
const searchButton = document.getElementById("search-button");
const searchText = document.getElementById("search-text");

// Add eventlistener to the search button when the search text changes to something different

searchButton.addEventListener("click", () => {
  const query = searchText.value;
  if (!query) return;
  fetchNews(query);
  curSelectedNav?.classList.remove("active");
  curSelectedNav = null;
});
