import { Endereco } from "./endereco";

export interface Users  {
  userType: string;
  id?: number;
  name: string;
  cpf: string
  email: string;
  password: string;
  adress?: Endereco;
  cnh?: string
  phone?: string;
  job?: string;

};
