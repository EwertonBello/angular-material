import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../../services/filmes.service';
import { Router } from '@angular/router';
import { Filme } from '../../model/filme';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  private readonly IMAGE = 'https://www.desktopbackground.org/p/2014/03/24/736572_star-wars-logo-wallpapers-wallpapers-cave_1600x900_h.png';
  filmes: Filme[];
  loading: boolean=true;
  filme: Filme;

  constructor(
    private filmesService: FilmesService,
    private router: Router
    ) { }

  ngOnInit(){
    this.getFilmes();
  }

  getFilmes(){
    this.filmesService.listar().subscribe(dados => {
    this.loading = false;
    this.filmes = dados['results'];
    }, 
    err => {
      this.loading = false;
      console.log(err);
    });
  }

  abrirDetails(filme: Filme){
    this.filme = new Filme(filme, this.IMAGE);
    this.router.navigate(['/details'], {state: this.filme });
  }

}
