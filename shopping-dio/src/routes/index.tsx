import { Routes, Route } from 'react-router-dom';

import Admin from '../pages/Admin';
import Home from '../pages/Home';
import Message from '../pages/Message';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/messages" element={<Message />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default AppRouter;