import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  form={
    email:'',
    password:''
  }
  constructor() {}


login(){
  console.log("cuando se hace click")
}
}
