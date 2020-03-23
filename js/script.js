/*n the "Add new" page, when the user clicks "Add new pothole," the app should prompt them for the name of the new pothole. Once the user enters a new pothole name, 
the app should display “Thanks, I'll add that to the list!” and then list the name below. See mockup below (Pothole-AddNew-Msg3.jpg). Users should be able to 
enter multiple pothole names, which all display in order.*/


function addNew(){

  
    let addNewPothole = prompt("Enter the name of the new pothole");

    alert("Thanks, I'll add that to the list!");  
    document.getElementById('display').innerHTML = addNewPothole;
  
}

