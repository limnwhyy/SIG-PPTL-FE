// export interface CatalogProps {
//   id: number;
//   name: string;
//   year: string;
//   prodi: number;
//   city: string;
// }
// const catalogDump: CatalogProps[] = [
//   {
//     id: 1,
//     name: "Universitas Lampung",
//     year: "1965",
//     prodi: 100,
//     city: "Bandar Lampung",
//   },
//   {
//     id: 2,
//     name: "Institut Teknologi Sumatera",
//     year: "2013",
//     prodi: 20,
//     city: "Lampung Selatan",
//   },
//   {
//     id: 3,
//     name: "Universitas Bandar Lampung",
//     year: "1965",
//     prodi: 50,
//     city: "Bandar Lampung",
//   },
//   {
//     id: 4,
//     name: "Universitas Teknokrat Indonesia",
//     year: "2001",
//     prodi: 30,
//     city: "Bandar Lampung",
//   },
//   {
//     id: 5,
//     name: "Universitas Malahayati",
//     year: "1981",
//     prodi: 40,
//     city: "Bandar Lampung",
//   },
//   {
//     id: 6,
//     name: "Universitas Darma Jaya",
//     year: "1982",
//     prodi: 30,
//     city: "Bandar Lampung",
//   },
//   {
//     id: 7,
//     name: "Universitas Islam Negeri Raden Intan Lampung",
//     year: "2000",
//     prodi: 20,
//     city: "Bandar Lampung",
//   },
//   {
//     id: 8,
//     name: "Universitas Muhammadiyah Pringsewu",
//     year: "2000",
//     prodi: 10,
//     city: "Pringsewu",
//   },
// ];

// export default catalogDump;

import { PerguruanTinggiProps } from "../constants/interfaces";

