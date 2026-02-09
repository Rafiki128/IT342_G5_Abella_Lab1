import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Set Landing as the default path */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;