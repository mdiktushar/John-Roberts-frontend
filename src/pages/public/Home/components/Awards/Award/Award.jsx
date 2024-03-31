import React from 'react';

const Award = ({award}) => {
    return (
        <div>
            <img className='my-2' src={award.image} alt={award.name} />
            <h6 className='my-2 text-lg font-semibold text-gray-900'>{award.name}</h6>
            <p className='my-2 text-sm text-gray-500'>{award.description}</p>
        </div>
    );
};

export default Award;