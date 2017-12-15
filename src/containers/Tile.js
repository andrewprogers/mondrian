import React from 'react';
import Bar from '../components/Bar';
import utils from '../temp/utils';

const BAR_WIDTH = 8

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.initialColor,
      divider: null
    };
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(e) {
    e.stopPropagation();
    let rect = e.currentTarget.getBoundingClientRect();
    let proportion = {
      x: (e.clientX - rect.x) / this.props.width,
      y: (e.clientY - rect.y) / this.props.height
    }

    this.setState({
      divider: proportion.x
    })
  }

  render() {
    let tileStyle = {
      backgroundColor: this.state.color,
      width: this.props.width,
      height: this.props.height
    };

    let children = null;
    if (this.state.divider !== null) {
      let firstTileWidth = this.state.divider * this.props.width - BAR_WIDTH / 2;
      children = <div>
        <Tile
          key='tile-1'
          initialColor={utils.randomColor()}
          width={firstTileWidth}
          height={this.props.height}
        />
      <Bar key={'bar'} width={BAR_WIDTH} height={this.props.height} />
        <Tile
          key='tile-2'
          initialColor={utils.randomColor()}
          width={this.props.width - firstTileWidth - BAR_WIDTH}
          height={this.props.height}
        />
      </div>
    }

    return(
      <div
        className='Tile'
        style={tileStyle}
        onClick={this.clickHandler}>
        {children}
      </div>
    );
  }
}

export default Tile;
