import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ServicoClimaService } from '../servico-clima.service'; 

@Component({
  selector: 'app-seletor-cidade',
  templateUrl: './seletor-cidade.component.html',
  styleUrls: ['./seletor-cidade.component.css']
})
export class SeletorCidadeComponent {
  nomeCidade: string = '';
  mensagemErro: string = '';
  clima: any; // Adicione a variável clima

  constructor(private servicoClima: ServicoClimaService) { }

  buscarClima(): void {
    if (this.nomeCidade.trim() !== '') {
      this.servicoClima.getInformacoesClima(this.nomeCidade)
        .subscribe(
          (data) => {
            this.clima = data; // Atribua os dados à variável clima
          },
          (error) => {
            this.mensagemErro = 'Cidade não encontrada';
          }
        );
    } else {
      this.mensagemErro = 'Digite o nome de uma cidade';
    }
  }

  verDetalhes(): void {
    // Exibir detalhes do clima
  }
}
