import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saisies-dossiers-index',
  templateUrl: './saisies-dossiers-index.component.html',
  styleUrls: ['./saisies-dossiers-index.component.scss']
})
export class SaisiesDossiersIndexComponent implements OnInit {
  saisiedossier = [
    {
      id:1,
      Id:1,
      nom : 'ahmed',
      prenom : 'hakked',
      matricule:'202',
      date :'01/09/2019'
    },
    {
      id:2,
      Id:2,
      nom : 'chikhaoui',
      prenom : 'jihene',
      matricule:'203',
      date :'01/09/2019'
    },
    {
      id:3,
      Id:3,
      nom : 'majdoub',
      prenom : 'wafa',
      matricule:'204',
      date :'01/09/2019'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
