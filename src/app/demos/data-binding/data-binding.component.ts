import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

    public contadorClique: number = 0;
    public urlImagem: string = "https://angular.io/assets/images/logos/angular/angular.svg";
    public nome: string = "";

    adicionarClique(){
      this.contadorClique++;
    }

    zerarContador(){
      this.contadorClique = 0;
    }

    // KeyUp(event: any){
    //   this.nome = event.target.value;
    // }
}
