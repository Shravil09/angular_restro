import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public loginForm!:FormGroup
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:[''],
      password:['']
    })
  }

  login(){
   this.http.get<any>("http://localhost:3000/register").subscribe((data)=>{
     console.log("get data",data);
     const user=data.find((a:any)=>{
       return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
     });
     if(user){
       alert("login successfully");
       this.loginForm.reset();
       this.router.navigate(['list']);
     }else{
       alert("user not found");
     }
   },err=>{
     alert("something went wrong")
   })
  }

}
