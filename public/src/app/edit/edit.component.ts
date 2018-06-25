// import { NgForm } from "@angular/forms";
import { Component, OnInit } from '@angular/core';
import { PetService } from './../pet.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

console.log('Component > EditComponent > TOPpage loading');


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number;
  onePet: any;
  pet: any;
  pet_update: any;
  msg: any;

  constructor(
    private _petService: PetService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    console.log('Component > editComponent > inside constructor');

  }


  ngOnInit() {
    console.log('Component > editComponent > ngOnInit');
    this._route.params.subscribe((params: Params) => {
      console.log('Component > editComponent > ngOnInit > params.id', params['id']);
      const getoneObs = this._petService.getPet(params['id']);
      getoneObs.subscribe(server_response => {
        console.log('Component > editComponent > ngOnInit > got ONE_pet from server =>', server_response);
        this.pet = server_response['data'];
      });
    });
  }

  goHome() {
    console.log('Component > editComponent > goHome() >');
    this._router.navigate(['/pets']);
  }

  showOnePet(id) {
    console.log('Component > editComponent > showOnePet(' + id + ') =>', id);
    const getoneObs = this._petService.getPet(id);
    getoneObs.subscribe(server_response => {
      console.log('Component > editComponent > showOnePet(' + id + ') >> server_response =>', server_response);
      this.pet = server_response['data'];
    });
  }

  update() {
    console.log('Component > editComponent > update() >');
    console.log('formdata ======>', this.pet);
    const myObservable = this._petService.updatePet(this.pet, this.pet._id);
    myObservable.subscribe(
      server_response => {
        if (server_response['error']) {
          this.msg = server_response['error']['message'];
          console.log('Component > editComponent > update() >> error >msg: ', this.msg);
        } else {
          this.msg = '';
        }
        console.log('Component > editComponent > update() >> server_response', server_response);
      },
      err => {
        console.log('ERROR: ', err);
      }
    );
    this._router.navigate(['/']);
  }
}
