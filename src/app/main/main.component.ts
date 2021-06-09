import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  active = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
    const router = this.router
    window.onload = function(){router.navigate(['/']).then(r => console.log(r))}
  }
  active1() {
    this.active = true;
  }
  active2() {
    this.active = false;
  }
}
