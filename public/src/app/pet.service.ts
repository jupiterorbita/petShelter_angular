import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

console.log('\n SERVICE > pet.service.is > TOP page loading');

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private _http: HttpClient) {
    console.log('PET.SERVICE.TS > inside constructor');  }


getPets() {   // 8
  console.log('PET.SERVICE.TS > getPets()');
  console.log('PET.SERVICE.TS > getPets() > /pets');
  return this._http.get('/pets'); // 9
}
createPet(newPet) {
  console.log('PET.SERVICE.TS > createPet(newPet) =>' + newPet);
  console.log('PET.SERVICE.TS > createPet(newPet) > /pets/new');
  return this._http.post('/pets/new', newPet);
}

getPet(id) {
  console.log('PET.SERVICE.TS > createPet(id)', id);
  console.log('PET.SERVICE.TS > createPet(id) > /pet/:id', id);
  return this._http.get('/pet/' + id);
}

deletePet(id) {
  console.log('PET.SERVICE.TS > deletePet(id)', id);
  console.log('PET.SERVICE.TS > deletePet(id) > /pets/:id/delete');
  return this._http.delete('/pets/' + id + '/delete');
}


updatePet(pet, pet_id) {
  console.log('PET.SERVICE.TS > updatePet(pet, pet_id)');
  console.log('PET.SERVICE.TS > updatePet(pet, pet_id) > /pets/:id/edit');
  console.log('PET.SERVICE.TS > updatePet(pet, pet_id) > pet_id =>', pet_id);
  console.log('PET.SERVICE.TS > updatePet(pet, pet_id) > pet =>', pet);
  return this._http.put('/pets/' + pet_id + '/edit', pet);
}

}
