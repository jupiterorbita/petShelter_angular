import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
// import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetsComponent } from './pets/pets.component';

const routes: Routes = [
  {path: '', component: PetsComponent},
  {path: 'pets', component: PetsComponent},
  {path: 'create', component: CreateComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'edit/:id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
