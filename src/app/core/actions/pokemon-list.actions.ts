import { Action } from '@ngrx/store';
import { PokemonEntry } from '../models/pokemon-entry';

export enum PokemonListActionsTypes {
  FETCH_POKEMONS_REQUEST = '[Pokemon] Fetch pokemons request',
  FETCH_POKEMONS_FAILURE = '[Pokemon] Fetch pokemons failure',
  FETCH_POKEMONS_SUCCESS = '[Pokemon] Fetch pokemons success',
  EDIT_OFFSET = '[Pokemon] Edit offset'
}

export class FetchPokemonsRequest implements Action {
  readonly type = PokemonListActionsTypes.FETCH_POKEMONS_REQUEST;
  constructor(public payload: { offset: number; limit: number }) {}
}
export class FetchPokemonsFailure implements Action {
  readonly type = PokemonListActionsTypes.FETCH_POKEMONS_FAILURE;
  constructor(public payload: string) {}
}
export class FetchPokemonsSuccess implements Action {
  readonly type = PokemonListActionsTypes.FETCH_POKEMONS_SUCCESS;
  constructor(public payload: PokemonEntry[]) {}
}

export class EditOffset implements Action {
  readonly type = PokemonListActionsTypes.EDIT_OFFSET;
  constructor(public payload: number) {}
}

export type PokemonListActions =
  | FetchPokemonsRequest
  | FetchPokemonsFailure
  | FetchPokemonsSuccess
  | EditOffset;
