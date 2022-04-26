  import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestroService } from 'src/app/restro.service';

@Component({
  selector: 'app-update-restro',
  templateUrl: './update-restro.component.html',
  styleUrls: ['./update-restro.component.css']
})
export class UpdateRestroComponent implements OnInit {
  editRestro=new FormGroup({
    name:new FormControl(''),
    owner:new FormControl(''),
    address:new FormControl('')
  
  })
  constructor(private routes:ActivatedRoute,private getRouter:RestroService) { }

  ngOnInit(): void {
    console.warn(this.routes.snapshot.params.id);
    //get current id 
    this.getRouter.getCurrentRestro(this.routes.snapshot.params.id).subscribe((data)=>{
      console.warn(data);
   this.editRestro=new FormGroup({
        name:new FormControl(data['name']),
        owner:new FormControl(data['owner']),
        address:new FormControl(data['address'])
      
      })
    })
  }

}
