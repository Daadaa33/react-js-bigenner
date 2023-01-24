import React from'react';

function Hellow (props){
    return (
        <div className='pt-16 w-50 bg-black text-red-400 text-3xl text-center border-l-yellow-300  '>
            <h2>my name is {props.name} </h2>
        </div>
        
       
       
    )
}

export default Hellow;