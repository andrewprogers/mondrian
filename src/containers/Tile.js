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

  clickHandler(e) {
    e.stopPropagation();

    if (this.state.vertical) {
      this.setState({ divider: relativeClick(e, this.props).x });
    } else {
      this.setState({ divider: relativeClick(e, this.props).y });
    }
  }

  changeMode() {
    if (this.state.vertical === this.props.initialVertical) {
      this.setState({vertical: !this.state.vertical});
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
      children = <div>
        <Tile
          initialColor={utils.randomColor()}
          width={ (this.state.vertical) ? firstLength : this.props.width }
          height={ (this.state.vertical) ? this.props.height : firstLength }
        />
        <Bar
          thickness={BAR_SIZE}
          length={ (this.state.vertical) ? this.props.height : this.props.width }
          vertical={this.state.vertical}
          onClick={this.changeMode}
        />
        <Tile
          initialColor={utils.randomColor()}
          width={ (this.state.vertical) ? secondLength : this.props.width }
          height={ (this.state.vertical) ? this.props.height : secondLength }
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
