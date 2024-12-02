import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apartment } from 'src/app/core/models/apartment';
import { ListOfResidencesService } from 'src/app/list-of-residences.service';

@Component({
  selector: 'app-apartments-by-residence',
  templateUrl: './apartments-by-residence.component.html',
  styleUrls: ['./apartments-by-residence.component.css']
})
export class ApartmentsByResidenceComponent implements OnInit{
  idR!:number;
  apartments:Apartment[]=[];
  constructor(private listRs:ListOfResidencesService,private act:ActivatedRoute){
  }
  ngOnInit(): void {
    this.idR=this.act.snapshot.params['id'];
    this.filterApp();
  }

  filterApp():Apartment[]{
    return this.listRs.listApartments.filter(res=>{
      if(res.ResidenceId==this.idR){
        this.apartments.push(res);
      }
    });
  }

}
