import './Home.scss'
import { DetailedCountry } from '../detailedCountry/detailedCountry.js';

export class CountryApp {
  constructor(containerSelector, filterContainerSelector, searchContainerSelector) {
    this.allCountries = [];
    this.container = document.querySelector(containerSelector);
    this.filterContainer = document.querySelector(filterContainerSelector);
    this.searchContainer = document.querySelector(searchContainerSelector);
    this.selectedRegion = '';
    this.searchQuery = '';
  }

  async fetchData() {
    const response = await fetch('/data.json');
    this.allCountries = await response.json();
    this.applyFilters();
  }

  displayCountries(countries) {
    this.container.innerHTML = '';

    if (countries.length === 0) {
      this.container.innerHTML = '<p>No countries found.</p>';
      return;
    }

    countries.forEach(country => {
      const card = document.createElement('div');
      card.className = 'countries-container__card';
      card.innerHTML = `
        <img src="${country.flags.png}" alt="Flag of ${country.name}">
        <h3>${country.name}</h3>
        <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
        <p><strong>Region:</strong> ${country.region}</p>
        <p><strong>Capital:</strong> ${country.capital}</p>
      `;

      card.addEventListener('click', () => {

        this.showCountryDetails(country);
      });

      this.container.appendChild(card);
    });
  }

  showCountryDetails(country) {
    this.container.innerHTML = '';
    this.filterContainer.style.display = 'none'; 
    this.searchContainer.style.display='none';

    const detailView = new DetailedCountry(country, () => {
      this.filterContainer.style.display = 'block'; 
      this.searchContainer.style.display='block';

      this.applyFilters(); 

    });

    this.container.appendChild(detailView.renderOfSelectedCountry());
    
  }

  applyFilters() {
    let filtered = this.allCountries;

    if (this.selectedRegion && this.selectedRegion !== 'All') {
      filtered = filtered.filter(c => c.region === this.selectedRegion);
    }

    if (this.searchQuery) {
      filtered = filtered.filter(c =>
        c.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    this.displayCountries(filtered);
  }

  handleRegionChange(region) {
    this.selectedRegion = region;
    this.applyFilters();
  }

  handleSearchChange(query) {
    this.searchQuery = query;
    this.applyFilters();
  }

  createFilterDropdownMenu() {
    const filterContainer = document.createElement('div');
    filterContainer.className = 'filterContainer';

    filterContainer.innerHTML = `
      <select class="filterContainer__Menu">
        <option value="" disabled selected>Filter by Region:</option>
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    `;

    const select = filterContainer.querySelector('.filterContainer__Menu');
    select.addEventListener('change', () => {
      const region = select.value;
      if (!region) return;
      this.handleRegionChange(region);
    });

    this.filterContainer.appendChild(filterContainer);
  }

  Render() {
    this.createFilterDropdownMenu();
    this.fetchData();
  }
}
