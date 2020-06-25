const Form = (() => {
  const container = document.getElementById('container');
  const render = () => {
  const form = document.createElement('form');
  form.classList.add('form');
  form.setAttribute('id', 'weather-form');

  const titleDiv = document.createElement('div');
  titleDiv.classList.add('form-element-title');
  const title = document.createElement('p');
  title.innerHTML = '<i class="fas fa-cloud"></i> What to wear?';
  titleDiv.appendChild(title);


  const cityDiv = document.createElement('div');
  cityDiv.classList.add('form-element-container');

  const cityLabel = document.createElement('label');
  cityLabel.setAttribute('for', 'city');
  cityLabel.classList.add('label');
  cityLabel.innerHTML = 'City';
  const cityInput = document.createElement('input');
  cityInput.setAttribute('type', 'text');
  cityInput.classList.add('city-input');
  cityInput.required = true;

  cityDiv.append(cityLabel, cityInput);
  form.append(titleDiv, cityDiv);
  container.appendChild(form);
  };
  return { render };
})();

export default Form;
