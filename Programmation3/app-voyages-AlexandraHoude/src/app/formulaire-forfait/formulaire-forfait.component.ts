import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {caracteristique} from '../caracteristiques-mock';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-formulaire-forfait',
  templateUrl: './formulaire-forfait.component.html',
  styleUrls: ['./formulaire-forfait.component.css']
})
export class FormulaireForfaitComponent implements OnInit {
  constructor() { }

  destination = new FormControl('', [Validators.required]);
  depart = new FormControl('', [Validators.required]);
  nom = new FormControl('', [Validators.required, Validators.minLength(2)]);
  adresse = new FormControl('', [Validators.required, Validators.minLength(2)]);
  chambre = new FormControl('', [Validators.required, Validators.min(0)]);
  dateDepart = new FormControl('', [Validators.required]);
  dateRetour = new FormControl('', [Validators.required]);
  prix = new FormControl('', [Validators.required, Validators.min(0)]);
  etoile = new FormControl('', [Validators.required]);

  mesCaracteristiques: Array<string> = caracteristique;
  optionsDestination: string[] = ['Mexique', 'Republique dominicaine', 'Cuba'];
  optionsDepart: string[] = ['Québec', 'Montréal', 'Chicoutimi'];
  optionsFiltreDestination: Observable<string[]>;
  optionsFiltreDepart: Observable<string[]>;

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.optionsFiltreDestination = this.destination.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value, this.optionsDestination))
      );

    this.optionsFiltreDepart = this.depart.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value, this.optionsDepart))
      );
  }

  private _filter(value: string, optionValeur: string[]): string[] {
    const filterValue = value.toLowerCase();

    return optionValeur.filter(option => option.toLowerCase().includes(filterValue));
  }
}
