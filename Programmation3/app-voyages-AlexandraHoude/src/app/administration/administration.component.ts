import { Component, OnInit } from '@angular/core';
import {FormControl, NgForm, Validators} from '@angular/forms';
import {MatTable} from '@angular/material/table';
import {Forfait} from '../forfait';
import { VoyagesService } from '../voyages.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  forfait: Forfait[];
  columnsToDisplay = ['destination', 'nomHotel', 'dateDepart', 'dateRetour', 'prix', 'actions'];
  newForfait: Forfait;
  selectedForfait: Forfait;

  public mongraphique = {
    type : 'bar',
    legende : true,
    options : { responsive: true, maintainAspectRatio: false }
  };

  public mongraphique2 = {
    data: {
      datasets: [{
        data: [
          1000,
          1500,
          1750,
          2354,
          2899
        ],
        backgroundColor: [
          '#FF6384',
          '#4BC0C0',
          '#FFCE56',
          '#E7E9ED',
          '#36A2EB'
        ],
        label: 'Moyenne de réservation'
      }],
      labels: [
        'Red',
        'Green',
        'Yellow',
        'Grey',
        'Blue'
      ]
    },
    type: 'polarArea',
    etiquettes : ['2017', '2018', '2019', '2020', '2021'],
  };

  public mesdonnees = {
    etiquettes : ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
    data : [
      { data: [65, 59, 80, 81, 56, 55, 120], label: 'Nb réservations haute saison' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Nb réservations basse saison' }
    ]
  };

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

  onAdd(tableForfait: MatTable<Forfait>, FormGestionAjout: NgForm): void {
    if (FormGestionAjout.valid) {
      this.voyageService.addForfait(this.newForfait)
        .subscribe(forfait  => { this.forfait.push(forfait); FormGestionAjout.resetForm(); tableForfait.renderRows(); });
    }
  }

  onEdit(FormGestionEdition: NgForm): void {
    console.log('mise-a-jour');
    if (FormGestionEdition.valid) {
      this.voyageService.updateForfait(this.selectedForfait)
        .subscribe(() => this.selectedForfait = null);
    }
  }

  onSelect(forfait: Forfait): void {
    this.selectedForfait = forfait;
  }

  onDelete(forfait: Forfait): void {
    this.voyageService.deleteForfait(forfait._id)
      .subscribe(result => this.forfait = this.forfait.filter(f => f !== forfait));
  }
}
