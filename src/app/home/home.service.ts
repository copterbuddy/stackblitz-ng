import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PokemonPagination } from "./home.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class HomeSerivce{
    
    constructor(
        private client: HttpClient
    ){}

    GetAllPokemon(): Observable<PokemonPagination> {
        let result = this.client.get<PokemonPagination>('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
        return result;
    }
}