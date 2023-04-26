# Absensi-ReactJS-JSON-Server

### NOTES
- Wajib menjalankan `npm install` .
- Wajib menjalankan `json-server --watch db.json --port 5000`.
- Kalian bisa menambahkan metode `DELETE` atau `EDIT` pada program ini.

### FEATURES
- Metode `GET` untuk menampilkan data
- Metode `POST` untuk menambah data
- Menambahkan data berdasarkan `ID`

### Description

**Absensi-ReactJS-JSON-Server** merupakan sebuah aplikasi absensi yang menggunakan ReactJS dan JSON Server. Aplikasi ini memungkinkan pengguna untuk mencatat, serta mengelola data absensi dalam format JSON. Data absensi disimpan dan dikelola menggunakan JSON Server. 

Result dari db.json berupa JSON dengan format:

```json
{
  "absensi": [
    {
      "nama": "Doe Jhon",
      "nim": "123456789",
      "prodi": "Teknik Informatika",
      "id": 1
    },
    {
      "nama": "Jessica",
      "nim": "123456789",
      "prodi": "Sistem Informasi",
      "id": 2
    },
    {
      "nama": "Monkey D. Lutfy",
      "nim": "123456789",
      "prodi": "Sistem Informasi",
      "id": 3
    }
  ]
}
```
