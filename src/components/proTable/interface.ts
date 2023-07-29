import {ExtractPropTypes, PropType} from 'vue';
export interface ProTableColumn {
    title: string;
    width: string;
    key: string;
}

export const proTableProps = {
} as const;

export  type ProTableProps = ExtractPropTypes<typeof proTableProps>;