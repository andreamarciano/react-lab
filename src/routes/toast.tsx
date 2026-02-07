import { createFileRoute } from '@tanstack/react-router'
import { ToastPlayground } from '@/labs/toast/ToastPlayground'

export const Route = createFileRoute('/toast')({
  component: ToastPage
})

function ToastPage() {
  return <ToastPlayground />
}
