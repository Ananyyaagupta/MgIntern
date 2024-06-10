import React, { useState } from 'react';
import styles from '../styles/AddTreatmentForm.module.css';

const AddTreatmentForm = ({ onAddTreatment }) => {
  const [formState, setFormState] = useState({
    date: '',
    hospital: '',
    doctor: '',
    description: '',
    notes: '',
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.date && formState.hospital && formState.doctor && formState.description) {
      onAddTreatment(formState);
      setFormState({
        date: '',
        hospital: '',
        doctor: '',
        description: '',
        notes: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-yellow p-6 rounded-lg shadow-md mb-8 space-y-6">
      <h2 className="text-xl font-semibold text-gray-700">Add New Treatment</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date: </label>
          <input
            type="date"
            name="date"
            value={formState.date}
            onChange={handleChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Hospital/Clinic: </label>
          <input
            type="text"
            name="hospital"
            value={formState.hospital}
            onChange={handleChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Doctor</label>
          <input
            type="text"
            name="doctor"
            value={formState.doctor}
            onChange={handleChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            name="description"
            value={formState.description}
            onChange={handleChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
          <textarea
            name="notes"
            value={formState.notes}
            onChange={handleChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          ></textarea>
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Add Treatment
      </button>
    </form>
  );
};

export default AddTreatmentForm;
