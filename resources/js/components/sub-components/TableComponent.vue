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
                <tr v-for="(cost, index) in costs" :key="index">
                    <td class="border-bottom">
                        <custom-input input_placeholder="Description" v-model="costs[index].description"/>
                    </td>
                    <td class="border-bottom">
                        <custom-input input_placeholder="Qty" input_type="number" v-model="costs[index].qty"/>
                    </td>
                    <td class="border-bottom">
                        <custom-select :data="all_uom"/>
                    </td>
                    <td class="border-bottom">
                        <custom-input input_placeholder="Unit Price" input_type="number" v-model="costs[index].unit_price"/>
                    </td>
                    <td class="border-bottom">
                        <custom-input input_value="0" input_type="number" v-model="costs[index].discount"/>
                    </td>
                    <td class="border-bottom">
                        <custom-input input_value="0" input_type="number" v-model="costs[index].vat"/>
                    </td>
                    <td class="border-bottom arrow center-vertical">
                        <font-awesome-icon icon="fa-solid fa-arrow-right" />
                    </td>
                    <td class="border-bottom">
                        <custom-select :data="all_currency"/>
                    </td>
                    <td class="border-bottom">
                        <custom-label :label_text="getVatAmount(index)" />
                    </td>
                    <td class="border-bottom">
                        <custom-label :label_text="getSubTotal(index)" />
                    </td>
                    <td class="border-bottom">
                        <custom-label :label_text="getTotal(index)" />
                    </td>
                    <td class="border-bottom">
                        <custom-select :data="all_charge_to" placeholder="Select an option"/>
                    </td>
                    <td class="border-bottom">
                        <custom-button icon="fa-minus" @btnClick="minClick(index)" btn_class="min-btn text-muted"/>
                    </td>
                </tr>
                <tr>
                    <td colspan="7" rowspan="2" class="no-border center-vertical">
                        <div class="d-flex">
                            <custom-label label_text="Exchange Rate 1 USD = " label_class="pe-2"/>
                            <custom-input input_value="3.244"/>
                            <custom-label label_text="AED" label_class="ps-2"/>
                        </div>
                    </td>
                     <td class="px-3 darker-table border-white">
                         <custom-label label_text="AED in Total"/>
                    </td>
                    <td class="px-3 darker-table border-white">
                        <custom-label label_text="0.00"/>
                    </td>
                    <td class="px-3 darker-table border-white">
                        <custom-label label_text="0.00"/>
                    </td>
                    <td class="px-3 darker-table border-white">
                        <custom-label label_text="0.00"/>
                    </td>
                    <td class="no-border">

                    </td>
                    <td rowspan="2" class="no-border center-vertical">
                        <custom-button icon="fa-plus" @btnClick="plusClick()" btn_class="plus-btn"/>
                    </td>
                </tr>
                <tr>
                    <td class="px-3 darker-table no-border">
                        <custom-label label_text="USD in Total"/>
                    </td>
                    <td class="px-3 darker-table no-border">
                        <custom-label label_text="0.00"/>
                    </td>
                    <td class="px-3 darker-table no-border">
                        <custom-label label_text="0.00"/>
                    </td>
                    <td class="px-3 darker-table no-border">
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
import { mapGetters, mapActions } from "vuex";

export default {
    name: "TableComponent",
    data() {
        return {
            costs: [
                {
                    description: "",
                    qty: "",
                    uom: "",
                    unit_price: "",
                    discount: 0,
                    vat: 0,
                    currency: "",
                    vat_amount: 0,
                    sub_total: 0,
                    total: "",
                    charge_to: ""
                }
            ]
            
        }
    },
    components: {
        CustomInput,
        CustomLabel,
        FontAwesomeIcon,
        CustomSelect,
        CustomButton        
    },
    computed: {
        ...mapGetters({
            all_uom: "instruction/getUom",
            all_currency: "instruction/getCurrency",
            all_charge_to: "instruction/getChargeTo"
        }),
        getSubTotal(){
            return index => {
                const zero = 0;
                if(this.costs[index].qty != "" && this.costs[index].unit_price != ""){
                    const qty = parseInt(this.costs[index].qty);
                    const unitPrice = parseInt(this.costs[index].unit_price);
                    const discount = parseInt(this.costs[index].discount)
                    const discVal = (qty * unitPrice) * discount / 100;
                    const subTotalVal = (qty * unitPrice) - discVal;
                    this.costs[index].sub_total = subTotalVal;
                    return subTotalVal.toFixed(2);
                }
                    this.costs[index].sub_total = zero;
                    return zero.toFixed(2);
            }
        },
        getVatAmount(){
            return index => {
                const zero = 0;
                const subTotal = parseInt(this.costs[index].sub_total);
                const vat = parseInt(this.costs[index].vat);
                if(subTotal != 0){
                    const vatAmount = subTotal * vat / 100;
                    this.costs[index].vat_amount = vatAmount;
                    return vatAmount.toFixed(2);
                }
                this.costs[index].vat_amount = zero
                return zero.toFixed(2);
            }
        },
        getTotal() {
            return index => {
                const zero = 0;
                const subTotal = parseInt(this.costs[index].sub_total);
                const valAmount = parseInt(this.costs[index].vat_amount);
                if(subTotal != 0){
                    const total = subTotal + valAmount;
                    this.costs[index].total = total;
                    return total.toFixed(2);
                }
                this.costs[index].total = zero;
                return zero.toFixed(2);
            }
        }
    },
    methods: {
        ...mapActions({
            getUomFromDb: "instruction/getUomFromDb",
            getCurrencyFromDb: "instruction/getCurrencyFromDb",
            getChargeToFromDb: "instruction/getChargeToFromDb"
        }),
        plusClick(){
            const newCost = {
                    description: "",
                    qty: "",
                    uom: "",
                    unit_price: "",
                    discount: 0,
                    vat: 0,
                    currency: "",
                    vat_amount: 0,
                    sub_total: 0,
                    total: "",
                    charge_to: ""
                };
            
            this.costs.push(newCost);
        },
        minClick(index){
            this.costs.splice(index, 1);
        }

    },
    created() {
        this.getUomFromDb();
        this.getCurrencyFromDb();
        this.getChargeToFromDb();
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