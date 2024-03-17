import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '../pages/landing/landing';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Landing} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
