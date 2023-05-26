import { Component, OnInit  } from '@angular/core';
import { SellerService } from '../service/seller.service';
import { Router } from '@angular/router';
import { SignIn, SignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
    isAccount:boolean = true ;
    loginError:string ='';
  constructor(private sellerService:SellerService, private router:Router){}

  ngOnInit():void{
    this.sellerService.reloadSeller();
  }

  signUp(data:SignUp){
        this.sellerService.userSignUp(data);
        return true;
  }
  logIn(data:SignIn){
    this.loginError='';
    this.sellerService.userLogIn(data);
   this.loginError = this.sellerService.loginFailed();
  }
  showSignIn(){
    this.isAccount=true;
  }
  showSignUp(){
    this.isAccount=false;
  }
}
