import React from 'react';

const Bar = props => {
  let barStyle = {
    backgroundColor: 'black',
    width: props.width,
    height: '100%'
  }

  return(
    <div
      style={barStyle}
      className='Bar'>
    </div>
  )
}

export default Bar;
