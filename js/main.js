/*
    !TODO:

    //1. chiedi all’utente il cognome
    //2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
    3. stampa la lista ordinata alfabeticamente
    4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

*/

 
/*  
    ====================================================================================================
        1.    Prendo l'input e inserisco il valore nell'array contenente altri nominativi
    ====================================================================================================
    
*/
function Input(){
    // // Array nominativi
    // names = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
    // Input dell'utente
    var user_name = (prompt(`Inserisci il tuo nome:`)).trim();
    // // Inserisco l'input nell'array 
    // names.push(user_name);
    // // Ritorno l'array
    // return names;
    return user_name;
}

/*  
    ====================================================================================================
        2.    Stampo i dati in ordine alfabetico e l'index dell'utente inserito
    ====================================================================================================
    
*/

function printData(user_name){
    // Array nominativi
    names = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
    // Inserisco l'input nell'array 
    names.push(user_name);
    // Stampo i dati in ordine alfabetico --> sort()
    console.log("Lista in ordine alfabetico:");
    console.log(names.sort());
    //human index
    var humanIndex = names.indexOf(user_name) + 1;
    // Stampo l'index
    console.log("L'index umani di " + user_name + "è: " + humanIndex);
}

function main(){
    user_name = Input();
    printData(user_name);
}

main();