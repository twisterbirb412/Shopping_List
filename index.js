

function addItem()  {
    //when AddItem is pressed
    $("#js-shopping-list-form").submit(function (event) {
       //prevent default
        event.preventDefault();

        //create a new li element

        let newItemName = $(this).find(input[name="shopping-list-entry"]).val();
        
        //create a new child by cloning?
        let newItem = document.createElement(`li`)

        let newItemSpan = document.createElement('span');
        newItemSpan.textContent = newItemName;
        newItemSpan.className = "shopping-item";

        //create div for buttons
        let newItemDiv = document.createElement('div');
        newItemsDiv.classNames = "shopping-item-controls";

        //create checkbutton
        let checkButton = document.createElement("button");
        checkButton.className = "shopping-item-toggle";

        let checkButtSpan = document.createElement("span")
        checkButton.textContent = "check";
        checkButton.appendChild(checkButtSpan);

        //create delete button
        let deleteButton = document.createElement("button");
        deleteButton.className = "shopping-item-delete";
        let deleteButtSpan = document.createElement("span");
        deleteButtSpan.textContent = "delete";

        //add buttons to div
        newItemsDiv.appendChild(checkButton, deleteButton);

        newItem.appendChild(newItemSpan, newItemDiv);

        //add new list item to list
        $('ul .shopping-list').prepend(newItem);

    });
}


function checkItem()  {
    $(".shopping-item-toggle").click(function(event) {
       //prevent default
       event.preventDefault();

        //needs to add "_checked" to the class name of list item
        $(this).parent().siblings(`.shopping-item`).toggleClass(" shopping-item__checked");
    });
}

function deleteItem()  {
    $(".shopping-item-delete").click(function(event) {
        //prevents default
        event.preventDefault();

        //deletes that object completely from the list
        $(this).closest("li").remove();

    });
}

function runShoppingList() {
    addItem();
    checkItem();
    deleteItem();
}

$(runShoppingList);