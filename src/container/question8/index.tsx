import React, { useState } from "react";
import ButtonContinue from "@/components/buttonContinue";
import ButtonLargeWithCheck from "@/components/buttonLargeWithCheck";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";

const Question8 = ({
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
      label: "Barriga",
      value: "Barriga".toLowerCase(),
    },
    btn2: {
      label: "Gluteos",
      value: "Gluteos".toLowerCase(),
    },
    btn3: {
      label: "Peitoral",
      value: "Peitoral".toLowerCase(),
    },
    btn4: {
      label: "Pernas",
      value: "Pernas".toLowerCase(),
    },
  };
  return (
    <Card>
      <CardTitle title="Quais partes você quer melhorar?" />
      <CardDescription description="Escolha pelo menos uma opção. Você pode escolher mais." />
      <div className="w-full flex flex-col items-center">
        <div className="mt-3">
          <ButtonLargeWithCheck
            isChecked={answers.includes(buttonsLabels.btn1.value)}
            label={buttonsLabels.btn1.label}
            onClick={handlerOnClick}
            value={buttonsLabels.btn1.value}
          />
        </div>
        <div className="mt-3">
          <ButtonLargeWithCheck
            isChecked={answers.includes(buttonsLabels.btn2.value)}
            label={buttonsLabels.btn2.label}
            onClick={handlerOnClick}
            value={buttonsLabels.btn2.value}
          />
        </div>
        <div className="mt-3">
          <ButtonLargeWithCheck
            isChecked={answers.includes(buttonsLabels.btn3.value)}
            label={buttonsLabels.btn3.label}
            onClick={handlerOnClick}
            value={buttonsLabels.btn3.value}
          />
        </div>
        <div className="mt-3">
          <ButtonLargeWithCheck
            isChecked={answers.includes(buttonsLabels.btn4.value)}
            label={buttonsLabels.btn4.label}
            onClick={handlerOnClick}
            value={buttonsLabels.btn4.value}
          />
        </div>
        <div className="mr-5 mt-10">
          <ButtonContinue
            onClick={() => onClick(answers)}
            isDisabled={!answers?.length}
            label="Cotinuar"
          />
        </div>
      </div>
    </Card>
  );
};

export default Question8;
