import React from 'react';

const Person=(props)=>{
    return(
      <div>
        {/* am bindu{Math.random()*30} */}
       {/* bindu {Math.floor(Math.random()*30)} */}
       <p>I am{props.name}my age{props.age}
          {props.children}
       </p>
      </div>
    )
};
export default Person;