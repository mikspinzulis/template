import React, { Component } from 'react'
import '../styles/App.css'
import berns from '../images/berns.jpg'
import Header from './Header/index.js'
import Footer from './Footer/index.js'
import Slide from './FlexImages/Slide'

class Layout extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <p>
            Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum.
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus
            varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <img src={berns} className="berns" />
        </div>
          <Slide />
        <Footer />
      </div>
    );
  }
}

export default Layout;
