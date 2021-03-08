import { HomeComponent } from './home/home.component';
import { NgModule,Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
{path:'home', component:HomeComponent

},
{
  path:'user/:id',
component:UserDetailsComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

