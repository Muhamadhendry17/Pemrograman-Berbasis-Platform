const mahasiswaNim = '1102021';
const updatedData = {
    nama: 'Hendry',
    gender: 'L',
    prodi: 'TI',
    alamat: 'JL. Cibolang Kaler'
};

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`,{
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData),
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

    const nim = "123456"; // Gantilah dengan nilai yang sesuai
    const baru = {
        nama: 'Hendryu',
        gender: 'L',
        prodi: 'TI',
        alamat: 'JL. Cibolang Kaler wew'
    };
fetch(`http://localhost:3000/mahasiswa/${nim}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ baru }),
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));