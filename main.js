var NameBookInput = document.getElementById('nameBook');
var AuthorInput = document.getElementById('author');
var YearInput = document.getElementById('year');

console.log(NameBookInput)


var productContainer = [];
if (localStorage.getItem('Books') != null) {
    productContainer = JSON.parse(localStorage.getItem('Books'))
    displayBook(productContainer)
}
 function addName(e) {

    var product = {
        Name: NameBookInput.value,
        Author: AuthorInput.value,
        Year:YearInput.value
    }

        if (NameBookInput.value == '' && AuthorInput.value == '' && YearInput.value == '') {

            console.log(NameBookInput);
   
            NameBookInput.classList.add('warning');
       
            AuthorInput.classList.add('warning');

            YearInput.classList.add('warning');
     
            NameBookInput.setAttribute('placeholder', 'write name book');
      
            AuthorInput.setAttribute('placeholder', 'write name Author');
        
            YearInput.setAttribute('placeholder', 'write name Year');
            
            e.preventDefault();
            removeWarning()
        }
        if (NameBookInput.value == '') {
            NameBookInput.classList.add('warning');
            
            // alert("Year must be filled out");
            NameBookInput.setAttribute('placeholder', 'write name book');
            e.preventDefault();
            removeNameWarning()
        
        } if (AuthorInput.value == '') {
            AuthorInput.classList.add('warning');
            AuthorInput.setAttribute('placeholder', 'write name Author');
            e.preventDefault();
            removeAuthorWarning()
        } if (YearInput.value == '') {
            YearInput.classList.add('warning');
            YearInput.setAttribute('placeholder', 'write name Year');
            e.preventDefault();
            removeYearWarning()
       
        }


    console.log(product)
    productContainer.push(product);
    localStorage.setItem("Books", JSON.stringify(productContainer));
    console.log(productContainer);
 displayBook(productContainer)
       clearForm();
    
 }
function removeWarning() {
    NameBookInput.classList.remove('warning');
    AuthorInput.classList.remove('warning');
    YearInput.classList.remove('warning');

    NameBookInput.setAttribute("placeholder", "");
    AuthorInput.setAttribute("placeholder", "");
    YearInput.setAttribute("placeholder", "");

}
setTimeout(removeWarning, 9000)
function removeNameWarning() {
    NameBookInput.classList.remove('warning');
    NameBookInput.setAttribute("placeholder", "");
}
setTimeout(removeWarning, 9000)
function removeAuthorWarning() {
    AuthorInput.classList.remove('warning');
    AuthorInput.setAttribute("placeholder", "");
}
setTimeout(removeAuthorWarning, 9000)
function removeYearWarning() {
    YearInput.classList.remove('warning');
    YearInput.setAttribute("placeholder", "");
    clearForm()
}
setTimeout(removeYearWarning, 9000)
function clearForm() {
    NameBookInput.value = "";
    AuthorInput.value = "";
    YearInput.value = "";
}

function displayBook(arr) {
    var book= ``;
    for (var i = 0; i < arr.length; i++){
        book += `<tr>
        <td>${arr[i].Name}</td>
        <td>${arr[i].Author}</td>   
        <td>${arr[i].Year}</td>
        <td ><button onclick="deleteProduct(${i});"  type="button" class="btn btn-outline-danger"> Delete</button></td>
      </tr>`;

    }
    document.getElementById("listBook").innerHTML = book;
}

function deleteProduct(productIndex) {
    productContainer.splice(productIndex, 1);
    localStorage.setItem("Books", JSON.stringify(productContainer));
    displayBook(productContainer);
}
