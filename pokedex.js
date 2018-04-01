// Creates the Trainer class with two methods: add() & get(name)
class Trainer {

    constructor() {
        this.party = [];
    }

    all() {
        // Return back a list of all pokemon objects in the 'this.party' array
        return this.party;
        // console.log(this.party);
    }

    get(name) {
        // Return just one pokemon object based on a name being passed as a string. Not case-sensitive.
        let index = 0;
        for (index of this.party) {
            if (name.toLowerCase() === index.name){
                return index;
                // console.log(index);
            }
        }
    }

}

// Creates a new Trainer object named 'Ivan'
let ivan = new Trainer();

// Creates the Pokemon class and defines the parameters that it accepts
class Pokemon {

    constructor(name, hp, attack, defense, specialAttack, specialDefense, abilities) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.specialAttack = specialAttack;
        this.specialDefense = specialDefense;
        this.abilities = abilities;
    }

}


// Get 1st Pokemon's information from the API - 'Mewtwo'
axios.get(`https://pokeapi.co/api/v2/pokemon/150`)
.then(function (response) {
    // Loops through the selected pokemon's abilities in the JSON file and pushes it to an empty array.
    // The array is then returned so I can access the data inside of it at a later point.
    let getAbilities = (()=> {
        let array = [];
        let i = 0;
        while(i < response.data.abilities.length) {
            array.push(response.data.abilities[i].ability['name']);
            i++;
        } 
        return array;
    })

    let name = response.data['name'];  // Name
    let hp = response.data.stats[5]['base_stat'];  // HP
    let attack = response.data.stats[4]['base_stat'];  // Attack
    let defense = response.data.stats[3]['base_stat']; // Defense
    let specialAttack = response.data.stats[2]['base_stat'];   // Special-Attack
    let specialDefense = response.data.stats[1]['base_stat'];  // Special-Defense
    let abilities = getAbilities();    // Calls the getAbilites function which returns an array with the names of the abilites

    // Create a new Pokemon object with the name 'Mewtwo' and pass it data from the AJAX call.
    let mewtwo = new Pokemon (
        name,
        hp,
        attack,
        defense,
        specialAttack,
        specialDefense,
        abilities
    );

    // Adds the new Pokemon to the end of the array in my Trainer object so it can be accessed later on with either the .get() or the .all() method
    ivan.party.push(mewtwo);
})
.catch(function (error) {
  console.log(error);
});


// Get the 2nd Pokemon's information from the API - 'Mew'
axios.get(`https://pokeapi.co/api/v2/pokemon/151`)
.then(function (response) {
    // Loops through the selected pokemon's abilities in the JSON file and pushes it to an empty array.
    // The array is then returned so I can access the data inside of it at a later point.
    let getAbilities = (()=> {
        let array = [];
        let i = 0;
        while(i < response.data.abilities.length) {
            array.push(response.data.abilities[i].ability['name']);
            i++;
        } 
        return array;
    })

    let name = response.data['name'];  // Name
    let hp = response.data.stats[5]['base_stat'];  // HP
    let attack = response.data.stats[4]['base_stat'];  // Attack
    let defense = response.data.stats[3]['base_stat']; // Defense
    let specialAttack = response.data.stats[2]['base_stat'];   // Special-Attack
    let specialDefense = response.data.stats[1]['base_stat'];  // Special-Defense
    let abilities = getAbilities();    // Calls the getAbilites function which returns an array with the names of the abilites

    //Create a new Pokemon object with the name 'Mew' and pass it data from the AJAX call.
    let mew = new Pokemon (
        name,
        hp,
        attack,
        defense,
        specialAttack,
        specialDefense,
        abilities
    );

    // Adds the new Pokemon to the end of the array in my Trainer object so it can be accessed later on with either the .get() or the .all() method
    ivan.party.push(mew);
})
.catch(function (error) {
  console.log(error);
});


// Get the 3rd Pokemon's information from the API - 'Rayquaza'
axios.get(`https://pokeapi.co/api/v2/pokemon/384`)
.then(function (response) {
    // Loops through the selected pokemon's abilities in the JSON file and pushes it to an empty array.
    // The array is then returned so I can access the data inside of it at a later point.
    let getAbilities = (()=> {
        let array = [];
        let i = 0;
        while(i < response.data.abilities.length) {
            array.push(response.data.abilities[i].ability['name']);
            i++;
        } 
        return array;
    })

    let name = response.data['name'];  // Name
    let hp = response.data.stats[5]['base_stat'];  // HP
    let attack = response.data.stats[4]['base_stat'];  // Attack
    let defense = response.data.stats[3]['base_stat']; // Defense
    let specialAttack = response.data.stats[2]['base_stat'];   // Special-Attack
    let specialDefense = response.data.stats[1]['base_stat'];  // Special-Defense
    let abilities = getAbilities();    // Calls the getAbilites function which returns an array with the names of the abilites

    //Create a new Pokemon object with the name 'Rayquaza' and pass it data from the AJAX call.
    let rayquaza = new Pokemon (
        name,
        hp,
        attack,
        defense,
        specialAttack,
        specialDefense,
        abilities
    );

    // Adds the new Pokemon to the end of the array in my Trainer object so it can be accessed later on with either the .get() or the .all() method
    ivan.party.push(rayquaza);
})
.catch(function (error) {
  console.log(error);
});




