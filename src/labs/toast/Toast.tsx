import { useEffect, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import styles from './Toast.module.css'
import { type ToastType, type ToastOptions } from './useToast'
import ToastMessage from './ToastMessage'
import ToastExtraSection from './ToastExtraSection'

type ToastProps = {
  message: string
  onClose: () => void
  duration?: number
  onClick?: () => void
  type: ToastType
  /**
   * Render the toast in a portal attached to document.body (default true)
   */
  portal?: boolean
  /**
   * Additional options for side effects / customization
   */
  options?: ToastOptions
  /**
   * Custom footer content (overrides default extra section)
   */
  footer?: ReactNode
}

const CLICKABLE_DURATION = 8000
const NON_CLICKABLE_DURATION = 3000
const ERROR_DURATION = 15000

const Toast: React.FC<ToastProps> = ({ message, onClose, duration, onClick, type, portal = true, options, footer }) => {
  const isClickable = type !== 'delete' && !!onClick
  const errors = options?.errors

  const autoDuration = duration ?? options?.duration ?? (type === 'error' ? ERROR_DURATION : isClickable ? CLICKABLE_DURATION : NON_CLICKABLE_DURATION)

  useEffect(() => {
    const timer = setTimeout(onClose, autoDuration)
    return () => clearTimeout(timer)
  }, [autoDuration, onClose])

  const toastNode = (
    <div className={`${styles.customToast} ${styles[type]} ${isClickable ? styles.clickable : ''}`} onClick={isClickable ? onClick : undefined}>
      <button
        type="button"
        className={`${styles.closeBtn} btn-close btn-close-white`}
        onClick={(e) => {
          e.stopPropagation()
          onClose()
        }}
      ></button>

      {/* Message and error details */}
      <ToastMessage message={message} type={type} errors={errors} />

      {isClickable && <div className={styles.toastSub}>Click to view details</div>}

      {/* extra info section (optional) */}
      {/* {options && <ToastExtraSection onClose={onClose} options={options} />} */}

      {/* footer / extra info */}
      {footer ? footer : (
        options && <ToastExtraSection onClose={onClose} options={options} />
      )}

      {/* Progress bar */}
      <div className={styles.progressBar} style={{ animationDuration: `${autoDuration}ms` }} />
    </div>
  )

  if (portal) return createPortal(toastNode, document.body)
  return toastNode
}

export default Toast