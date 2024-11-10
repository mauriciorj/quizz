"use client";

import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import Header from "@/components/header";
import ProgressBar from "@/components/progressBar";
import Age from "@/container/age";
import BadHabits from "@/container/badHabits";
import BodyPartsToImprove from "@/container/bodyPartsToImprove";
import BodyType from "@/container/bodyType";
import BodyTypeYouWant from "@/container/bodyTypeYouWant";
import Gender from "@/container/gender";
import HowMuchDoYouSleep from "@/container/howMuchDoYouSleep";
import HowMuchWaterDoYouDrink from "@/container/howMuchWaterDoYouDrink";
import JoinUs from "@/container/joinUs";
import LastStep from "@/container/lastStep";
import LastTimeYouWereHappy from "@/container/lastTimeYouWereHappy";
import ThankYouForTrustOnUs from "@/container/thankYouForTrustOnUs";
import Welcome from "@/container/welcome";
import WhereDoYouUsuallyEat from "@/container/whereDoYouUsuallyEat";
import WorkOut from "@/container/workOut";
import YouAreOnTheRightPath from "@/container/youAreOnTheRightPath";
import YourAge from "@/container/yourAge";
import YourGoals from "@/container/yourGoals";
import YourHeight from "@/container/yourHeight";
import YourTargetWeight from "@/container/yourTargetWeight";
import YourCurrentWeight from "@/container/yourCurrentWeight";
import "./styles.css";
import BreakfastTime from "@/container/breakfastTime";
import LunchTime from "@/container/lunchTime";
import DinnerTime from "@/container/dinnerTime";
import WorkDailyTime from "@/container/workDailyTime";
import WorkDailyRoutine from "@/container/workDailyRoutine";
import BreathAfterWalking from "@/container/breathAfterWalking";
import TimeWalkingPerDay from "@/container/timeWalkingPerDay";
import PageLoader from "@/components/pageLoader";
import FastingWholeDay from "@/container/fastingWholeDay";
import CalculateWeightLossPace from "@/container/CalculateWeightLossPace";
import ThankYouForTrust from "@/container/thankYouForTrust";
import WhatYouKnowAboutIntermittentFasting from "@/container/WhatYouKnowAboutIntermittentFasting";
import AboutIntermittentFasting from "@/container/AboutIntermittentFasting";
import AreYouExcited from "@/container/AreYouExcited";
import YourSummary from "@/container/YourSummary";
import ProgressBarWithCursor from "@/components/progressBarWithCursor";

interface questionsProps {
  [key: number]: string;
}

