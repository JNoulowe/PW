import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import StartingXI from './pages/StartingXI';
import Profile from './pages/Profile';
import ProjectOpenclaw from './pages/ProjectOpenclaw';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="starting-xi" element={<StartingXI />} />
          <Route path="profile" element={<Profile />} />
          <Route path="project-openclaw" element={<ProjectOpenclaw />} />
          <Route path="contact" element={<Contact />} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
