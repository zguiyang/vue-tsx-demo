 import {defineComponent, PropType} from "vue";

import {ProTableColumn, proTableProps} from './interface';

const ProTable = defineComponent({
    name: 'ProTable',
    props:{
        columns: {
            type: Array as PropType<ProTableColumn[]>,
            default: () => ([]),
        },
        loading: Boolean,
    },

    setup () {},
    render () {
        return (
            <table>
                <thead>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                </thead>
                <tbody></tbody>
            </table>
        )
    },
})

 export  default ProTable;