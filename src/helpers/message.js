import { message } from "antd";

const success = (msg, delay = 1.5) => {
  message.success(msg, delay);
};
const error = (msg, delay = 1.5) => {
  message.error(msg, delay);
};

export { success, error };
