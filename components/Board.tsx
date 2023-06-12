"use client";

import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";

// import Column from "./Column";
import { useBoardStore } from "@/store/BoardStore";
import { useEffect } from "react";

function Board() {
  const handleOnDragEnd = (result: DropResult) => {
    const { destination, source, type } = result;

    return (
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="board" direction="horizontal" type="column">
          {(provided) => (
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              Column mapping
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  };
}

export default Board;
