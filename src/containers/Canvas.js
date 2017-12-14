import React from 'react';
import Tile from './Tile';

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 500,
      height: 500
    }
  }

  render() {
    let canvasStyle = {
      width: this.state.width + 'px',
      height: this.state.height + 'px'
    };

    return(

      <div style={canvasStyle} className='Canvas'>
        <Tile
          initialColor='#BBB'
          width={this.state.width}
          height={this.state.height}
        />
      </div>
    )
  }
}

export default Canvas;
