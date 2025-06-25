import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  selectedLabel: string | null = null; //propriedade para armazenar o item selecionado:
  menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Cadastros',
        id: 'cadastros', // usado apenas para ícone do menu principal
        items: [{ label: 'Alunos' }, { label: 'Professores' }],
        links: '',
        state: {
          activeIcon: 'myCustomIcon',
        },
      },
      {
        label: 'Relatórios',
        id: 'relatorios',
        state: {
          activeIcon: 'star',
        },
      },
      {
        label: 'Configurações',
        id: 'configuracoes',
        state: {
          activeIcon: 'arrow',
        },
      },
    ];
  }
}
