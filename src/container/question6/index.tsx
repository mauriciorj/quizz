import React, { useState } from "react";
import ButtonLargeWithCheck from "@/components/buttonLargeWithCheck";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";

const Question6 = ({
  onClick,
}: {
  onClick: (values: string[] | null) => void;
}) => {
  const [answers, setAnswers] = useState<string[]>([]);

  const handlerOnClick = (value?: string) => {
    if (value && !answers?.includes(value)) {
      setAnswers((prevState) => [...prevState, value]);
    }
    if (value && answers?.includes(value)) {
      const answersCopy = answers;
      const index = answersCopy.indexOf(value);
      if (index > -1) {
        answersCopy.splice(index, 1);
      }
      setAnswers([...answersCopy]);
    }
  };

  const buttonsLabels = {
    btn1: {
      icon: "🫀",
      label: "Melhorar sua pressao",
      value: "Melhorar sua pressao".toLowerCase(),
    },
    btn2: {
      icon: "🧠",
      label: "Melhorar seu cerebro",
      value: "Melhorar seu cerebro".toLowerCase(),
    },
    btn3: {
      icon: "🏃🏼‍♂️‍➡️",
      label: "Queimar gordura",
      value: "Queimar gordura".toLowerCase(),
    },
    btn4: {
      icon: "💪",
      label: "Perder peso",
      value: "Perder peso".toLowerCase(),
    },
    btn5: {
      icon: "👻",
      label: "Aumentar a expectativa de vida",
      value: "Aumentar a expectativa de vida".toLowerCase(),
    },
    btn6: {
      icon: "🚴🏼‍♀️",
      label: "Reduzir o Colesterol",
      value: "Reduzir o Colesterol".toLowerCase(),
    },
    btn7: {
      icon: "😴",
      label: "Dormir melhor",
      value: "Dormir melhor".toLowerCase(),
    },
    btn8: {
      icon: "😷",
      label: "Reduzir o risco de cancer",
      value: "Reduzir o risco de cancer".toLowerCase(),
    },
    btn9: {
      icon: "😎",
      label: "Melhorar a aparencia",
      value: "Melhorar a aparencia".toLowerCase(),
    },
    btn10: {
      icon: "🔥",
      label: "Aumentar o metabolismo",
      value: "Aumentar o metabolismo".toLowerCase(),
    },
  };

  return (
    <Card hasContinueCta onClick={() => onClick(answers)}>
      <CardTitle title="Quais sao os seus objetivos?" />
      <CardDescription description="Escolha pelo menos uma opção. Você pode escolher mais." />
      <div className="w-full flex flex-col items-center">
        <div className="w-full px-3 mt-3">
          <ButtonLargeWithCheck
            icon={buttonsLabels.btn1.icon}
            isChecked={answers.includes(buttonsLabels.btn1.value)}
            label={buttonsLabels.btn1.label}
            onClick={handlerOnClick}
            value={buttonsLabels.btn1.value}
          />
        </div>
        <div className="w-full px-3 mt-3">
          <ButtonLargeWithCheck
            icon={buttonsLabels.btn2.icon}
            isChecked={answers.includes(buttonsLabels.btn2.value)}
            label={buttonsLabels.btn2.label}
            onClick={handlerOnClick}
            value={buttonsLabels.btn2.value}
          />
        </div>
        <div className="w-full px-3 mt-3">
          <ButtonLargeWithCheck
            icon={buttonsLabels.btn3.icon}
            isChecked={answers.includes(buttonsLabels.btn3.value)}
            label={buttonsLabels.btn3.label}
            onClick={handlerOnClick}
            value={buttonsLabels.btn3.value}
          />
        </div>
        <div className="w-full px-3 mt-3">
          <ButtonLargeWithCheck
            icon={buttonsLabels.btn4.icon}
            isChecked={answers.includes(buttonsLabels.btn4.value)}
            label={buttonsLabels.btn4.label}
            onClick={handlerOnClick}
            value={buttonsLabels.btn4.value}
          />
        </div>
        <div className="w-full px-3 mt-3">
          <ButtonLargeWithCheck
            icon={buttonsLabels.btn5.icon}
            isChecked={answers.includes(buttonsLabels.btn5.value)}
            label={buttonsLabels.btn5.label}
            onClick={handlerOnClick}
            value={buttonsLabels.btn5.value}
          />
        </div>
        <div className="w-full px-3 mt-3">
          <ButtonLargeWithCheck
            icon={buttonsLabels.btn6.icon}
            isChecked={answers.includes(buttonsLabels.btn6.value)}
            label={buttonsLabels.btn6.label}
            onClick={handlerOnClick}
            value={buttonsLabels.btn6.value}
          />
        </div>
        <div className="w-full px-3 mt-3">
          <ButtonLargeWithCheck
            icon={buttonsLabels.btn7.icon}
            isChecked={answers.includes(buttonsLabels.btn7.value)}
            label={buttonsLabels.btn7.label}
            onClick={handlerOnClick}
            value={buttonsLabels.btn7.value}
          />
        </div>
        <div className="w-full px-3 mt-3">
          <ButtonLargeWithCheck
            icon={buttonsLabels.btn8.icon}
            isChecked={answers.includes(buttonsLabels.btn8.value)}
            label={buttonsLabels.btn8.label}
            onClick={handlerOnClick}
            value={buttonsLabels.btn8.value}
          />
        </div>
        <div className="w-full px-3 mt-3">
          <ButtonLargeWithCheck
            icon={buttonsLabels.btn9.icon}
            isChecked={answers.includes(buttonsLabels.btn9.value)}
            label={buttonsLabels.btn9.label}
            onClick={handlerOnClick}
            value={buttonsLabels.btn9.value}
          />
        </div>
        <div className="w-full px-3 mt-3">
          <ButtonLargeWithCheck
            icon={buttonsLabels.btn10.icon}
            isChecked={answers.includes(buttonsLabels.btn10.value)}
            label={buttonsLabels.btn10.label}
            onClick={handlerOnClick}
            value={buttonsLabels.btn10.value}
          />
        </div>
      </div>
    </Card>
  );
};

export default Question6;
