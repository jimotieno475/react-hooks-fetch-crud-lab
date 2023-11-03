import React from "react";


function QuestionItem({ question,handleStateDeleted,handleAnswerState}) {
  const { id, prompt, answers, correctIndex } = question;
  function handleDeleteClick(){
    fetch(`http://localhost:4000/questions/${id}`,{
      method:'DELETE'
    })
    .then(response=>response.json())
    .then(()=>handleStateDeleted(question) )
  } 
  function handleAnswerChange(event){
    const newCorrectIndex=parseInt(event.target.value,10)
    fetch(`http://localhost:4000/questions/${id}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({correctIndex:newCorrectIndex})
    })
    .then(response=>response.json())
    .then(response=>handleAnswerState(response))


  }

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleAnswerChange}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
