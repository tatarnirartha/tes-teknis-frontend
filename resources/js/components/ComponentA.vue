<template>
    <div class="px-5 ">
        <div class="row border-bottom-0 border">
            <div class="col-2">
                <div class="py-2 pe-4 m-0">
                    <custom-select :data="data" :data_icon="true"/>
                </div>
            </div>
            <div class="col-10">
                <div class="px-0 py-2 m-0">
                    <div class="row">
                        <div class="col-12 border-bottom">
                            <span class="badge rounded-pill badge-draft py-1 my-2">Draft</span>
                        </div>
                            <div class="col-12">
                                <div class="my-3">
                                <div class="row">
                                    <div class="col-8">
                                        <div class="me-2">
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="row">
                                                        <div class="col-7">
                                                            <div class="row">
                                                                <div class="col-7">
                                                                    <custom-label label_text="Assigned Vendor"/>
                                                                    <custom-select :data="assigned_vendor" select_class="big-input"/>
                                                                </div>
                                                                <div class="col-5">
                                                                    <custom-label label_text="Attention Of"/>
                                                                    <custom-input input_class="big-input" input_placeholder="Enter Attention Of"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-5">
                                                            <div class="row">
                                                                <div class="col-6">
                                                                    <custom-label label_text="Quotation No."/>
                                                                    <custom-input input_class="big-input" input_placeholder="Enter Quotation"/>
                                                                </div>
                                                                <div class="col-6">
                                                                    <custom-label label_text="Invoice To"/>
                                                                    <custom-select :data="invoice_to" select_class="big-input"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="mt-3">
                                                        <custom-label label_text="Vendor Address"/>
                                                        <custom-input input_class="big-input" input_placeholder="Enter Vendor Address"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-4 border-start-dot">
                                        <div class="ps-2">
                                            <div class="row">
                                                <div class="col-12">
                                                    <custom-label label_text="Customer - Contract"/>
                                                    <custom-select :data="customer_contract" select_class="big-input"/>
                                                </div>
                                                <div class="col-12">
                                                    <div class="mt-3">
                                                        <custom-label label_text="Customer PO No."/>
                                                        <custom-select :data="customer_po_no" select_class="big-input"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </div>
</template>

<script>
import CustomInput from './sub-components/CustomInput.vue';
import CustomLabel from './sub-components/CustomLabel.vue';
import CustomSelect from './sub-components/CustomSelect.vue';
import { mapActions, mapGetters} from "vuex";
export default {
    name: "ComponentA",
    components: { CustomSelect, CustomLabel, CustomInput },
    data() {
        return {
            submit: "",
            draft: "",
            reset: "",
            data: [
                {
                    name: "Logistic Instruction",
                    icon: "faTruck"
                },
                {
                    name: "Service Instruction",
                    icon: "faWrench"
                }
            ]
        }
    },
    methods: {
        ...mapActions({
            getAssignedVendorFromDb: "instructions/getAssignedVendorFromDb",
            getInvoiceToFromDb: "instructions/getInvoiceToFromDb",
            getCustomerContractFromDb: "instructions/getCustomerContractFromDb",
            getCustomerPoNoFromDb: "instructions/getCustomerPoNoFromDb"
        })
    },
    created(){
        this.getAssignedVendorFromDb();
        this.getInvoiceToFromDb();
        this.getCustomerContractFromDb();
        this.getCustomerPoNoFromDb();
    },
    computed: {
        ...mapGetters({
            assigned_vendor: "instructions/getAssignedVendor",
            invoice_to: "instructions/getInvoiceTo",
            customer_contract: "instructions/getCustomerContract",
            customer_po_no: "instructions/getCustomerPoNo"
        })
    },
    watch: {
        submit: function () {
            if(this.submit == "submit"){
                this.postInstructionB(this.instruction);                
                this.reset = "reset";
            }
        },
        draft: function () {
            if(this.draft == "draft"){
                this.postDraft(this.instruction);
                this.reset = "reset";
                this.draft = "";

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
.badge-draft {
    background-color: rgb(229, 229, 229);
    color: black;
    width: 8rem;
}

.border-start-dot {
    border-left: 3px dotted rgb(0, 191, 191);
}

</style>
