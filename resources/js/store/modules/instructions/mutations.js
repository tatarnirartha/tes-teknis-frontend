
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
 };

 const SETASSIGNEDVENDOR = (state, payload) => {
     state.main_state.assigned_vendor = payload;
 }

 const SETINVOICETO = (state, payload) => {
     state.main_state.invoice_to = payload;
 }

 const SETCUSTOMERCONTRACT = (state, payload) => {
     state.main_state.customer_contract = payload;
 }

 const SETCUSTOMERPONO = (state, payload) => {
     state.main_state.customer_po_no = payload;
 }

 export {
     SETUOM,
     SETCURRENCY,
     SETCHARGETO,
     SETEXCHANGE,
     SETASSIGNEDVENDOR,
     SETINVOICETO,
     SETCUSTOMERCONTRACT,
     SETCUSTOMERPONO
 };