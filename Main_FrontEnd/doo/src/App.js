import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './Components/HomePage';
import { LoginPage } from './Components/LoginPage';
import { SignUpPage } from './Components/SignUpPage';

function App() {
  return (
    <div className="App">
     <h1>Shoaib Patel </h1>
     <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignUpPage />}></Route>
     </Routes>
    
    </div>
  );
}

export default App;
