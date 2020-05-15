import { Component, OnInit } from '@angular/core';
import { Tiquet } from 'src/app/models/tiquet';
import { TiquetService } from 'src/app/services/tiquet.service';

@Component({
  selector: 'app-creditos-component',
  templateUrl: './creditos-component.component.html',
  styleUrls: ['./creditos-component.component.css']
})
export class CreditosComponentComponent implements OnInit {

  searchText:string;
  tiquetes: Tiquet[];

  constructor(private tiquetService : TiquetService) { }

  ngOnInit(): void {
    this.searchText="";
    this.tiquetService.getTiquets().subscribe(result => {
      this.tiquetes = result;
    } )
  }

}
