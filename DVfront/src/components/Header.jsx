import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { jwtDecode } from "jwt-decode";



function Header()
{
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Pobierz token z lokalnego przechowywania
    const token = localStorage.getItem('token');
    
    if (token) {
      try {
        // Dekoduj token JWT
        const decodedToken = jwtDecode(token);
        // Ustaw dane użytkownika w stanie aplikacji
        setUserData(decodedToken);
      } catch (error) {
        console.error('Błąd dekodowania tokenu', error);
      }
    }
  }, []);

  if (!userData) {
    return <div>Ładowanie danych użytkownika...</div>;
  }

  return (
    <div>
      <h1>Witaj, {userData.sub}!</h1>
    </div>
  );
};


export default Header