import type { SkillSpecification } from "./../wizard/types/SkillSpecification";

export function parse(specification: SkillSpecification) {
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
