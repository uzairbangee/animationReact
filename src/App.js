import React, {Fragment} from 'react';
import './App.css';
import Header from './Components/Header';
import img from "./images/source.gif"
import connect from "./images/connect.gif"
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';

// import useWebAnimations, { bounce } from "@wellyshen/use-web-animations";

function App() {
  // const { ref } = useWebAnimations({ ...bounce });
  return (
    <Fragment>
      <Header/>
      <div className="body__area">
        <section className="bannerSec">
          <div className="container">
            <div className="whole__area">
              <div className="banner__image">
                <img src={img} alt="source" className="source__image"/>
              </div>
              <div className="text_slider">
              <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                  <h2 className="heading" >Scalable extended business office services </h2>
                </Slide>
              </div>
            </div>
          </div>
        </section>

        <section className="bannerSec jam">
          <div className="container">
            <div className="whole__area">
            <div className="text_slider">
                  <h2 className="heading" >Connect with your customer in a modern way</h2>
              </div>
              <div className="banner__image">
                <img src={connect} alt="connect" className="source__image"/>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
}

export default App;
