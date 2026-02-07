import styles from "./Toast.module.css";
import { type ToastOptions } from "./useToast";

type ToastExtraSectionProps = {
  onClose: () => void;
  options: ToastOptions;
};

const ToastExtraSection: React.FC<ToastExtraSectionProps> = ({
  onClose,
  options,
}) => {
  if (!options.extraSection && !options.secondaryAction) return null;

  return (
    <>
      <div className={styles.divider} />
      <div className={styles.extraSection} onClick={(e) => e.stopPropagation()}>
        <div className={styles.extraText}>{options?.extraSection}</div>
        
        {options?.secondaryAction && (
          <button
            type="button"
            className={styles.secondaryAction}
            onClick={(e) => {
              e.stopPropagation();
              options.secondaryAction?.onClick?.();
              if (options.secondaryAction?.closeAfter) onClose();
            }}
          >
            {options.secondaryAction.label}
          </button>
        )}
      </div>
    </>
  );
};

export default ToastExtraSection;
