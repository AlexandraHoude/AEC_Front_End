import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { forfaits } from '../forfait-mock';

@Component({
  selector: 'app-navigation-tiroir',
  templateUrl: './navigation-tiroir.component.html',
  styleUrls: ['./navigation-tiroir.component.css']
})
export class NavigationTiroirComponent implements OnInit {
  mesForfaits: Array<Forfait> = forfaits;

  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }
}

