import './style.scss';

import { HeaderComponent } from './components/header/header.js';
import { SearchComponent } from './components/search/search.js';
import { CountryApp } from './components/Home/Home.js';
document.querySelector('#APP').innerHTML = `
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">

  <div class="header-container"></div>
  <div class="Search_Filter_Container">
    <div class="search-container"></div>
    <div class="filter-container"></div>
  </div>
  <div class="countries-container"></div>
  
`;

const app = new CountryApp(
  '.countries-container',
  '.filter-container',
  '.search-container'
);

const searchContainer = document.querySelector('.search-container');
searchContainer.appendChild(
  SearchComponent(query => app.handleSearchChange(query))
);

const headerContainer = document.querySelector('.header-container');
const header = new HeaderComponent(() => {
  document.body.classList.toggle('dark-mode');
});
headerContainer.appendChild(header.getElement());

app.Render();
