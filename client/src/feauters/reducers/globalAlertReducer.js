const initialState = {
  message: "",
  show: false,
  alertType: "success"
}

export const globalAlertReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SHOW_ALERT":
      return {
        message: payload.message,
        show: true,
        alertType: payload.alertType
      }

    case "HIDE_ALERT":
      return initialState

    default:
      return state
  }
}