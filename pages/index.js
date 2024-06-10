// pages/index.js
// pages/index.js
import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-700">Welcome to the Health Dashboard</h1>
        <Link href="/dashboard">
          <button className="mt-6 inline-block bg-blue-100 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700">
            Go to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;



// import React, { useState } from 'react';
// import { treatments as initialTreatments } from '../src/data/treatments';
// import TreatmentList from '../src/components/TreatmentList';
// import TreatmentFilter from '../src/components/TreatmentFilter';
// import AddTreatmentForm from '../src/components/AddTreatmentForm';

// const Dashboard = () => {
//   const [treatments, setTreatments] = useState(initialTreatments);
//   const [selectedHospital, setSelectedHospital] = useState('');

//   const uniqueHospitals = [...new Set(treatments.map((treatment) => treatment.hospital))];

//   const filteredTreatments = selectedHospital
//     ? treatments.filter((treatment) => treatment.hospital === selectedHospital)
//     : treatments;

//   const handleAddTreatment = (newTreatment) => {
//     setTreatments([...treatments, { ...newTreatment, id: treatments.length + 1 }]);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
//       <TreatmentFilter
//         hospitals={uniqueHospitals}
//         selectedHospital={selectedHospital}
//         onHospitalChange={setSelectedHospital}
//       />
//       <AddTreatmentForm onAddTreatment={handleAddTreatment} />
//       <TreatmentList treatments={filteredTreatments} />
//     </div>
//   );
// };

// export default Dashboard;