const perguruanTinggiDump: PerguruanTinggiProps[] = [
  {
    id: 1,
    Name: "Universitas Lampung",
    X: 105.258049,
    Y: -5.379913,
    Tahun_Berdiri: 1965,
    Jumlah_Prodi: 100,
    Kabupaten: "Bandar Lampung",
    Deskripsi:
      "Universitas Lampung adalah perguruan tinggi negeri di Bandar Lampung, Lampung, Indonesia.",
    Alamat:
      "Jl. Prof. Dr. Sumantri Brojonegoro No.1, Gd. Rektorat Universitas Lampung, Gedong Meneng, Kec. Rajabasa, Kota Bandar Lampung, Lampung 35145",
    Image:
      "https://upload.wikimedia.org/wikipedia/id/2/2e/Logo_Universitas_Lampung.png",
  },
  {
    id: 2,
    Name: "Institut Teknologi Sumatera",
    X: 105.247122,
    Y: -5.424833,
    Tahun_Berdiri: 2013,
    Jumlah_Prodi: 20,
    Kabupaten: "Lampung Selatan",
    Deskripsi:
      "Institut Teknologi Sumatera adalah perguruan tinggi negeri di Lampung Selatan, Lampung, Indonesia.",
    Alamat:
      "Jl. Terusan Ryacudu, Kalianda, Kec. Kalianda, Kabupaten Lampung Selatan, Lampung 35551",
    Image:
      "https://upload.wikimedia.org/wikipedia/id/3/3f/Logo_Institut_Teknologi_Sumatera.png",
  },
  {
    id: 3,
    Name: "Universitas Bandar Lampung",
    X: 105.243265,
    Y: -5.379913,
    Tahun_Berdiri: 1965,
    Jumlah_Prodi: 50,
    Kabupaten: "Bandar Lampung",
    Deskripsi:
      "Universitas Bandar Lampung adalah perguruan tinggi negeri di Bandar Lampung, Lampung, Indonesia.",
    Alamat:
      "Jl. Zainal Abidin Pagar Alam No.89, Labuhan Ratu, Kec. Labuhan Ratu, Kota Bandar Lampung, Lampung 35144",
    Image:
      "https://upload.wikimedia.org/wikipedia/id/9/9b/Logo_Universitas_Bandar_Lampung.png",
  },
  {
    id: 4,
    Name: "Universitas Teknokrat Indonesia",
    X: 105.258049,
    Y: -5.379913,
    Tahun_Berdiri: 2001,
    Jumlah_Prodi: 30,
    Kabupaten: "Bandar Lampung",
    Deskripsi:
      "Universitas Teknokrat Indonesia adalah perguruan tinggi swasta di Bandar Lampung, Lampung, Indonesia.",
    Alamat:
      "Jl. Zainal Abidin Pagar Alam No.89, Labuhan Ratu, Kec. Labuhan Ratu, Kota Bandar Lampung, Lampung 35144",
    Image:
      "https://upload.wikimedia.org/wikipedia/id/8/8e/Logo_Universitas_Teknokrat_Indonesia.png",
  },
  {
    id: 5,
    Name: "Universitas Malahayati",
    X: 105.258049,
    Y: -5.379913,
    Tahun_Berdiri: 1981,
    Jumlah_Prodi: 40,
    Kabupaten: "Bandar Lampung",
    Deskripsi:
      "Universitas Malahayati adalah perguruan tinggi swasta di Bandar Lampung, Lampung, Indonesia.",
    Alamat:
      "Jl. Zainal Abidin Pagar Alam No.89, Labuhan Ratu, Kec. Labuhan Ratu, Kota Bandar Lampung, Lampung 35144",
    Image:
      "https://upload.wikimedia.org/wikipedia/id/8/8e/Logo_Universitas_Teknokrat_Indonesia.png",
  },
  {
    id: 6,
    Name: "Universitas Darma Jaya",
    X: 105.258049,
    Y: -5.379913,
    Tahun_Berdiri: 1982,
    Jumlah_Prodi: 30,
    Kabupaten: "Bandar Lampung",
    Deskripsi:
      "Universitas Darma Jaya adalah perguruan tinggi swasta di Bandar Lampung, Lampung, Indonesia.",
    Alamat:
      "Jl. Zainal Abidin Pagar Alam No.89, Labuhan Ratu, Kec. Labuhan Ratu, Kota Bandar Lampung, Lampung 35144",
    Image:
      "https://upload.wikimedia.org/wikipedia/id/8/8e/Logo_Universitas_Teknokrat_Indonesia.png",
  },
  {
    id: 7,
    Name: "Universitas Islam Negeri Raden Intan Lampung",
    X: 105.258049,
    Y: -5.379913,
    Tahun_Berdiri: 2000,
    Jumlah_Prodi: 20,
    Kabupaten: "Bandar Lampung",
    Deskripsi:
      "Universitas Islam Negeri Raden Intan Lampung adalah perguruan tinggi negeri di Bandar Lampung, Lampung, Indonesia.",
    Alamat:
      "Jl. Zainal Abidin Pagar Alam No.89, Labuhan Ratu, Kec. Labuhan Ratu, Kota Bandar Lampung, Lampung 35144",
    Image:
      "https://upload.wikimedia.org/wikipedia/id/8/8e/Logo_Universitas_Teknokrat_Indonesia.png",
  },
  {
    id: 8,
    Name: "Universitas Muhammadiyah Pringsewu",
    X: 105.258049,
    Y: -5.379913,
    Tahun_Berdiri: 2000,
    Jumlah_Prodi: 10,
    Kabupaten: "Pringsewu",
    Deskripsi:
      "Universitas Muhammadiyah Pringsewu adalah perguruan tinggi swasta di Pringsewu, Lampung, Indonesia.",
    Alamat:
      "Jl. Zainal Abidin Pagar Alam No.89, Labuhan Ratu, Kec. Labuhan Ratu, Kota Bandar Lampung, Lampung 35144",
    Image:
      "https://upload.wikimedia.org/wikipedia/id/8/8e/Logo_Universitas_Teknokrat_Indonesia.png",
  },
];

export default perguruanTinggiDump;
