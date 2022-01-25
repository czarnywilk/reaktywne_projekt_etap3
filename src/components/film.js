import 'bootstrap/dist/css/bootstrap.min.css';
import react from 'react';
import React, {Component} from 'react';
import { useLocation, useParams } from 'react-router-dom';
const axios = require('axios');

//import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';

/*const Film = (props) => {
    return(
        <div className="container">
            <div className = "row">
                <div className = "sm-col-8">
                    <h2>{this.state.title} ({this.state.year})</h2>
                    <text>{this.state.desc}</text>
                </div>
            </div>
        </div>
    )
}*/



class Film extends Component{

    state = {
        films: {
            title: "", 
            image: "",
            content: ""
        }
    };

    constructor(props){
        super(props);
        this.movieId = this.props.match.params.id;
        console.log(this.movieId);
        /*this.films = {
            title: "",
            image: "",
            content: ""
        };*/
    };

    async componentDidMount() {
        await axios.get('https://pr-movies.herokuapp.com/api/movies/' + this.movieId)
            .then(res => {
                const film = res.data;
                this.state.films.title = film.title ;
                this.state.films.image = film.image ;
                this.state.films.content = film.content ;
            });
        console.log(this.state.films);
        console.log("jeden");
        this.setState(this.state.films);
    }

    render(){
        console.log("dwa");
        return(
            <div className="container" style={styles.container}>
                <div className = "row">
                    <div className = "sm-col-8">
                        <img src={this.state.films.image} className="img-fluid" style={styles.image}/>
                        <h2 style={{color: 'white', padding: 10}}>{this.state.films.title}</h2>
                        <p style={{color: 'white'}}>{this.state.films.content}</p>
                    </div>
                </div>
            </div>
        )
    }
};

var styles = {
    container: {
      padding: 24,
      backgroundColor: "#212121",
      width: "70%"
    },
    title: {
      marginTop: 16,
      paddingVertical: 8,
      borderWidth: 4,
      borderColor: "#20232a",
      borderRadius: 6,
      backgroundColor: "#61dafb",
      color: "#20232a",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold"
    },
    image: {
        padding: 0,
        width: "80%"
    }
  };

export default Film;