/*

import React, { useState, useEffect } from "react";
import axios from "axios";



const MyList = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/quotes")
      .then((response) => {
        const fetchedQuotes = response.data;
        setQuotes(fetchedQuotes);
      })
      .catch((error) => {
        console.error("Error fetching quotes:", error);
      });
  }, []); // Empty dependency array to execute the effect only once on component mount

  return (
    <ul>
      {Array.isArray(quotes) && quotes.length > 0 ? (
        quotes.map((quote) => <li key={quote.id}>{quote.title}</li>)
      ) : (
        <li>No quotes available</li>
      )}
    </ul>
  );
};

export default MyList;

*/
