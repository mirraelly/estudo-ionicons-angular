import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //  { path: 'cadastros/alunos', component: AlunosComponent },
  // { path: 'cadastros/professores', component: ProfessoresComponent },
  // { path: 'relatorios', component: RelatoriosComponent },
  // { path: 'configuracoes', component: ConfiguracoesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
