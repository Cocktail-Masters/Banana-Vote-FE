"use client";

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
// import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import VoteItemCard from "@components/vote/create/VoteItemCard";
import { getDefaultVoteItem, voteItemTypes } from "../create/CreateVote";
import { Button } from "@chakra-ui/react";
import Image from "next/image";

import plusImage from "@assets/images/plus.svg";
import VoteItemLayout from "@components/vote/create/VoteItemLayout";

const reorder = (
  list: voteItemTypes,
  startIndex: number,
  endIndex: number
): voteItemTypes => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

type VoteDndPropsType = {
  voteItems: voteItemTypes;
  setVoteItems: React.Dispatch<React.SetStateAction<voteItemTypes>>;
};

const Item = ({ voteItems, setVoteItems }: VoteDndPropsType) => {
  // const [enabled, setEnabled] = useState(false);
  const [state, setState] = useState(false);
  const onDragEnd = (result: any) => {
    // dropped outside the list(리스트 밖으로 드랍한 경우)
    if (!result.destination) {
      return;
    }
    setVoteItems((prevItem) => {
      return reorder(prevItem, result.source.index, result.destination.index);
    });
  };

  const onChangeHandler = (value: string, index: number) => {
    setVoteItems((prevItems) => {
      const newItems = [...prevItems];
      newItems[index].title = value;
      return newItems;
    });
  };

  const getItemStyle = (draggableStyle: any, isDragging: any) => ({
    userSelect: "none",
    margin: "5px",
    ...draggableStyle,
  });

  useEffect(() => {
    setState(true);
  }, []);
  // useEffect(() => {
  //   const animation = requestAnimationFrame(() => setEnabled(true));

  //   return () => {
  //     cancelAnimationFrame(animation);
  //     setEnabled(false);
  //   };
  // }, []);

  // if (!enabled) {
  //   return null;
  // }

  return (
    <>
      {state && (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(droppableProvided, snapshot) => (
              <div
                ref={droppableProvided.innerRef}
                {...droppableProvided.droppableProps}
              >
                <div className="droppable">
                  {voteItems.map((voteItem, index) => (
                    <Draggable
                      key={voteItem.id}
                      draggableId={voteItem.id}
                      index={index}
                    >
                      {(draggableProvided, snapshot) => {
                        return (
                          <div className={`vote-dnd-${index}`}>
                            <div
                              ref={draggableProvided.innerRef}
                              {...draggableProvided.draggableProps}
                              {...draggableProvided.dragHandleProps}
                            >
                              <VoteItemCard
                                voteItem={voteItem}
                                setVoteItems={setVoteItems}
                                onChangeHandler={onChangeHandler}
                                index={index}
                              />
                            </div>
                          </div>
                        );
                      }}
                    </Draggable>
                  ))}
                  {droppableProvided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}

      <VoteItemLayout>
        <Button
          w={"100%"}
          h={"100%"}
          background={"white"}
          _hover={{ bg: "#ffffff" }}
          onClick={() => {
            setVoteItems((v) => [...v, getDefaultVoteItem()]);
          }}
        >
          <Image src={plusImage} alt={"plus button"} />
        </Button>
      </VoteItemLayout>
    </>
  );
};

export default Item;
