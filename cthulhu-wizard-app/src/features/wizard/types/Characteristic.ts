import type { Build } from "./Build";
import type { DamageBonus } from "./DamageBonus";

export interface Characteristic {
  Strength: number;
  Constitution: number;
  Size: number;
  Dexterity: number;
  Appearance: number;
  Intelligence: number;
  Power: number;
  Education: number;
  Luck: number;
  DamageBonus: DamageBonus;
  Build: Build;
  HitPoints: number;
  MovementRate: number;
  MagicPoints: number;
  Sanity: number;
}
