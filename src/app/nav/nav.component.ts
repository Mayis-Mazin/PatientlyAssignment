import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UsersService } from './../../services/users.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  inputValue: any;
  options: any;
  isSearch: boolean = false;
  results: any[] = [];
  users: any[] = [];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private service: UsersService) {}

  onInput(e: any): void { 
    this.isSearch = true;

    const value = (e.target as HTMLInputElement).value;

    if (value == '') {
      this.results = [];
      this.isSearch = false;
    } else {
      this.service.getUsers().subscribe(
        res => {
          let data: any = res;
          this.results = data.filter((d: any) => d.name.toString().toLocaleLowerCase('en-US').includes(value.toString().toLocaleLowerCase('en-US')))
          this.isSearch = false;
        }
      )
    }
  } 

  clear() {
    this.results = [];
  }

}
