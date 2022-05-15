import type { QInputProps } from "quasar";

export interface IFormInput {
  watermark: string;
  hasTooltip: boolean;
  tooltipText: string;
  fieldType: QInputProps["type"];
}
