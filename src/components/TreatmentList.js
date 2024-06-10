// import React from 'react';
// import Link from 'next/link';

// const TreatmentList = ({ treatments }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//       {treatments.map((treatment) => (
//         <div key={treatment.id} className="bg-white p-6 rounded-lg shadow-md">
//           <div className="aspect-w-16 aspect-h-9">
//             <img src="/path-to-image.jpg" alt={treatment.description} className="object-cover rounded-md" />
//           </div>
//           <h3 className="text-lg font-semibold text-gray-700 mt-4">{treatment.date}</h3>
//           <p className="text-gray-600">{treatment.hospital}</p>
//           <p className="text-gray-600">{treatment.doctor}</p>
//           <p className="text-gray-600">{treatment.description}</p>
//           <Link href={`/treatment/${treatment.id}`}>
//             <a className="text-blue-500 hover:underline">View Details</a>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TreatmentList;
// src/components/TreatmentList.js
import React from 'react';
import Link from 'next/link';
import styles from '../styles/TreatmentList.module.css';

const TreatmentList = ({ treatments }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-yellow">
      {treatments.map((treatment) => (
        <div key={treatment.id} className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">{treatment.date}</h3>
          <p className="text-gray-600">{treatment.hospital}</p>
          <p className="text-gray-600">{treatment.doctor}</p>
          <p className="text-gray-600">{treatment.description}</p>
          <Link href={`/treatment/${treatment.id}`}>
          <button className="text-blue-500 hover:underline">
            View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TreatmentList;
