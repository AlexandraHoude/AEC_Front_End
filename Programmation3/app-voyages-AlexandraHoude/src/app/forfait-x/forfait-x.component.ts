import { Component, OnInit } from '@angular/core';
import {VoyagesService} from '../voyages.service';
import {Forfait} from '../forfait';

@Component({
  selector: 'app-forfait-x',
  templateUrl: './forfait-x.component.html',
  styleUrls: ['./forfait-x.component.css']
})

export class ForfaitXComponent implements OnInit {
  forfait: Forfait[];

  constructor(private voyageService: VoyagesService) { }

  ngOnInit(): void {
    this.setForfait();
  }

  setForfait(): void {
    this.voyageService.getForfait()
      .subscribe(resultat => this.forfait = resultat as Forfait[]);
  }
}
