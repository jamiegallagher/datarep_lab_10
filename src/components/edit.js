import React from 'react';
import axios from 'axios';
import App from '../App';
import { Movieitem } from './movieitem';

export class Edit extends React.Component {
    //Creating a constructor to bind the data to the event constructors
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);
        this.state = {
            Title:'',
            Year: '',
            Poster: ''
        }
    }

    componentDidMount()
    {
        console.log(this.props.match.params.id);

        axios.get('http://localhost:4000/api/movies/'+this.props.match.params.id)
        .then(response =>{
            this.setState({
                _id:response.data._id,
                Title:response.data.title,
                Year: response.data.year,
                Poster: response.data.poster
            })
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }

    onChangeYear(e) {
        this.setState({
            Year: e.target.value
        });
    }

    onChangePoster(e) {
        this.setState({
            Poster: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        alert("Movie: " + this.state.Title + " "
        + this.state.Year + " " +
        this.state.Poster);

        const newMovie = {
            title: this.state.Title,
            year: this.state.Year,
            poster: this.state.Poster,
            _id:this.state._id
        }

        axios.put('http://localhost:4000/api/movies/' +this.state._id, newMovie)
        .then(res =>{
            console.log(res.data)
        })
        .catch();
        //Making request to the url localhost:4000 and passing the movies that are added into the database
        //axios.post('http://localhost:4000/api/movies', newMovie)
       // .then((res)=>{
       //     console.log(res);
      //  })
      //  .catch((err)=>{
      //      console.log(err)
      //  });
    }
    render() {
        return (
            //Code to output the methods and the constructor values to the screen
            //Takes the values we've instantiated in the methods and constructor and gets input from the user
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Movie Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Title}
                            onChange={this.onChangeTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Movie Year: </label>
                        <input type="number"
                            className="form-control"
                            value={this.state.Year}
                            onChange={this.onChangeYear}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Poster URL: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Poster}
                            onChange={this.onChangePoster}>    
                            </input>
                    </div>
                    <div className="form-group">
                        <input type="submit" 
                        value="Edit Movie" 
                        className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        )
    }
}