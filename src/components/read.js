import React from 'react';
import { Movies } from './movies';
import axios from 'axios';

export class Read extends React.Component
{
    //Life cycle method that holds the json data and function to get and catch the variables
    componentDidMount() 
    {
        axios.get('https://jsonblob.com/api/jsonblob/894944504570986496')
        .then((response)=>{
            this.setState({ movies:response.data.movies })
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    state = {
       movies:  []
        };

    render()
    {
        return(
            <div>
                <h1>This is the read Component.</h1>
                <Movies movies={this.state.movies}></Movies>
            </div>
        )
    }
}