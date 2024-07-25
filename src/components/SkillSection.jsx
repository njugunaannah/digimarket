import React from 'react';



const SkillSection = ({ skillName, description }) => {
    return (
        <section className="h-full">
            <h2 className="font-extrabold">{skillName}</h2>
            <br/>
            <p className="font-serif">{description}</p>

   


    
        </section>
    );

}

export default SkillSection