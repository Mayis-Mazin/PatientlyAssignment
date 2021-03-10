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
import { UpcomingComponent } from './upcoming/upcoming.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzIconModule } from 'ng-zorro-antd/icon';


registerLocaleData(en);


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
    UpcomingComponent,
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
    NzInputModule,
    NzAutocompleteModule,
    NzIconModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'upcoming',
        component: UpcomingComponent
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
    ]),
    FormsModule    
  ],
  providers: [UsersService, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
