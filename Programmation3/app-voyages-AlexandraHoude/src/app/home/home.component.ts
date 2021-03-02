import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { forfaits } from '../forfait-mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mesForfaits: Array<Forfait> = forfaits;

  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }
}

