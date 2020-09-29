// function fixTable() {

let theTable = document.getElementById("tableMain").getElementsByTagName('tbody')[0]
// let elements = theTable.querySelectorAll('a:nth-of-type(even)')

function changeIt() {
  for (let i = 0; i < theTable.rows.length; i++) {
    (function (i) {
      setTimeout(function () {
        let row = theTable.rows[i]
        let userName = row.textContent
        let attribute = row.querySelector('a')
        attribute = attribute.toString()
        console.log(attribute)
        let pathArray = attribute.split('=')
        let userId = pathArray[1]
        theTable.rows[i].cells[0].innerHTML = `<img src = 'http://torn.sliw.co/resources/status/${userId}'>`
        // theTable.rows[i].cells[2].innerHTML = `${userName.split(' ')[2]} [${parseInt(userId, 10)}]`
        attack = getEmoji()
        theTable.rows[i].cells[3].innerHTML =
          `<a href='https://www.torn.com/loader2.php?sid=getInAttack&user2ID=${userId}'>${attack}</a>`
        theTable.rows[i].cells[1].innerHTML = `<a href= 'https://www.torn.com/profiles.php?XID=${userId}'><img src ='https://www.torn.com/signature.php?id=14&user=${userId}'></a>`
      }, 1000 * i)
    })(i)
  }

}
changeIt()
// }
// fixTable()
