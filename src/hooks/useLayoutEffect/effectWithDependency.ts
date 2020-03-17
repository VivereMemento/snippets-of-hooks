import { CodeSnippet } from "../../lib/types";

export const effectWithDependency: CodeSnippet = {
  id: "useLayoutEffect_03",
  title: "Run effect on first render and re-run when dependency changes",
  code: `import React, { useLayoutEffect } from "react";

export const FunctionComponent = () => {
  useLayoutEffect(() => {
    console.log(
      \`run for first render and when
      'dependency' changes\`
    );
  }, [dependency]);
};`,
  notes: {
    "9":
      "Passing a dependency in the dependencies list will tell React to re-run the effect every time the dependency changes."
  }
};