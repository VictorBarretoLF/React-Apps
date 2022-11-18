import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

import { Container, Label } from "./styles";

const Card = ({ data, index }) => {
  const ref = useRef();

  const [{ isDragging }, dragRef] = useDrag({
    type: "CARD",
    item: { id: data.id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: "CARD",
    hover: (item, monitor) => hovering(item, monitor),
  });

  const hovering = (item, monitor) => {
    const draggedIndex = item.index;
    const targetIndex = index;

    if (draggedIndex === targetIndex) return;

    const targetSize = ref.current.getBoundingClientRect();
    const targetCenter = (targetSize.bottom - targetSize.top) / 2;

    const draggedOffset = monitor.getClientOffset();
    const draggedTop = draggedOffset.y - targetSize.top;

    console.log(draggedTop, targetCenter);
  };

  dragRef(dropRef(ref));

  return (
    <Container ref={ref} isDragging={isDragging}>
      <header>
        {data.labels.map((label) => (
          <Label key={label} color={label} />
        ))}
      </header>
      <p>{data.content}</p>

      {data.user && <img src={data.user} alt="avatar" />}
    </Container>
  );
};

export default Card;
