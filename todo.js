/*jshint esversion: 6 */

function main () {
  // Do our initialization
  const add_button = document.getElementById('add-button');
  add_button.addEventListener('click', add);
}

function getFormInfo(){
  const title = document.getElementById('form-title').value;
  const description = document.getElementById('form-description').value;
  // clear form
  document.getElementById('form-title').value = '';
  document.getElementById('form-description').value = '';
  return [title, description];
}

function add(e){
  e.preventDefault();
  [title, description] = getFormInfo();
  if (title === ''){
    // 
    alert('Error: Todo needs a Title');
  } else if (description === '') {
    alert('Error: Description can\'t be empty.');
  } else {
    // Build the DOM elements
    const list=document.getElementById('todo-list');
    const newitem = document.createElement('li');
    const newcard = document.createElement('div');
    const newcardbody = document.createElement("div");
    const title_h5 = document.createElement("h5");
    const description_p = document.createElement("p");
    const close_icon = document.createElement('span');
    // Add the title and description text to elements
    title_h5.append(document.createTextNode(title));
    description_p.append(document.createTextNode(description));
    // Add a utf-8 close window symbol
    close_icon.appendChild(document.createTextNode('\u274e'))
    // Assemble the card
    newcard.appendChild(close_icon)
    newcardbody.appendChild(title_h5);
    newcardbody.appendChild(description_p);
    newcard.appendChild(newcardbody);
    newitem.appendChild(newcard);
    list.appendChild(newitem);
    // Add CSS to more easily search later
    close_icon.classList.add('close-icon')
    // Add bootstrap CSS to make it look nice
    close_icon.classList.add('text-right')
    newitem.classList.add('list-group-item');
    newcard.classList.add('card');
    newcard.classList.add('rounded');
    newcard.classList.add('border');
    newcard.classList.add('bg-light');
    newcardbody.classList.add('card-body');
    // Set up ability to close card
    close_icon.addEventListener('click',()=>{
      while (newitem.firstChild) {
        newitem.removeChild(newitem.firstChild);
      }
      list.removeChild(newitem);
    })
  }
}


window.onload = main;
