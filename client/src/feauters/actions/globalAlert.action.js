import { GLOBAL_ALERT_TYPES } from "../../constants";

let alertTimeout;

export const showAlert = (message, time, alertType = GLOBAL_ALERT_TYPES.SUCCESS) => {
  return (dispatch) => {
    dispatch({ type: "SHOW_ALERT", payload: { message, alertType } })

    clearTimeout(alertTimeout)

    alertTimeout = setTimeout(() => {
      dispatch({ type: "HIDE_ALERT" })
    }, time);
  }
}