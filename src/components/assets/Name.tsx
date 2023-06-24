"use client";
import data from "@/data.json";
import { AnimatedLetter, Letter } from "../atoms/Letter";

interface FullNameData {
  letters: AnimatedLetter[];
}

const fullNameData: FullNameData = data as FullNameData;

const Name = () => {
  const { letters } = fullNameData;
  return (
    <div className="grid items-center justify-center grid-cols-2 md:grid-cols-4 opacity-60 gap-y-2">
      {letters.map((letter: AnimatedLetter) => (
        <Letter key={letter.svg.key} letter={letter} />
      ))}
    </div>
  );
};

export default Name;
