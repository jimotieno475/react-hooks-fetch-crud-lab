// import React,{useState,useEffect} from "react";
// import QuestionItem from "./QuestionItem";

// function QuestionList() {
//   const[questions,setQuestion]=useState([])

//   useEffect(() => {
//     fetch("http://localhost:4000/questions")
//       .then((r) => r.json())
//       .then((questions) => setQuestion(questions));
//   }, []);

//   function handleDeleteQuestion(deletedQuestion) {
//     const updatedQuestions=questions.filter((question)=>question.id !==deletedQuestion.id)
//     setQuestion(updatedQuestions);
//   }

//   return (
//     <section>
//       <h1>Quiz Questions</h1>
//       <ul>{/* display QuestionItem components here after fetching */
//       {questions.map((question) => (
//         <QuestionItem
//           key={question.id} // Make sure to provide a unique key for each item in a list.
//           question={question}
//           onDelete={handleDeleteQuestion}
//         />
//       ))}
//       }</ul>
      
//     </section>
//   );
// }

// export default QuestionList;
import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({onDeleteQuestion}) {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch data from your API or JSON file.
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((questions) => setQuestions(questions))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []); // The empty dependency array means this effect runs once on component mount.

  function handleDeleteQuestion(deletedQuestion) {
    // Filter out the deleted question from the questions state.
    const updatedQuestions = questions.filter((question) => question.id !== deletedQuestion.id);
    setQuestions(updatedQuestions);
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem
            key={question.id} // Make sure to provide a unique key for each item in a list.
            question={question}
            onDelete={handleDeleteQuestion}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
