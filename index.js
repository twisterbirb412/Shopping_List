

function addItem()  {
    //when AddItem is pressed
    $('#js-shopping-list-form').submit(event => {
       //prevent default
        event.preventDefault();

        //retrieves list item name from input
        let newItemName = $('#js-shopping-list-form').find(`input[name="shopping-list-entry"]`).val();

        let htmlText = 
        `<span class="shopping-item">`+ newItemName+ `</span>` +
        `<div class="shopping-item-controls">` + 
          `<button class="shopping-item-toggle">` + 
            `<span class="button-label">check</span>` + 
          `</button>` + 
         ` <button class="shopping-item-delete">` +
            `<span class="button-label">delete</span>` + 
          `</button>` + 
        `</div>`;

        $(".shopping-list").append("<li>" + htmlText + "</li>");

        $('#js-shopping-list-form').find(`input[name="shopping-list-entry"]`).val("");

    });
}


function checkItem()  {
    $(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
       //prevent default
       event.preventDefault();

        //needs to add "_checked" to the class name of list items
        $(this).parent().siblings(`.shopping-item`).toggleClass(" shopping-item__checked");
    });

}

function deleteItem()  {
    $(".shopping-list").on("click", ".shopping-item-delete", function(event) {
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