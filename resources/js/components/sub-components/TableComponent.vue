<template>
    <div>
        <table class="table m-0">
            <thead>
                <tr>
                    <th>
                        <custom-label label_text="Description" label_class="mw-3"/>
                    </th>
                    <th>
                        <custom-label label_text="Qty" label_class="mw-2"/>
                    </th>
                    <th>
                        <custom-label label_text="UOM" label_class="mw-2"/>
                    </th>
                    <th>
                        <custom-label label_text="Unit Price" label_class="mw-2"/>
                    </th>
                    <th>
                        <custom-label label_text="Discount (%)" label_class="mw-2"/>
                    </th>
                    <th>
                        <custom-label label_text="VAT (%)" label_class="mw-2"/>
                    </th>
                    <th>
                        <custom-label />
                    </th>
                    <th>
                        <custom-label label_text="Currency" label_class="mw-1"/>
                    </th>
                    <th>
                        <custom-label label_text="VAT Amount" label_class="mw-2"/>
                    </th>
                    <th>
                        <custom-label label_text="Sub Total" label_class="mw-2"/>
                    </th>
                    <th>
                        <custom-label label_text="Total" label_class="mw-2"/>
                    </th>
                    <th>
                        <custom-label label_text="Charge To" label_class="mw-3"/>
                    </th>
                    <th>
                        <custom-label/>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(cost, index) in instruction.costs" :key="index">
                    <td class="border-bottom">
                        <custom-input input_placeholder="Description" v-model="cost.description" input_class="mw-3 big-input big-input"/>
                    </td>
                    <td class="border-bottom">
                        <custom-input input_placeholder="Qty" input_type="number" v-model="cost.qty" input_class="mw-2 big-input"/>
                    </td>
                    <td class="border-bottom">
                        <custom-select :data="all_uom" v-model="cost.oum" select_class="mw-2 big-input"/>
                    </td>
                    <td class="border-bottom">
                        <custom-input input_placeholder="Unit Price" input_type="number" v-model="cost.unit_price" input_class="mw-2 big-input"/>
                    </td>
                    <td class="border-bottom">
                        <custom-input input_value="0" input_type="number" v-model="cost.discount" input_class="mw-2 big-input"/>
                    </td>
                    <td class="border-bottom">
                        <custom-input input_value="0" input_type="number" v-model="cost.vat" input_class="mw-2 big-input"/>
                    </td>
                    <td class="border-bottom arrow center-vertical">
                        <font-awesome-icon icon="fa-solid fa-arrow-right" />
                    </td>
                    <td class="border-bottom">
                        <custom-select :data="all_currency" v-model="cost.currency" select_class="mw-1 big-input"/>
                    </td>
                    <td class="border-bottom center-vertical">
                        <div class="d-flex flex-row-reverse mh-100">
                            <custom-label :label_text="getVatAmount(index)"/>
                        </div>
                    </td>
                    <td class="border-bottom center-vertical">
                        <custom-label :label_text="getSubTotal(index)" label_class="mw-2"/>
                    </td>
                    <td class="border-bottom center-vertical">
                        <custom-label :label_text="getTotal(index)" label_class="mw-2"/>
                    </td>
                    <td class="border-bottom">
                        <custom-select :data="all_charge_to" placeholder="Select an option" v-model="cost.charge_to" select_class="mw-3 big-input"/>
                    </td>
                    <td class="border-bottom">
                        <custom-button icon="fa-minus" @btnClick="minClick(index)" btn_class="min-btn text-muted big-btn"/>
                    </td>
                </tr>
                <tr>
                    <td colspan="7" rowspan="2" class="no-border center-vertical">
                        <div class="d-flex">
                            <custom-label label_text="Exchange Rate 1 USD = " label_class="pe-2"/>
                            <span class="currency">
                                {{excange_rate.AED}}
                            </span>
                            <custom-label label_text="AED" label_class="ps-2"/>
                        </div>
                    </td>
                     <td class="px-3 darker-table border-white">
                         <custom-label label_text="AED in Total" label_class="mw-2"/>
                    </td>
                    <td class="darker-table border-white center-vertical">
                        <div class="d-flex flex-row-reverse mh-100">
                            <custom-label :label_text="getAedVatAmount"/>
                        </div>
                    </td>
                    <td class="px-2 darker-table border-white center-vertical">
                        <custom-label :label_text="getAedSubTotal"/>
                    </td>
                    <td class="px-2 darker-table border-white center-vertical">
                        <custom-label :label_text="getAedTotal"/>
                    </td>
                    <td class="no-border">

                    </td>
                    <td rowspan="2" class="no-border center-vertical">
                        <custom-button icon="fa-plus" @btnClick="plusClick()" btn_class="plus-btn big-btn"/>
                    </td>
                </tr>
                <tr>
                    <td class="px-3 darker-table no-border">
                        <custom-label label_text="USD in Total"/>
                    </td>
                    <td class="darker-table no-border center-vertical">
                        <div class="d-flex flex-row-reverse mh-100">
                            <custom-label :label_text="getUsdVatAmount"/>
                        </div>
                    </td>
                    <td class="px-2 darker-table no-border center-vertical">
                        <custom-label :label_text="getUsdSubTotal"/>
                    </td>
                    <td class="px-2 darker-table no-border center-vertical">
                        <custom-label :label_text="getUsdTotal"/>
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
    props: {
        submit: {
            type: String,
            default: ""
        },
        draft: {
            type: String,
            default: ""
        },
        reset: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            instruction: {
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
                ],
                AED_total: {
                    vat_amount: 0,
                    sub_total: 0,
                    total: 0
                },
                USD_total: {
                    vat_amount: 0,
                    sub_total: 0,
                    total: 0
                }
            },
            instruction_empty: {
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
                ],
                AED_total: {
                    vat_amount: 0,
                    sub_total: 0,
                    total: 0
                },
                USD_total: {
                    vat_amount: 0,
                    sub_total: 0,
                    total: 0
                }
            }
            
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
            all_uom: "instructions/getUom",
            all_currency: "instructions/getCurrency",
            all_charge_to: "instructions/getChargeTo",
            excange_rate: "instructions/getExchange"
        }),
        getSubTotal(){
            return index => {
                const zero = 0;
                if(this.instruction.costs[index].qty != "" && this.instruction.costs[index].unit_price != ""){
                    const qty = parseInt(this.instruction.costs[index].qty);
                    const unitPrice = parseInt(this.instruction.costs[index].unit_price);
                    const discount = parseInt(this.instruction.costs[index].discount)
                    const discVal = (qty * unitPrice) * discount / 100;
                    const subTotalVal = (qty * unitPrice) - discVal;
                    this.instruction.costs[index].sub_total = subTotalVal;
                    return subTotalVal.toFixed(2);
                }
                    this.instruction.costs[index].sub_total = zero;
                    return zero.toFixed(2);
            }
        },
        getVatAmount(){
            return index => {
                const zero = 0;
                const subTotal = parseInt(this.instruction.costs[index].sub_total);
                const vat = parseInt(this.instruction.costs[index].vat);
                if(subTotal != 0){
                    const vatAmount = subTotal * vat / 100;
                    this.instruction.costs[index].vat_amount = vatAmount;
                    return vatAmount.toFixed(2);
                }
                this.instruction.costs[index].vat_amount = zero
                return zero.toFixed(2);
            }
        },
        getTotal() {
            return index => {
                const zero = 0;
                const subTotal = parseInt(this.instruction.costs[index].sub_total);
                const valAmount = parseInt(this.instruction.costs[index].vat_amount);
                if(subTotal != 0){
                    const total = subTotal + valAmount;
                    this.instruction.costs[index].total = total;
                    return total.toFixed(2);
                }
                this.instruction.costs[index].total = zero;
                return zero.toFixed(2);
            }
        },
        getAedVatAmount() {
            if(this.instruction.costs.length > 1){
                let a =  this.checkCurrencyAed(this.instruction.costs[0].vat_amount, this.instruction.costs[0].currency);
                let b = 0;
                
                for(let i = 0; i < this.instruction.costs.length - 1; i++){
                    b = this.checkCurrencyAed(this.instruction.costs[i + 1].vat_amount, this.instruction.costs[i + 1].currency);
                    a = a + b;
                }
                this.instruction.AED_total.vat_amount = a.toFixed(2)
                return a.toFixed(2);
            }
            this.instruction.AED_total.vat_amount = this.checkCurrencyAed(this.instruction.costs[0].vat_amount, this.instruction.costs[0].currency).toFixed(2);
            return this.checkCurrencyAed(this.instruction.costs[0].vat_amount, this.instruction.costs[0].currency).toFixed(2);
        },
        getAedSubTotal() {
            if(this.instruction.costs.length > 1){
                let a =  this.checkCurrencyAed(this.instruction.costs[0].sub_total, this.instruction.costs[0].currency);
                let b = 0;
                
                for(let i = 0; i < this.instruction.costs.length - 1; i++){
                    b = this.checkCurrencyAed(this.instruction.costs[i + 1].sub_total, this.instruction.costs[i + 1].currency);
                    a = a + b;
                }
                this.instruction.AED_total.sub_total = a.toFixed(2)
                return a.toFixed(2);
            }
            this.instruction.AED_total.sub_total = this.checkCurrencyAed(this.instruction.costs[0].sub_total, this.instruction.costs[0].currency).toFixed(2);
            return this.checkCurrencyAed(this.instruction.costs[0].sub_total, this.instruction.costs[0].currency).toFixed(2);
        },
        getAedTotal() {
            if(this.instruction.costs.length > 1){
                let a =  this.checkCurrencyAed(this.instruction.costs[0].total, this.instruction.costs[0].currency);
                let b = 0;
                
                for(let i = 0; i < this.instruction.costs.length - 1; i++){
                    b = this.checkCurrencyAed(this.instruction.costs[i + 1].total, this.instruction.costs[i + 1].currency);
                    a = a + b;
                }
                this.instruction.AED_total.total = a.toFixed(2)
                return a.toFixed(2);
            }
            this.instruction.AED_total.total = this.checkCurrencyAed(this.instruction.costs[0].total, this.instruction.costs[0].currency).toFixed(2);
            return this.checkCurrencyAed(this.instruction.costs[0].total, this.instruction.costs[0].currency).toFixed(2);
        },
        getUsdVatAmount() {
            if(this.instruction.costs.length > 1){
                let a =  this.checkCurrencyUsd(this.instruction.costs[0].vat_amount, this.instruction.costs[0].currency);
                let b = 0;
                
                for(let i = 0; i < this.instruction.costs.length - 1; i++){
                    b = this.checkCurrencyUsd(this.instruction.costs[i + 1].vat_amount, this.instruction.costs[i + 1].currency);
                    a = a + b;
                }
                this.instruction.USD_total.vat_amount = a.toFixed(2)
                return a.toFixed(2);
            }
            this.instruction.USD_total.vat_amount = this.checkCurrencyUsd(this.instruction.costs[0].vat_amount, this.instruction.costs[0].currency).toFixed(2);
            return this.checkCurrencyUsd(this.instruction.costs[0].vat_amount, this.instruction.costs[0].currency).toFixed(2);
        },
        getUsdSubTotal() {
            if(this.instruction.costs.length > 1){
                let a =  this.checkCurrencyUsd(this.instruction.costs[0].sub_total, this.instruction.costs[0].currency);
                let b = 0;
                
                for(let i = 0; i < this.instruction.costs.length - 1; i++){
                    b = this.checkCurrencyUsd(this.instruction.costs[i + 1].sub_total, this.instruction.costs[i + 1].currency);
                    a = a + b;
                }
                this.instruction.USD_total.sub_total = a.toFixed(2)
                return a.toFixed(2);
            }
            this.instruction.USD_total.sub_total = this.checkCurrencyUsd(this.instruction.costs[0].sub_total, this.instruction.costs[0].currency).toFixed(2);
            return this.checkCurrencyUsd(this.instruction.costs[0].sub_total, this.instruction.costs[0].currency).toFixed(2);  
        },
        getUsdTotal() {
            if(this.instruction.costs.length > 1){
                let a =  this.checkCurrencyUsd(this.instruction.costs[0].total, this.instruction.costs[0].currency);
                let b = 0;
                
                for(let i = 0; i < this.instruction.costs.length - 1; i++){
                    b = this.checkCurrencyUsd(this.instruction.costs[i + 1].total, this.instruction.costs[i + 1].currency);
                    a = a + b;
                }
                this.instruction.USD_total.total = a.toFixed(2)
                return a.toFixed(2);
            }
            this.instruction.USD_total.total = this.checkCurrencyUsd(this.instruction.costs[0].total, this.instruction.costs[0].currency).toFixed(2);
            return this.checkCurrencyUsd(this.instruction.costs[0].total, this.instruction.costs[0].currency).toFixed(2);
        },
        
    },
    methods: {
        ...mapActions({
            getUomFromDb: "instructions/getUomFromDb",
            getCurrencyFromDb: "instructions/getCurrencyFromDb",
            getChargeToFromDb: "instructions/getChargeToFromDb",
            getExchangeFromApi: "instructions/getExchangeRateFromApi",
            postInstructionB: "instructions/postInstructionB",
            postDraft: "instructions/postDraft"
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
            
            this.instruction.costs.push(newCost);
        },
        minClick(index){
            this.instruction.costs.splice(index, 1);
        },
        checkCurrencyAed(cost, currency){
            if(currency == "USD"){
                return cost * this.excange_rate.AED;
            }else if(currency == "AED"){
                return cost;
            }
            return 0;
        },
        checkCurrencyUsd(cost, currency){
            if(currency == "AED"){
                return cost / this.excange_rate.AED;
            }else if(currency == "USD"){
                return cost;
            }
            return 0;
        }

    },
    created() {
        this.getUomFromDb();
        this.getCurrencyFromDb();
        this.getChargeToFromDb();
        this.getExchangeFromApi();
    },
    watch: {
        submit: function () {
            if(this.submit == "submit"){
                this.postInstructionB(this.instruction);                
            }
        },
        draft: function () {
            if(this.draft == "draft"){
                this.postDraft(this.instruction);
            }
        },
        reset: function () {
            if(this.reset == "reset"){
                this.instruction = this.instruction_empty;
            } 
        }
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

.currency{
    padding: 0.375rem;
    padding-left: 1rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: rgb(251, 251, 251);
    border: 1px solid #ced4da;
    appearance: none;
    border-radius: 0.25rem;
}

</style>