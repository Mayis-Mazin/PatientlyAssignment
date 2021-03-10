import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

  export class TableComponent implements OnInit {
    table:any[] = [];
  constructor(
    private service: UsersService
  ){}
  ngOnInit(): void {
    this.getTable();
  }
  getTable(){
    this.service.getUsers().subscribe(
      res => {
        let data: any = res
        this.table=data
      }
    )
  }
}
