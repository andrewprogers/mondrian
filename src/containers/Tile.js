import React from 'react';
import Bar from '../components/Bar';
import utils from '../helpers/utils';
import relativeClick from '../helpers/relativeClick';

const BAR_SIZE = 8

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.initialColor,
      divider: null,
      vertical: this.props.initialVertical
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.changeMode = this.changeMode.bind(this);
  }

  getDivider(event, isVertical = this.state.vertical) {
    let rect = this.element.getBoundingClientRect();

    if (isVertical) {
      return (event.clientX - rect.x) / rect.width;
    } else {
      return (event.clientY - rect.y) / rect.height;
    }
  }

  clickHandler(e) {
    e.stopPropagation();
    this.setState({
      vertical: this.props.initialVertical,
      divider: this.getDivider(e, this.props.initialVertical)
    });
  }

  changeMode(e) {
    if (this.state.vertical === this.props.initialVertical) {
      this.setState({
        divider: this.getDivider(e, !this.state.vertical),
        vertical: !this.state.vertical
      });
    } else {
      this.setState({
        divider: null,
        vertical: this.props.initialVertical
      });
    }
  }

  render() {
    let tileStyle = {
      backgroundColor: this.state.color,
      width: this.props.width,
      height: this.props.height
    };

    let children = null;
    if (this.state.divider) {

      let maxLength = (this.state.vertical) ? this.props.width : this.props.height;
      let firstLength = this.state.divider * maxLength - BAR_SIZE / 2;
      let secondLength = maxLength - firstLength - BAR_SIZE;
      children = [
        <Tile key="tile-1"
          initialColor={utils.randomColor()}
          initialVertical={this.state.vertical}
          width={ (this.state.vertical) ? firstLength : this.props.width }
          height={ (this.state.vertical) ? this.props.height : firstLength }
        />,
      <Bar key="bar"
          thickness={BAR_SIZE}
          length={ (this.state.vertical) ? this.props.height : this.props.width }
          vertical={this.state.vertical}
          onClick={this.changeMode}
        />,
      <Tile key="tile-2"
          initialColor={utils.randomColor()}
          initialVertical={this.state.vertical}
          width={ (this.state.vertical) ? secondLength : this.props.width }
          height={ (this.state.vertical) ? this.props.height : secondLength }
        />
      ]
    }

    return(
      <div
        className='Tile'
        ref={el => {this.element = el;} }
        style={tileStyle}
        onClick={this.clickHandler}>
        {children}
      </div>
    );
  }
}

export default Tile;
