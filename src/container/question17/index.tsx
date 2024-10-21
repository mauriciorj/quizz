"use client";

import React, { useState } from "react";
import ButtonContinue from "@/components/buttonContinue";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";
import Input from "@/components/input";

const Question17 = ({
  onClick,
}: {
  onClick: (value: number | null) => void;
}) => {
  const [btnValue, setBtnValue] = useState<number | null>(null);

  const handleOnChange = (value?: string) => {
    if (value === "") {
      return setBtnValue(null);
    }
    if (value && !isNaN(parseInt(value))) {
      return setBtnValue(parseInt(value));
    }
  };

  const validConditions = Boolean(
    btnValue || (btnValue && btnValue > 100) || (btnValue && btnValue < 230)
  );

  return (
    <Card>
      <CardTitle title="Qual a sua altura (em cm, exemplo: 172 para 1,72m) ?" />
      <CardDescription description="" />
      <div className="flex flex-col items-center">
        <Input
          name="altura"
          onChange={handleOnChange}
          placeholder="0"
          unit="cm"
          value={btnValue}
        />
        <div className="w-full flex flex-row justify-center">
          <div className="mr-5 mt-10">
            <ButtonContinue
              isDisabled={!btnValue}
              label="Cotinuar"
              onClick={() => onClick(btnValue)}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Question17;
