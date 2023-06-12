"use client";
import { useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import { useBoardStore } from "@/store/BoardStore";

function Board() {
  const [board, getBoard] = useBoardStore((state) => [
    state.board,
    state.getBoard,
  ]);

  useEffect(() => {
    getBoard();
  }, [getBoard]);

  console.log(board);

  return (
    <h1>Rendering columns</h1>
    // <DragDropContext>
    //   <Droppable droppableId="board" direction="horizontal" type="column">
    //     {(provided) => (
    //       <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto">
    //         Rendering columns
    //       </div>
    //     )}
    //   </Droppable>
    // </DragDropContext>
  );
}

export default Board;
