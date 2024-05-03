export interface PerguruanTinggiProps {
  id: number;
  Name: string;
  X: number;
  Y: number;
  Tahun_Berdiri: number;
  Jumlah_Prodi: number;
  Kabupaten: string;
  Deskripsi: string;
  Alamat: string;
  Image: string;
}

export interface InputDataProps {
  Name: string;
  Tahun_Berdiri: number;
  Jumlah_Prodi: number;
  Kabupaten: string;
  Deskripsi: string;
  Alamat: string;
  Image: string;
  X: number;
  Y: number;
}

export interface LoginProps {
  username: string;
  password: string;
}

export interface ILocalStorageToken {
  access_token: string | null;
}
