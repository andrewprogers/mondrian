import React from 'react';

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 500,
      height: 500,
      sectorProportions: []
    }
  }

  render() {
    let canvasStyle = {
      width: this.state.width + 'px',
      height: this.state.height + 'px'
    };

    return(
      <div style={canvasStyle} className='Canvas'>
      </div>
    )
  }
}

export default Canvas;
