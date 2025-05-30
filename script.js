let btn = document.querySelector(".btn");
let itemList = document.querySelector(".items");
let input = document.querySelector(".form-input");
let clearall = document.querySelector(".btn-clear");
let filterInput = document.querySelector(".form-input-filter");
// let get_i = document.querySelector(".fa-xmark");








// event listeners
btn.addEventListener('click', additem);
clearall.addEventListener('click', clear);
filterInput.addEventListener('input',filterMathod);


// Functions
function additem(e) {
  e.preventDefault();
  let getInput = input.value.trim();

  if (getInput === "") {
    alert("Please enter a value");
    return;
  }
  let html = `<li >
                ${getInput}
                <button class="remove-item btn-link text-red">
                  <i class="fa-solid fa-xmark"></i>
                </button>
              </li>`;

  itemList.insertAdjacentHTML('afterbegin', html);
  input.value = "";
}

itemList.addEventListener('click',removeitem); 


function removeitem(e) {
  if(e.target.parentElement.classList.contains('remove-item'))
  { if(window.confirm("Are you sure ?")){
    e.target.parentElement.parentElement.remove();
    alert("Item removed!");
  }}
};


function clear(){
  itemList.innerHTML = "";
  input.value = "";
  alert("All items cleared!");
}


function filterMathod(event){
  let items = document.querySelectorAll("li");
  let user_text = event.target.value.toLowerCase().trim();
  let text = 'a'

  items?.forEach(function(item){
    let text_box = item.firstChild.textContent.toLowerCase();
   
    if(text_box.indexOf(user_text) !== -1){
      item.style.display = 'flex';
    }else{
      item.style.display = 'none';
    }
  })
}