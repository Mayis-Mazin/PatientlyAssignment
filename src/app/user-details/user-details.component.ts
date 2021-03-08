import { Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router'
import { UserService } from './../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userDetail:any;
  constructor(private Route:ActivatedRoute, private userService:UserService) { 

  }

  ngOnInit(): void {
    const id = this.Route.snapshot.paramMap.get('id')
    console.log(id);
   this.userService.getUsrData(id).subscribe(data=>{
     console.log(data);
     this.userDetail=data;     
   })
  }

}
