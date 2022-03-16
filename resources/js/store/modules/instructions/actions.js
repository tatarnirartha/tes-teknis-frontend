import Axios from "axios";

const getUomFromDb = async (context) => {
    let response = await Axios.get("http://localhost:3000/uom");
    context.commit("SETUOM", response.data);
};

const getCurrencyFromDb = async (context) => {
    let response = await Axios.get("http://localhost:3000/currency");
    context.commit("SETCURRENCY", response.data);
};

const getChargeToFromDb = async (context) => {
    let response = await Axios.get("http://localhost:3000/charge_to");
    context.commit("SETCHARGETO", response.data);
};

const getExchangeRateFromApi = async (context) => {
    let response = await Axios.get("http://localhost:3000/exchange_rate");
    context.commit("SETEXCHANGE", response.data);
}

const postInstructionB = async (context, payload) => {
    Axios.post("http://localhost:3000/instruction", payload);
}

const postDraft = async (context, payload) => {
    Axios.post("http://localhost:3000/draft", payload);
}

const getAssignedVendorFromDb = async (context) => {
    let response = await Axios.get("http://localhost:3000/assigned_vendor");
    context.commit("SETASSIGNEDVENDOR", response.data);
}

const getInvoiceToFromDb = async (context) => {
    let response = await Axios.get("http://localhost:3000/invoice_to");
    context.commit("SETINVOICETO", response.data);
}

const getCustomerContractFromDb = async (context) => {
    let response = await Axios.get("http://localhost:3000/customer_contract");
    context.commit("SETCUSTOMERCONTRACT", response.data);
}

const getCustomerPoNoFromDb = async (context) => {
    let response = await Axios.get("http://localhost:3000/customer_po_no");
    context.commit("SETCUSTOMERPONO", response.data);
}

export {
    getUomFromDb,
    getCurrencyFromDb,
    getChargeToFromDb,
    getExchangeRateFromApi,
    postInstructionB,
    postDraft,
    getAssignedVendorFromDb,
    getInvoiceToFromDb,
    getCustomerContractFromDb,
    getCustomerPoNoFromDb
};