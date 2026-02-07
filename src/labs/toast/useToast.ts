import { useState, useCallback, type ReactNode } from 'react'

type ErrorItem = {
  code?: number | string
  detail: string
}

export type ToastType = 'add' | 'update' | 'delete' | 'error' | 'clone'

export type ToastOptions = {
  errors?: ErrorItem[]
  extraSection?: ReactNode | string
  secondaryAction?: {
    label: string
    onClick?: () => void
    /** if true, close toast after running handler */
    closeAfter?: boolean
  }
  duration?: number
  portal?: boolean
}

type ShowToastParams = {
  message: string
  type: ToastType
  onClick?: () => void
  options?: ToastOptions
  footer?: ReactNode
}
type BaseShowToastParams = Omit<ShowToastParams, 'type'>

export type ShowToastApi = {
  add: (params: BaseShowToastParams) => void
  update: (params: BaseShowToastParams) => void
  delete: (params: BaseShowToastParams) => void
  error: (params: BaseShowToastParams) => void
  clone: (params: BaseShowToastParams) => void
}

type ToastState = {
  message: string
  type: ToastType
  onClick?: () => void
  key: number
  options?: ToastOptions
  footer?: ReactNode
}

export const useToast = () => {
  const [toast, setToast] = useState<ToastState | null>(null)

  const baseShowToast = useCallback((params: ShowToastParams) => {
    setToast({
      message: params.message,
      type: params.type,
      onClick: params.onClick,
      key: Date.now(),
      options: params.options,
      footer: params.footer
    })
  }, [])

  const showToast: ShowToastApi = {
    add: (params) => baseShowToast({ ...params, type: 'add' }),
    update: (params) => baseShowToast({ ...params, type: 'update' }),
    delete: (params) => baseShowToast({ ...params, type: 'delete' }),
    error: (params) => baseShowToast({ ...params, type: 'error' }),
    clone: (params) => baseShowToast({ ...params, type: 'clone' })
  }

  const hideToast = useCallback(() => setToast(null), [])

  return { toast, showToast, hideToast }
}