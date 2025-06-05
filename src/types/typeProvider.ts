import type { Character } from "./typeCharacter";

export interface SharingState {
  favorites: [Character] | []
  characterInfo: Character | object
}