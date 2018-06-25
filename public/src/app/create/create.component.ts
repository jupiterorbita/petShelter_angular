import { PetService } from './../pet.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

console.log('component > createComponent > TOPpage loading');

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newPet: any;
  msg = '';
  constructor(
    private _petService: PetService,
    private _router: Router) { console.log('createComponent > inside constructor'); }

  ngOnInit() {
    console.log('createComponent > ngOnInit()');
  }

  goHome() {
    console.log('createComponent > goHome()');
    this._router.navigate(['/pets']);
  }

  // =========== CREATE NEW =============
  onSubmit_create(myform: NgForm) {
    console.log('createComponent > onSubmit_create(myform: NgForm)');
    this.newPet = myform.value;
    console.log('createComponent > onSubmit_create(myform: NgForm) > this.newPet =>', this.newPet);
    console.log('createComponent > onSubmit_create(myform: NgForm) > myfrom.value => ', myform.value);
    const observeProduct = this._petService.createPet(this.newPet);
    observeProduct.subscribe(
        server_response => {
          console.log('createComponent > onSubmit_create(myform: NgForm) > server_response => ', server_response);
            if (server_response['error']) {
                this.msg = server_response['error']['message'];
                console.log('Component > createComponent > onSubmit_create() >> error >msg: ', this.msg);
            } else {
                this.msg = '';
            }
            // console.log(server_response);
        },
        (err) => {
            console.log('ERROR: ', err);
        }
      );
      this._router.navigate(['/']);
  }
}
