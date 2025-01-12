import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-temp-driven-form',
  templateUrl: './temp-driven-form.component.html',
  styleUrls: ['./temp-driven-form.component.scss']
})
export class TempDrivenFormComponent implements OnInit {
userinfo: any;

  constructor() { }

  ngOnInit(): void {
  }
  
  @ViewChild('signUp') signUp !:NgForm

  onSignUp(){

   

   this.signval=this.signUp.value;

   this.signUp.reset();

  }

  onPatchval(){
    this.signUp.form.patchValue(this.signval)
  }

   signval !: {
    value: { key: string; };key:string
   }

   mocArr=[
    {
      modContact:'phone', id:123
    },
    {
      modContact:'mocEmail', id:123
    },

   ]
}
