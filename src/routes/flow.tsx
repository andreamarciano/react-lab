import { createFileRoute } from "@tanstack/react-router";
import { Flow } from "@/labs/flow/TasksFlow";

export const Route = createFileRoute("/flow")({
  component: FlowPage,
});

function FlowPage() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Flow</h1>

      <div className="border rounded p-4 h-150">
        <Flow />
      </div>
    </div>
  );
}
