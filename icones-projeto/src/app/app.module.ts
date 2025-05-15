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

// import { SortIconModule } from 'primeng/sorticon'; // Pode se

@NgModule({
  declarations: [AppComponent, MinhaTabela],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    PaginatorModule,
    TableModule,
    OverlayPanelModule,
    MenuModule,
    NgIconsModule.withIcons({ ...icons }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
