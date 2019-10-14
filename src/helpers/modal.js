import { Modal } from "antd";
const { confirm } = Modal;

export default function showConfirm({ ok, cancel, title, content }) {
  confirm({
    title,
    content,
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (typeof ok === "function") {
            resolve();
            ok();
          }
        }, 1000);
      });
    },
    onCancel() {
      if (typeof cancel === "function") cancel();
    }
  });
}
