// function fixTable() {

let theTable = document.getElementById("theTable").getElementsByTagName('tbody')[0]

// let elements = theTable.querySelectorAll('a:nth-of-type(even)')

function onClick(e){
  console.log('onClick: ',e)
}

function click(e){
  console.log('click: ', e)
}

function changeIt() {
  for (let i = 0; i < theTable.rows.length; i++) {
    
      
    let row = theTable.rows[i]
    let userName = row.textContent.trim()
    let name = userName.split(' ')[0]
    console.log('name: ', name)
    let attribute = row.querySelector('a')
    console.log('attribute: ', attribute)

    attribute = attribute.toString()
    let pathArray = attribute.split('=')
    let userId = pathArray[1]
    // theTable.rows[i].cells[0].innerHTML = `<img src = 'http://torn.sliw.co/resources/status/${userId}'>`
    theTable.rows[i].cells[1].innerHTML = /*<span><button style={display:inline} onclick='function click(e){onClick(e)}'><del>Signiture</del></button>*/`</span><span><a href='https://www.torn.com/profiles.php?XID=${userId}'><button style={display: inline}>${name}'s Profile</button></a></span> `
    // theTable.rows[i].cells[2].innerHTML = `${userName.split(' ')[2]} [${parseInt(userId, 10)}]`
    attack = getEmoji()
    theTable.rows[i].cells[3].innerHTML =
      `<a href='https://www.torn.com/loader2.php?sid=getInAttack&user2ID=${userId}'>${attack}</a>`
   
  }
  }


changeIt()
// }
// fixTable()
