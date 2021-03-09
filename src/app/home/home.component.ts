import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
 
export class HomeComponent implements OnInit {
  cards: any;
  
  constructor(private breakpointObserver: BreakpointObserver, private service: UsersService ) {}


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
