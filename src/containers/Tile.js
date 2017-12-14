import React from 'react';

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.initialColor
    };
  }

  clickHandler() {
    alert('tile clicked!');
  }

  render() {
    let tileStyle = {
      backgroundColor: this.state.color,
      width: this.props.width,
      height: this.props.height
    };

    return(
      <div
        className='Tile'
        style={tileStyle}
        onClick={this.clickHandler}
        >

      </div>
    )
  }
}

export default Tile;
