function searchReset() {
    const table = document.getElementById("theTable");
    const tr = table.getElementsByTagName("tr");
    for (let i = 0; i < tr.length; i++) {
        tr[i].style.display = "";
    }
}
       
           
       
