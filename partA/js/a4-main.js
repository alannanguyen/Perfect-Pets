var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)

window.onload = function() {
  loadTableWithFilters();
};

function loadTableWithFilters() {
  var test = document.querySelector("#main-table-body");
  test.innerHTML = "";

  for (var i = 0; i < petData.length; i++) {

    if (petData[i].type == filterType || filterType == "") {
      if (petData[i].age >= filterAgeMin && petData[i].age <= filterAgeMax) {

      var tr = document.createElement("tr");
      test.appendChild(tr);
      var td1 = document.createElement("td");
      tr.appendChild(td1);
      var img = document.createElement("img");
      td1.appendChild(img);
      img.src = petData[i].image.src;
      img.alt = petData[i].image.alt;
      img.width = petData[i].image.width;
      img.height = petData[i].image.height;

      var td2 = document.createElement("td");
      tr.appendChild(td2);
      var h4 = document.createElement("h4");
      td2.appendChild(h4);
      var ht = document.createTextNode(petData[i].name);
      h4.appendChild(ht);
      var p = document.createElement("p");
      td2.appendChild(p);
      p.innerHTML = petData[i].description;
      var spn = document.createElement("span");
      td2.appendChild(spn);
      var spnt = document.createTextNode("Age: " + petData[i].age + " years old.");
      spn.appendChild(spnt);
      }
    }
  }
}

function filterDogs() {
  filterType = "dog";
  loadTableWithFilters();
}

function filterCats() {
  filterType = "cat";
  loadTableWithFilters();
}

function filterBirds() {
  filterType = "bird";
  loadTableWithFilters();
}

function filter_zero_1() {
  filterAgeMin = 0;
  filterAgeMax = 1;
  loadTableWithFilters();
}

function filter_1_3() {
  filterAgeMin = 1;
  filterAgeMax = 3;
  loadTableWithFilters();
}

function filter_4_plus() {
  filterAgeMin = 4;
  filterAgeMax = Number.MAX_VALUE;
  loadTableWithFilters();
}

function filterAllPets() {
  filterType = "";
  filterAgeMin = 0;
  filterAgeMax = Number.MAX_VALUE;
  loadTableWithFilters();
}