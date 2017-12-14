import React from 'react';

const Bar = props => {
  let barStyle = {
    backgroundColor: 'black',
    width: '5px',
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
