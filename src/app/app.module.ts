import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CardComponent } from './card/card.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { UsersService } from 'src/services/users.service';
import { LabResultComponent } from './lab-result/lab-result.component';
import { FollowUpsComponent } from './follow-ups/follow-ups.component';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import {MatRippleModule} from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CardComponent,
    UserDetailsComponent,
    LabResultComponent,
    FollowUpsComponent,
    MessagesComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatRippleModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'lab',
        component: LabResultComponent        
      },
      {
        path: 'follow',
        component: FollowUpsComponent        
      } ,
      {
        path: 'message',
        component: MessagesComponent        
      },
      {
        path: 'user/:id',
        component: UserDetailsComponent        
      }                                                         
    ])    
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
