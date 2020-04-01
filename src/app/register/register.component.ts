import { Component, OnInit } from '@angular/core';
import { RegistrartionService } from '../service/registrartion.service';
import { Register } from '../service/Register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username:string;
  password:string;
  rptpassword:string
  email:string;
  registerdata;
  var:any
constructor(private registrartionService:RegistrartionService ,private router:Router) { }
  ngOnInit() {
  }

  registerUser()
  {
    this.registerdata=new Register();
    this.registerdata.username=this.username;
    this.registerdata.password=this.password;
    this.registerdata.rptpassword=this.rptpassword;
    this.registerdata.email=this.email;
    console.log(this.registerdata.psw);
    this.registrartionService.postRegData(this.registerdata).subscribe(data=>{
      this.var=data;
      if(data)
      {
        this.router.navigate(['/login']);
      }
    });

  }

}
