import Image from "next/legacy/image";
import Dashboard from "./Main/dashboard";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Dashboard />
    </main>
  );
}
