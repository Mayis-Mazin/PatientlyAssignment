import { UserService } from './../user.service';
import { Component, OnInit, NgModule } from '@angular/core';


@Component({
    selector:'app-card',
    templateUrl :'./card.component.html',
    })
export class CardComponent{
    Weight:number=10;
    height:number=160.3
    heartBeat:number=105
    userStatus: string='offline'
    users :any;
constructor(private userService:UserService ){
    this.userStatus
}
ngOnInit(){
    this.getUserData();
}
    // getUserStatus(){
    //     return this.userStatus=Math.random()>0.5?'online':'offline';
    // }

    
    getUserData(){
        this.userService.getUserData().subscribe(data=>{
            console.log(data)
            this.users=data;
        })
    }
}