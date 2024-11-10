"use client";

import React, { useEffect, useState } from "react";
import ButtonContinue from "@/components/buttonContinue";
import Card from "@/components/card";
import CardTitle from "@/components/cardTitle";
import Input from "@/components/input";

const YourTargetWeight = ({
  weight,
  onClick,
}: {
  weight?: number;
  onClick: (value: number) => void;
}) => {
  const [btnValue, setBtnValue] = useState<number | null>(null);
  const [target, setTarget] = useState<number | null>(null);

  const handleOnChange = (value: string) => {
    setBtnValue(parseInt(value));
  };

  const validConditions = Boolean(
    btnValue && btnValue && btnValue > 30 && btnValue < 250
  );

  useEffect(() => {
    if (validConditions && btnValue && weight) {
      if (weight === btnValue) {
        setTarget(0);
      } else if (weight > btnValue) {
        const calcPercentage = Math.round(
          (100 - (weight * 100) / btnValue) * -1
        );
        setTarget(calcPercentage);
      } else {
        const calcPercentage = Math.round((btnValue * 100) / weight - 100);
        setTarget(calcPercentage);
      }
    } else {
      setTarget(null);
    }
  }, [btnValue]);

  return (
    <Card>
      <CardTitle title="Qual seria o peso perfeito para você ?" />
      <div className="flex flex-col items-center">
        <div className="ml-[-70px]">
          <Input
            name="peso"
            onChange={handleOnChange}
            placeholder="0"
            unit="kg"
            value={btnValue}
          />
        </div>
        {target === 0 ? (
          <div className="bg-[#f0f5fe] mx-3 mt-10 px-4 py-4 rounded-lg text-left">
            <p className="text-sm text-slate-900 font-bold mb-1">
              Manter o peso
            </p>
            <p className="text-sm text-slate-700">
              Segundo um estudo da universidade americana de Utah, mesmo 5
              minutos de exercícios todos os dias podem ajudar a manter seu
              corpo e melhorar a qualidade do sono e dos níveis de energia.
            </p>
          </div>
        ) : null}
        {target && weight && btnValue && weight > btnValue ? (
          <div className="bg-[#f0f5fe] mx-3 mt-10 px-4 py-4 rounded-lg text-left">
            <p className="text-sm text-slate-900 font-bold mb-1">
              Desafio - perder {target}% do seu peso
            </p>
            <p className="text-sm text-slate-700">
              Segundo um estudo da universidade americana de Utah, mesmo 5
              minutos de exercícios todos os dias podem ajudar a manter seu
              corpo e melhorar a qualidade do sono e dos níveis de energia.
            </p>
          </div>
        ) : null}
        {target && weight && btnValue && btnValue > weight ? (
          <div className="bg-[#f5faf7] mx-3 mt-10 px-4 py-4 rounded-lg text-left">
            <p className="text-sm text-slate-900 font-bold mb-1">
              Benefícios na saúde - ganhar {target}% do seu peso
            </p>
            <p className="text-sm text-slate-700">
              Segundo um estudo da universidade americana de Utah, mesmo 5
              minutos de exercícios todos os dias podem ajudar a manter seu
              corpo e melhorar a qualidade do sono e dos níveis de energia.
            </p>
          </div>
        ) : null}
        <div className="w-full px-3 mt-5 flex flex-row justify-center">
          <ButtonContinue
            isDisabled={!validConditions}
            onClick={() =>
              validConditions && btnValue ? onClick(btnValue) : null
            }
            label="Continuar"
          />
        </div>
      </div>
    </Card>
  );
};

export default YourTargetWeight;
