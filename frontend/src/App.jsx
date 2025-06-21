import { Routes, Route } from 'react-router';

import './styles/globals.scss';
import './styles/reset.scss';

import Home from './components/pages/Home/Home';
import ElementProperties from './components/pages/ElementProperties/ElementProperties';

import s from './App.module.scss';

function App() {
  return (
    <div className={s.app}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/song/:id" element={<ElementProperties />} />
      </Routes>
    </div>
  );
}

export default App;
