import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (formData.name.trim() === "") newErrors.name = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Email must contain @";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
    } else {
      setErrors({});
      setSuccess("Registration Successful!");
      setFormData({ name: "", email: "", password: "" });
    }
  };

  return (
    <div className="container">
      <div className="formBox">
        <h1>Registration Form</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} className="input" />
          {errors.name && <p className="error">{errors.name}</p>}
          <input type="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} className="input" />
          {errors.email && <p className="error">{errors.email}</p>}
          <input type="password" name="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} className="input" />
          {errors.password && <p className="error">{errors.password}</p>}
          <button type="submit" className="btn">Register</button>
        </form>
        {success && <p className="success">{success}</p>}
        <div className="apiSection">
          <h2>User Data from API</h2>
          {loading ? <p>Loading...</p> : users.map((user) => (
            <div key={user.id} className="userCard">
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;