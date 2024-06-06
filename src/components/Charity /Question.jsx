import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { MinusIcon } from "@heroicons/react/24/outline";

<MinusIcon className="h-6 w-6 text-gray-500" />;

const Question = ({ answer, question }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="py-10 border-t-[1px] border-gray-400 ">
      <div
        className="flex items-center gap-x-4 py-6"
        onClick={(e) => setShow(!show)}
      >
        {show ? (
          <MinusIcon className="h-8 w-8 text-green-700 font-semibold" />
        ) : (
          <PlusIcon className="h-8 w-8 text-green-700 " />
        )}
        <h2 className="text-2xl font-semibold">{question}</h2>
      </div>
      {show ? <p className="pl-12">{answer}</p> : null}
    </div>
  );
};

export default Question;
