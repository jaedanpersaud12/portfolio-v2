import React from "react";

type Props = {};

const Wordmark = (props: Props) => {
  return (
    <div
      className={`bg-background text-text flex items-center justify-center pt-2 text-3xl transition-all duration-200 rounded-full w-14 h-14 hover:scale-110 cursor-pointer font-alchadera`}
    >
      JP
    </div>
  );
};

export default Wordmark;
