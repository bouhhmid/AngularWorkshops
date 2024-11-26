import { Component } from '@angular/core';
import { Residence } from '../core/models/Residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {

  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria", "image":"../../assets/images/R1.jpeg", status: "Disponible"},
     {id:2,"name": "El yasmine", "address":"Ezzahra","image":"../../assets/images/R2.jpg", status: "Disponible" },
     {id:3,"name": "El Arij", "address":"Rades","image":"../../assets/images/R3.jpg", status: "Vendu"},
     {id:4,"name": "El Anber","address":"inconnu", "image":"../../assets/images/R4.jpg", status: "En Construction"}
   ];
Username: any;
   showLocation(address: string): void {
    if (address === "inconnu") {
      alert("L'adresse de cette résidence est inconnue.");
    } else {
      alert(`Adresse: ${address}`);
    }
  }
 
// Liste des favoris
favoriteResidences: Residence[] = [];

// Méthode pour ajouter aux favoris
addToFavorites(residence: Residence): void {
  if (!this.favoriteResidences.includes(residence)) {
    this.favoriteResidences.push(residence);
    alert(`${residence.name} a été ajouté à vos favoris !`);
  } else {
    alert(`${residence.name} est déjà dans vos favoris.`);
  }
}

searchText: string = ''; // Texte de recherche   PH="TAPER VOTRE NOM"

  // Méthode pour filtrer les résidences
  get filteredResidences(): Residence[] {
    return this.listResidences.filter(residence =>
      residence.address.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
//filterResidence((searchText)){
//return this.listResidences.filter(residence=>)
//}
 // username="";
 //pwd=""; 
}
