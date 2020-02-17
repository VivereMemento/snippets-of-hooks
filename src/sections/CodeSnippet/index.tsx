import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CodeSnippet as ICodeSnippet } from "../../lib/types";
import { FiInfo } from "react-icons/fi";

import "./styles/CodeSnippet.css";

interface Props {
  codeSnippet: ICodeSnippet;
}

export const CodeSnippet = ({ codeSnippet }: Props) => {
  const [showPrompts, setShowPrompts] = useState(false);
  const [messagePrompt, setMessagePrompt] = useState("");

  const customStyle = {
    margin: "0 0",
    borderRadius: "0",
    backgroundColor: "#121212",
    fontSize: codeSnippet.fontSize ? codeSnippet.fontSize : 16
  };

  const messagePromptSection =
    showPrompts && messagePrompt ? (
      <div className="code-snippet__message-prompt">
        <FiInfo color="#FFF" size={18} /> <span>{messagePrompt}</span>
      </div>
    ) : null;

  return (
    <div id="code-snippet">
      <div className="code-snippet__code">
        <SyntaxHighlighter
          language="javascript"
          style={okaidia}
          customStyle={customStyle}
          wrapLines={true}
          lineProps={lineNumber => ({
            style: {
              display: "block",
              padding: "5px 10px",
              cursor:
                showPrompts && lineNumber.toString() in codeSnippet.notes
                  ? "pointer"
                  : "",
              backgroundColor:
                showPrompts && lineNumber.toString() in codeSnippet.notes ? "#292d38" : ""
            },
            onClick() {
              setMessagePrompt(codeSnippet.notes[lineNumber]);
            }
          })}
        >
          {codeSnippet.code}
        </SyntaxHighlighter>
      </div>
      {/* <div>{messagePromptSection}</div> */}
      <div className="code-snippet__footer">
        <div
          className="code-snippet__footer-checkbox"
          onClick={() => setShowPrompts(!showPrompts)}
        >
          <input
            type="checkbox"
            checked={showPrompts}
            onChange={() => setShowPrompts(!showPrompts)}
          />
          Toggle prompts
        </div>
      </div>
    </div>
  );
};
