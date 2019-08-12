import React from 'react';
import './Pokecard.css'

class Pokecard extends React.Component{
    render(){
        return(
            <div>
                <div className='Pokecard'>
                    <h1>{this.props.name}</h1>
                    <img src={this.props.image}/>
                    <p>Type: {this.props.type}</p>
                    <p>EXP: {this.props.exp}</p>
                </div>
                
            </div>
        )
    }
}

export default Pokecard