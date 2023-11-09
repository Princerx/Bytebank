import { TipoTransacao } from "./Tipo-Transacao.js";
export type Transacao = {
    tipoTransacao: TipoTransacao;
    valor: number;
    data: Date;
}