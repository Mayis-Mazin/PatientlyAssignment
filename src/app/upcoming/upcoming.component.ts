import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../services/users.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {
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
