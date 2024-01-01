const NameBook = document.querySelector("#title");

const Author = document.querySelector("#Author");
const Year = document.querySelector("#Year");
const submit = document.querySelector(".btn");
const list = document.querySelector("#list-book");


submit.addEventListener('click', function (e) {
    e.preventDefault();
    if (NameBook.value == '' && Author.value == '' && Year.value == '') {
        JSON.parse(localStorage.getItem('user'));
        const NameBook= JSON.parse(localStorage.getItem('title'));
        console.log(NameBook);
        // alert("please fill all input");
        NameBook.classList.add('warning');
        Author.classList.add('warning');
        Year.classList.add('warning');
        NameBook.setAttribute('placeholder', 'write name book');
        Author.setAttribute('placeholder', 'write name Author');
        Year.setAttribute('placeholder', 'write name Year');
        function removeWarning() {
            NameBook.classList.remove('warning');
            Author.classList.remove('warning');
            Year.classList.remove('warning');

            NameBook.setAttribute("placeholder", "");
            Author.setAttribute("placeholder", "");
            Year.setAttribute("placeholder", "");
        }
        setTimeout(removeWarning, 1000)
    }
    else if (NameBook.value == '') {
        NameBook.classList.add('warning');
        NameBook.setAttribute('placeholder', 'write name book');
        function removeNameWarning() {
            NameBook.classList.remove('warning');
            NameBook.setAttribute("placeholder", "");
        }
        setTimeout(removeNameWarning, 1000)
    } else if (Author.value == '') {
        Author.classList.add('warning');
        Author.setAttribute('placeholder', 'write name Author');
        function removeAuthorWarning() {
            Author.classList.remove('warning');
          Author.setAttribute("placeholder", "");
        }
        setTimeout(removeAuthorWarning, 1000)
    } else if (Year.value == '') {
        Year.classList.add('warning');
        Year.setAttribute('placeholder', 'write name Year');
        function removeYearWarning() {
            Year.classList.remove('warning');
            Year.setAttribute("placeholder", "");
        }
        setTimeout(removeYearWarning, 1000)
    } else {
        const newRow = document.createElement('tr');
        list.appendChild(newRow);

        const newNameBookColum = document.createElement('th');
        list.appendChild(newNameBookColum);
        newNameBookColum.innerText = NameBook.value; 

        
            localStorage.setItem('NameBook',JSON.stringify(NameBook.value));
        
        const storedBlogs = JSON.parse(localStorage.getItem('NameBook'));
        console.log(s)
        const newAuthorColum = document.createElement('th');
    
        list.appendChild(newAuthorColum);
        newAuthorColum.innerText = Author.value;
        
        localStorage.setItem('Author', Author.value);
        const newYearColum = document.createElement('th');
        
        list.appendChild(newYearColum);
        newYearColum.innerText = Year.value;
        
        localStorage.setItem('Year', Year.value);

        const newIconColum = document.createElement('th')
        list.appendChild(newIconColum)
        newIconColum.innerHTML =  `
      <a href="#" class="btn btn-danger btn-sm delete">X</a>
      `
        // <th><i class="bi bi-trash3-fill"></i></th>z
        
    }
    NameBook.value = '';
    Author.value = '';
    Year.value = '';
})
function add(){
 list.push(NameBook.value);
    localStorage.getItem('title', JSON.stringify(list));
    console.log(list)
    addTask(NameBook.value);
    NameBook.value = '';
  }
  