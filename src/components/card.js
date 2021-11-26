import 'bootstrap/dist/css/bootstrap.min.css';
import react from 'react';
import React, {Component} from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            year: props.year,
            pic: props.pic,
            desc: props.desc
        };
    }

    render() {
        return(
            <div style={styles.container}>
                <div className = "row">
                    <div className = "col-sm-2">
                        <img src={this.state.pic} className="img-fluid" style={styles.image}/>
                    </div>
                    <div className = "col-sm-10">
                        <h4>{this.state.title} ({this.state.year})</h4>
                        <p>{this.state.desc.substring(0,250)}...</p>
                    </div>
                </div>
            </div>
        )
    }
}

var styles = {
    container: {
      padding: 24,
      backgroundColor: "#212121"
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

export default Card;