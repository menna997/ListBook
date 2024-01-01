var NameBookInput = document.getElementById('nameBook');
var AuthorInput = document.getElementById('author');
var YearInput = document.getElementById('year');
console.log(NameBookInput)


var productContainer = [];
if (localStorage.getItem('Books') != null) {
    productContainer = JSON.parse(localStorage.getItem('Books'))
    displayBook(productContainer)
}
function addName() {
    var product = {
        Name: NameBookInput.value,
        Author: AuthorInput.value,
        Year:YearInput.value
    }
    console.log(product)
    productContainer.push(product);
    localStorage.setItem("Books", JSON.stringify(productContainer));
    console.log(productContainer);
 displayBook(productContainer)
    clearForm();
}
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
