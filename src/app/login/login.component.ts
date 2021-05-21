import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Ilogin:ilogin=new ilogin();
  

 

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  LoginUser(){
    if(this.Ilogin.Username==="Admin" && this.Ilogin.Password==='adiin' )
    {
      this.router.navigateByUrl('home')
    }
  }

}
export class ilogin{
  Username!: string;
  Password!: string;
  
}
