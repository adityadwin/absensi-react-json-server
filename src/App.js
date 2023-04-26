import React, { useEffect, useState } from 'react';
import AbsensiTable from './components/AbsensiTable';
import AbsensiForm from './components/AbsensiForm';

const App = () => {
  const [absensiData, setAbsensiData] = useState([]);

  // Fetch data dari JSON Server saat komponen dipasang
  useEffect(() => {
    fetch('http://localhost:5000/absensi')
      .then((response) => response.json())
      .then((data) => setAbsensiData(data));
  }, []);

  // Fungsi untuk menambahkan data absensi
  const handleAddAbsensi = (newAbsensi) => {
    fetch('http://localhost:5000/absensi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAbsensi),
    })
      .then((response) => response.json())
      .then((data) => {
        setAbsensiData([...absensiData, data]);
      });
  };
  
  // Fungsi untuk menghapus data absensi
  const handleDeleteAbsensi = (absensiId) => {
    fetch(`http://localhost:5000/absensi/${absensiId}`, {
      method: 'DELETE',
    })
      .then(() => {
        const updatedData = absensiData.filter(
          (absensi) => absensi.id !== absensiId
        );
        setAbsensiData(updatedData);
      });
  };

  return (
    <div>
      <AbsensiForm onAdd={handleAddAbsensi} />
      <AbsensiTable
        absensiData={absensiData}
        onDelete={handleDeleteAbsensi}
      />
    </div>
  );
};

export default App;
