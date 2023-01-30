import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Button from './components/Button';
import PageOne from './components/PageOne/PageOne';
import PageTwo from './components/PageTwo/PageTwo';

function App() {
  return (
    <div className="wrapper">
      <Button />
      <Routes>
        <Route path="/" element={<Button />} />
        <Route path="/PageOne" element={<PageOne />} />
        <Route path="/PageTwo" element={<PageTwo />} />
      </Routes>
    </div>
  );
}

export default App;
