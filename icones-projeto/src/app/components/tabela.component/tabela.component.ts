import { Component, OnInit } from '@angular/core';
import { Pessoa } from './pessoa.model'; // Crie um arquivo pessoa.model.ts
import { MenuItem, MessageService } from 'primeng/api';
import { star2 } from '../../icons';

@Component({
  selector: 'app-minha-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss'],
})
export class MinhaTabela implements OnInit {
  pessoas: Pessoa[] = [];
  items: MenuItem[] = [];
  opcoes: MenuItem[] = [];

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
            label:
              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none"><path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" /><path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" stroke-width="1.5" /><path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>Instagram',
            // icon: 'pi pi-external-link',
            escape: false,
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
    this.opcoes = [
      {
        label: `<span class="teste">${star2} File</span>`,
        // escape: false,
      },
    ];
  }
  configurarMenu(): MenuItem[] | undefined {
    // throw new Error('Method not implemented.');

    return this.items;
  }
}
