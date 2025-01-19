<div align="center">
                           
# `Country App Using React`

## 🌟 **Live Preview** 🌟

💕 [**Country-App**](https://country-app2025.netlify.app/) 💕  
🎉 Click to explore the fun and laughter! 😄

</div>

## Overview

The **Country App** is a dynamic React application that fetches and displays information about countries from a public API. It provides details such as the country name, population, region, capital, and more. The app is designed with a focus on simplicity, usability, and a clean user interface.

---

## Features

- 🌍 Fetch country data dynamically from a public API.
- 🗺️ Display country details including name, capital, region, population, and flag.
- 🔍 Search functionality to find specific countries.
- 🧭 Filter countries by region.
- 📱 Responsive design for seamless use on all devices.

---

## Installation and Setup

### Prerequisites

- **Node.js** (v16+ recommended)
- A package manager like **npm** or **yarn**

### Steps to Run the Project

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd country-app
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start the Development Server**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

4. **Build for Production** (optional)
   ```bash
   npm run build
   ```

---

## Project Structure

```
├── src
│   ├── components
│   │   ├── CountryCard.jsx
│   │   ├── SearchBar.jsx
│   │   ├── FilterRegion.jsx
│   │   └── CountryDetails.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── styles
│       └── CountryApp.css
├── public
├── package.json
├── vite.config.js
└── README.md
```

---

## API Integration

The app uses the [REST Countries API](https://restcountries.com/) to fetch data. Example API endpoint:

```bash
https://restcountries.com/v3.1/all
```

The API provides data like:

- Name
- Population
- Capital
- Region
- Flags

---

## Challenges Faced

### 1. **Handling API Data**

- **Issue**: Managing nested JSON responses from the REST Countries API.
- **Solution**: Used JavaScript methods like `map` and `filter` to extract and process data.

### 2. **Search and Filter Functionality**

- **Issue**: Combining search and filter functionalities caused overlapping state issues.
- **Solution**: Managed state effectively using React’s `useState` and `useEffect` hooks.

### 3. **Responsive Design**

- **Issue**: Ensuring the app looked good on all screen sizes.
- **Solution**: Used CSS media queries and a mobile-first design approach.

### 4. **Error Handling**

- **Issue**: Handling cases where the API returned errors or no data.
- **Solution**: Added error handling for API calls and fallback UI elements.

---

## Future Enhancements

1. **Dark Mode** 🌙

   - Add support for light and dark themes.

2. **Pagination** 📄

   - Implement pagination for better performance when displaying a large number of countries.

3. **Improved Filters** 🧮

   - Add more advanced filtering options like population range or language.

4. **Optimized Performance** 🚀
   - Use React Query or SWR for efficient data fetching and caching.

---

## Conclusion

The **Country App** is a robust and engaging project that demonstrates the use of React for building dynamic, data-driven applications. It’s a great starting point for further enhancements and a valuable addition to any developer’s portfolio.

---

<div align="center">

##### 🛡️ `All rights reserved by Sajib Bhattacharjee @2025`

### 👨‍💻 `Created with ❤️ by -->`

✨ **Sajib Bhattacharjee** ✨

**💖 Dedicated to "Sir! Anisul Islam" 💖**

> > > > ### 🙏 Thanks a Lot for Visiting...!!!

🌐 [**Portfolio & Projects**](https://github.com/Sajib-Bhattacharjee)  
💼 [**LinkedIn**](https://www.linkedin.com/in/sajib-bhattacharjee-42682a178/)  
📧 [**Contact Me**](mailto:sajibbhattacjarjee2000@gmail.com)

</div>
