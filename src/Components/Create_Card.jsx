import React  from "react";
import Card from "./Card";
import entries from "../entries";

function createCard(emojiTerm) {
    return (
      <Card
        key={emojiTerm.id}
        emoji={emojiTerm.emoji}
        name={emojiTerm.name}
        description={emojiTerm.meaning}
      />
    );
  }



function Create_Card(){
    return(<div><dl className="dictionary">{entries.map(createCard)}</dl></div>);
}


export default Create_Card;