import type { QInputProps } from 'quasar';

export interface IFormInput {
    watermark: String;
    hasTooltip: Boolean;
    tooltipText: String;
    fieldType: QInputProps['type'];
}