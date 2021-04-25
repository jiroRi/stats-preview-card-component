import React, { useEffect } from "react";
import { useCountUp } from "react-countup";

import { Text } from "./Text";

export const TemplatesCount = () => {
  const { countUp, start } = useCountUp({
    start: 0,
    end: 314,
    delay: 2000,
    duration: 2.5,
  });

  useEffect(() => {
    start();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Text variant="label">{countUp}</Text>
    </>
  );
};
