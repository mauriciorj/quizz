import React, { useState } from "react";
import ButtonContinue from "@/components/buttonContinue";
import ButtonLargeWithCheck from "@/components/buttonLargeWithCheck";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";

const Question15 = ({
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
      icon: "😴",
      label: "Pouco descanso",
      value: "Pouco descanso".toLowerCase(),
    },
    btn2: {
      icon: "🍫",
      label: "Eu amo doces",
      value: "Eu amo doces".toLowerCase(),
    },
    btn3: {
      icon: "🥤",
      label: "Eu amo refrigerante",
      value: "Eu amo refrigerante".toLowerCase(),
    },
    btn4: {
      icon: "🍤",
      label: "Eu amo fritura",
      value: "Eu amo fritura".toLowerCase(),
    },
    btn5: {
      icon: "🙅‍♀️",
      label: "Nenhum deles",
      value: "Nenhum deles".toLowerCase(),
    },
  };

  return (
    <Card hasContinueCta onClick={() => onClick(answers)}>
      <CardTitle title="Você tem algum mau hábito" />
      <CardDescription description="Fique tranquilo porque todos nós temos maus hábitos. Quais são os seus?" />
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
      </div>
    </Card>
  );
};

export default Question15;
