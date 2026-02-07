import { createFileRoute } from "@tanstack/react-router";
import { Gantt } from "@/labs/gantt/TasksGantt";

export const Route = createFileRoute("/gantt")({
  component: GanttPage,
});

function GanttPage() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Gantt</h1>

      <div className="border rounded p-4">
        <Gantt />
      </div>
    </div>
  );
}
