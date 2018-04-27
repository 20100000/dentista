import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { SettingsComponent } from './componentes/settings/settings.component';
import { MenuComponent } from './componentes/menu/menu.component';

import { RouterModule, Routes } from '@angular/router';
import { PacienteComponent } from './componentes/paciente/paciente.component';
import { MedicoComponent } from './componentes/medico/medico.component';
import { RetornoComponent } from './componentes/retorno/retorno.component';
import { AgendaModule} from './componentes/agenda/agenda.module';
const appRoutes: Routes = [
  {path: 'agenda', loadChildren: () => AgendaModule},
  {path: 'paciente', component: PacienteComponent},
  {path: 'profissional', component: MedicoComponent},
  {path: 'retorno', component: RetornoComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SettingsComponent,
    MenuComponent,
    PacienteComponent,
    MedicoComponent,
    RetornoComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
