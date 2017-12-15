import React from 'react';

const Bar = props => {
  let barStyle;

  if (props.vertical) {
    barStyle = {
      width: props.thickness,
      height: props.length
    };
  } else {
    barStyle = {
      width: props.length,
      height: props.thickness
    };
  }


  let clickHandler = (e) => {
    e.stopPropagation();
    props.onClick(e);
  }

  return(
    <div
      onClick={clickHandler}
      style={barStyle}
      className='Bar'>
    </div>
  )
}

export default Bar;
