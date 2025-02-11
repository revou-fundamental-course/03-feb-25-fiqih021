// file JS
let input = document.getElementById('input');
let output = document.getElementById('output');

let buttonResult = document.getElementById('hasil');
let buttonReset = document.getElementById('reset');
let buttonReverse = document.getElementById('reverse');

let persamaan = document.getElementById('persamaan');

buttonResult.addEventListener('click', function () {
  if (input.value === '') {
    alert('Masukkan angka terlebih dahulu');
    return;
  }
  let hasil = input.value * (9 / 5) + 32;
  output.value = hasil;
  persamaan.innerHTML = `${input.value}&deg;C x (9/5) + 32 = ${hasil}&deg;F`;
});

buttonReset.addEventListener('click', function () {
  input.value = '';
  output.value = '';
  persamaan.innerHTML = '';
});
