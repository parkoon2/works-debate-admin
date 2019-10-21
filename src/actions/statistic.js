import {
  GET_DAILY_STATISTIC_FAILURE,
  GET_DAILY_STATISTIC_SUCCESS,
  GET_DAILY_STATISTIC_REQUEST
} from "../constants/actionTypes";

export const fetchDailyStatistic = () => dispatch => {
  dispatch({
    type: GET_DAILY_STATISTIC_REQUEST
  });

  const body = {
    auth: {
      cpId: "DebateWeb",
      authKey: "Q29uc3V…"
    }
  };

  window.$axios
    .post("etc/getDailyStatistics", body)
    .then(r => {
      dispatch({
        type: GET_DAILY_STATISTIC_SUCCESS,
        payload: {
          items: r.data.result
        }
      });
    })
    .catch(err =>
      dispatch({
        type: GET_DAILY_STATISTIC_FAILURE,
        payload: { error: err.message }
      })
    );
};
