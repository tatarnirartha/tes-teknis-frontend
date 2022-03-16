const getUom = (state) => {
    return state.main_state.uom;
};

const getCurrency = (state) => {
    return state.main_state.currency;
};

const getChargeTo = (state) => {
    return state.main_state.charge_to;
};

const getExchange = (state) => {
    return state.main_state.exchange_rate;
}

const getAssignedVendor = (state) => {
    return state.main_state.assigned_vendor;
}

const getInvoiceTo = (state) => {
    return state.main_state.invoice_to;
}

const getCustomerContract = (state) => {
    return state.main_state.customer_contract;
}

const getCustomerPoNo = (state) => {
    return state.main_state.customer_po_no;
}

export {
    getUom,
    getCurrency,
    getChargeTo,
    getExchange,
    getAssignedVendor,
    getInvoiceTo,
    getCustomerContract,
    getCustomerPoNo
};