const Quizz = () => {
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0);
  const [questions, setQuestions] = useState<questionsProps | {}>({});
  const [isWoman, setIsWoman] = useState<boolean>(true);

  const nodeRef = useRef(null);

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

  const handleAnswer = (answer?: string | string[] | number | null) => {
    console.log("");
    console.log("");
    console.log("step => ", step);
    console.log("answer => ", answer);
    if (answer) {
      setQuestions((prevState: questionsProps) => ({
        ...prevState,
        [`question-${step}`]: answer,
      }));
      if (step === 2 && answer !== "mulher") {
        setIsWoman(false);
      }
    }
    handleStep();
  };

  //TODO - hide ProgressBar when step = 3, 24 (thankyou page)

  return (
    <div className="h-full w-full p-0 m-0 flex flex-col items-center justify-start">
      {step === 1 ? <Header step={step} /> : null}
      {step > 1 && (
        <div className="w-full h-[10%]">
          <ProgressBar onClick={() => handleBackStep()} progress={progress} />
        </div>
      )}
      {step === 0 && (
        <div className="w-full h-full">
          <PageLoader setNextStep={handleStep} />
        </div>
      )}
      <div className="w-full h-[89%]">
        <CSSTransition
          ref={nodeRef}
          in={step === 1}
          timeout={400}
          classNames="fade"
          unmountOnExit
        >
          <Age onClick={handleAnswer} />
        </CSSTransition>
        <CSSTransition
          ref={nodeRef}
          in={step === 2}
          timeout={400}
          classNames="fade"
          unmountOnExit
        >
          <Gender onClick={handleAnswer} />
        </CSSTransition>
        <CSSTransition
          ref={nodeRef}
          in={step === 3}
          timeout={400}
          classNames="fade"
          unmountOnExit
        >
          <Welcome onClick={handleAnswer} />
        </CSSTransition>
        <CSSTransition
          ref={nodeRef}
          in={step === 4}
          timeout={400}
          classNames="fade"
          unmountOnExit
        >
          <BodyType onClick={handleAnswer} />
        </CSSTransition>
        <CSSTransition
          ref={nodeRef}
          in={step === 5}
          timeout={400}
          classNames="fade"
          unmountOnExit
        >
          <BodyTypeYouWant onClick={handleAnswer} />
        </CSSTransition>
        <CSSTransition
          ref={nodeRef}
          in={step === 6}
          timeout={400}
          classNames="fade"
          unmountOnExit
        >
          <YourGoals onClick={handleAnswer} />
        </CSSTransition>
        <CSSTransition
          ref={nodeRef}
          in={step === 7}
          timeout={400}
          classNames="fade"
          unmountOnExit
        >
          <JoinUs onClick={handleAnswer} />
        </CSSTransition>
        <CSSTransition
          ref={nodeRef}
          in={step === 8}
          timeout={400}
          classNames="fade"
          unmountOnExit
        >
          <BodyPartsToImprove onClick={handleAnswer} />
        </CSSTransition>
        <CSSTransition
          ref={nodeRef}
          in={step === 9}
          timeout={400}
          classNames="fade"
          unmountOnExit
        >
          <LastTimeYouWereHappy onClick={handleAnswer} />
        </CSSTransition>
        <CSSTransition
          ref={nodeRef}
          in={step === 10}
          timeout={400}
          classNames="fade"
          unmountOnExit
        >
          <YouAreOnTheRightPath onClick={handleAnswer} />
        </CSSTransition>
        <CSSTransition
          ref={nodeRef}
          in={step === 11}
          timeout={400}
          classNames="fade"
          unmountOnExit
        >
          <BreakfastTime onClick={handleAnswer} />
        </CSSTransition>
        <CSSTransition
          ref={nodeRef}
          in={step === 12}
          timeout={400}
          classNames="fade"
          unmountOnExit
        >
          <LunchTime onClick={handleAnswer} />
        </CSSTransition>
        <CSSTransition
          ref={nodeRef}
          in={step === 13}
          timeout={400}
          classNames="fade"
          unmountOnExit
        >
          <DinnerTime onClick={handleAnswer} />
        </CSSTransition>
        <CSSTransition
          ref={nodeRef}
          in={step === 14}
          timeout={400}
          classNames="fade"
          unmountOnExit
        >
          <WhereDoYouUsuallyEat onClick={handleAnswer} />
        </CSSTransition>
        <CSSTransition
          ref={nodeRef}
          in={step === 15}
          timeout={400}
          classNames="fade"
          unmountOnExit
        >
          <FastingWholeDay onClick={handleAnswer} />
        </CSSTransition>
        <CSSTransition
          ref={nodeRef}
          in={step === 16}
          timeout={400}
          classNames="fade"
          unmountOnExit
        >
          <WorkOut onClick={handleAnswer} />
        </CSSTransition>
        <CSSTransition
          ref={nodeRef}
          in={step === 17}
          timeout={400}
          classNames="fade"
          unmountOnExit
        >
          <WorkDailyTime onClick={handleAnswer} />
        </CSSTransition>
        <CSSTransition
          ref={nodeRef}
          in={step === 18}
          timeout={400}
          classNames="fade"
          unmountOnExit
        >
          <WorkDailyRoutine onClick={handleAnswer} />
        </CSSTransition>
        <CSSTransition
          ref={nodeRef}
          in={step === 19}
          timeout={400}
          classNames="fade"
          unmountOnExit
        >
          <BreathAfterWalking onClick={handleAnswer} />
        </CSSTransition>
        <CSSTransition
          ref={nodeRef}
          in={step === 20}
          timeout={400}
          classNames="fade"
          unmountOnExit
        >
          <TimeWalkingPerDay onClick={handleAnswer} />
        </CSSTransition>
        <CSSTransition
          ref={nodeRef}
          in={step === 21}
          timeout={400}
          classNames="fade"
          unmountOnExit
        >
          <HowMuchWaterDoYouDrink onClick={handleAnswer} />
        </CSSTransition>
        <CSSTransition
          ref={nodeRef}
          in={step === 22}
          timeout={400}
          classNames="fade"
          unmountOnExit
        >
          <HowMuchDoYouSleep onClick={handleAnswer} />
        </CSSTransition>
        <CSSTransition
          ref={nodeRef}
          in={step === 23}
          timeout={400}
          classNames="fade"
          unmountOnExit
        >
          <CalculateWeightLossPace setProgressBarDone={handleStep} />
        </CSSTransition>
        <CSSTransition
          ref={nodeRef}
          in={step === 24}
          timeout={400}
          classNames="fade"
          unmountOnExit
        >
          <ThankYouForTrust onClick={handleAnswer} />
        </CSSTransition>
        <CSSTransition
          ref={nodeRef}
          in={step === 25}
          timeout={400}
          classNames="fade"
          unmountOnExit
        >
          <BadHabits onClick={handleAnswer} />
        </CSSTransition>
        <CSSTransition
          ref={nodeRef}
          in={step === 26}
          timeout={400}
          classNames="fade"
          unmountOnExit
        >
          <WhatYouKnowAboutIntermittentFasting onClick={handleAnswer} />
        </CSSTransition>
        <CSSTransition
          ref={nodeRef}
          in={step === 27}
          timeout={400}
          classNames="fade"
          unmountOnExit
        >
          <AboutIntermittentFasting onClick={handleAnswer} />
        </CSSTransition>
        <CSSTransition
          ref={nodeRef}
          in={step === 28}
          timeout={400}
          classNames="fade"
          unmountOnExit
        >
          <AreYouExcited onClick={handleAnswer} />
        </CSSTransition>
        <CSSTransition
          ref={nodeRef}
          in={step === 29}
          timeout={400}
          classNames="fade"
          unmountOnExit
        >
          <YourHeight onClick={handleAnswer} />
        </CSSTransition>
        <CSSTransition
          ref={nodeRef}
          in={step === 30}
          timeout={400}
          classNames="fade"
          unmountOnExit
        >
          <YourCurrentWeight
            height={questions?.["question-29"]}
            onClick={handleAnswer}
          />
        </CSSTransition>
        <CSSTransition
          ref={nodeRef}
          in={step === 31}
          timeout={400}
          classNames="fade"
          unmountOnExit
        >
          <YourTargetWeight
            weight={questions?.["question-30"]}
            onClick={handleAnswer}
          />
        </CSSTransition>
        <CSSTransition
          ref={nodeRef}
          in={step === 32}
          timeout={400}
          classNames="fade"
          unmountOnExit
        >
          <YourAge onClick={handleAnswer} />
        </CSSTransition>
        <CSSTransition
          ref={nodeRef}
          in={step === 33}
          timeout={400}
          classNames="fade"
          unmountOnExit
        >
          <YourSummary onClick={handleAnswer} />
        </CSSTransition>
        <CSSTransition
          ref={nodeRef}
          in={step === 50}
          timeout={400}
          classNames="fade"
          unmountOnExit
        >
          <ThankYouForTrustOnUs onClick={handleAnswer} />
        </CSSTransition>
        <CSSTransition
          ref={nodeRef}
          in={step === 50}
          timeout={400}
          classNames="fade"
          unmountOnExit
        >
          <LastStep onClick={handleAnswer} />
        </CSSTransition>
      </div>
    </div>
  );
};

export default Quizz;
