import React from 'react';
import axios from 'axios';

export class Create extends React.Component {
    //Creating a constructor to bind the data to the event constructors
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
        this.onChangePosterURL = this.onChangePosterURL.bind(this);
        this.state = {
            Title:'',
            Year: '',
            Poster: ''
        }
    }

    //Event methods to set the states of the values created in the constructor and output the values to the console when inputted by the user
    handleSubmit(event) {
        console.log(this.state.Title);
        console.log(this.state.Year);
        console.log(this.state.Poster);
        event.preventDefault();

        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }

        const newMovie = {
            title: this.state.Title,
            year: this.state.Year,
            poster: this.state.Poster
        }

         //Making request to the url localhost:4000 and passing the movies that are added into the database
         axios.post('http://localhost:400/api/movies', newMovie)
         .then((res)=>{
             console.log(res);
         })
         .catch((err)=>{
             console.log(err);
         });
    }
    onChangeMovieName(event)
    {
        this.setState({
            Title:event.target.value
        })
    }
    onChangeMovieYear(event)
    {
        this.setState({
            Year:event.target.value
        })
    }
    onChangePosterURL(event)
    {
        this.setState({
            Poster:event.target.value
        })
    }
    render() {
        return (
            //Code to output the methods and the constructor values to the screen
            //Takes the values we've instantiated in the methods and constructor and gets input from the user
            <div>
                <h1>This is the create Component.</h1>
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label>Add Movie Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Title}
                            onChange={this.onChangeMovieName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Movie Year: </label>
                        <input type="number"
                            className="form-control"
                            value={this.state.Year}
                            onChange={this.onChangeMovieYear}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Poster URL: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Poster}
                            onChange={this.onChangePosterURL}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Add Movie" className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        )
    }
}