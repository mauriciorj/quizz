"use client";

import React, { useState } from "react";
import ButtonIcon from "@/components/buttonIcon";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";
import Input from "@/components/input";

const Question19 = ({ onClick }: { onClick: (value: number) => void }) => {
  const [btnValue, setBtnValue] = useState<number | null>(null);

  const handleOnChange = (value: string) => {
    setBtnValue(parseInt(value));
  };

  const validConditions = Boolean(
    btnValue || (btnValue && btnValue > 16) || (btnValue && btnValue < 100)
  );
  return (
    <Card>
      <CardTitle title="Qual a sua idade?" />
      <CardDescription description="" />
      <div className="flex flex-col items-center">
        <Input
          label="Idade"
          name="idade"
          onChange={handleOnChange}
          type="number"
        />
        <div className="mt-20">
          <ButtonIcon
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

export default Question19;
