// pages/add-treatment.js
import React from 'react';
import Link from 'next/link';
import AddTreatmentForm from '../src/components/AddTreatmentForm';
import { useRouter } from 'next/router';

const AddTreatment = () => {
  const router = useRouter();

  const handleAddTreatment = (newTreatment) => {
    console.log('New treatment added:', newTreatment);
    router.push('/dashboard');
  };

  return (
    <div className="container mx-auto p-6 bg-yellow">
      <h1 className="text-2xl font-bold mb-4">Add New Treatment</h1>
      <AddTreatmentForm onAddTreatment={handleAddTreatment} />
      <Link href="/dashboard">
      <button className="mt-6 inline-block bg-gray-500 text-white px-4 py-2 rounded-md shadow hover:bg-gray-700">
        Back to Dashboard</button>
      </Link>
    </div>
  );
};

export default AddTreatment;
