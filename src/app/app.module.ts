import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidencesComponent } from './residences/residences.component';

@NgModule({
  declarations: [
    AppComponent,         // Déclaration du composant principal
    ResidencesComponent   // Déclaration du composant ResidencesComponent
  ],
  imports: [
    BrowserModule,        // Nécessaire pour exécuter l'application Angular dans un navigateur
    AppRoutingModule,     // Module de gestion des routes
    FormsModule           // Nécessaire pour utiliser [(ngModel)] dans les formulaires
  ],
  providers: [],          // Liste des services disponibles dans l'application
  bootstrap: [AppComponent] // Composant principal qui démarre l'application
})
export class AppModule { }


