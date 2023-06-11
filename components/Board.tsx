"use client";

import { DragDropContext, Droppable } from "react-beautiful-dnd";

import { useEffect } from "react";

function Board() {
  return (
    <DragDropContext>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto">
            Rendering columns
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Board;
