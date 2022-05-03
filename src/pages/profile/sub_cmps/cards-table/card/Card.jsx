import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCard } from "../../../../../store/features/cards/cards";
import EditCard from "./edit-card/EditCard";

import * as S from "./style";

function Card({ card }) {
  
  const dispatch = useDispatch();

  const [ toggleEdit, setToggleEdit ] = useState(false);

  const handleDelete = (e) => {
    if (window.confirm("are u sure u want to delete card?")) {
      dispatch(deleteCard({ userId: card.userId, cardId: card._id }));
    }
  };

  const handleEdit = (e) => {
    setToggleEdit(p => !p);

  };

  return (
    <>
      <S.Card bg={card?.images[0]}>
        {console.log(card)}
        <div className="details">{card?.description}</div>

        <div className="actions">

          <span className="delete" onClick={handleDelete}>
            X
          </span>

          <span className="edit" onClick={handleEdit}>
            E
          </span>

        </div>
      </S.Card>
      { !!toggleEdit && <EditCard card={card} /> }
    </>
  );
}

export default Card;
