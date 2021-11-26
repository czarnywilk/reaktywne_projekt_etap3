import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';

class Loginbox extends Component {
    construktor() {
        this.state = {
            isShown: true
        }
    }

    render() {
        return(
            <form style={styles.container}>
                <div className="form-group row" style={{marginTop:'20px'}}>
                    <label htmlFor="text" className="col-4 col-form-label" style={{color:'white'}}>Nazwa lub E-mail</label> 
                    <div className="col-7">
                        <input id="text" name="text" type="text" className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="text1" className="col-4 col-form-label" style={{color:'white'}}>Hasło</label> 
                    <div className="col-7">
                        <input id="text1" name="text1" type="text" className="form-control" />
                    </div>
                </div> 
                <div className="form-group row">
                    <div className="offset-3 col-8">
                        <button name="submit" type="submit" className="btn btn-primary" style={{marginTop:'20px'}}>Zaloguj</button>
                        <button name="submit" type="submit" className="btn btn-primary" style={{marginTop:'20px'}}>Zarejestruj</button>
                    </div>
                </div>
            </form>
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

export default Loginbox;