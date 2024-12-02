import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms'; // 
import { ResidencesComponent } from './residences/residences.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WhislistComponent } from './wishList/whislist.component';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';
import { ApartmentsComponent } from './apartments/apartments/apartments.component';
import { ApartmentsByResidenceComponent } from './apartments/apartments-by-residence/apartments-by-residence.component';
import { AddApartmentComponent } from './apartments/add-apartment/add-apartment.component';
import { AddResidenceComponent } from './add-residence/add-residence.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';

// Importez votre service
import { ListOfResidencesService } from './list-of-residences.service';  // Le chemin peut être ajusté en fonction de votre projet

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ResidencesComponent,
    NavbarComponent,
    WhislistComponent,
    ResidenceDetailsComponent,
    ApartmentsComponent,
    ApartmentsByResidenceComponent,
    AddApartmentComponent,
    AddResidenceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,         // Pour utiliser ngModel dans les formulaires template-driven
    ReactiveFormsModule   // Pour utiliser les formulaires réactifs
  ],
  providers: [ListOfResidencesService], // Déclarez ici le service pour qu'il soit injecté dans l'application
  bootstrap: [AppComponent]
})
export class AppModule { }
