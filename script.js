var searchTerm = '';
var listelements = ["Anurag", "Adarsh", "Auroshis", "Harsh", "Mohit", "Sumit", "Pallavi", "Gorakh", "Mohan", "Rahul"];
var newelement = [...listelements];

function onSearchInput() {
    searchTerm = document.getElementById('searchInput').value;
    // console.log(searchTerm);

    // Your filter logic here, you can access the search term using searchTerm
    newelement = listelements.filter((element) => {
        return element.toLowerCase().includes(searchTerm.toLowerCase());
    });

    sortName();
    console.log('Search Term:', searchTerm);
    displayResults();
}

function sortName() {
    newelement.sort((a, b) => a.localeCompare(b));
}

function displayResults() {
    var resultList = document.getElementById('resultList');
    resultList.innerHTML = '';

    newelement.forEach((element) => {
        var li = document.createElement('li');
        li.textContent = element;
        resultList.appendChild(li);
    });
}