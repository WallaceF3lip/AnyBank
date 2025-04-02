import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TipoTransacao, Transacao } from '../modelos/transacao';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-form-nova-transacao',
  imports: [FormsModule, KeyValuePipe],
  templateUrl: './form-nova-transacao.component.html',
  styleUrl: './form-nova-transacao.component.css'
})
export class FormNovaTransacaoComponent {

  valorTransacao: number | undefined;
  tipoTransacao: string | undefined = "";

  transacaoCriada = output<Transacao>()

  tipoTransacaoEnum = TipoTransacao;

  aoSubmeter(){
    const transacao = new Transacao(
      this.tipoTransacao as TipoTransacao,
      this.valorTransacao as number
    )

    this.transacaoCriada.emit(transacao);

    this.valorTransacao = undefined;
    this.tipoTransacao = "";    
  }
}
