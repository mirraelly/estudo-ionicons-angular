import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Necessário para algumas funcionalidades do PrimeNG

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MinhaTabela } from './components/tabela.component/tabela.component';
import { NgIconsModule } from '@ng-icons/core';
import * as icons from './icons';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button'; // Se você usar botões
import { PaginatorModule } from 'primeng/paginator'; // Para a paginação
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { MenuModule } from 'primeng/menu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarComponent } from './components/sidebar.component/sidebar.component';

// import { SortIconModule } from 'primeng/sorticon'; // Pode se

@NgModule({
  declarations: [AppComponent, MinhaTabela, SidebarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    PaginatorModule,
    TableModule,
    OverlayPanelModule,
    SplitButtonModule,
    TieredMenuModule,
    MenuModule,
    NgIconsModule.withIcons({ ...icons }),
    SidebarModule,
    PanelMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
