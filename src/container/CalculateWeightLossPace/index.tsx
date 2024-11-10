import React from "react";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";

const FastingWholeDay = ({
  setProgressBarDone,
}: {
  setProgressBarDone: () => void;
}) => {
  return (
    <Card isLoadingBar setProgressBarDone={setProgressBarDone}>
      <CardTitle title="O nosso plano não é sobre fazer exercícios ou comer saudável. É sobre se sentir bem e ter uma vida feliz ?" />
      <CardDescription description="" />
    </Card>
  );
};

export default FastingWholeDay;
