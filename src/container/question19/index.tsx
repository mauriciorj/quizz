"use client";

import React, { useState } from "react";
import ButtonIcon from "@/components/buttonIcon";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";
import Input from "@/components/input";

const Question18 = ({ onClick }: { onClick: (value: number) => void }) => {
  const [btnValue, setBtnValue] = useState<number | null>(null);

  const handleOnChange = (value: string) => {
    setBtnValue(parseInt(value));
  };

  const validConditions = Boolean(
    btnValue || (btnValue && btnValue > 30) || (btnValue && btnValue < 530)
  );
  return (
    <Card>
      <CardTitle title="Qual o seu peso (em Kgs)" />
      <CardDescription description="Precisamos dessa informação para calcular o seu IMC (Índice de Massa Corporal). Esse fator é muito importante para criarmos a sua estratégia." />
      <div className="flex flex-col items-center">
        <Input
          label="peso"
          name="peso"
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

export default Question18;
