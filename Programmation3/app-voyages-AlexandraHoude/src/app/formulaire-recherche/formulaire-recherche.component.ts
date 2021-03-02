import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { caracteristique } from '../caracteristiques-mock';
import { jours } from '../jours-mock';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulaire-recherche',
  templateUrl: './formulaire-recherche.component.html',
  styleUrls: ['./formulaire-recherche.component.css']
})
export class FormulaireRechercheComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  mesCaracteristiques: Array<string> = caracteristique;
  mesjours: Array<string> = jours;

  constructor() { }

  ngOnInit(): void {
  }
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
}
