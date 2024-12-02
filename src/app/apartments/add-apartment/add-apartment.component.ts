import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ListOfResidencesService } from 'src/app/list-of-residences.service';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css'],
})
export class AddApartmentComponent implements OnInit{
  apartmentForm!: FormGroup;
  

  constructor(private fb: FormBuilder,private list:ListOfResidencesService,private router: Router){}
  ngOnInit(): void {
    this.apartmentForm = this.fb.group ({
      apartNum:[null] ,
      floorNum:[null] ,
      surface: [null],
      terrace: [null],
      surfaceterrace: [null],
      category: [''],
      ResidenceId:[null],
    });
  }



  onSubmit(): void {
    if (this.apartmentForm.valid) {
      this.list.listApartments.push(this.apartmentForm.value);
      this.router.navigate(['/apartments'])
    } else {
      console.log('Form is invalid');
    }
  }

}
