import React from "react";
import Link from "next/link";
import ButtonIcon from "@/components/buttonIcon";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardDescriptionSmall from "@/components/cardDescriptionSmall";
import CardTitle from "@/components/cardTitle";

const Age = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card>
      <CardTitle title="DIETA INTERMITENTE" />
      <CardDescription description="ESCOLHA A SUA FAIXA ETÁRIA" />
      <CardDescriptionSmall description="Quizz de 1 minuto" />
      <div className="flex items-center justify-center">
        <div className="w-fit mt-20 grid grid-cols-2 gap-4 lg:flex lg:flex-row justify-center items-center justify-items-center">
          <div className="lg:ml-5">
            <ButtonIcon label="👦👩  18-35" onClick={onClick} value="18-35" />
          </div>
          <div className="lg:ml-5">
            <ButtonIcon label="👩‍🦰👨‍🦰 36-45" onClick={onClick} value="36-45" />
          </div>
          <div className="lg:ml-5">
            <ButtonIcon label="👱‍♀️👱 46-55" onClick={onClick} value="46-55" />
          </div>
          <div className="lg:ml-5">
            <ButtonIcon label="👩‍🦳👨‍🦳 56+" onClick={onClick} value="56+" />
          </div>
        </div>
      </div>
      <p className="mt-20 px-5 text-slate-500 text-xs">
        Continuando você confirma e garante que você leu e entendeu e concordou
        com os nossos <Link href="/termos-de-uso"><b>Termos de Uso</b></Link>,{" "}
        <Link href="/politicas-de-privacidade"><b>Políticas de Privacidade</b></Link> e{" "}
        <Link href="/politicas-de-reembolso"><b>Políticas de Reembolso</b></Link>.
      </p>
    </Card>
  );
};

export default Age;
