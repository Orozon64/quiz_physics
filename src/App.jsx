import { useState } from 'react'

import './App.css'

function App() {
  const [points, setPoints] = useState(0)
  const [current_question_id, setCurrentQuestionId] = useState(0)

  const questions_and_answers = [
    ["Ile jest praw dynamiki Newtona?", "1", "2", "3", "4"],
    ["Eksperyment którego z tych naukowców wprowadził koncept \"zimnej fuzji\"?", "Martina Fleischmanna", "Lise Meitner", "Andrei Ghez", "Davida Lee"],
    ["Które z poniższych należą do 4 fundamentalnych sił Wszechświata?", "Grawitacja", "Elektromagnetyzm", "Silne oddziaływanie", "Wszystkie z powyższych"],
    ["Filmowa biografia którego fizyka nosi tytuł \"Teoria wszystkiego\"?", "Alberta Ensteina", "Richarda Feynmana", "Stephena Hawkinga", "Nielsa Bohra"],
    ["Plazma to:", "Ciecz o bardzo wysokiej temperaturze", "Zjonizowany gaz", "Ciało stałe o krystalicznej strukturze", "Żadne z powyższych"],
  ]
  const correct_answers = [ //the indexes of the correct answer in each question-answer row
    3,1,4,3,2
  ]
  function AnswerButton(answer_id){
    return(
      <div>
        <label htmlFor={"answer" + answer_id}>{questions_and_answers[current_question_id][answer_id]}</label>
        <input id={"answer" + answer_id} type='radio' name='answer' value={"answer" + answer_id}></input>

      </div>
      
    )
    
  }
  function SubmitAnswer(formData){
    if(current_question_id == questions_and_answers.length - 1){ 
    }
    let selected_answer_num = formData.get("answer").substring(6);
    if (selected_answer_num == correct_answers[current_question_id]) {
      setPoints(points+1)
    }
    
    setCurrentQuestionId(current_question_id+1)
  }
  let buttons = []
  for (let index = 1; index < 5; index++) {
      buttons.push(AnswerButton(index));
      
  }
  if(current_question_id < questions_and_answers.length - 1){
    return (
    <>
      <h1>Quiz o fizyce</h1>
      <p>Pytanie numer: {current_question_id+1}/{questions_and_answers.length}</p>
      <form action={SubmitAnswer}>
        <p>{questions_and_answers[current_question_id][0]}</p>
        {buttons}
        <input type='submit' value={"Potwierdź"}></input>
      </form>
      
    </>
    )
  }
  else{ //if we've reached the last question
      return(
        <>
          <h1>GRATULACJE!</h1>
          <p>Twój wynik to: {points}/{questions_and_answers.length}</p>
        </>
      )

  }
  
}

export default App
