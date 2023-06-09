import React from 'react';
import {
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  Button,
} from '@chakra-ui/react';

const AbsensiTable = ({ absensiData, onDelete}) => {
  return (
    <Table>
      <Text pt='50px' fontWeight='bold' as='h3' fontSize='2xl' textAlign='center'>
        Daftar Absensi
      </Text>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Nama</Th>
            <Th>NIM</Th>
            <Th>Prodi</Th>
            <Th>Aksi</Th>
          </Tr>
        </Thead>
        <Tbody>
          {absensiData.map((absensi) => (
            <Tr key={absensi.id}>
              <Td>{absensi.id}</Td>
              <Td>{absensi.nama}</Td>
              <Td>{absensi.nim}</Td>
              <Td>{absensi.prodi}</Td>
              <Td>
                <Button
                  onClick={() => onDelete(absensi.id)}
                  colorScheme='red'
                  size='sm'
                >
                  Hapus
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Table>
  );
};

export default AbsensiTable;
