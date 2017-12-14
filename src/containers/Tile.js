import React from 'react';
import Bar from '../components/Bar';
import utils from '../temp/utils';

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.initialColor,
      dividers: []
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
      dividers: [...this.state.dividers, proportion.x]
    })
  }

  render() {
    let tileStyle = {
      backgroundColor: this.state.color,
      width: this.props.width,
      height: this.props.height
    };

    let sortedDividers = this.state.dividers.slice().sort();
    let tiles = sortedDividers.map((divider, i, dividers) => {
      let portion = (i === 0) ? dividers[0] : dividers[i] - dividers[i-1];
      let width = portion * this.props.width - 5;
      return(
        <Tile
          key={'tile-' + i}
          initialColor={utils.randomColor()}
          width={width}
          height={this.props.height}
        />
      )
    })

    let children = [];
    tiles.forEach((tile, i) => {
      children.push(tile)
      children.push(
        <Bar key={'bar-' + i} />
      )
    })

    return(
      <div
        className='Tile'
        style={tileStyle}
        onClick={this.clickHandler}>
        {children}
      </div>
    )
  }
}

export default Tile;
