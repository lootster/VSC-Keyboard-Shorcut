import React from 'react';

const DisplayItem = (props) => {
  const { id, task, firstkey, secondkey, thirdkey, alternatekey} = props;

  return (
    <div>
      {id}
    </div>
  );
}

export default DisplayItem;
