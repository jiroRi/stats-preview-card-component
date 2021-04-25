import React, { useEffect } from "react";
import { useCountUp } from "react-countup";

import { Text } from "./Text";

export const QueriesCount = () => {
  const { countUp, start } = useCountUp({
    start: 0,
    end: 12,
    delay: 200,
    duration: 4,
  });

  useEffect(() => {
    start();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Text variant="label">{countUp}M+</Text>
    </>
  );
};
