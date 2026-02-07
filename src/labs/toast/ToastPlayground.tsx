import Toast from './Toast'
import { useToast } from './useToast'

export function ToastPlayground() {
  const { toast, showToast, hideToast } = useToast()

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-xl font-bold">Toast Playground</h1>

      <div className="flex flex-wrap gap-3">
        {/* ADD - simple */}
        <button
          className="px-3 py-2 rounded bg-green-600 text-white"
          onClick={() =>
            showToast.add({
              message: 'Entity created'
            })
          }
        >
          Add (simple)
        </button>

        {/* ADD - clickable + extra */}
        <button
          className="px-3 py-2 rounded bg-green-700 text-white"
          onClick={() =>
            showToast.add({
              message: 'Entity created',
              onClick: () => alert('Primary action'),
              options: {
                extraSection: 'Related entity created',
                secondaryAction: {
                  label: 'View',
                  onClick: () => alert('Secondary action'),
                  closeAfter: true
                }
              }
            })
          }
        >
          Add (clickable + extra)
        </button>

        {/* UPDATE - simple */}
        <button
          className="px-3 py-2 rounded bg-blue-600 text-white"
          onClick={() =>
            showToast.update({
              message: 'Entity updated'
            })
          }
        >
          Update
        </button>

        {/* UPDATE - with footer */}
        <button
          className="px-3 py-2 rounded bg-blue-600 text-white"
          onClick={() =>
            showToast.update({
              message: 'Entity updated',
              footer: (
                <div className="border-2 p-2">
                  <p>Additional info in footer</p>
                  <button
                    onClick={() => alert('Footer action')}
                  >
                    Footer Action
                  </button>
                </div>
              )
            })
          }
        >
          Update (footer)
        </button>

        {/* DELETE - simple */}
        <button
          className="px-3 py-2 rounded bg-red-600 text-white"
          onClick={() =>
            showToast.delete({
              message: 'Entity deleted'
            })
          }
        >
          Delete (simple)
        </button>

        {/* DELETE - with extra */}
        <button
          className="px-3 py-2 rounded bg-red-700 text-white"
          onClick={() =>
            showToast.delete({
              message: 'Entity deleted',
              options: {
                extraSection: 'Related entity deleted'
              }
            })
          }
        >
          Delete (with extra)
        </button>
      </div>

      {/* TOAST */}
      {toast && (
        <Toast
          key={toast.key}
          message={toast.message}
          type={toast.type}
          onClick={toast.onClick}
          onClose={hideToast}
          options={toast.options}
          footer={toast.footer}
        />
      )}
    </div>
  )
}
