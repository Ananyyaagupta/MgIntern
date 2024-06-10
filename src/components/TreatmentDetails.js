import React from 'react';
import styles from '../styles/TreatmentDetail.module.css';

const TreatmentDetails = ({ treatment }) => {
  if (!treatment) {
    return <p className="text-center text-gray-700">Treatment not found.</p>;
  }

  return (
    <div className="prose lg:prose-xl bg-yellow p-6 rounded-lg shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-gray-700">Treatment Details</h2>
      <div>
        <h3 className="text-lg font-semibold text-gray-700">Date</h3>
        <p className="text-gray-600">{treatment.date}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-700">Hospital/Clinic</h3>
        <p className="text-gray-600">{treatment.hospital}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-700">Doctor</h3>
        <p className="text-gray-600">{treatment.doctor}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-700">Description</h3>
        <p className="text-gray-600">{treatment.description}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-700">Notes</h3>
        <p className="text-gray-600">{treatment.notes}</p>
      </div>
    </div>
  );
};

export default TreatmentDetails;
