import Image from "next/image";

import Header from "@/components/Header";
import Board from "@/components/Board";

export default function Home() {
  return (
    <main>
      <Header />
      <Board />
      <h3>Tasker</h3>
    </main>
  );
}
