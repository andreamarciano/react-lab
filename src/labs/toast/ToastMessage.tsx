import styles from "./Toast.module.css";
import { type ToastType, type ToastOptions } from "./useToast";

type ToastMessageProps = {
  message: string
  type: ToastType
  errors?: ToastOptions['errors']
}

const ToastMessage: React.FC<ToastMessageProps> = ({
  message,
  type,
  errors,
}) => {
  return (
    <div>
      <h5>{message}</h5>

      {type === "error" && errors && (
        <ul>
          {errors.map((e) => (
            <li key={e.code ?? e.detail}>
              <span className={styles.errorSpan}>
                {e.code?.toString().toUpperCase()}
              </span>{" "}
              {e.detail}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ToastMessage