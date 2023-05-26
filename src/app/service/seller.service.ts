import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignIn, SignUp } from '../data-type';
import {BehaviorSubject} from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root' 
})
export class SellerService {
  loginMessage:string='';
   constructor(private http:HttpClient, private router:Router) { }

  isSellerLoggedIn = new BehaviorSubject<Boolean>(false);

    userSignUp(data:SignUp){
        this.http.post('http://localhost:3000/seller',data,{observe : 'response'}).subscribe
        ((result)=>{
          this.isSellerLoggedIn.next(true);
          localStorage.setItem('seller',JSON.stringify(result.body));
          this.router.navigate(['seller-home']);
          console.warn('result',result);
        });
        return true;
    }
    userLogIn(data:SignIn){
      console.log('data',data)
      this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,{observe: 'response'})
      .subscribe((result:any)=>{
        // console.warn('result1',result);
        if(result && result.body && result.body.length){
          console.log('result2', result);
        }
        else{
          console.log("error ")
        }
      })
    }

    reloadSeller(){
      if(localStorage.getItem('seller')){
        this.isSellerLoggedIn.next(true);
        this.router.navigate(['seller-home']);
      }
    }

    loginFailed():string{
      return this.loginMessage;
    }
}
