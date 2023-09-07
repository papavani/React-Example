import React from 'react';




const App = () => {
  const array = [
    {
      label: 'Add',
      onClick: () => alert('Add clicked'),
      disabled: false,
      // color:'orange'
    },
    {
      label: 'Update',
      onClick: () => alert("update the text"),
      disabled : true,
      // color:'green'
    },
    {
      label: 'Display',
      onClick: () => alert("display is clicked"),
      disabled : false,
      // color:'aqua'
    },
    {
      label: 'Delete',
      onClick: () => alert('Delete clicked'),
      disabled: false,
      // color:'red'
    },
    {
      label: 'Create',
      onClick: () => alert('create clicked'),
      // disabled: false
    }
  ];

  return (
    <div >
      {array.map((button, index) => (
        <button 
          key={index}
          // onClick={button.onClick}
          // disabled={button.disabled}
          // style={{backgroundColor:button.color}}
          {...button}
          
        >
          {button.label}
          
        </button>
      ))}
    </div>
  );
};

export default App;
