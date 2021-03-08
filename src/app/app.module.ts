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
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CardComponent,
    UserDetailsComponent,
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
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
