import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnChanges {

  constructor(private router : Router) { }
  isGetOTPClicked : boolean = false;
  buttonName : string = 'get OTP';
  @Input() isLoggedIn  : boolean = false;
  ngOnInit(): void {
    console.log('login')
  }

  ngOnChanges(...args:any[]){
    console.log(`ch:${this.isGetOTPClicked}`)
  }

  ngDocheck(){
    
  }

  getOTP(){
    this.isGetOTPClicked = true;
    this.buttonName = 'Log in'
    if(this.buttonName === 'Log in'){
     

    }

  


  }

  logIn(){
    console.log('login')
    this.router.navigateByUrl('/home')
  }
}
