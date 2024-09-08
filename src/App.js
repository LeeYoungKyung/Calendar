import './App.css';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Hospital from './Hospital/Hospital';
import Medicine from './Medicine/Medicine';
import Main from './Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Diary from './Diary/Diary';
import MedicineDetail from './Medicine/MedicineDetail';
function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Main></Main>} />
        <Route path='/hospital' element={<Hospital />} />
        <Route path='/medicine' element={<Medicine></Medicine>} />
        <Route
          path='/medicine/:id'
          element={<MedicineDetail></MedicineDetail>}
        />
        <Route path='/diary' element={<Diary></Diary>} />
      </Route>
    </Routes>
  );
}

export default App;
