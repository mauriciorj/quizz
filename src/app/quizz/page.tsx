"use client";

import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import Header from "@/components/header";
import ProgressBar from "@/components/progressBar";
import Step1 from "@/container/step1";
import Step2 from "@/container/step2";
import "./styles.css";

interface setAnswer {
  stepAnswer1: string | null;
  stepAnswer2: string | null;
  stepAnswer3: string | null;
}

const Quizz = () => {
  const [step, setStep] = useState(1);
  const [stepAnswer, setStepAnswer] = useState<setAnswer>({
    stepAnswer1: null,
    stepAnswer2: null,
    stepAnswer3: null,
  });

  const handleStep = () => {
    setStep(step + 1);
  };

  const handleBackStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleAnswer = (answer?: string | null) => {
    if (answer) {
      setStepAnswer((prevState) => ({ ...prevState, [step]: answer }));
    }
    handleStep();
  };
  const nodeRef = useRef(null);
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Header />
      {step > 1 && (
        <div className="w-[50%]">
          <ProgressBar progress={25} onClick={() => handleBackStep()} />
        </div>
      )}
      <CSSTransition
        ref={nodeRef}
        in={step === 1}
        timeout={400}
        classNames="fade"
        unmountOnExit
      >
        <Step1 onClick={handleAnswer} />
      </CSSTransition>
      <CSSTransition
        ref={nodeRef}
        in={step === 2}
        timeout={400}
        classNames="fade"
        unmountOnExit
      >
        <Step2 onClick={handleAnswer} />
      </CSSTransition>
    </div>
  );
};

export default Quizz;
