import { Component, OnInit } from '@angular/core';
import { caracteristique } from '../caracteristiques-mock';

@Component({
  selector: 'app-formulaire-recherche',
  templateUrl: './formulaire-recherche.component.html',
  styleUrls: ['./formulaire-recherche.component.css']
})
export class FormulaireRechercheComponent implements OnInit {
  mesCaracteristiques: Array<string> = caracteristique;

  constructor() { }

  ngOnInit(): void {
  }
}
