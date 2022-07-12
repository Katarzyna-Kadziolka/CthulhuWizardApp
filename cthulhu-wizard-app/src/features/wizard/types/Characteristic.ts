import type { Build } from "./Build";
import type { DamageBonus } from "./DamageBonus";

export interface Characteristic {
  strength: number;
  constitution: number;
  size: number;
  dexterity: number;
  appearance: number;
  intelligence: number;
  power: number;
  education: number;
  luck: number;
  damageBonus: DamageBonus;
  build: Build;
  hitPoints: number;
  movementRate: number;
  magicPoints: number;
  sanity: number;
}
