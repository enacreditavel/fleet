import { Endereco } from "./endereco";

export interface Users  {
  tipo: string;
  id?: number;
  nome: string;
  cpf: string
  email: string;
  senha: string;
  endereco?: Endereco;
  cnh?: string
  telefone?: string;

};
