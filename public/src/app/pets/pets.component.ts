import { PetService } from './../pet.service';
import { Component, OnInit } from '@angular/core';

console.log('Component > PetsComponent > TOPpage loading');

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
allpets_arr: any;

  constructor(private _petService: PetService) { }

  ngOnInit() {
    console.log('Component > PetsComponent > ngOnInit');
    this.showAllPets();
  }

showAllPets() {
  console.log('Component > PetsComponent > showAllPets');
  const showAllObserve = this._petService.getPets();
  showAllObserve.subscribe(server_response => {
    console.log('Component > PetsComponent > showAllObserver--got back with server_response=>', server_response['data']);
    this.allpets_arr = server_response['data'];
  });
}


}
