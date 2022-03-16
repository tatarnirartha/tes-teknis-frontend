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

export {
    getUomFromDb,
    getCurrencyFromDb,
    getChargeToFromDb,
    getExchangeRateFromApi
};