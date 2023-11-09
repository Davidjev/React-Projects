import React, { useState } from 'react';
import Slika from "./components/slika.jpg"

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    const loginData = {
      username: username,
      password: password,
      mac: "a1:b2:c3:d4:b5",
      device_uid: "TV12345",
      language_id: "2",
      device_type: "SamsungTv"
    };

    // Poziv API-ja za prijavu
    fetch("https://t-adria.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "reskin": "adria",
        "language-id": "2"
      },
      body: JSON.stringify(loginData)
    })
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Successful login");
        }
      })
      .then(data => {
        // Spremanje "access_token" u lokalno skladiste preglednika
        localStorage.setItem("access_token", data.access_token);
        // Preusmeravanje na pocetnu stranicu
        window.location.href = "/home";
      })
      .catch(error => {
        console.error(error);
        // Prikazivanje poruke o gresci
        alert("Login failed. Check your username and password");
      });
  };

  return (
    <div className='container'>
      <h3 className='title'>Sign In</h3>
      <img src={Slika} alt="Login Screen" className='img'/>
      <input
        type="text" 
        value={username} 
        onChange={handleUsernameChange} 
        placeholder="Username" 
        className='input'
        />
      <input 
        type="password" 
        value={password} 
        onChange={handlePasswordChange} 
        placeholder="Password" 
        className='input'
        />
      <button onClick={handleLogin} className="button">Confirm</button>
    </div>
  );
}
