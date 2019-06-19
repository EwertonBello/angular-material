import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmesComponent } from '../pages/filmes/filmes.component';
import { DetailsComponent } from '../pages/details/details.component';


const routes: Routes = [
{path: 'filmes', component: FilmesComponent},
{path: 'details', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
