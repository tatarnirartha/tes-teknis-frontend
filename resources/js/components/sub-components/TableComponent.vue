<template>
    <div>
        <table class="table m-0">
            <thead>
                <tr>
                    <th>
                        <custom-label label_text="Description"/>
                    </th>
                    <th>
                        <custom-label label_text="Qty"/>
                    </th>
                    <th>
                        <custom-label label_text="UOM"/>
                    </th>
                    <th>
                        <custom-label label_text="Unit Price"/>
                    </th>
                    <th>
                        <custom-label label_text="Discount (%)"/>
                    </th>
                    <th>
                        <custom-label label_text="VAT (%)"/>
                    </th>
                    <th>
                        <custom-label />
                    </th>
                    <th>
                        <custom-label label_text="Currency"/>
                    </th>
                    <th>
                        <custom-label label_text="VAT Amount"/>
                    </th>
                    <th>
                        <custom-label label_text="Sub Total"/>
                    </th>
                    <th>
                        <custom-label label_text="Total"/>
                    </th>
                    <th>
                        <custom-label label_text="Charge To"/>
                    </th>
                    <th>
                        <custom-label/>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-bottom">
                        <custom-input input_placeholder="Description"/>
                    </td>
                    <td class="border-bottom">
                        <custom-input input_placeholder="Qty"/>
                    </td>
                    <td class="border-bottom">
                        <custom-select/>
                    </td>
                    <td class="border-bottom">
                        <custom-input input_placeholder="Unit Price"/>
                    </td>
                    <td class="border-bottom">
                        <custom-input input_value="0"/>
                    </td>
                    <td class="border-bottom">
                        <custom-input input_value="0"/>
                    </td>
                    <td class="border-bottom arrow center-vertical">
                        <font-awesome-icon icon="fa-solid fa-arrow-right" />
                    </td>
                    <td class="border-bottom">
                        <custom-select/>
                    </td>
                    <td class="border-bottom">
                        <custom-label label_text="0.00" />
                    </td>
                    <td class="border-bottom">
                        <custom-label label_text="0.00" />
                    </td>
                    <td class="border-bottom">
                        <custom-label label_text="0.00" />
                    </td>
                    <td class="border-bottom">
                        <custom-select />
                    </td>
                    <td class="border-bottom">
                        <custom-button icon="fa-minus" btn_class="min-btn text-muted"/>
                    </td>
                </tr>
                <tr>
                    <td colspan="7" rowspan="2" class="no-border center-vertical">
                        <div class="d-flex">
                            <custom-label label_text="Exchange rate 1 USD = " label_class="center-vertical"/>
                            <custom-input input_value="3.244"/>
                            <custom-label label_text="AED"/>
                        </div>
                    </td>
                     <td class="darker-table border-white">
                         <custom-label label_text="AED in Total"/>
                    </td>
                    <td class="darker-table border-white">
                        <custom-label label_text="0.00"/>
                    </td>
                    <td class="darker-table border-white">
                        <custom-label label_text="0.00"/>
                    </td>
                    <td class="darker-table border-white">
                        <custom-label label_text="0.00"/>
                    </td>
                    <td class="no-border">

                    </td>
                    <td rowspan="2" class="no-border center-vertical">
                        <custom-button icon="fa-plus" btn_class="plus-btn"/>
                    </td>
                </tr>
                <tr>
                    <td class="darker-table no-border">
                        <custom-label label_text="USD in Total"/>
                    </td>
                    <td class="darker-table no-border">
                        <custom-label label_text="0.00"/>
                    </td>
                    <td class="darker-table no-border">
                        <custom-label label_text="0.00"/>
                    </td>
                    <td class="darker-table no-border">
                        <custom-label label_text="0.00"/>
                    </td>
                    <td class="no-border">

                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import CustomInput from "./CustomInput.vue";
import CustomLabel from './CustomLabel.vue';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import CustomSelect from './CustomSelect.vue';
import CustomButton from './CustomButton.vue';

export default {
    name: "TableComponent",
    components: {
        CustomInput,
        CustomLabel,
        FontAwesomeIcon,
        CustomSelect,
        CustomButton        
    }
}
</script>

<style scoped>
thead {
    background: rgb(245, 246, 248);
    font-weight: 100px;
}

th {
    font-weight: normal;
}

tbody {
    border: none !important;
}

.no-border {
    border: none !important;
}

.darker-table {
    background: rgb(245, 246, 248);
}

.border-white {
    border-bottom: 1px solid white;
}

.arrow {
    color: rgb(185, 192, 199);
}

</style>