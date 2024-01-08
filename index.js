var NameBook= document.getElementById('nameBook');
var Author = document.getElementById('author');
var Year = document.getElementById('year');
const submit = document.querySelector(".btn");
const list = document.querySelector("#listBook");   


submit.addEventListener('click', function (e) {
    e.preventDefault();
    if (NameBook.value == '' && Author.value == '' && Year.value == '') {

        console.log(NameBook);
   
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
    }



    else {

        const newRow = document.createElement('tr');
    
        const newNameBookColum = document.createElement('th');
     
        newNameBookColum .innerText = NameBook.value;
        newRow.appendChild(newNameBookColum);
     let NameBooks= JSON.parse(localStorage.getItem('NameBooks'))
        if (!NameBooks) {
            NameBooks = [];
        }
     
        NameBook.push(JSON.stringify(NameBook.value))
     
        localStorage.setItem('NameBook', JSON.stringify(NameBook));

    
        const newAuthorColum = document.createElement('th');
    
        newAuthorColum.innerText = Author.value;
        newRow.appendChild(newAuthorColum);
        if (!authors) {
            authors = [];
        }
   
        authors.push(JSON.stringify(Author.value))
     
        localStorage.setItem('Author', JSON.stringify(authors));
        const newYearColum = document.createElement('th');
        
        newYearColum.innerText = Year.value;
        newRow.appendChild(newYearColum);
        
        if (!years) {
            years = [];
        }

        years.push(JSON.stringify(Year.value))
        localStorage.setItem('Year', JSON.stringify(years));

        const newIconColum = document.createElement('td')
        newIconColum.innerHTML = `
        <button type="button" class="btn btn-outline-danger"> Delete</button>
        `
        newRow.appendChild(newIconColum)
        
    }

    NameBook.value = '';
    Author.value = '';
    Year.value = '';
});



function getLocalStorageData(arr) {
    let localStorageNameBook = JSON.parse(localStorage.getItem('NameBook'));
    
    let localStorageAuthor = JSON.parse(localStorage.getItem('Author'));
    let localStorageYear = JSON.parse(localStorage.getItem('Year'));
    let tableRow = document.createElement('tr');
    let tableRowAuthor = document.createElement('tr');
    let tableRowYear = document.createElement('tr');

    console.log(tableRow)

    localStorageNameBook.forEach(SingleNameBook => {
        let tableData = document.createElement('td');

        tableData.innerHTML = SingleNameBook.replace('"', '').replace('"', '');
        tableRow.appendChild(tableData);
   
    });
    localStorageAuthor.forEach(SingleAuthor => {
        let tableDataAuthor = document.createElement('td');
        tableDataAuthor.innerHTML = SingleAuthor.replace('"', '').replace('"', '');
        tableRowAuthor.appendChild(tableDataAuthor);
    });   localStorageYear.forEach(SingleYear => {
        let tableDataYear = document.createElement('td');
    
        tableDataYear.innerHTML = SingleYear.replace('"', '').replace('"', '');
        tableRowYear.appendChild(tableDataYear);
    });
    list.appendChild(tableRow);
    list.appendChild(tableRowAuthor);
    list.appendChild(tableRowYear)
}




//   var x = document.forms["form-book"]["nameBook"].value;
//     var a = document.forms["form-book"]["author"].value;
//     var y = document.forms["form-book"]["year"].value;
//         if (x == "" && a=="" && y=="") {
//             alert("input must be filled out");
//           return false;
//     }
//     if (x == "" ) {
//         // alert("Name must be filled out");
    
//         x.classList.add('warning');
//       return false;
// }
//     if (a == "") {
//         alert("Author must be filled out");
        
        
         
//         return false;
//     }    if ( y=="") {
//         alert("Year must be filled out");
    
     
//       return false;
// }