import { Transacao } from "../types/Transacao.js";
import { TipoTransacao } from "../types/Tipo-Transacao.js";
import saldoComponent from "./saldo-component.js";
import Conta from "../types/Conta.js";

const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
elementoFormulario.addEventListener("submit", function(event) {
    try
    {
        event.preventDefault();
        if (!elementoFormulario.checkValidity()) {
            alert("Por faavor, preencha todos os campos da tranzação!");
            return;
        }

        const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
        const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
        const inputData = elementoFormulario.querySelector("#data") as HTMLInputElement;

        let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao;
        let valor: number = inputValor.valueAsNumber;
        let data: Date = new Date(inputData.value);

        const novaTransacao: Transacao = {
            tipoTransacao: tipoTransacao, 
            valor: valor,
            data: data,
        }

        Conta.registrarTransacao(novaTransacao);
        saldoComponent.atualizar();
        elementoFormulario.reset();
    }
    catch(erro) {
        alert(erro.message)
    }
});



