  
let addToCartButtons = document.getElementsByClassName('btn-primary')
let cartContainer = document.getElementsByTagName('tbody')[0]

let delete_buttons = document.getElementsByClassName('uk-button-danger')

// picking up all the Add-To-Cart buttons
for(let i = 0; i < addToCartButtons.length; i++){
    addToCartButtons[i].addEventListener('click', addToCart)
    
}
// This function helps to add items to our cart
function addToCart(event){

    
    let itemContainer = document.createElement('tr')
    let btn = event.target
    let btnGrandParent = btn.parentElement.parentElement
    let btnParent = btn.parentElement
    let itemImage = btnGrandParent.children[0].src
    let itemName = btnParent.children[0].innerText
    let itemPrice = btnParent.children[1].innerText
    
    
    itemContainer.innerHTML = `
    
    <td><img class="uk-preserve-width uk-border-circle" src=${itemImage} width="40" alt=""></td>
    <td class="uk-table-link">
        <h3 class = "item-name">${itemName}</h3>
    </td>
    <td class="uk-text-truncate item-price"><h3>${itemPrice}</h3></td>
  
    <td><button class="uk-button uk-button-danger" type="button">Remove</button></td>
`

    cartContainer.append(itemContainer)




    // Accessing individual quantity fields
    // for(let i = 0; i < quantityFields.length; i++){
    //     quantityFields[i].value = 1
    //     quantityFields[i].addEventListener('change', totalCost)
                
    // }

    // Accessing individual quantity fields
    for(let i = 0; i < delete_buttons.length; i++){
        delete_buttons[i].addEventListener('click', removeItem)
    }

    grandTotal()

   
}



function like(id){
    var btnLike=document.getElementById(id).style
    if(btnLike.color !="red"){
         btnLike.color="red"
    }else{
        btnLike.color="black"

    }

}

function AdoptClicked() {
    alert('The kitten chosen is reserved for you we will call you for more details thank you for your adoption :) ')
}
document.getElementsByClassName('btn')[0].addEventListener('click', AdoptClicked)


