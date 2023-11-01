// import React, { useState } from "react";

// function QuestionForm(props) {
//   const [formData, setFormData] = useState({
//     prompt: "",
//     answer1: "",
//     answer2: "",
//     answer3: "",
//     answer4: "",
//     correctIndex: 0,
//   });

//   function handleChange(event) {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value,
//     });
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log(formData);
//   }

//   fetch("http://localhost:4000/questions", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     Body:
// {
//   "prompt": string,
//   "answers": array of strings,
//   "correctIndex": integer
// },
//   })
//     .then((r) => r.json())
//     // call the onAddItem prop with the newItem
//     .then((newQuestion) => onAddQuestion(newQuestion));


//   return (
//     <section>
//       <h1>New Question</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Prompt:
//           <input
//             type="text"
//             name="prompt"
//             value={formData.prompt}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Answer 1:
//           <input
//             type="text"
//             name="answer1"
//             value={formData.answer1}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Answer 2:
//           <input
//             type="text"
//             name="answer2"
//             value={formData.answer2}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Answer 3:
//           <input
//             type="text"
//             name="answer3"
//             value={formData.answer3}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Answer 4:
//           <input
//             type="text"
//             name="answer4"
//             value={formData.answer4}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Correct Answer:
//           <select
//             name="correctIndex"
//             value={formData.correctIndex}
//             onChange={handleChange}
//           >
//             <option value="0">{formData.answer1}</option>
//             <option value="1">{formData.answer2}</option>
//             <option value="2">{formData.answer3}</option>
//             <option value="3">{formData.answer4}</option>
//           </select>
//         </label>
//         <button type="submit" onClick={onAddQuestion}>Add Question</button>
//       </form>
//     </section>
//   );
// }

// export default QuestionForm;
import React, { useState } from "react";

function QuestionForm({ onAddQuestion }) {
  const [formData, setFormData] = useState({
    prompt: "",
    answers: ["", "", "", ""],
    correctIndex: 0,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "answers") {
      const answers = [...formData.answers];
      answers[parseInt(event.target.dataset.index)] = value;
      setFormData({
        ...formData,
        answers,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    const newQuestion = {
      prompt: formData.prompt,
      answers: formData.answers,
      correctIndex: parseInt(formData.correctIndex),
    };

    fetch("http://localhost:4000/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newQuestion),
    })
      .then((response) => response.json())
      .then((newQuestion) => onAddQuestion(newQuestion));

    // Reset the form after submission
    setFormData({
      prompt: "",
      answers: ["", "", "", ""],
      correctIndex: 0,
    });
  }

  return (
    <section>
      <h1>New Question</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Prompt:
          <input
            type="text"
            name="prompt"
            value={formData.prompt}
            onChange={handleChange}
          />
        </label>
        {[1, 2, 3, 4].map((index) => (
          <label key={index}>
            Answer {index}:
            <input
              type="text"
              name="answers"
              data-index={index - 1}
              value={formData.answers[index - 1]}
              onChange={handleChange}
            />
          </label>
        ))}
        <label>
          Correct Answer:
          <select
            name="correctIndex"
            value={formData.correctIndex}
            onChange={handleChange}
          >
            {[0, 1, 2, 3].map((index) => (
              <option key={index} value={index}>
                {formData.answers[index]}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Add Question</button>
      </form>
    </section>
  );
}

export default QuestionForm;
