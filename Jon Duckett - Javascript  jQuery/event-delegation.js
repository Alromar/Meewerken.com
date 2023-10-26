//Event Delegation
function getTarget(e) {
    if (!e) {
        e = windows.event;
    }
    return e.target || e.srcElement;
}


function itemDone(e) {
    //verwijder van lijst
    let target, elParent, elGrandParent;
    target = getTarget(e);

    if (target.nodeName.toLowerCase() == "a") {  // If user clicked on an a element
        elListItem = target.parentNode;              // Get its li element
        elList = elListItem.parentNode;              // Get the ul element
        elList.removeChild(elListItem);              // Remove list item from list
    }
    if (target.nodeName.toLowerCase() == "em") { // If the user clicked on an em element
        elListItem = target.parentNode.parentNode;   // Get its li element
        elList = elListItem.parentNode;              // Get the ul element
        elList.removeChild(elListItem);              // Remove list item from list
    }

    //target link niet laten werken
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
}

let elShoppingList = document.getElementById('shoppingList');
if (elShoppingList.addEventListener) {
    elShoppingList.addEventListener('click', function (e) {
        itemDone(e);
    }, false);
} else {
    elShoppingList.attachEvent('onclick', function (e) {
        itemDone(e);

    });
}
