import React from 'react';

const Bar = props => {
  let barStyle = {
    backgroundColor: 'black',
    width: props.width,
    height: '100%'
  }

  let clickHandler = (e) => {
    e.stopPropagation();
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
