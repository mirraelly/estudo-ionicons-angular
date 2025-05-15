import { Component, OnInit } from '@angular/core';
import { Pessoa } from './pessoa.model'; // Crie um arquivo pessoa.model.ts
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-minha-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss'],
})
export class MinhaTabela implements OnInit {
  pessoas: Pessoa[] = [];
  items: MenuItem[] = [];

  ngOnInit() {
    this.pessoas = [
      { nome: 'Ana Silva', idade: 28, sexo: 'Feminino' },
      { nome: 'Pedro Souza', idade: 35, sexo: 'Masculino' },
      { nome: 'Carla Oliveira', idade: 22, sexo: 'Feminino' },
      { nome: 'Lucas Santos', idade: 41, sexo: 'Masculino' },
    ];
    this.items = [
      {
        label: 'Options',
        items: [
          {
            label: 'Google',
            icon: 'tiktok',
            command: () => {},
          },
          {
            label: 'Github',
            icon: 'pi pi-times',
            command: () => {},
          },
        ],
      },
      {
        label: 'Navigate',
        items: [
          {
            label: 'Instagram',
            icon: 'pi pi-external-link',
            url: 'http://angular.io',
          },
          {
            label: 'TikTok',
            icon: 'pi pi-upload',
            routerLink: '/fileupload',
          },
        ],
      },
    ];
  }
  configurarMenu(): MenuItem[] | undefined {
    // throw new Error('Method not implemented.');

    return this.items;
  }
}
