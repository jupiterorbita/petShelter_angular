import { PetService } from './../pet.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
// import { NgForm } from '@angular/forms';

console.log('Component > detailsComponent > TOPpage loading');


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
id: number;
onePet: any;
pet: any;
msg: any;
pet_update: any;
id_Z: any;

  constructor(
    private _route: ActivatedRoute,
    private _petService: PetService,
    private _router: Router) {
      console.log('Component > detailsComponent > inside constructor');

    }

  ngOnInit(): void {
    console.log('Component > detailsComponent > ngOnInit()');
    this._route.params.subscribe((params: Params) => {
      console.log('Component > detailsComponent > ngOnInit() > params["id"] >> ', params['id']);
    });
    const id_Z = this._route.snapshot.paramMap.get('id');
    console.log('Component > detalsComponent > ngOninit > this.showOnePet(id_Z) =>', id_Z);
    this.showOnePet(id_Z);
  }

  goHome() {
    console.log('component > detailsComponent > goHome()');
    this._router.navigate(['/pets']);
  }

  showOnePet(id) {
    console.log('component > detailsComponent > showOnePet(' + id + ')');
    console.log('showOnePet(' + id + ') =>', id);
    const getoneObs = this._petService.getPet(id);
    getoneObs.subscribe(server_response => {
      console.log('component > detailsComponent > showOnePet(' + id + ') >> server_response =>', server_response);
      this.onePet = server_response['data'];
      console.log('component > detailsComponent > showOnePet(' + id + ') >> server_response["data"] =>', server_response['data']);
      this.pet = server_response['data'];
      console.log('component > detailsComponent > showOnePet(' + id + ') > this.pet =>', this.pet);
    });
}

  remove(petid) {
    console.log('component > detailsComponent > remove(' + petid + ') =>', petid._id);
    const removeObs = this._petService.deletePet(petid._id);
    removeObs.subscribe((server_response) => {
      console.log('component > detailsComponent > remove(' + petid + ') > server_response =>', server_response);
      this._router.navigate(['/']);
    });
  }


  }


