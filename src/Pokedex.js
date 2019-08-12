import React from 'react';
import './Pokedex.css';
import Pokecard from './Pokecard.js'

const Pokemon_list = [
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
]
const list_one = [
]

const list_two = [
]

for(var i =0; i<=7; i++){
    const x = Math.floor(Math.random()*Pokemon_list.length);
        if(!list_one.includes(Pokemon_list[x])&&list_one.length<4){
            list_one.push(Pokemon_list[x])
            Pokemon_list.splice(x, 1);
        }else{
            list_two.push(Pokemon_list[x])
            Pokemon_list.splice(x, 1);
        }
}

console.log(list_one)
console.log(list_two)


const images = (argument)=>{
    if(argument < 10){
        return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${'00'+argument}.png`
    }else if(argument < 100){
        return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${'0'+argument}.png`
    }else{
        return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${argument}.png`
    }
}

class Pokedex extends React.Component{
    render(){
        const new_array = list_one.map((item)=>{
            return <Pokecard 
                        name= {item.name}
                        image= {images(item.id)}
                        type={item.type}
                        exp={item.base_experience}
                    />
        })
        const new_array2 = list_two.map((item)=>{
            return <Pokecard 
                        name= {item.name}
                        image= {images(item.id)}
                        type={item.type}
                        exp={item.base_experience}
                    />
        })
        const calculate_exp1 = ()=>{
            let x = 0;
            list_one.forEach((item)=>{
                x = x+item.base_experience
            })
            return x
        }
        const calculate_exp2 = ()=>{
            let x = 0;
            list_two.forEach((item)=>{
                x = x+item.base_experience
            })
            return x
        }
        return(
            <div>
                <h1 className = 'Pokedex'>Pokedex</h1>
                <div className = 'divider'>
                    {new_array}
                </div>
                <div className = 'divider'>
                    <h2>Hand one experience: {calculate_exp1()}</h2>
                </div>
                <div className = 'divider'>
                    {new_array2}
                </div>
                <div className = 'divider'>
                    <h2>Hand two experience: {calculate_exp2()}</h2>
                </div>
            </div>
        )
    }
}

export default Pokedex