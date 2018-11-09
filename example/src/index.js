/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '../../dist/react-fullpage';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import './index.scss';

// components
import Header from './components/Header/header';
import Hero from './components/Hero/Hero';
import History from './components/History/history';
import Products from './components/Products/products';

import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true

class Fullpage extends React.Component {
  onLeave(origin, destination, direction) {
    // arguments are mapped in order of fullpage.js callback arguments
    // do something with the event
  }

  render() {
    return (
      <ReactFullpage
        anchors={['firstPage', 'secondPage', 'thirdPage', 'fourthPage']}
        sectionsColor={['white', '#f7f7f7', '#015c7e', 'white']}
        onLeave={this.onLeave.bind(this)}
        render={({ state, fullpageApi }) => {
          console.log('render prop change', state);

          return (
            <ReactFullpage.Wrapper>
              <div className="section">
              <Header/>
                <Hero />
                <a className="hero--button" onClick={() => fullpageApi.moveSectionDown()}>
                  <p>Ver más</p> <KeyboardArrowDownIcon />
                </a>
              </div>
              <div className="section">
                <History />
              </div>
              <div className="section">
                <Products />
              </div>
              <div className="section">
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );
  }
}

ReactDOM.render(<Fullpage />, document.getElementById('react-root'));
