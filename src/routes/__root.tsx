import { Outlet, createRootRoute, Link } from "@tanstack/react-router";
// import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
// import { TanStackDevtools } from "@tanstack/react-devtools";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <div className="flex h-screen">
      {/* SIDEBAR */}
      <aside className="w-64 border-r p-4">
        <h2 className="font-semibold mb-4">React Lab</h2>

        <nav className="flex flex-col gap-2">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>

          <Link to="/gantt" className="[&.active]:font-bold">
            Gantt
          </Link>

          <Link to="/flow" className="[&.active]:font-bold">
            Flow
          </Link>

          <Link to="/toast" className="[&.active]:font-bold">
            Toast
          </Link>
        </nav>
      </aside>

      {/* CONTENT */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>

      {/* DEVTOOLS */}
      {/* <TanStackDevtools
        config={{ position: "bottom-right" }}
        plugins={[
          {
            name: "TanStack Router",
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      /> */}
    </div>
  );
}
