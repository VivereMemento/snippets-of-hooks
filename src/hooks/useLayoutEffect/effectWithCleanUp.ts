import { CodeSnippet } from "../../lib/types";

export const effectWithCleanUp: CodeSnippet = {
  id: "useLayoutEffect_04",
  title: "Run effect with clean-up",
  code: `import React, { useLayoutEffect } from "react";

export const FunctionComponent = () => {
  useLayoutEffect(() => {
    console.log("run for every component render");

    return () => {
      console.log(
        \`run before the next effect and when 
        component un-mounts\`
      )
    }
  });
};`,
  notes: {
    "7":
      "Function returned from the effect callback is the effect clean-up. The clean-up runs before the effect of the next render is to run or when the component un-mounts.",
    "8":
      "Function returned from the effect callback is the effect clean-up. The clean-up runs before the effect of the next render is to run or when the component un-mounts.",
    "9":
      "Function returned from the effect callback is the effect clean-up. The clean-up runs before the effect of the next render is to run or when the component un-mounts.",
    "10":
      "Function returned from the effect callback is the effect clean-up. The clean-up runs before the effect of the next render is to run or when the component un-mounts.",
    "11":
      "Function returned from the effect callback is the effect clean-up. The clean-up runs before the effect of the next render is to run or when the component un-mounts.",
    "12":
      "Function returned from the effect callback is the effect clean-up. The clean-up runs before the effect of the next render is to run or when the component un-mounts."
  },
  fontSize: 15
};
