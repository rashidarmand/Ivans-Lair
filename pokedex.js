class Trainer {
    constructor() {
        this.party = [];
    }

    all(pokemon) {
        // return back a list of all pokemon

        this.party.push(pokemon);


        // let listOfAllPokemon = document.querySelectorAll('Pokemon');
        // return listOfAllPokemon;
    }

    get(name) {
        // return just one pokemon
        return this.Pokemon;
    }
}



let Ivan = new Trainer().all()

console.log(Ivan)


class Pokemon {
    constructor(name, hp, attack, defense, abilities) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.abilities = abilities;
    }
}

let bulba = new Pokemon("bulba", 400, 500, 600, ['blow shit up', 'fuck shit up', 'beat shit up'])
let chara = new Pokemon("chara", 400, 500, 600, ['blow shit up', 'fuck shit up', 'beat shit up'])
let squida = new Pokemon("squida", 400, 500, 600, ['blow shit up', 'fuck shit up', 'beat shit up'])

console.log(bulba)
console.log(chara)
console.log(squida)


let section = document.querySelector('#show');

axios.get('https://pokeapi.co/api/v2/pokemon/150/')
  .then(function (response) {
      let data = response.data;
      let arr = []
    
    //   console.log(data);

    console.log(response.data['name']); //name
    console.log(response.data.stats[5]['base_stat']); //hp
    console.log(response.data.stats[4]['base_stat']); //attack
    console.log(response.data.stats[2]['base_stat']); //special-attack
    console.log(response.data.stats[3]['base_stat']); //defense
    console.log(response.data.stats[1]['base_stat']); //special-defense
    
    //data.abilities.forEach((ability)=> {
        let theAbilities = response.data.abilities;
        let i = 0
        do {
            arr.push(response.data.abilities[i].ability['name']);           //gets the abilities in an array format.
            i++;
            // console.log(arr);
        }
        while(i < theAbilities.length)
        //  console.log(arr);
    //})

    console.log(arr);
    
  })
  .catch(function (error) {
    console.log(error);
  });