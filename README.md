# Live-News Website 📰

## Overview 🌍

Welcome to the **Live-News Website**! This is a dynamic, real-time news aggregation platform that fetches and displays news articles from multiple sources based on various categories and user search queries. The website uses the **News API** to retrieve the latest news articles and display them in an interactive and visually appealing card format.

The platform offers several key features, including exploring articles from categories like **Tech**, **Finance**, and **Politics**, as well as the ability to search for specific topics. You can stay updated with real-time news in just a few clicks!

---

## Features ✨

- **Real-Time News Feed**: Displays live news articles fetched from multiple sources via the News API.

- **Interactive News Cards**: News is displayed in easy-to-read, clickable cards with images, titles, descriptions, and source details.

- **Category Navigation**: Quickly browse news in categories like **Tech**, **Finance**, and **Politics**.

- **Search Functionality**: Search for news articles by entering keywords or topics of interest.

- **Mobile Responsive Design**: Fully responsive layout that adapts to various screen sizes, making it perfect for both desktop and mobile users.

- **News Article Links**: Clicking on a news article title opens the full article in a new tab for detailed reading.

- **Page Reload**: You can reload the page to fetch fresh news articles from the API.

---

## Technologies Used ⚙️

The following technologies and tools are used to create and run the Live-News Website:

- **HTML5**: Markup language used to structure the web pages.

- **CSS3**: Styles the website, providing a modern and clean look.

- **JavaScript**: Powers the interactive features, including fetching news and handling user interactions.

- **News API**: Fetches the latest news articles from a wide range of sources.

- **Google Fonts**: For beautiful typography with fonts like **Noto Sans** and **Ubuntu**.

---

## Installation Instructions 💻

To run this project locally on your machine, follow these simple steps:

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/live-news-website.git
```

### 2. Get Your News API Key 🗝️

You need an API key from News API to fetch live news articles. To get started:

- Go to News API and sign up for an API key.

- Replace the placeholder API_KEY in the script.js file with your actual API key:

```bash
const API_KEY = "YOUR_API_KEY_HERE"; // Replace with your News API key
```

### 3. Open the index.html File 🌐

After setting the API key, open the index.html file in your browser to start exploring the news feed.

## File Structure 📂

Here's the structure of the project:

```bash
/live-news-website
|-- index.html            # The main HTML file containing the website's layout and structure.
|-- style.css             # The CSS file for styling the website and making it responsive.
|-- script.js             # JavaScript for fetching data from the News API and handling user interactions.
|-- logo.png              # The logo image for the website (replace with your logo).
|-- /images               # Folder to store any other images (optional).
|-- README.md             # This README file for project documentation.
```

## How It Works 🔧

### 1. Fetching News Articles 📥

The website fetches news articles from the News API using JavaScript. The API endpoint used is:

```bash
https://newsapi.org/v2/everything?q=QUERY&apiKey=API_KEY
```


Where:

- `QUERY` is the topic or search term (e.g., **Tech**, **Finance**, **Politics**).

- `API_KEY` is your personal key obtained from [News API](https://newsapi.org/).

### 2. Displaying News Articles 📰

Once the data is fetched, news articles are displayed dynamically in **cards**. Each card includes the following information:

- **Image**: The image related to the article.

- **Title**: The title of the news article.

- **Description**: A brief summary of the article.

- **Source and Date**: The news source and publication date.

The cards are generated using a **template** (`template-news-card`) in the HTML, and JavaScript is used to fill the data dynamically into the card structure.

### 3. Handling User Interactions 🖱️

- **Navigation**: Click on the navigation items (e.g., **Tech**, **Finance**, **Politics**) to filter news articles based on the selected category.

- **Search**: Enter a search term in the search bar and click the search button to retrieve articles related to that search query.

- **Card Click**: Clicking on a news card opens the article in a new tab for detailed reading.

---

## Customizing the Website 🔧

### Changing the API Key 🔑

To fetch news articles using your personal News API account, replace the placeholder `YOUR_API_KEY_HERE` with your actual API key in the `script.js` file:

```javascript
const API_KEY = "YOUR_API_KEY_HERE"; // Insert your News API key here
```

### Modifying the Look and Feel 🎨

You can easily customize the visual aspects of the website by editing the style.css file:

**Fonts**: Change the fonts or font sizes by modifying the Google Fonts link.

**Colors**: Modify the color variables in the CSS file to adjust the website’s color scheme according to your preferences.

**Layout**: Adjust margins, paddings, and responsive breakpoints as needed to make the site look even better on different screen sizes.

### Changing the Logo 🖼️

To customize the website's logo, replace the logo.png file with your own logo image in the same directory. Ensure that the logo is appropriately sized for the header, and it will automatically be displayed in the navigation bar.

## Contributing 🤝

We welcome contributions to improve and extend this project! If you'd like to contribute, please follow these steps:

**1. Fork the repository on GitHub.**

**2. Clone your fork to your local machine.**

**3. Create a new branch** `(git checkout -b feature-name)`.

**4. Make your changes and commit them** `(git commit -am 'Add feature')`.

**5. Push your changes to your fork** `(git push origin feature-name)`.

**6. Open a pull request to merge your changes into the main repository.**

<!-- ## Screenshots 📸

Below are some screenshots of how the website looks on different devices:

### Desktop View 💻
![Desktop View](path_to_screenshot_desktop_image)

### Mobile View 📱
![Mobile View](path_to_screenshot_mobile_image) -->

---

## Frequently Asked Questions (FAQ) ❓

### Q: How can I add more news categories?

You can modify the `onNavItemClick()` function in the `script.js` file to add new categories. For example:

- Add a new `<li>` element in the HTML for the new category.

- Pass the corresponding query to the News API when the user clicks on the new category.

### Q: Why am I seeing a blank page?

Ensure that you've replaced `YOUR_API_KEY_HERE` with a valid **News API key**. Without a valid key, no news articles will be fetched, and the page may appear blank.

### Q: Can I modify the layout for mobile users?

Yes! You can modify the CSS in the `style.css` file, especially within the **media query breakpoints**, to further tweak the layout for smaller screens and enhance the user experience on mobile devices.

---

## Acknowledgements 🙏

- **News API** for providing the real-time news data.

- **Google Fonts** for providing beautiful fonts.

- **Unsplash** for some of the images used (optional).

- This project was created as part of a personal web development project to showcase front-end development skills.

---

<!-- 
## Contact 📬

If you have any questions, suggestions, or feedback, feel free to contact me at [your-email@example.com](mailto:your-email@example.com). I'd love to hear from you! -->
---

## Future Enhancements 🚀

- Add mobile support for better functionality across all devices.

- Implement additional filtering options across more categories.

- Enhance the search functionality with advanced filtering and sorting options.

- Include a “favorites” feature for users to save articles of interest.
