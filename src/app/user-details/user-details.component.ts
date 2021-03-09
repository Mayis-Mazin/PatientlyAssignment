import { Routes } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router'
import { UserService } from './../user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  userDetail:any
  subscription: Subscription | undefined;
  isData: boolean = false;

  constructor(private Route: ActivatedRoute, private service: UserService) { }

  ngOnInit(): void {
    this.subscription = this.Route.params.subscribe(
      param => {
        console.log(param.id)
        this.getUser(param.id)
      }
    )
  }

  getUser(id: any) {
    this.service.getUsrData(id).subscribe(
      res => {
        this.userDetail = res;
        this.isData = true;
      }
    )
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
