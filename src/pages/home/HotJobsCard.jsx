import React from 'react';
import { FaDollarSign, FaMapMarker } from "react-icons/fa";
import { Link } from 'react-router-dom';
const HotJobsCard = ({job}) => {
    const {_id,title,company,company_logo,requirements,
        description,location,salaryRange}=job;

    return (
       <div className="card bg-base-100  shadow-sm">
 <div className='flex gap-2 m-3'>
     <figure>
    <img className='w-16'
      src={company_logo}
      alt="Shoes" />
  </figure>
  <div>
    <h4 className='text-2xl'>{company}</h4>
    <p className='flex gap-2 items-center'><FaMapMarker />  {location}</p>
  </div>
 </div>
  <div className="card-body">
    <h2 className="card-title">{title}
         <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{description}</p>
    <div className='flex gap-1 flex-wrap '>
        {
            requirements.map((skill,index) =><p
            key={index}
            className='border rounded-b-lg text-center px-1 hover:text-blue-500 hover:bg-gray-100 '
            >{skill}</p>)
        }
    </div>
    <div className="card-actions justify-end items-center mt-3">
      <p className='flex items-center'> <span className='text-blue-950 font-bold'>Salary</span> : <FaDollarSign /> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>  
      <Link to={`/jobs/${_id}`}>
      <button className="btn btn-primary">Apply</button>
      </Link>
    </div>
  </div>
</div>
       
    );
};

export default HotJobsCard;