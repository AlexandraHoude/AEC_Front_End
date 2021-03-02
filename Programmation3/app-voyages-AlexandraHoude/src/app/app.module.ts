import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ListeForfaitsComponent } from './liste-forfaits/liste-forfaits.component';
import { ForfaitComponent } from './forfait/forfait.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MiniForfaitComponent } from './mini-forfait/mini-forfait.component';
import { ForfaitCompletComponent } from './forfait-complet/forfait-complet.component';
import { FormulaireForfaitComponent } from './formulaire-forfait/formulaire-forfait.component';
import { MatInputModule } from '@angular/material/input';
import { StarRatingModule } from '@sreyaj/ng-star-rating';
import { MatNativeDateModule} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormulaireRechercheComponent } from './formulaire-recherche/formulaire-recherche.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ForfaitXComponent } from './forfait-x/forfait-x.component';
import { ForfaitYComponent } from './forfait-y/forfait-y.component';
import { AproposComponent } from './apropos/apropos.component';
import { AdministrationComponent } from './administration/administration.component';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { VoyagesService } from './voyages.service';
import { AppRoutingModule } from '../app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {HomeComponent} from './home/home.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    ListeForfaitsComponent,
    ForfaitComponent,
    MiniForfaitComponent,
    ForfaitCompletComponent,
    FormulaireForfaitComponent,
    FormulaireRechercheComponent,
    HomeComponent,
    ForfaitXComponent,
    ForfaitYComponent,
    AproposComponent,
    AdministrationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatSliderModule,
    MatTableModule,
    FormsModule,
    MatInputModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatSidenavModule,
    StarRatingModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    ChartsModule
  ],
  providers: [VoyagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
