function addItem()  {
    //when AddItem is pressed
    $("#js-shopping-list-form").submit(function (event) {
       //prevent default
        event.preventDefault();
        //clear text from input variable used previously - MAY NOT NEED THIS??
        //$("#shopping-list-entry").emtpy();
        //create variable - take the text from the input and store it in the variable
        const newItem = $(this).find(input[name="shopping-list-entry"]).val();
        //create a new child object - add it to class Shopping List
        $('.shopping-list').append(newItem);

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