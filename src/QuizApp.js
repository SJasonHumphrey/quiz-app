import React, { useState } from 'react'
import Start from './components/Start'
import Quiz from './components/Quiz'


function QuizApp() {

  const [start, setStart] = useState(false);

  return (
    <div className="quiz">
      { start ? <Quiz /> : <Start props={setStart} />} 
    </div>
  );
}

export default QuizApp;
