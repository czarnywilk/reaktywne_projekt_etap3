import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Cardbox from './components/cardbox';
import Loginbox from './components/loginbox';
import Film from './components/film';
import Footer from './components/footer';
import NotFound from './components/notFound';
import AddFilm from './components/addfilm';
import { Switch ,Route } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import React, { useEffect, useState } from 'react';

function App() {

  const childFunc = React.useRef(null)
  const func = () => {
    childFunc.current();
  }

  return (
    <div className="App" style={{backgroundImage: "url(" + "https://img4.goodfon.com/wallpaper/nbig/c/93/hi-tech-technology-projector-katushki-kinoplenka-movie-retro.jpg" + ")",backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundAttachment: 'fixed'}}>
      <div className="container" style={{minHeight: "100vh"}}>
        <div className="row">
          <div className="col-sm-12">
            <Navbar name = "Adrian" page = "1" childFunc={childFunc}/>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="container">
              <div className="content">
                <Switch>
                  <Route exact path="/"
                    component={Cardbox} />
                  <Route path="/film/:id"
                    component={Film}/>
                  <Route path="/addfilm"
                    component={AddFilm}/>
                  <Route path="/login"
                    render={(props) => (<Login fun={func} />)}/>
                  <Route path="/register"
                    render={(props) => (<Register fun={func} />)}/>
                  <Route path='*' component={NotFound} />
                </Switch>
              </div>
            </div>
          </div>
          
        </div>
        <div className="row">
          <div className="col-sm-12">
            <Footer style={{position: "relative", bottom: 0, marginTop: "100vh"}}/>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;