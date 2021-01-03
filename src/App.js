
import react from 'react';
import './App.css';
import Adresse from "./Component/Profile/Address"
import Profil from"./Component/Profile/ProfilPhoto"
import Fullname from "./Component/Profile/FullName"
function App() {
  return (
    <div className="App">
     <Adresse />
     <Fullname />
     <Profil />
     
    </div>
  );
}

export default App;
