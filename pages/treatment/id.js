// import React from 'react';
// import { useRouter } from 'next/router';
// import { treatments } from '../../src/data/treatments';
// import TreatmentDetails from '../../src/components/TreatmentDetails';

// const TreatmentDetailPage = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const treatment = treatments.find((t) => t.id === parseInt(id, 10));

//   return <TreatmentDetails treatment={treatment} />;
// };

// export default TreatmentDetailPage;
// pages/treatment/[id].js
// pages/treatment/[id].js
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import TreatmentDetails from '../../src/components/TreatmentDetails';
import { treatments } from '../../data/treatments';

const TreatmentDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const treatment = treatments.find((t) => t.id === parseInt(id));

  return (
    <div className="container mx-auto p-6">
      <TreatmentDetails treatment={treatment} />
      <Link href="/dashboard">
      <button className="mt-6 inline-block bg-gray-500 text-white px-4 py-2 rounded-md shadow hover:bg-gray-700">
        Back to Dashboard</button>
      </Link>
    </div>
  );
};

export default TreatmentDetailPage;
