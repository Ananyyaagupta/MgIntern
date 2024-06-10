// import React from 'react';

// const TreatmentFilter = ({ hospitals, selectedHospital, onHospitalChange }) => {
//   return (
//     <div className="mb-8">
//       <h2 className="text-xl font-semibold text-gray-700 mb-4">Filter by Hospital/Clinic</h2>
//       <select
//         value={selectedHospital}
//         onChange={(e) => onHospitalChange(e.target.value)}
//         className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
//       >
//         <option value="">All Hospitals/Clinics</option>
//         {hospitals.map((hospital, index) => (
//           <option key={index} value={hospital}>
//             {hospital}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default TreatmentFilter;
// src/components/TreatmentFilter.js
import React from 'react';
import styles from '../styles/TreatmentFilter.module.css';

const TreatmentFilter = ({ hospitals = [], onFilter }) => {
  const handleChange = (e) => {
    onFilter(e.target.value);
  };

  return (
    <div className="mb-4 bg-yellow">
      <label htmlFor="hospital-filter" className="block text-sm font-medium text-gray-700">
        Filter by Hospital/Clinic:
      </label>
      <select
        id="hospital-filter"
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        onChange={handleChange}
      >
        <option value="">All Hospitals/Clinics</option>
        {hospitals.map((hospital, index) => (
          <option key={index} value={hospital}>
            {hospital}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TreatmentFilter;
