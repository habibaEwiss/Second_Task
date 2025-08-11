import './seacrh.scss';

export function SearchComponent(seacrhForCountry) {
  const container = document.createElement('div');
  container.className = 'search';

  container.innerHTML = `
    <input class="search__input" type="text" placeholder="Search for a country..." />
    <i class =" search__icon fa fa-search "></i>

  `;

  const input = container.querySelector('.search__input');

  input.addEventListener('input', () => {
    const query = input.value.trim();  
    seacrhForCountry(query);
  });

  return container;
}
