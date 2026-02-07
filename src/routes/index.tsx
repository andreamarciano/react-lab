import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">React Lab</h1>
    </div>
  )
}
