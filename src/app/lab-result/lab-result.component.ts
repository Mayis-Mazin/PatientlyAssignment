import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../services/users.service';

@Component({
  selector: 'app-lab-result',
  templateUrl: './lab-result.component.html',
  styleUrls: ['./lab-result.component.css']
})
export class LabResultComponent implements OnInit {
  cards: any;

  constructor(private service: UsersService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.service.getUsers().subscribe(
      res => {
        this.cards = res;     
      }
    )
  }

}
