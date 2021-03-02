import { Component, OnInit } from '@angular/core';
import {Forfait} from '../forfait';
import {VoyagesService} from '../voyages.service';

@Component({
  selector: 'app-forfait-y',
  templateUrl: './forfait-y.component.html',
  styleUrls: ['./forfait-y.component.css']
})

export class ForfaitYComponent implements OnInit {
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
