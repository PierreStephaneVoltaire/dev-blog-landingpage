import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'blog-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor() {
  }
@Input() wSize:number
  ngOnInit(): void {
  }

}
