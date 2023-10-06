import { Component, inject } from '@angular/core';
import { Pessoa } from '../pessoa';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pessoaslist',
  templateUrl: './pessoaslist.component.html',
  styleUrls: ['./pessoaslist.component.scss']
})
export class PessoaslistComponent {

  lista: Pessoa[] = [];

  modalService = inject(NgbModal);


  constructor(){

    this.lista.push(new Pessoa("Matheus", 33));
    this.lista.push(new Pessoa("João", 19));
    this.lista.push(new Pessoa("Cleber", 39));
    this.lista.push(new Pessoa("Endrick", 50));
    this.lista.push(new Pessoa("Washington", 15));
    this.lista.push(new Pessoa("Zacarias", 30));

  }


  abrirModal(abc: any){
    this.modalService.open(abc, { size: 'lg' });
  }

  addNaLista(pessoa: Pessoa){
    this.lista.push(pessoa);
    this.modalService.dismissAll();
  }


}
