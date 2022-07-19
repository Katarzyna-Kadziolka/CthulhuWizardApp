import type { OccupationSkillSpecification } from "./../wizard/types/OccupationSkillSpecification";

export function parse(specification: OccupationSkillSpecification) {
  if (specification.from.length === 1) {
    return specification.from[0];
  }
  switch (specification.howMany) {
    case 1:
      return `One from: ${specification.from.join(", ")}`;
    case 2:
      return `Two from: ${specification.from.join(", ")}`;
  }
}
