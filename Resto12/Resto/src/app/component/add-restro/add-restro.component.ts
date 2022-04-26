import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import { RestroService } from 'src/app/restro.service';
@Component({
  selector: 'app-add-restro',
  templateUrl: './add-restro.component.html',
  styleUrls: ['./add-restro.component.css']
})
export class AddRestroComponent implements OnInit {
  alert:boolean=false;
  constructor(private restro:RestroService) { }
    addRestro=new FormGroup({
    name:new FormControl(''),
    owner:new FormControl(''),
    address:new FormControl('')
  
  })

  ngOnInit(): void {
  }

  collectRestro(){
    console.warn(this.addRestro.value);
    this.restro.saveRestro(this.addRestro.value).subscribe((result)=>{
      this.alert=true;
      console.log("save data ",result);
    })
    //after  add data call reset form
    this.addRestro.reset({});
  }

  closeAlert(){
    this.alert=false;
  }

}
