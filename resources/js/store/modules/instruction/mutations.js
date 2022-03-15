 const SETUOM = (state, payload) => {
     state.main_state.uom = payload;
 };

 const SETCURRENCY = (state, payload) => {
     state.main_state.currency = payload;
 };

 const SETCHARGETO = (state, payload) => {
     state.main_state.charge_to = payload;
 };

 export {
     SETUOM,
     SETCURRENCY,
     SETCHARGETO
 };