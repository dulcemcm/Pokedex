import { Component, OnInit } from '@angular/core';
import { KeyValue } from '@angular/common'; 
import { Pipe, PipeTransform } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pokedex';
  pokemon: any
  constructor(private pokemonService: PokemonService) { } 
    ngOnInit() { 
        this.recuperarPokemon()
    } 
    recuperarPokemon(){
      this.pokemonService.retornar()
      .subscribe( result =>  {this.pokemon = result});
    }
}
