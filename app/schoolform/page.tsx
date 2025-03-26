"use client"
import { useState } from 'react';

export default function SchoolAdminForm() {
  const [course, setCourse] = useState('');
  const [facilities, setFacilities] = useState(['Library', 'Lab']);
  const [newFacility, setNewFacility] = useState('');
  const [teachers, setTeachers] = useState([]);
  const [teacher, setTeacher] = useState({ name: '', subject: '' });

  const addFacility = () => {
    if (newFacility) {
      setFacilities([...facilities, newFacility]);
      setNewFacility('');
    }
  };

  const addTeacher = () => {
    if (teacher.name && teacher.subject) {
      setTeachers([...teachers, teacher]);
      setTeacher({ name: '', subject: '' });
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-xl p-6 shadow">
        <h1 className="text-2xl text-blue-600 font-bold mb-6 text-center">School Admin</h1>

        <div className="space-y-6">
          {/* Course Section */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h2 className="text-blue-700 font-semibold mb-3">Course Info</h2>
            <input
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              placeholder="Course name"
              className="w-full p-2 mb-3 border border-blue-200 rounded"
            />
            <div className="grid grid-cols-2 gap-2">
              {['Math', 'Science', 'English'].map((subj) => (
                <label key={subj} className="flex items-center">
                  <input type="checkbox" className="mr-2 text-blue-600" />
                  {subj}
                </label>
              ))}
            </div>
          </div>

          {/* Facilities Section */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h2 className="text-blue-700 font-semibold mb-3">Facilities</h2>
            <div className="flex gap-2 mb-3">
              <input
                value={newFacility}
                onChange={(e) => setNewFacility(e.target.value)}
                placeholder="New facility"
                className="flex-1 p-2 border border-blue-200 rounded"
              />
              <button onClick={addFacility} className="px-4 bg-blue-600 text-white rounded">
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {facilities.map((f) => (
                <span key={f} className="bg-white px-3 py-1 rounded-full text-sm border border-blue-200">
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* Teachers Section */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h2 className="text-blue-700 font-semibold mb-3">Teachers</h2>
            <div className="flex gap-2 mb-3">
              <input
                value={teacher.name}
                onChange={(e) => setTeacher({...teacher, name: e.target.value})}
                placeholder="Name"
                className="flex-1 p-2 border border-blue-200 rounded"
              />
              <input
                value={teacher.subject}
                onChange={(e) => setTeacher({...teacher, subject: e.target.value})}
                placeholder="Subject"
                className="flex-1 p-2 border border-blue-200 rounded"
              />
              <button onClick={addTeacher} className="px-4 bg-blue-600 text-white rounded">
                Add
              </button>
            </div>
            <div className="space-y-2">
              {teachers.map((t, i) => (
                <div key={i} className="bg-white p-2 rounded border border-blue-200">
                  <span className="font-medium">{t.name}</span> - {t.subject}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}