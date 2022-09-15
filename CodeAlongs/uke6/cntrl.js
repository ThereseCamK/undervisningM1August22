    //controller
    function addItem() {
        handleliste.push(inputValue)
        show();
    }

    function deleteItem(index) {
        handleliste.splice(index, 1)
        show()
    }
    function changeItem(index) {
        // handleliste.splice(index, 1);
        // handleliste.splice(index, 1, inputValue);
        handleliste[index]=inputValue;

        show()
    }
