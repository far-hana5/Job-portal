import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const {title,company ,deadline}=useLoaderData();

    return (
        <div>
            <h3>Jobs details: {title}</h3>
            <p>apply for:{company}</p>
            <p>deadliine: {deadline}</p>
            <button className='btn'>Apply Now</button>
        </div>
    );
};

export default JobDetails;