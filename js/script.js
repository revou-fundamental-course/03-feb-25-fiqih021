// Mengambil elemen input dan output dari DOM
let input = document.getElementById('input');
let output = document.getElementById('output');

// Mengambil elemen tombol dari DOM
let buttonResult = document.getElementById('hasil');
let buttonReset = document.getElementById('reset');
let buttonReverse = document.getElementById('reverse');

// Mengambil elemen persamaan dari DOM
let persamaan = document.getElementById('persamaan');

// Mengambil elemen dengan kelas 'from' dan 'to' dari DOM
let from = document.getElementsByClassName('from');
let to = document.getElementsByClassName('to');

// Mengambil elemen simbol dari DOM
let fromSym = document.getElementById('from-sym');
let toSym = document.getElementById('to-sym');

// Mengambil elemen paragraf rumus dari DOM
let rumusView = document.getElementById('rumus-view');

// Variabel untuk menentukan arah konversi (Celsius ke Fahrenheit atau sebaliknya)
let CtoF = true;

// Event listener untuk tombol hasil
buttonResult.addEventListener('click', function () {
  // Validasi input tidak boleh kosong
  if (input.value === '') {
    alert('Masukkan angka terlebih dahulu');
    return;
  }
  // Melakukan konversi suhu berdasarkan arah konversi
  let hasil = CtoF ? input.value * (9 / 5) + 32 : (input.value - 32) * (5 / 9);
  // Menampilkan hasil konversi pada elemen output
  output.value = hasil;
  // Menampilkan persamaan konversi pada elemen persamaan
  persamaan.innerHTML = CtoF
    ? `${input.value} &deg;C * (9/5) + 32 = ${hasil} &deg;F`
    : `(${input.value} &deg;F - 32) * (5/9) = ${hasil} &deg;C`;
});

// Event listener untuk tombol reset
buttonReset.addEventListener('click', function () {
  // Mengosongkan input, output, dan persamaan
  input.value = '';
  output.value = '';
  persamaan.innerHTML = '';
});

// Event listener untuk tombol reverse
buttonReverse.addEventListener('click', function () {
  // Mengosongkan input, output, dan persamaan
  input.value = '';
  output.value = '';
  persamaan.innerHTML = '';
  // Membalik arah konversi
  CtoF = !CtoF;
  // Memperbarui label dan simbol berdasarkan arah konversi
  for (let i = 0; i < from.length; i++) {
    from[i].innerHTML = CtoF ? 'Celsius (&deg;C)' : 'Fahrenheit (&deg;F)';
    to[i].innerHTML = CtoF ? 'Fahrenheit (&deg;F)' : 'Celsius (&deg;C)';
  }
  fromSym.innerHTML = CtoF ? 'C' : 'F';
  toSym.innerHTML = CtoF ? 'F' : 'C';
  rumusView.innerHTML = CtoF
    ? `S<sub>(&deg;F)</sub> = (S<sub>(&degC)</sub> * 9/5) + 32`
    : `S<sub>(&deg;C)</sub> = (S<sub>(&deg;F)</sub> - 32) * 5/9`;
});
