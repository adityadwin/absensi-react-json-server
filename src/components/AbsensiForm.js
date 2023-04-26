import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
} from '@chakra-ui/react';

const AbsensiForm = ({ onAdd }) => {
  const [nama, setNama] = useState('');
  const [nim, setNim] = useState('');
  const [prodi, setProdi] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAbsensi = {
      nama,
      nim,
      prodi,
    };
    onAdd(newAbsensi);
    setNama('');
    setNim('');
    setProdi('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <FormControl id='nama'>
          <FormLabel>Nama</FormLabel>
          <Input
            type='text'
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
        </FormControl>
        <FormControl id='nim'>
          <FormLabel>NIM</FormLabel>
          <Input
            type='text'
            value={nim}
            onChange={(e) => setNim(e.target.value)}
          />
        </FormControl>
        <FormControl id='prodi'>
      <FormLabel>Prodi</FormLabel>
      <Select
        value={prodi}
        onChange={(e) => setProdi(e.target.value)}
      >
        <option value='' disabled>select</option> {/* disable agar tidak bisa dipilih */}
        <option value='Teknik Informatika'>Teknik Informatika</option>
        <option value='Sistem Informasi'>Sistem Informasi</option>
      </Select>
    </FormControl>
        <Button type='submit'>Tambahkan</Button>
      </Stack>
    </form>
  );
};

export default AbsensiForm;
