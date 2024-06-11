import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { TitleComponent } from './components/title/title.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ActorsComponent } from './components/actors/actors.component';
import { SerialsComponent } from './components/serials/serials.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'movies', component: MoviesComponent},
    {path: 'actors', component: ActorsComponent},
    {path: 'serials', component: SerialsComponent},
    {path: 'search/:id', component: SearchComponent},
    {path: 'title/:title/id/:id', component: TitleComponent},  
];

