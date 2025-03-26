"use client"
import { useState } from 'react';

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    childName: '',
    dob: '',
    gender: '',
    photo: null,
    parentsName: ['', ''],
    contact: ['', ''],
    email: '',
    address: '',
    occupation: ['', ''],
    curriculum: '',
    schools: [],
    grade: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-xl p-6 shadow-lg">
        <h1 className=" text-blue-800 mb-8 text-3xl font-bold text-center">School Admission Form</h1>

        <h1 className="text-blue-800 font-semibold text-xl px-2 text-center mb-3"><u>Student Details</u></h1>
        <div className="mb-8 p-4 border-2 border-blue-100 rounded-lg">
          
          <div className="space-y-4 text-gray-700">
            <Input label="Full Name" value={formData.childName} onChange={e => setFormData({...formData, childName: e.target.value})} />
            <Input classname="" label="Date of Birth" type="date" value={formData.dob} onChange={e => setFormData({...formData, dob: e.target.value})} />
            <Select label="Gender" options={['Male', 'Female', 'Other']} value={formData.gender} onChange={e => setFormData({...formData, gender: e.target.value})} />
            <FileInput label="Photograph" onChange={e => setFormData({...formData, photo: e.target.files[0]})} />
          </div>
        </div>

          <h1 className="text-blue-800 font-semibold px-2 text-xl text-center mb-5"><u>Guardian Details</u></h1>
        <div className="mb-8 p-4 border-2 border-blue-100 rounded-lg">
          <div className="space-y-4 text-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Father's Name" value={formData.parentsName[0]} onChange={e => setFormData({...formData, parentsName: [e.target.value, formData.parentsName[1]]})} />
              <Input label="Mother's Name" value={formData.parentsName[1]} onChange={e => setFormData({...formData, parentsName: [formData.parentsName[0], e.target.value]})} />
            </div>
            <Input label="Email" type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
            <Input label="Address" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} />
          </div>
        </div>

          <h1 className="text-blue-800 font-semibold px-2 text-xl text-center mb-3"><u>Educational Preferences</u></h1>
        <div className="mb-8 p-4 border-2 border-blue-100 rounded-lg">
          <div className="space-y-4 text-gray-700">
            <Select label="Preferred Curriculum" options={['CBSE', 'ICSE', 'IB', 'State Board']} value={formData.curriculum} onChange={e => setFormData({...formData, curriculum: e.target.value})} />
            <Input label="Grade Applying For" value={formData.grade} onChange={e => setFormData({...formData, grade: e.target.value})} />
          </div>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Submit Application
        </button>
      </form>
    </div>
  );
}

const Input = ({ label, type = 'text', ...props }) => (
  <div>
    <label className="block text-sm text-blue-600 mb-1">{label}</label>
    <input
      type={type}
      className="w-full p-2 border-2 border-blue-100 rounded-md focus:border-blue-400 outline-none"
      {...props}
    />
  </div>
);

const Select = ({ label, options, ...props }) => (
  <div>
    <label className="block text-sm text-blue-600 mb-1">{label}</label>
    <select
      className="w-full p-2 border-2 border-blue-100 rounded-md focus:border-blue-400 outline-none bg-white"
      {...props}
    >
      <option value="">Select...</option>
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </div>
);

const FileInput = ({ label, ...props }) => (
  <div>
    <label className="block text-sm text-blue-600 mb-1">{label}</label>
    <input
      type="file"
      className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      {...props}
    />
  </div>
);