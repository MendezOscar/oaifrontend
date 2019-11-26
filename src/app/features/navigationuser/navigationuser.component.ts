import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigationuser',
  templateUrl: './navigationuser.component.html',
  styleUrls: ['./navigationuser.component.css']
})
export class NavigationuserComponent implements OnInit {
  cuenta: string;
  ref: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.cuenta = localStorage.getItem('user');
    console.log(localStorage.getItem('user'));
  }

  goHomeUser() {
    this.router.navigate(['homeuser', this.cuenta]);
  }

}
