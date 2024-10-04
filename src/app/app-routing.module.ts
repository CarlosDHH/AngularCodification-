import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaesarComponent } from './components/Caesar/Caesar.component';
import { DesComponent } from './components/Des/Des.component';
import { DsaComponent } from './components/Dsa/Dsa.component';
import { ScytaleComponent } from './components/Scytale/Scytale.component';
import { ShaComponent } from './components/Sha/Sha.component';
import { InicioComponent } from './components/Inicio/Inicio.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'caesar', component: CaesarComponent },
  { path: 'des', component: DesComponent },
  { path: 'dsa', component: DsaComponent },
  { path: 'scytale', component: ScytaleComponent },
  { path: 'sha', component: ShaComponent  },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
