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
    return state.main_state.exchange_rate
}

export {
    getUom,
    getCurrency,
    getChargeTo,
    getExchange
};