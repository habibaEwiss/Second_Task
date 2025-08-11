import'./detailedCountry.scss'

export class DetailedCountry {
  constructor(country, backBtnFunction) {
    this.country = country;  
    this.backBtnFunction = backBtnFunction;   
  }

  renderOfSelectedCountry() {
const detailedContainer = document.createElement('div');
detailedContainer.className = 'detailed-country';

detailedContainer.innerHTML = `
  <button class="detailed-country__back-button">
    <p><strong>←</strong></p> Back
  </button>

  <div class="detailed-country__layout">
    <img src="${this.country.flags.png}" alt="Flag of ${this.country.name}" class="detailed-country__img">
    <div>
      <h3>${this.country.name}</h3>

      <div class="detailed-country__details">
      <div class="detailed-country__Left-side">
        <p>
        <strong>Native Name:</strong>
        <span>${this.country.nativeName}</span>
        </p>
        <p>
        <strong>Population:</strong>
        <span>${this.country.population.toLocaleString()}</span>
        </p>
        <p>
        <strong>Region:</strong>
        <span>${this.country.region}</span>
        </p>
        <p>
        <strong>Sub Region:</strong>
        <span>${this.country.subregion}</span>
        </p>
        <p>
        <strong>Capital:</strong>
        <span>${this.country.capital}</span>
        </p>
        </div>
        <div class="detailed-country__right-side">
        <p>
        <strong>Top Level Domain:</strong> 
        <span>${this.country.topLevelDomain}</span>
        </p>
        <p>
        <strong>Currencies:</strong>
        <span>${this.country.currencies.map(curr => curr.name).join(', ')}</span>
        </p>
        <p>
        <strong>Languages:</strong> 
        <span>${this.country.languages.map(lang => lang.name).join(', ')}</span>
        </p>
        </div>
      </div>
    </div>
  </div>
`;

    detailedContainer.querySelector('.detailed-country__back-button').addEventListener('click', () => {
        this.backBtnFunction();
    
    });

    return detailedContainer;
  }
}
