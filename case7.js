const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 7600,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High - Original",
    hargaSatuan: 96000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High - Original",
    kategori: "Sepatu Sneaker",
    hargaSatuan: 36000,
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy - [BNIB] Original",
    hargaSatuan: 12000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
];

function getTotalPenjualan(dataPenjualan) {
  const totalPenjualan = dataPenjualan.reduce(function (acc, cur) {
    return acc + cur.totalTerjual;
  }, 0);

  return totalPenjualan;
}

console.log(getTotalPenjualan(dataPenjualanPakAldi));