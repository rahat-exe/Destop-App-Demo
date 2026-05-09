import { useState } from "react";

function StudentForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    grade: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Student Registered:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      age: "",
      grade: "",
      email: "",
      phone: "",
    });
    setSubmitted(false);
  };

  return (
    <div className="student-form-card">
      <div className="form-header">
        <h1>Student Registration</h1>
        <p>Enter the student details below</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="16"
              min="3"
              max="120"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="grade">Grade</label>
            <select
              id="grade"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select grade
              </option>
              <option value="1">Grade 1</option>
              <option value="2">Grade 2</option>
              <option value="3">Grade 3</option>
              <option value="4">Grade 4</option>
              <option value="5">Grade 5</option>
              <option value="6">Grade 6</option>
              <option value="7">Grade 7</option>
              <option value="8">Grade 8</option>
              <option value="9">Grade 9</option>
              <option value="10">Grade 10</option>
              <option value="11">Grade 11</option>
              <option value="12">Grade 12</option>
            </select>
          </div>
        </div>

        <div className="divider" />

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john.doe@school.edu"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div className="form-actions">
          <button type="button" className="btn btn-secondary" onClick={handleReset}>
            Reset
          </button>
          <button type="submit" className="btn btn-primary">
            Register Student
          </button>
        </div>

        {submitted && (
          <div className="success-toast">
            Student registered successfully!
          </div>
        )}
      </form>
    </div>
  );
}

export default StudentForm;
