// function toSearch() {
//   // Declare variables
//   var input, filter, table, tr, td, i, txtValue
//   input = document.getElementById("myInput")
//   filter = input.value.toUpperCase()
//   table = document.getElementById("tableMain")
//   tr = table.getElementsByTagName("tr")


//   // Loop through all table rows, and hide those who don't match the search query
//   for (let i = 0; i < tr.length; i++) {
//     let row = tr[i].getElementsByTagName("td")
//     let td = ""
//     for (let j = 0; j < row.length; j++) {
//       td = row[j]
//       if (td) {
//         txtValue = td.textContent || td.innerText
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//           tr[i].style.display = ""
//         } else {
//           tr[i].style.display = "none"
//         }
//       }
//     }
//   }
// }


function toSearch() {
  var input, filter, found, table, tr, td, i, j;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("theTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td");
    for (j = 0; j < td.length; j++) {
      if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
        found = true;
      }
    }
    if (found) {
      tr[i].style.display = "";
      found = false;
    } else {
      tr[i].style.display = "none";
    }
  }
}

