import { Component, Input } from '@angular/core';
import { ServicoClimaService } from '../servico-clima.service';

@Component({
  selector: 'app-informacao-clima',
  templateUrl: './informacao-clima.component.html',
  styleUrls: ['./informacao-clima.component.css']
})
export class InformacaoClimaComponent {
  @Input() nomeCidade!: string; // Adicione "!" para indicar que a propriedade será inicializada posteriormente
  clima: any;
  mensagemErro: string = '';

  constructor(private servicoClima: ServicoClimaService) { }

  buscarClima(): void {
    this.servicoClima.getInformacoesClima(this.nomeCidade)
      .subscribe((data: any) => { // Adicione o tipo "any" para o parâmetro data
        this.clima = data;
      }, (error: any) => { // Adicione o tipo "any" para o parâmetro error
        this.mensagemErro = 'Erro ao buscar informações climáticas';
      });
  }

  verDetalhes(): void {
    // Exibir detalhes do clima
  }
}
