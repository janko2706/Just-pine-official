type StartStepsProps = {
  number: number;
  text: string;
};

const StartSteps = ({ number, text }: StartStepsProps) => (
  <div className="group flex items-center justify-center">
    <div className="flex h-[70px] w-[70px] items-center justify-center rounded-[24px] bg-green-800 bg-opacity-25 transition-all  duration-300 ease-in-out group-hover:bg-opacity-100">
      <p className="flex  items-center justify-center text-[20px] font-bold text-white">
        {number}.
      </p>
    </div>
    <p className="ml-[30px] flex-1 text-base font-normal leading-7 text-slate-100">
      {text}
    </p>
  </div>
);

export default StartSteps;
