import React from "react";
import './style.css';
import ChatBot from "react-best-chatbot";
import QuestionBlock from "../QuestionBlock/QuestionBlock";

const Slider = (props) => {
  return (

<section class="question-answer">
    <div className="container">
      <div class="container" data-aos="fade-up">
        <h2 class="question-answer_label">Вопрос-Ответ</h2>
        <p class="question-answer_description">Мы ответим на самые популярные ваши вопросы</p>
        <div class="container question-list">
          <QuestionBlock/>
          
        </div>
        {/* <button type="button" class="question-button">Задать вопрос</button> */}
      </div>
      </div>  
    </section>
  );
};

export default Slider;