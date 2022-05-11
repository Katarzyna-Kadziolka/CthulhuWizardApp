import type { QInputProps } from 'quasar';
import type { TypeOf } from 'yup';

export default interface IFormInput {
    watermark: String;
    hasTooltip: Boolean;
    tooltipText: String;
    fieldType: QInputProps['type'];
}