import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notif',
  templateUrl: './notif.component.html',
  styleUrls: ['./notif.component.css']
})
export class NotifComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  recharges = [
    { message: 'Agent ikram créé avec succès', date: new Date('2022-01-01') },
    { message: 'Agent hamza créé avec succès', date: new Date('2022-01-03') },
    { message: 'Agent mohamed créé avec succès', date: new Date('2022-01-01') },
    { message: 'Agent salah créé avec succèse', date: new Date('2022-01-03') }
  ];

  paiementsFactures = [
    { message: 'Paiement de la facture EDF effectué', date: new Date('2022-01-02') },
    { message: 'Paiement de la facture Orange effectué', date: new Date('2022-01-04') },
    { message: 'Paiement de la facture EDF effectué', date: new Date('2022-01-02') },
    { message: 'Paiement de la facture Orange effectué', date: new Date('2022-01-04') }
  ];
}
