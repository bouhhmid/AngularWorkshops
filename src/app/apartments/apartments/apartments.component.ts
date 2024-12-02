import { Component, OnInit } from '@angular/core';
import { Apartment } from 'src/app/core/models/apartment';
import { ListOfResidencesService } from 'src/app/list-of-residences.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit{

  constructor(private listRs:ListOfResidencesService){}
  apartments:Apartment[]=this.listRs.listApartments;
  ngOnInit(): void {
  }

}
