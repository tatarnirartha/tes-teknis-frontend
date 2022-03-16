 const SETUOM = (state, payload) => {
     state.main_state.uom = payload;
 };

 const SETCURRENCY = (state, payload) => {
     state.main_state.currency = payload;
 };

 const SETCHARGETO = (state, payload) => {
     state.main_state.charge_to = payload;
 };

 const SETEXCHANGE = (state, payload) => {
     state.main_state.exchange_rate = payload;
 }

 export {
     SETUOM,
     SETCURRENCY,
     SETCHARGETO,
     SETEXCHANGE
 };