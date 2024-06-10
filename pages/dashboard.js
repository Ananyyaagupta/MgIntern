// pages/dashboard.js

// pages/dashboard.js
// import React, { useState } from 'react';
// import Link from 'next/link';
// import TreatmentList from '../src/components/TreatmentList';
// import TreatmentFilter from '../src/components/TreatmentFilter';
// import { treatments } from '../data/treatments';

// const Dashboard = () => {
//   const [filteredTreatments, setFilteredTreatments] = useState(treatments);

//   const handleFilter = (hospital) => {
//     const filtered = treatments.filter(treatment => treatment.hospital === hospital);
//     setFilteredTreatments(filtered);
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
//       <Link href="/add-treatment" >
//       <button className="mb-4 inline-block bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-green-700">
//         Add New Treatment
//         </button>
//       </Link>
//       <TreatmentFilter onFilter={handleFilter} />
//       <TreatmentList treatments={filteredTreatments} />
//     </div>
//   );
// };

// export default Dashboard;
// pages/dashboard.js
import React, { useState } from 'react';
import Link from 'next/link';
import TreatmentList from '../src/components/TreatmentList';
import TreatmentFilter from '../src/components/TreatmentFilter';
import { treatments } from '../data/treatments';

const Dashboard = () => {
  const [filteredTreatments, setFilteredTreatments] = useState(treatments);
  const hospitals = [...new Set(treatments.map(treatment => treatment.hospital))];

  const handleFilter = (hospital) => {
    const filtered = hospital ? treatments.filter(treatment => treatment.hospital === hospital) : treatments;
    setFilteredTreatments(filtered);
  };

  return (
    <div className="container mx-auto p-6 bg-yellow-200 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
      <Link href="/add-treatment">
        <button className="mb-4 inline-block bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-green-700">
          Add New Treatment
        </button>
      </Link>
      <TreatmentFilter hospitals={hospitals} onFilter={handleFilter} />
      <TreatmentList treatments={filteredTreatments} />
    </div>
  );
};

export default Dashboard;
