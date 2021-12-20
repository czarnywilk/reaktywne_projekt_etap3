import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: props.page,
            name: props.name
        };
    }

    mouseEnter() {
        this.style.opacity = '100%';
    }

    mouseLeave() {
        this.style.opacity = '70%';
    }

    render() {
        return (
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-sm-4">
                        <img src="https://cdn.dribbble.com/users/1010064/screenshots/13723513/movie_film_video_production_house_home_icon_symbol_4x.png" className="img-fluid"/>
                    </div>
                    <div className="col-sm-8 vertical-center">
                        <div className="text-center" style={{color: 'white'}}>
                            <h2>Adrian Tarza</h2>
                            <h5>Baza filmów online</h5>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-left align-items-center">
                    <div className="col-sm-12">
                        <div className="btn-group" role="group" aria-label="Normalne przyciski" style={{width:'100%'}}>
                            <Link to="/" className="nav-link" id="pills-home-tab" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="true" style={{width:'50%'}}>
                                <button type="button" className="btn btn-dark" styles={styles.button} style={{opacity: '90%', width : '105%'}}>Strona główna</button>
                            </Link>
                            <Link to="/addfilm" className="nav-link" id="pills-home-tab" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="true" style={{width:'50%'}}>
                                <button type="button" className="btn btn-dark" styles={styles.button} style={{opacity: '90%', width : '105%'}}>Dodaj film</button>
                            </Link>
                            <Link to="/login" className="nav-link" id="pills-home-tab" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="true" style={{width:'50%'}}>
                                <button type="button" className="btn btn-dark" styles={styles.button} style={{opacity: '90%', width : '105%'}}>Zaloguj się</button>
                            </Link>
                            <Link to="/register" className="nav-link" id="pills-home-tab" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="true" style={{width:'50%'}}>
                                <button type="button" className="btn btn-dark" styles={styles.button} style={{opacity: '90%', width : '105%'}}>Rejestracja</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

var styles = {
    button: {
        fontSize: 30,
        height: '120px',
        width: '100%',
        opacity: '0.5%'
    },
    name: {
        fontSize: '30px',
        color: 'white'
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
        padding: 0
    },
  };

export default Navbar;