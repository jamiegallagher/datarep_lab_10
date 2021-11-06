import React from 'react';
import { Movies } from './movies';
import axios from 'axios';

export class Read extends React.Component
{
    state = {
       movies:  []
        };

    //Life cycle method that holds the json data and function to get and catch the variables
    componentDidMount() 
    {
        // Getting the json data from the backend server instead of a json interpeter 
        axios.get('http://localhost:4000/api/movies')
        .then((response)=>{
            this.setState({ movies:response.data.movies})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

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