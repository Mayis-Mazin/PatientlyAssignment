import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../services/users.service';

@Component({
  selector: 'app-follow-ups',
  templateUrl: './follow-ups.component.html',
  styleUrls: ['./follow-ups.component.css']
})
export class FollowUpsComponent implements OnInit {
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
