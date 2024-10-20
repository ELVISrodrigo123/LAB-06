import type { any } from 'astro:schema';
import React, { useState } from 'react';

const IncrementButton = () => {

const [count, setCount] = useState(5);


function handleClick () {
    setCount(count + 50);
};

return (
    <div >
    <button style={{width:"100px",height:"30px"}} onClick={handleClick } >{count} </button>
    </div>
);
};

export default IncrementButton;
