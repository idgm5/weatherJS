const Form = (() => {
  const container = document.getElementById('container');
  const render = () => {
  const form = document.createElement('form');
  form.classList.add('form');
  form.setAttribute('id', 'weather-form');

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
  form.appendChild(cityDiv);
  container.appendChild(form);
  };
  return { render };
})();

export default Form;
