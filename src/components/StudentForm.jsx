import React, { useState } from 'react';

function StudentForm() {
  // State to hold the form data
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    grade: '',
  });

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to an API or save it to state
    console.log('Form Submitted:', formData);
    alert(`Student Data Submitted: Name=${formData.name}, Age=${formData.age}, Grade=${formData.grade}`);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Student Information Form</h2>
      <form onSubmit={handleSubmit}>
        
        {/* Name Input */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            required
          />
        </div>

        {/* Age Input */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="age" style={{ display: 'block', marginBottom: '5px' }}>Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            required
          />
        </div>

        {/* Grade Input */}
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="grade" style={{ display: 'block', marginBottom: '5px' }}>Grade:</label>
          <input
            type="text"
            id="grade"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            required
          />
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          style={{ padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Submit Student
        </button>
      </form>
    </div>
  );
}

export default StudentForm;