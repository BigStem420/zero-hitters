function toSearch() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue
  input = document.getElementById("myInput")
  filter = input.value.toUpperCase()
  table = document.getElementById("tableMain")
  tr = table.getElementsByTagName("tr")


  // Loop through all table rows, and hide those who don't match the search query
  for (let i = 0; i < tr.length; i++) {
    let row = tr[i].getElementsByTagName("td")
    let td = ""
    for (let j = 0; j < row.length; j++) {
      td = row[j]
      if (td) {
        txtValue = td.textContent || td.innerText
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = ""
        } else {
          tr[i].style.display = "none"
        }
      }
    }
  }
}
