import React, {useState} from "react";

function Register() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: ''
  });

  const [token, setToken] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
        credentials : 'include'
      });
      
      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        localStorage.setItem('token', token);
        setToken(token);
        alert('Token zapisany pomyślnie!');
      } else {
        alert('Wystąpił błąd podczas wysyłania formularza.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div>
      <div>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
      </div>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
    {token && (
      <div>
        <h2>Received Token:</h2>
        <p>{token}</p>
      </div>
    )}
  </div>
  );
}

export default Register;