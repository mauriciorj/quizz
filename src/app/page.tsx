import Link from "next/link";
import ButtonIcon from "@/components/buttonIcon";
import Card from "@/components/card";
import CardTitle from "@/components/cardTitle";

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-start">
      <Card>
        <CardTitle title="SELECT YOUR COUNTRY" />
        <div className="flex items-center justify-center">
          <div className="w-fit mt-20 grid grid-cols-2 gap-4 lg:flex lg:flex-row justify-center items-center justify-items-center">
            <Link href="/quizz"><div className="flex flow-row items-center px-10 py-5 rounded-md bg-pink text-white text-2xl font-bold">Brasil</div></Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
