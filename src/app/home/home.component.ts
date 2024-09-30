import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { HomeSerivce } from './home.service';
import { Subscribable, Subscription } from 'rxjs';
import { PokemonPagination } from './home.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  pokemons = signal<string>("")
  sub: Subscription = new Subscription();
  constructor(
    private homeService: HomeSerivce
  )
  {}

  ngOnInit(): void{
    this.sub = this.homeService.GetAllPokemon().subscribe({
      next: value => this.pokemons.set(JSON.stringify(value))
    })
  }

  ngOnDestroy(): void{
    this.sub.unsubscribe();
  }
}
