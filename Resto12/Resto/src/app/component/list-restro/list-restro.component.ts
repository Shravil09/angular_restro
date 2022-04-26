import { Component, OnInit } from '@angular/core';
import { RestroService } from 'src/app/restro.service';

@Component({
  selector: 'app-list-restro',
  templateUrl: './list-restro.component.html',
  styleUrls: ['./list-restro.component.css']
})
export class ListRestroComponent implements OnInit {
 collection:any=[];
  constructor(private listService:RestroService) { }

  ngOnInit(): void {
    console.warn(this.listService.getList());
    this.showList();
  }

  showList(){
    this.listService.getList().subscribe((data)=>{
      console.log("fetch restro list",data);
      this.collection=data;
    })
  }

  deleteRestro(list){
    console.warn(this.collection);
    this.listService.deleteRestro(list).subscribe((result)=>{
      console.log("delete data",result);
      this.collection.splice(list-1,1);
    })
  }

}
