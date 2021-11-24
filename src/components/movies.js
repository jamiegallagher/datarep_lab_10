import React from 'react';
import { Movieitem } from './movieitem';

export class Movies extends React.Component
{
    render()
    {
        return this.props.movies.map( (movie)=>{
            return <Movieitem movie ={movie} ReloadData={this.props.ReloadData}></Movieitem>
        })
    }
}