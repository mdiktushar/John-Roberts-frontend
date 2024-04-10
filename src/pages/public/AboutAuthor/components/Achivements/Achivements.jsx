import React from 'react';
import Achivement from './Achivement/Achivement';

const Achivements = ({achivements}) => {
    return (
        <div className='my-[100px] lg:max-w-[700px] lg:mx-auto px-[30px]'>
            {achivements.map((item, inedx)=> (
                <Achivement key={inedx} achivement={item}/>
            ))}
        </div>
    );
};

export default Achivements;