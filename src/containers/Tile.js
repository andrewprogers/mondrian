import React from 'react';
import Bar from '../components/Bar';
import utils from '../temp/utils';

const BAR_SIZE = 8

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
    if (this.state.divider === null) {
      let rect = e.currentTarget.getBoundingClientRect();
      let proportion = {
        x: (e.clientX - rect.x) / this.props.width,
        y: (e.clientY - rect.y) / this.props.height
      }

      this.setState({
        divider: proportion.x
      })
    }
  }

  render() {
    let tileStyle = {
      backgroundColor: this.state.color,
      width: this.props.width,
      height: this.props.height
    };

    let children = null;
    if (this.state.divider !== null) {
      let firstWidth = this.state.divider * this.props.width - BAR_SIZE / 2;
      children = <div>
        <Tile
          initialColor={utils.randomColor()}
          width={firstWidth}
          height={this.props.height}
        />
        <Bar
          width={BAR_SIZE}
          height={this.props.height}
        />
        <Tile
          initialColor={utils.randomColor()}
          width={this.props.width - firstWidth - BAR_SIZE}
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
