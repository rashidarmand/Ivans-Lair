// Initialize all Materialize Plugins. Function is defined in Materialize JS
M.AutoInit();

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
        // Return just one Pokemon object based on a name being passed as a string. Not case-sensitive.
        for (let element of this.party) {
            if (name.toLowerCase() === element.name){
                return element;
                
            }
        }
    }

    getMove(moveName) {
        // Return just one PokemonMoves object based on a name being passed as a string. Not case-sensitive.
        for (let element of this.party) {
            
            if(moveName.toLowerCase() === element.moveName.toLowerCase()){
                return element;
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

//  Creates the PokemonMoves class and defines the parameters that it accepts
class PokemonMoves {
    
    constructor(moveName, accuracy, pp, power) {
        this.moveName = moveName;
        this.accuracy = accuracy;
        this.pp = pp;
        this.power = power;
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

    let mewTwoName = document.querySelector('#mewTwoName')
    let mewTwoHP = document.querySelector('#mewTwoHP')
    let mewTwoAttack = document.querySelector('#mewTwoAttack')
    let mewTwoDefense = document.querySelector('#mewTwoDefense')
    let mewTwoSpAtk = document.querySelector('#mewTwoSpAtk')
    let mewTwoSpDef = document.querySelector('#mewTwoSpDef')
    let mewTwoAbilities = document.querySelector('#mewTwoAbilities')
    

    mewTwoName.innerHTML = `<h3 class="mewtwo pokeName"> ${ivan.get("mewtwo")['name']}</h3>`;
    mewTwoHP.innerHTML = `HP<br><span class="statValue">${ivan.get("mewtwo")['hp']}</span>`;
    mewTwoAttack.innerHTML = `ATTACK<br><span class="statValue">${ivan.get("mewtwo")['attack']}</span>`;
    mewTwoDefense.innerHTML = `DEFENSE<br><span class="statValue">${ivan.get("mewtwo")['defense']}</span>`;
    mewTwoSpAtk.innerHTML = `SP.ATK<br><span class="statValue">${ivan.get("mewtwo")['specialAttack']}</span>`;
    mewTwoSpDef.innerHTML = `SP.DEF<br><span class="statValue">${
        ivan.get("mewtwo")['specialDefense']}</span>`;
    mewTwoAbilities.innerHTML = `ABILITIES<br><span class="statValue">${ivan.get("mewtwo")['abilities'][0]},<br>${
        ivan.get("mewtwo")['abilities'][1]}</span>`;  
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

    mewName.innerHTML = `<h3 class="pokeName"> ${ivan.get("mew")['name']}</h3>`;
    mewHP.innerHTML = `HP<br><span class="statValue">${ivan.get("mew")['hp']}</span>`;
    mewAttack.innerHTML = `ATTACK<br><span class="statValue">${ivan.get("mew")['attack']}</span>`;
    mewDefense.innerHTML = `DEFENSE<br><span class="statValue">${ivan.get("mew")['defense']}</span>`;
    mewSpAtk.innerHTML = `SP.ATK<br><span class="statValue">${ivan.get("mew")['specialAttack']}</span>`;
    mewSpDef.innerHTML = `SP.DEF<br><span class="statValue">${ivan.get("mew")['specialDefense']}</span>`;
    mewAbilities.innerHTML = `ABILITIES<br><span class="statValue">${ivan.get("mew")['abilities'][0]}</span>`;
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

    rayquazaName.innerHTML = `<h3 class="pokeName"> ${ivan.get("rayquaza")['name']}</h3>`;
    rayquazaHP.innerHTML = `HP<br><span class="statValue">${ivan.get("rayquaza")['hp']}</span>`;
    rayquazaAttack.innerHTML = `ATTACK<br><span class="statValue">${ivan.get("rayquaza")['attack']}</span>`;
    rayquazaDefense.innerHTML = `DEFENSE<br><span class="statValue">${ivan.get("rayquaza")['defense']}</span>`;
    rayquazaSpAtk.innerHTML = `SP.ATK<br><span class="statValue">${ivan.get("rayquaza")['specialAttack']}</span>`;
    rayquazaSpDef.innerHTML = `SP.DEF<br><span class="statValue">${ivan.get("rayquaza")['specialDefense']}</span>`;
    rayquazaAbilities.innerHTML = `ABILITIES<br><span class="statValue">${ivan.get("rayquaza")['abilities'][0]}</span>`;

})
.catch(function (error) {
  console.log(error);
});


// Get information on the pokemon move 'Psychic'
axios.get(`https://pokeapi.co/api/v2/move/94/`)
.then(function (response) {
    let moveName = response.data.names[2]['name'];
    let accuracy =  response.data['accuracy'];
    let pp = response.data['pp'];
    let power = response.data['power'];

    let psychic = new PokemonMoves (
        moveName,
        accuracy,
        pp,
        power
    );

    // Add the new PokemonMoves object 'Psychic' to the end of the array in my Trainer object so it can be accessed later on with either the .get() or the .all() method
    ivan.party.push(psychic)

    // Adding the Pokemon Move Information into the collapsible
    let psychicName = document.querySelectorAll('.psychicName')
    let psychicBadge = document.querySelectorAll('.psychicBadge')
    let psychicAccuracy = document.querySelectorAll('.psychicAccuracy')
    let psychicPP = document.querySelectorAll('.psychicPP')
    let psychicPower = document.querySelectorAll('.psychicPower')

    for(let i = 0; i < psychicName.length; i++) {
        psychicName[i].innerHTML = `${ivan.getMove('psychic').moveName}`;
        psychicBadge[i].classList.add('psychicType');
        psychicBadge[i].innerHTML = "PSYCHIC";
        psychicAccuracy[i].innerHTML = `ACCURACY: ${ivan.getMove('psychic').accuracy}`;
        psychicPP[i].innerHTML = `PP:<br>${ivan.getMove('psychic').pp}`;
        psychicPower[i].innerHTML = `POWER: ${ivan.getMove('psychic').power}`;
    }
})
.catch(function (error) {
  console.log(error);
});

// Get information on the pokemon move 'Hyper Beam'
axios.get(`https://pokeapi.co/api/v2/move/63/`)
.then(function (response) {
    let moveName = response.data.names[2]['name'];
    let accuracy =  response.data['accuracy'];
    let pp = response.data['pp'];
    let power = response.data['power'];

    let hyperBeam = new PokemonMoves (
        moveName,
        accuracy,
        pp,
        power
    );

    // Add the new PokemonMoves object 'Hyper Beam' to the end of the array in my Trainer object so it can be accessed later on with either the .get() or the .all() method
    ivan.party.push(hyperBeam)

    // Adding the Pokemon Move Information into the collapsible
    let hyperBeamName = document.querySelectorAll('.hyperBeamName')
    let hyperBeamBadge = document.querySelectorAll('.hyperBeamBadge')
    let hyperBeamAccuracy = document.querySelectorAll('.hyperBeamAccuracy')
    let hyperBeamPP = document.querySelectorAll('.hyperBeamPP')
    let hyperBeamPower = document.querySelectorAll('.hyperBeamPower')

    for(let i = 0; i < hyperBeamName.length; i++) {
        hyperBeamName[i].innerHTML = `${ivan.getMove('hyper beam').moveName}`;
        hyperBeamBadge[i].classList.add('normalType');
        hyperBeamBadge[i].innerHTML = "NORMAL";
        hyperBeamAccuracy[i].innerHTML = `ACCURACY: ${ivan.getMove('hyper beam').accuracy}`;
        hyperBeamPP[i].innerHTML = `PP:<br>${ivan.getMove('hyper beam').pp}`;
        hyperBeamPower[i].innerHTML = `POWER: ${ivan.getMove('hyper beam').power}`;
    }
})
.catch(function (error) {
  console.log(error);
});

// Get information on the pokemon move 'Psycho Cut'
axios.get(`https://pokeapi.co/api/v2/move/427/`)
.then(function (response) {
    let moveName = response.data.names[2]['name'];
    let accuracy =  response.data['accuracy'];
    let pp = response.data['pp'];
    let power = response.data['power'];

    let psychoCut = new PokemonMoves (
        moveName,
        accuracy,
        pp,
        power
    );

    // Add the new PokemonMoves object 'Psycho Cut' to the end of the array in my Trainer object so it can be accessed later on with either the .get() or the .all() method
    ivan.party.push(psychoCut)

    // Adding the Pokemon Move Information into the collapsible
    let psychoCutName = document.querySelector('.psychoCutName')
    let psychoCutBadge = document.querySelector('.psychoCutBadge')
    let psychoCutAccuracy = document.querySelector('.psychoCutAccuracy')
    let psychoCutPP = document.querySelector('.psychoCutPP')
    let psychoCutPower = document.querySelector('.psychoCutPower')

    
    psychoCutName.innerHTML = `${ivan.getMove('psycho cut').moveName}`;
    psychoCutBadge.classList.add('psychicType');
    psychoCutBadge.innerHTML = "PSYCHIC";
    psychoCutAccuracy.innerHTML = `ACCURACY: ${ivan.getMove('psycho cut').accuracy}`;
    psychoCutPP.innerHTML = `PP:<br>${ivan.getMove('psycho cut').pp}`;
    psychoCutPower.innerHTML = `POWER: ${ivan.getMove('psycho cut').power}`;

})
.catch(function (error) {
  console.log(error);
});

// Get information on the pokemon move 'Shadow Ball'
axios.get(`https://pokeapi.co/api/v2/move/247/`)
.then(function (response) {
    let moveName = response.data.names[2]['name'];
    let accuracy =  response.data['accuracy'];
    let pp = response.data['pp'];
    let power = response.data['power'];

    let shadowBall = new PokemonMoves (
        moveName,
        accuracy,
        pp,
        power
    );

    // Add the new PokemonMoves object 'Shadow Ball' to the end of the array in my Trainer object so it can be accessed later on with either the .get() or the .all() method
    ivan.party.push(shadowBall)

    // Adding the Pokemon Move Information into the collapsible
    let shadowBallName = document.querySelector('.shadowBallName')
    let shadowBallBadge = document.querySelector('.shadowBallBadge')
    let shadowBallAccuracy = document.querySelector('.shadowBallAccuracy')
    let shadowBallPP = document.querySelector('.shadowBallPP')
    let shadowBallPower = document.querySelector('.shadowBallPower')

    
    shadowBallName.innerHTML = `${ivan.getMove('shadow ball').moveName}`;
    shadowBallBadge.classList.add('ghostType');
    shadowBallBadge.innerHTML = "GHOST";
    shadowBallAccuracy.innerHTML = `ACCURACY: ${ivan.getMove('shadow ball').accuracy}`;
    shadowBallPP.innerHTML = `PP:<br>${ivan.getMove('shadow ball').pp}`;
    shadowBallPower.innerHTML = `POWER: ${ivan.getMove('shadow ball').power}`;

})
.catch(function (error) {
  console.log(error);
});

// Get information on the pokemon move 'Shadow Claw'
axios.get(`https://pokeapi.co/api/v2/move/421/`)
.then(function (response) {
    let moveName = response.data.names[2]['name'];
    let accuracy =  response.data['accuracy'];
    let pp = response.data['pp'];
    let power = response.data['power'];

    let shadowClaw = new PokemonMoves (
        moveName,
        accuracy,
        pp,
        power
    );

    // Add the new PokemonMoves object 'Shadow Claw' to the end of the array in my Trainer object so it can be accessed later on with either the .get() or the .all() method
    ivan.party.push(shadowClaw)

    // Adding the Pokemon Move Information into the collapsible
    let shadowClawName = document.querySelector('.shadowClawName')
    let shadowClawBadge = document.querySelector('.shadowClawBadge')
    let shadowClawAccuracy = document.querySelector('.shadowClawAccuracy')
    let shadowClawPP = document.querySelector('.shadowClawPP')
    let shadowClawPower = document.querySelector('.shadowClawPower')

    
    shadowClawName.innerHTML = `${ivan.getMove('shadow claw').moveName}`;
    shadowClawBadge.classList.add('ghostType');
    shadowClawBadge.innerHTML = "GHOST";
    shadowClawAccuracy.innerHTML = `ACCURACY: ${ivan.getMove('shadow claw').accuracy}`;
    shadowClawPP.innerHTML = `PP:<br>${ivan.getMove('shadow claw').pp}`;
    shadowClawPower.innerHTML = `POWER: ${ivan.getMove('shadow claw').power}`;

})
.catch(function (error) {
  console.log(error);
});

// Get information on the pokemon move 'Dragon Tail'
axios.get(`https://pokeapi.co/api/v2/move/525/`)
.then(function (response) {
    let moveName = response.data.names[2]['name'];
    let accuracy =  response.data['accuracy'];
    let pp = response.data['pp'];
    let power = response.data['power'];

    let dragonTail = new PokemonMoves (
        moveName,
        accuracy,
        pp,
        power
    );

    // Add the new PokemonMoves object 'Dragon Tail' to the end of the array in my Trainer object so it can be accessed later on with either the .get() or the .all() method
    ivan.party.push(dragonTail)

    // Adding the Pokemon Move Information into the collapsible
    let dragonTailName = document.querySelectorAll('.dragonTailName')
    let dragonTailBadge = document.querySelectorAll('.dragonTailBadge')
    let dragonTailAccuracy = document.querySelectorAll('.dragonTailAccuracy')
    let dragonTailPP = document.querySelectorAll('.dragonTailPP')
    let dragonTailPower = document.querySelectorAll('.dragonTailPower')

    for(let i = 0; i < dragonTailName.length; i++) {
        dragonTailName[i].innerHTML = `${ivan.getMove('dragon tail').moveName}`;
        dragonTailBadge[i].classList.add('dragonType');
        dragonTailBadge[i].innerHTML = "DRAGON";
        dragonTailAccuracy[i].innerHTML = `ACCURACY: ${ivan.getMove('dragon tail').accuracy}`;
        dragonTailPP[i].innerHTML = `PP:<br>${ivan.getMove('dragon tail').pp}`;
        dragonTailPower[i].innerHTML = `POWER: ${ivan.getMove('dragon tail').power}`;
    }
    
})
.catch(function (error) {
  console.log(error);
});

// Get information on the pokemon move 'Dragon Claw'
axios.get(`https://pokeapi.co/api/v2/move/337/`)
.then(function (response) {
    let moveName = response.data.names[2]['name'];
    let accuracy =  response.data['accuracy'];
    let pp = response.data['pp'];
    let power = response.data['power'];

    let dragonClaw = new PokemonMoves (
        moveName,
        accuracy,
        pp,
        power
    );

    // Add the new PokemonMoves object 'Dragon Claw' to the end of the array in my Trainer object so it can be accessed later on with either the .get() or the .all() method
    ivan.party.push(dragonClaw)

    // Adding the Pokemon Move Information into the collapsible
    let dragonClawName = document.querySelector('.dragonClawName')
    let dragonClawBadge = document.querySelector('.dragonClawBadge')
    let dragonClawAccuracy = document.querySelector('.dragonClawAccuracy')
    let dragonClawPP = document.querySelector('.dragonClawPP')
    let dragonClawPower = document.querySelector('.dragonClawPower')

    
    dragonClawName.innerHTML = `${ivan.getMove('dragon claw').moveName}`;
    dragonClawBadge.classList.add('dragonType');
    dragonClawBadge.innerHTML = "DRAGON";
    dragonClawAccuracy.innerHTML = `ACCURACY: ${ivan.getMove('dragon claw').accuracy}`;
    dragonClawPP.innerHTML = `PP:<br>${ivan.getMove('dragon claw').pp}`;
    dragonClawPower.innerHTML = `POWER: ${ivan.getMove('dragon claw').power}`;

})
.catch(function (error) {
  console.log(error);
});

// Get information on the pokemon move 'Dragon Pulse'
axios.get(`https://pokeapi.co/api/v2/move/406/`)
.then(function (response) {
    let moveName = response.data.names[2]['name'];
    let accuracy =  response.data['accuracy'];
    let pp = response.data['pp'];
    let power = response.data['power'];

    let dragonPulse = new PokemonMoves (
        moveName,
        accuracy,
        pp,
        power
    );

    // Add the new PokemonMoves object 'Dragon Pulse' to the end of the array in my Trainer object so it can be accessed later on with either the .get() or the .all() method
    ivan.party.push(dragonPulse)

    // Adding the Pokemon Move Information into the collapsible
    let dragonPulseName = document.querySelector('.dragonPulseName')
    let dragonPulseBadge = document.querySelector('.dragonPulseBadge')
    let dragonPulseAccuracy = document.querySelector('.dragonPulseAccuracy')
    let dragonPulsePP = document.querySelector('.dragonPulsePP')
    let dragonPulsePower = document.querySelector('.dragonPulsePower')

    
    dragonPulseName.innerHTML = `${ivan.getMove('dragon pulse').moveName}`;
    dragonPulseBadge.classList.add('dragonType');
    dragonPulseBadge.innerHTML = "DRAGON";
    dragonPulseAccuracy.innerHTML = `ACCURACY: ${ivan.getMove('dragon pulse').accuracy}`;
    dragonPulsePP.innerHTML = `PP:<br>${ivan.getMove('dragon pulse').pp}`;
    dragonPulsePower.innerHTML = `POWER: ${ivan.getMove('dragon pulse').power}`;

})
.catch(function (error) {
  console.log(error);
});

// This Section below controls the functionality of the Tabs Below Mewtwo. What is shown is based on which Tab is clicked
let getMewtwoClasses = document.querySelector('#mewtwo').classList
let getMewtwoXClasses = document.querySelector('#mewtwoX').classList
let getMewtwoYClasses = document.querySelector('#mewtwoY').classList
let showMewtwo = document.querySelector('#mewtwoButton')
let showMewtwoX = document.querySelector('#mewtwoXButton')
let showMewtwoY = document.querySelector('#mewtwoYButton')


showMewtwo.addEventListener('click', (event) =>{
    // for(let i = 0; i < getMewtwoClasses.length; i++){
    //     if(getMewtwoClasses[i].classList[i].contains('hidden')){
    //         getMewtwoClasses[i].classList[i].remove('hidden');
    //         getMewtwoXClasses[i].classList[i].add('hidden');
    //         getMewtwoYClasses[i].classList[i].add('hidden');
    //     }
    // }

    if(getMewtwoClasses.contains('hidden')){
        getMewtwoClasses.remove('hidden');
        getMewtwoXClasses.add('hidden');
        getMewtwoYClasses.add('hidden');
    }
 })

 showMewtwoX.addEventListener('click', (event) =>{
    // for(let i = 0; i < getMewtwoXClasses.length; i++){
    // if(getMewtwoXClasses[i].classList[i].contains('hidden')){
    //     getMewtwoClasses[i].classList[i].add('hidden');
    //     getMewtwoXClasses[i].classList[i].remove('hidden');
    //     getMewtwoYClasses[i].classList[i].add('hidden');
    // }

    if(getMewtwoXClasses.contains('hidden')){
        getMewtwoClasses.add('hidden');
        getMewtwoXClasses.remove('hidden');
        getMewtwoYClasses.add('hidden');
    }
 })

 showMewtwoY.addEventListener('click', (event) =>{
    // for(let i = 0; i < getMewtwoYClasses.length; i++){
    // if(getMewtwoYClasses[i].classList[i].contains('hidden')){
    //     getMewtwoClasses[i].classList[i].add('hidden');
    //     getMewtwoXClasses[i].classList[i].add('hidden');
    //     getMewtwoYClasses[i].classList[i].remove('hidden');
    // }

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

// The Section below toggles the 2 boxes with Mewtwo's moves in it to scale in and out of view
let mewtwosButton = document.querySelector('#mewtwosButton')
let getMewtwoMoves = document.querySelectorAll('.mewtwoMoves')

mewtwosButton.addEventListener('click',(event) =>{
    for(let i = 0; i < getMewtwoMoves.length; i++){
        if(getMewtwoMoves[i].classList.contains('scale-out')){
            getMewtwoMoves[i].classList.remove('scale-out');
        } else {
            getMewtwoMoves[i].classList.add('scale-out');
        }
    }
})

// The Section below toggles the 2 boxes with Mews moves in it to scale in and out of view
let mewsButton = document.querySelector('#mewsButton')
let getMewMoves = document.querySelectorAll('.mewMoves')

mewsButton.addEventListener('click',(event) =>{
    for(let i = 0; i < getMewMoves.length; i++){
        if(getMewMoves[i].classList.contains('scale-out')){
            getMewMoves[i].classList.remove('scale-out');
        } else {
            getMewMoves[i].classList.add('scale-out');
        }
    }
})

// The Section below toggles the 2 boxes with Rayquaza's moves in it to scale in and out of view
let rayquazasButton = document.querySelector('#rayquazasButton')
let getRayquazaMoves = document.querySelectorAll('.rayquazaMoves')

rayquazasButton.addEventListener('click',(event) =>{
    for(let i = 0; i < getRayquazaMoves.length; i++){
        if(getRayquazaMoves[i].classList.contains('scale-out')){
            getRayquazaMoves[i].classList.remove('scale-out');
        } else {
            getRayquazaMoves[i].classList.add('scale-out');
        }
    }
})