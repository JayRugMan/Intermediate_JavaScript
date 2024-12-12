// Some page elements
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const input3 = document.querySelector('#input3');
const input4 = document.querySelector('#input4');
const submitButton = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// Asynchronous functions
const showConfirmation = () => {
  console.log('showConfirmation function called');

  // Get the values from the inputs
  const i1 = input1.value;
  const i2 = input2.value;
  const i3 = input3.value;
  const i4 = input4.value;

  // Create a list element
  const ul = document.createElement('ul');
  ul.id = 'responseList';

  // Create a list item for each input
  const confirmationItem1 = document.createElement('li');
  confirmationItem1.textContent = `input1: ${i1}`;
  ul.appendChild(confirmationItem1);

  const confirmationItem2 = document.createElement('li');
  confirmationItem2.textContent = `input2: ${i2}`;
  ul.appendChild(confirmationItem2);

  const confirmationItem3 = document.createElement('li');
  confirmationItem3.textContent = `input3: ${i3}`;
  ul.appendChild(confirmationItem3);

  const confirmationItem4 = document.createElement('li');
  confirmationItem4.textContent = `input1: ${i4}`;
  ul.appendChild(confirmationItem4);

  responseField.appendChild(ul);
}

// Clear page and call Asynchronous functions
const displayEntries = (event) => {
  event.preventDefault();
  console.log('Submit button clicked'); // Debugging log

  // Clear response field
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }

  // Show replies for confirmation
  showConfirmation();
}

submitButton.addEventListener('click', displayEntries);
