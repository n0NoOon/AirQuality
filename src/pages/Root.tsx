import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="container mx-auto px-20">
      <Outlet />
    </div>
  );
}
