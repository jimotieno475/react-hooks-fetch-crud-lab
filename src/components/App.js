// import React, { useState,useEffect } from "react";
// import AdminNavBar from "./AdminNavBar";
// import QuestionForm from "./QuestionForm";
// import QuestionList from "./QuestionList";

// function App() {

 
//   const [page, setPage] = useState("List");

//   return (
//     <main>
//       <AdminNavBar onChangePage={setPage} />
//       {page === "Form" ? <QuestionForm /> : <QuestionList />}
//     </main>
//   );
// }

// export default App;
import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";
import QuestionItem from "./QuestionItem";
function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch data from your API or JSON file when the app loads.
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  function handleAddQuestion(newQuestion) {
    // Add the new question to the list of questions.
    setQuestions([...questions, newQuestion]);
    // Switch back to the list view.
    setPage("List");
  }

  function handleDeleteQuestion(deletedQuestion) {
    // Filter out the deleted question from the questions state.
    const updatedQuestions = questions.filter((question) => question.id !== deletedQuestion.id);
    setQuestions(updatedQuestions)};
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm onAddQuestion={handleAddQuestion} />
      ) : (
        <QuestionList questions={questions} setQuestions={setQuestions} />
      )}

    </main>
  );
}

export default App;
