// import React from "react";

// function QuestionItem({ question }) {
//   const { id, prompt, answers, correctIndex } = question;

//   const options = answers.map((answer, index) => (
//     <option key={index} value={index}>
//       {answer}
//     </option>
//   ));

//   function handleDeleteClick() {
//     fetch(`http://localhost:4000/questions/${question.id}`, {
//       method: "DELETE",
//     })
//       .then((r) => r.json())
//       .then(() => onDeleteQuestion(question));
//   }

//   fetch(`http://localhost:4000/questions/${item.id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     Body:
//     {
//       "correctIndex": integer
//     },
//   })
//     .then((r) => r.json())
//     .then((updatedQuestion) => onUpdateQuestion(updatedQuestion));
// }

//   return (
//     <li>
//       <h4>Question {id}</h4>
//       <h5>Prompt: {prompt}</h5>
//       <label>
//         Correct Answer:
//         <select defaultValue={correctIndex}>{options}</select>
//       </label>
//       <button>Delete Question</button>
//     </li>
//   );
// }

// export default QuestionItem;
import React from "react";

function QuestionItem({ question, onDeleteQuestion, onUpdateQuestion }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDeleteClick() {
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteQuestion(question));
  }

  function handleUpdateCorrectIndex(event) {
    const newCorrectIndex = parseInt(event.target.value);

    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ correctIndex: newCorrectIndex }),
    })
      .then((r) => r.json())
      .then((updatedQuestion) => onUpdateQuestion(updatedQuestion));
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select value={correctIndex} onChange={handleUpdateCorrectIndex}>
          {options}
        </select>
      </label>
      <button className="remove" onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
