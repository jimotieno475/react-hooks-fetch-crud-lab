import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions,handleStateDeleted,handleAnswerState}) {
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{
          questions.map(question=>
            <QuestionItem key={question.id} question={question}
             handleStateDeleted={handleStateDeleted}
              handleAnswerState={handleAnswerState}
             />
            )
        
         
      }</ul>
    </section>
  );
}

export default QuestionList;
