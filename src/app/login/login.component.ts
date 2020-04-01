import { Component, OnInit } from '@angular/core';
import { RegistrartionService } from '../service/registrartion.service';
import { Register } from '../service/Register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  token

  constructor(private registrartionService:RegistrartionService, private router:Router) { }

  ngOnInit() {
  }

  OnLogin()
  {
  
   let loginData=new Register();
   loginData.username=this.username;
   loginData.password=this.password;
   this.registrartionService.getToken(loginData).subscribe(
    response=>{
      this.token=response
      
      console.log(JSON.stringify(this.token.jwt));
      sessionStorage.setItem("currentUserToken",this.token.jwt);
      this.router.navigate(["/movie"])
    });


  }

}
