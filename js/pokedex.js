// Creates the Trainer class with two methods: add() & get(name)
class Ivan {

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
let ivan = new Ivan();

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
//axios.get(`https://raw.githubusercontent.com/rashidarmand/Personal-Pokedex/master/json/mewtwo.json#`)
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

    let mewTwoName = document.querySelector('#mewTwoName')
    let mewTwoHP = document.querySelector('#mewTwoHP')
    let mewTwoAttack = document.querySelector('#mewTwoAttack')
    let mewTwoDefense = document.querySelector('#mewTwoDefense')
    let mewTwoSpAtk = document.querySelector('#mewTwoSpAtk')
    let mewTwoSpDef = document.querySelector('#mewTwoSpDef')
    let mewTwoAbilities = document.querySelector('#mewTwoAbilities')

    mewTwoName.innerHTML = `<h1 class="pokeName"> ${ivan.get("mewtwo")['name']}`;
    mewTwoHP.innerHTML = `HP<br>${ivan.get("mewtwo")['hp']}`;
    mewTwoAttack.innerHTML = `ATTACK<br>${ivan.get("mewtwo")['attack']}`;
    mewTwoDefense.innerHTML = `DEFENSE<br>${ivan.get("mewtwo")['defense']}`;
    mewTwoSpAtk.innerHTML = `SP.ATK<br>${ivan.get("mewtwo")['specialAttack']}`;
    mewTwoSpDef.innerHTML = `SP.DEF<br>${
        ivan.get("mewtwo")['specialDefense']}`;
    mewTwoAbilities.innerHTML = `ABILITIES<br>${ivan.get("mewtwo")['abilities'][0]}<br>${
        ivan.get("mewtwo")['abilities'][1]}`;
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

    let mewName = document.querySelector('#mewName')
    let mewHP = document.querySelector('#mewHP')
    let mewAttack = document.querySelector('#mewAttack')
    let mewDefense = document.querySelector('#mewDefense')
    let mewSpAtk = document.querySelector('#mewSpAtk')
    let mewSpDef = document.querySelector('#mewSpDef')
    let mewAbilities = document.querySelector('#mewAbilities')

    mewName.innerHTML = `<h1 class="pokeName"> ${ivan.get("mew")['name']}`;
    mewHP.innerHTML = `HP<br>${ivan.get("mew")['hp']}`;
    mewAttack.innerHTML = `ATTACK<br>${ivan.get("mew")['attack']}`;
    mewDefense.innerHTML = `DEFENSE<br>${ivan.get("mew")['defense']}`;
    mewSpAtk.innerHTML = `SP.ATK<br>${ivan.get("mew")['specialAttack']}`;
    mewSpDef.innerHTML = `SP.DEF<br>${ivan.get("mew")['specialDefense']}`;
    mewAbilities.innerHTML = `ABILITIES<br>${ivan.get("mew")['abilities'][0]}`;
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

    let rayquazaName = document.querySelector('#rayquazaName')
    let rayquazaHP = document.querySelector('#rayquazaHP')
    let rayquazaAttack = document.querySelector('#rayquazaAttack')
    let rayquazaDefense = document.querySelector('#rayquazaDefense')
    let rayquazaSpAtk = document.querySelector('#rayquazaSpAtk')
    let rayquazaSpDef = document.querySelector('#rayquazaSpDef')
    let rayquazaAbilities = document.querySelector('#rayquazaAbilities')

    rayquazaName.innerHTML = `<h1 class="pokeName"> ${ivan.get("rayquaza")['name']}`;
    rayquazaHP.innerHTML = `HP<br>${ivan.get("rayquaza")['hp']}`;
    rayquazaAttack.innerHTML = `ATTACK<br>${ivan.get("rayquaza")['attack']}`;
    rayquazaDefense.innerHTML = `DEFENSE<br>${ivan.get("rayquaza")['defense']}`;
    rayquazaSpAtk.innerHTML = `SP.ATK<br>${ivan.get("rayquaza")['specialAttack']}`;
    rayquazaSpDef.innerHTML = `SP.DEF<br>${ivan.get("rayquaza")['specialDefense']}`;
    rayquazaAbilities.innerHTML = `ABILITIES<br>${ivan.get("rayquaza")['abilities'][0]}`;

})
.catch(function (error) {
  console.log(error);
});


// Initialize all Materialize Plugins. Function is defined in Materialize JS
 M.AutoInit();

// This Section below controls the functionality of the Tabs Below Mewtwo. What is shown is based on which Tab is clicked
let getMewtwoClasses = document.querySelector('#mewtwo').classList
let getMewtwoXClasses = document.querySelector('#mewtwoX').classList
let getMewtwoYClasses = document.querySelector('#mewtwoY').classList
let showMewtwo = document.querySelector('#mewtwoButton')
let showMewtwoX = document.querySelector('#mewtwoXButton')
let showMewtwoY = document.querySelector('#mewtwoYButton')

showMewtwo.addEventListener('click', (event) =>{
    if(getMewtwoClasses.contains('hidden')){
        getMewtwoClasses.remove('hidden');
        getMewtwoXClasses.add('hidden');
        getMewtwoYClasses.add('hidden');
    }
 })

 showMewtwoX.addEventListener('click', (event) =>{
    if(getMewtwoXClasses.contains('hidden')){
        getMewtwoClasses.add('hidden');
        getMewtwoXClasses.remove('hidden');
        getMewtwoYClasses.add('hidden');
    }
 })

 showMewtwoY.addEventListener('click', (event) =>{
    if(getMewtwoYClasses.contains('hidden')){
        getMewtwoClasses.add('hidden');
        getMewtwoXClasses.add('hidden');
        getMewtwoYClasses.remove('hidden');
    }
 })

// This Section below controls the functionality of the Tabs Below Rayquaza. What is shown is based on which Tab is clicked
let getRayquazaClasses = document.querySelector('#rayquaza').classList
let getMegaRayquazaClasses = document.querySelector('#megaRayquaza').classList
let showRayquaza = document.querySelector('#rayquazaButton')
let showMegaRayquaza = document.querySelector('#megaRayquazaButton')

showRayquaza.addEventListener('click', (event) =>{
    if(getRayquazaClasses.contains('hidden')){
        getRayquazaClasses.remove('hidden');
        getMegaRayquazaClasses.add('hidden');
    }
 })

 showMegaRayquaza.addEventListener('click', (event) =>{
    if(getMegaRayquazaClasses.contains('hidden')){
        getRayquazaClasses.add('hidden');
        getMegaRayquazaClasses.remove('hidden');
    }
 })
