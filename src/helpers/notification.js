import { notification } from "antd";

export default function openNotificationWithIcon({
  key,
  type = "success",
  message,
  description,
  duration = 3
}) {
  notification.open({
    type,
    message,
    description,
    key,
    duration,
    onClick: () => {
      notification.close(key);
    }
  });
}

// openNotificationWithIcon(Math.random(), "success");
// openNotificationWithIcon(Math.random(), "info");
// openNotificationWithIcon(Math.random(), "warning");
// openNotificationWithIcon(Math.random(), "error");
