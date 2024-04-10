import React from 'react';

const Achivement = ({achivement}) => {
    return (
        <div className='my-12 flex flex-col gap-2'>
            <p className='text-[#5f4ecb] font-semibold tracking-[0.2em]'>{achivement.year}</p>
            <h5 className='text-xl text-gray-900 font-semibold '>{achivement.title}</h5>
            <p className='text-gray-600'>{achivement.details}</p>
        </div>
    );
};

export default Achivement;