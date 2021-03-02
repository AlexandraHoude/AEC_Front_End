import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { ForfaitXComponent } from './app/forfait-x/forfait-x.component';
import { ForfaitYComponent } from './app/forfait-y/forfait-y.component';
import { AproposComponent } from './app/apropos/apropos.component';
import { AdministrationComponent } from './app/administration/administration.component';

const routes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'home' , component: HomeComponent },
  { path: 'forfait-costa-rica' , component: ForfaitXComponent },
  { path: 'forfait-cuba' , component: ForfaitYComponent },
  { path: 'Apropos' , component: AproposComponent },
  { path: 'Administration' , component: AdministrationComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
