import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ResidencesComponent } from './residences/residences.component';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';
import { AddResidenceComponent } from './add-residence/add-residence.component';
import { ApartmentsComponent } from './apartments/apartments/apartments.component';
import { ApartmentsByResidenceComponent } from './apartments/apartments-by-residence/apartments-by-residence.component';
import { AddApartmentComponent } from './apartments/add-apartment/add-apartment.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  {
    path: 'residences',
    component: ResidencesComponent
    // children: [
    //   { path: 'wishList', component: WishListComponent },
    //   { path: 'productList', component: ProductComponent },
    // ],
  },
  {path:'residences/:id',component:ResidenceDetailsComponent},
  {path:'residence/:id',component:ApartmentsByResidenceComponent},

  {path:'add-residence',component:AddResidenceComponent},
  {path:'apartments',component:ApartmentsComponent},
  {path:'add-app',component:AddApartmentComponent},


  {path:'update-residence/:id',component:AddResidenceComponent},


//  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
