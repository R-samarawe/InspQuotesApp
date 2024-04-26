import React from 'react';


const data = [
  { id: 1, content: 'Let us see what love can do. ', category: 'LOVE' },
  { id: 2, content: 'Knowledge speaks, but wisdom listens. ' , category: 'LISTENING'},
  { id: 3, content: 'Not all those who wander are lost. ' , category: 'EXPLORING'},
  { id: 4, content: 'One kind word can warm three winter months. ' , category: 'KINDNESS'},
  { id: 5, content: 'If you get, give. If you learn, teach. ' , category: 'HELPING OTHERS'},
  { id: 6, content: 'No one has ever become poor by giving. ' , category: 'GIVING'},
  { id: 7, content: 'The heart that gives, gathers. ' , category: 'GIVING'},
  { id: 8, content: 'Charity is the root of all good works. ' , category: 'CHARITY'},
  { id: 9, content: 'Practice is the best of all instructors. ' , category: 'PRACTICE'},
  { id: 10, content: 'Nature brings solace in all troubles. ' , category: 'GET OUTSIDE'},
  { id: 11, content: 'Without forgiveness, there\'s no future. ' , category: 'FORGIVENESS'},
  { id: 12, content: 'Believe in yourself and go for it. ' , category: 'BELIEVE IN YOURSELF'},
  { id: 13, content: 'Either I will find a way, or I will make one.' , category: 'BELIEVE IN YOURSELF'},
  { id: 14, content: 'Peace begins with a smile. ' , category: 'PEACE'},
  { id: 15, content: 'Peace, like charity, begins at home. ' , category: 'PEACE'},
  { id: 16, content: 'Every great dream begins with a dreamer. ' , category: 'LIVE YOUR DREAMS'},
  { id: 17, content: 'Education breeds confidence. ' , category: 'CONFIDENCE'},
  { id: 18, content: 'We rise by lifting others. ' , category: 'KINDNESS'},
  { id: 19, content: 'Thereâ€™s a way to do it better. Find it. ' , category: 'INNOVATION'},
  { id: 20, content: 'United we stand, divided we fall. ' , category: 'INNOVATION'},
  { id: 21, content: 'Mistakes are the portals of discovery. ' , category: 'UNITY'},
];

// Card component 
const Card = ({ id, content, category }) => {
  return (
    <div className="card" style={{border:"1px solid black", padding:"5px",margin: "5px", width: "90%"}}>
      <h4>{content}</h4>
      <h5>- {category} -</h5>
    </div>
  );
};

// List component
const QuotesList = () => {
  return (
    <div className="card-list">
      {data.map((card, index) => (
        <Card key={index} id={card.id} content={card.content} category={card.category}/>
      ))}
    </div>
  );
};


export default QuotesList;
