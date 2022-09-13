function addNewPerson(){
    if(newPerson == ''){
        errorMsg = 'venligst fyll inn';
    }
    else{
        persons.push(newPerson); 
    }
}

function changeperson(index){
    persons[index] = newPerson;
}