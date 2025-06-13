// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import CarList from './components/CarList';
// import AddCarForm from './components/AddCarForm';
// import CarDetails from './components/CarDetails';
// import AddRepairForm from './components/AddRepairForm';

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         <Route path="/" element={<CarList />} />
// //         <Route path="/add" element={<AddCarForm />} />
// //         <Route path="/cars/:id" element={<CarDetails />} />
// //         <Route path="/cars/:id/repairs/add" element={<AddRepairForm />} />
// //       </Routes>
// //     </BrowserRouter>
// //   );

// export default App;

import React from 'react';

function App() {
  console.log("✅ Frontend działa – React uruchomiony!");

  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>🚗 CarServiceTracker działa!</h1>
      <p>Frontend działa poprawnie z Kubernetesa 🎉</p>
    </div>
  );
}

export default App;

