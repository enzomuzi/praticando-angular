import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { ListaProdutosComponent } from './produtos/lista-produtos/lista-produtos.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [RouterOutlet, FooterComponent, HomeComponent, MenuComponent, RouterModule, SobreComponent, ContatoComponent, RouterLink, RouterLinkActive, ListaProdutosComponent, HttpClientModule]
})
export class AppComponent {
  title = 'ProjetoAngular';
}
