import React from "react";
import Card from "@/components/card";
import Button from "@/components/button";

const Step2 = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card>
      <div>Step2</div>
      <Button label="Next" onClick={onClick} />
    </Card>
  );
};

export default Step2;
