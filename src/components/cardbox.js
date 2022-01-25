import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import Card from './card';
import { Link } from "react-router-dom";
import Pagination from './pagination';
import { paginate } from "./utils/paginate";
import { Nav } from 'react-bootstrap';
import Loginbox from './loginbox';
const axios = require('axios');


class Cardbox extends Component {
    constructor() {
        super();
        this.state = {
            pageSize: 4,
            currentPage: 1
        }
        this.handlePageChange = this.handlePageChange.bind(this);
        this.films = [];
        this.posts = [];
    }

    async componentDidMount() {
        await axios.get('https://pr-movies.herokuapp.com/api/movies')
            .then(res => {
                const film = res.data;
                this.films = film ;
                console.log(this.films);
            });
        this.setState(this.films);
    }

    /*componentDidMount() {
        axios.get('https://pr-movies.herokuapp.com/api/movies')
            .then(res => {
                const film = res.data;
                this.films = film ;
                console.log(this.films);
            });
    }*/

    handlePageChange(page){
        this.setState({currentPage: page});
        this.forceUpdate();
        console.log("Wymuszamy odświeżonko");
    };

    handleChangeRoute = (id) => {
        this.setState(this.state);
        console.log("Nasz film: " + id);
        this.props.history.push('/film/' + id);
    };
 
    render() {
        if (!this.films.length) return <p>brak filmów</p>;
        this.posts = [];
        this.posts = paginate(this.films, this.state.currentPage, this.state.pageSize)
        const {pageSize, currentPage} = this.state;
        console.log("Aktualna strona: " + this.state.currentPage);
        console.log("Ostatni film: " + this.posts[0].title);
        return(
            <div className="container" styles={styles.container} key={this.state.currentPage}>
                <div className = "row">
                    <div className = "col-sm-8">
                        <React.Fragment>
                            {this.posts.map((item, i) => {
                                return (
                                    <Nav.Link key={i} href={`/film/${item.id}`}>
                                        <Card title={item.title} desc={item.content} pic = {item.image} style={styles.container}></Card>
                                    </Nav.Link>
                                );
                            })}
                            <Pagination itemsCount={this.films.length} pageSize={this.state.pageSize} currentPage={this.state.currentPage} onPageChange={this.handlePageChange}/>
                        </React.Fragment>
                    </div>
                    <div className="col-sm-4">
                        <Loginbox fun={this.handleChangeRoute} />
                    </div>
                </div>
            </div>
        )
    }
}

var styles = {
    container: {
      padding: 100,
      marginTop: 100
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
    }
  };

export default Cardbox;