"use client";

import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import Header from "@/components/header";
import ProgressBar from "@/components/progressBar";
import Question1 from "@/container/question1";
import Question2 from "@/container/question2";
import Question3 from "@/container/question3";
import Question4 from "@/container/question4";
import Question5 from "@/container/question5";
import Question6 from "@/container/question6";
import Question7 from "@/container/question7";
import Question8 from "@/container/question8";
import Question9 from "@/container/question9";
import Question10 from "@/container/question10";
import Question11 from "@/container/question11";
import Question12 from "@/container/question12";
import Question13 from "@/container/question13";
import Question14 from "@/container/question14";
import Question15 from "@/container/question15";
import Question16 from "@/container/question16";
import Question17 from "@/container/question17";
import Question18 from "@/container/question18";
import Question19 from "@/container/question19";
import Question20 from "@/container/question20";
import "./styles.css";

interface questionsProps {
  question1: string | null;
  question2: string | null;
  question3: string | null;
  question4: string | null;
  question5: string | null;
  question6: string | null;
  question7: string | null;
  question8: string | null;
  question9: string | null;
  question10: string | null;
  question11: string | null;
  question12: string | null;
  question13: string | null;
  question14: string | null;
  question15: string | null;
  question16: string | null;
  question17: string | null;
  question18: string | null;
  question19: string | null;
  question20: string | null;
}

const Quizz = () => {
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(1);
  const [questions, setQuestions] = useState<questionsProps>({
    question1: null,
    question2: null,
    question3: null,
    question4: null,
    question5: null,
    question6: null,
    question7: null,
    question8: null,
    question9: null,
    question10: null,
    question11: null,
    question12: null,
    question13: null,
    question14: null,
    question15: null,
    question16: null,
    question17: null,
    question18: null,
    question19: null,
    question20: null,
  });

  console.log("questions => ", questions);

  const handleStep = () => {
    setStep(step + 1);
    setProgress(progress + 5);
  };

  const handleBackStep = () => {
    if (step > 1) {
      setStep(step - 1);
      setProgress(progress - 5);
    }
  };

  const handleAnswer = (answer?: string | null) => {
    console.log("");
    console.log("");
    console.log("step => ", step);
    console.log("answer => ", answer);
    if (answer) {
      setQuestions((prevState) => ({ ...prevState, [step]: answer }));
    }
    handleStep();
  };
  const nodeRef = useRef(null);
  return (
    <div className="h-svh w-full flex flex-col items-center justify-start">
      <Header step={step} />
      {step > 1 && (
        <div className="w-[90%]">
          <ProgressBar progress={progress} onClick={() => handleBackStep()} />
        </div>
      )}
      <CSSTransition
        ref={nodeRef}
        in={step === 1}
        timeout={400}
        classNames="fade"
        unmountOnExit
      >
        <Question1 onClick={handleAnswer} />
      </CSSTransition>
      <CSSTransition
        ref={nodeRef}
        in={step === 2}
        timeout={400}
        classNames="fade"
        unmountOnExit
      >
        <Question2 onClick={handleAnswer} />
      </CSSTransition>
      <CSSTransition
        ref={nodeRef}
        in={step === 3}
        timeout={400}
        classNames="fade"
        unmountOnExit
      >
        <Question3 onClick={handleAnswer} />
      </CSSTransition>
      <CSSTransition
        ref={nodeRef}
        in={step === 4}
        timeout={400}
        classNames="fade"
        unmountOnExit
      >
        <Question4 onClick={handleAnswer} />
      </CSSTransition>
      <CSSTransition
        ref={nodeRef}
        in={step === 5}
        timeout={400}
        classNames="fade"
        unmountOnExit
      >
        <Question5 onClick={handleAnswer} />
      </CSSTransition>
      <CSSTransition
        ref={nodeRef}
        in={step === 6}
        timeout={400}
        classNames="fade"
        unmountOnExit
      >
        <Question6 onClick={handleAnswer} />
      </CSSTransition>
      <CSSTransition
        ref={nodeRef}
        in={step === 7}
        timeout={400}
        classNames="fade"
        unmountOnExit
      >
        <Question7 onClick={handleAnswer} />
      </CSSTransition>
      <CSSTransition
        ref={nodeRef}
        in={step === 8}
        timeout={400}
        classNames="fade"
        unmountOnExit
      >
        <Question8 onClick={handleAnswer} />
      </CSSTransition>
      <CSSTransition
        ref={nodeRef}
        in={step === 9}
        timeout={400}
        classNames="fade"
        unmountOnExit
      >
        <Question9 onClick={handleAnswer} />
      </CSSTransition>
      <CSSTransition
        ref={nodeRef}
        in={step === 10}
        timeout={400}
        classNames="fade"
        unmountOnExit
      >
        <Question10 onClick={handleAnswer} />
      </CSSTransition>
      <CSSTransition
        ref={nodeRef}
        in={step === 11}
        timeout={400}
        classNames="fade"
        unmountOnExit
      >
        <Question11 onClick={handleAnswer} />
      </CSSTransition>
      <CSSTransition
        ref={nodeRef}
        in={step === 12}
        timeout={400}
        classNames="fade"
        unmountOnExit
      >
        <Question12 onClick={handleAnswer} />
      </CSSTransition>
      <CSSTransition
        ref={nodeRef}
        in={step === 13}
        timeout={400}
        classNames="fade"
        unmountOnExit
      >
        <Question13 onClick={handleAnswer} />
      </CSSTransition>
      <CSSTransition
        ref={nodeRef}
        in={step === 14}
        timeout={400}
        classNames="fade"
        unmountOnExit
      >
        <Question14 onClick={handleAnswer} />
      </CSSTransition>
      <CSSTransition
        ref={nodeRef}
        in={step === 15}
        timeout={400}
        classNames="fade"
        unmountOnExit
      >
        <Question15 onClick={handleAnswer} />
      </CSSTransition>
      <CSSTransition
        ref={nodeRef}
        in={step === 16}
        timeout={400}
        classNames="fade"
        unmountOnExit
      >
        <Question16 onClick={handleAnswer} />
      </CSSTransition>
      <CSSTransition
        ref={nodeRef}
        in={step === 17}
        timeout={400}
        classNames="fade"
        unmountOnExit
      >
        <Question17 onClick={handleAnswer} />
      </CSSTransition>
      <CSSTransition
        ref={nodeRef}
        in={step === 18}
        timeout={400}
        classNames="fade"
        unmountOnExit
      >
        <Question18 onClick={handleAnswer} />
      </CSSTransition>
      <CSSTransition
        ref={nodeRef}
        in={step === 19}
        timeout={400}
        classNames="fade"
        unmountOnExit
      >
        <Question19 onClick={handleAnswer} />
      </CSSTransition>
      <CSSTransition
        ref={nodeRef}
        in={step === 20}
        timeout={400}
        classNames="fade"
        unmountOnExit
      >
        <Question20 onClick={handleAnswer} />
      </CSSTransition>
    </div>
  );
};

export default Quizz;
