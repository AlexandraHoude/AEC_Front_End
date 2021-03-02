import { Component, OnInit } from '@angular/core';

import { Forfait } from '../forfait';
import { forfaits } from '../forfait-mock';
import {VoyagesService} from '../voyages.service';

@Component({
  selector: 'app-liste-forfaits',
  templateUrl: './liste-forfaits.component.html',
  styleUrls: ['./liste-forfaits.component.css']
})
export class ListeForfaitsComponent implements OnInit {
  forfait: Forfait[];
  newForfait: Forfait;
  mesForfaits: Array<Forfait> = forfaits;

  constructor(private voyageService: VoyagesService) { }

  ngOnInit(): void {
    this.newForfait = {
      _id: null,
      destination: '',
      villeDepart: '',
      hotel: {
        nom: '',
        coordonnee: '',
        etoiles: 0,
        nbChambres: 0,
        photo: '',
        caracteristiques: [],
      },
      dateDepart: '',
      dateRetour: '',
      prix: 0,
      rabais: 0,
      forfaitVedette: false,
      da: '1996358'
    };
    this.getForfait();
  }

  getForfait(): void {
    this.voyageService.getForfait()
      .subscribe(resultat => this.forfait = resultat);
  }
}
