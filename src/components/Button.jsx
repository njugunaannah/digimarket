import React from 'react';

const Button = ({text, onClick})=>{return (
    <button className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onClick}>{text}
    </button>
); 
};

export default Button;