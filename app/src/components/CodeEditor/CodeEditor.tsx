import React, { useState } from "react";
import styles from "./CodeEditor.module.css";
import Editor from "@monaco-editor/react";
import { ChevronDown } from "lucide-react";

interface CodeEditorProps {
  defaultComment?: string;
}

export default function CodeEditor({ defaultComment }: CodeEditorProps) {
  const [code, setCode] = useState<string | undefined>("");
  const [language, setLanguage] = useState<string>("Java");
  const [codeChange, setCodeChange] = useState<boolean>(false);

  const [template, setTemplate] = useState<string>("");
  const handleCodeChange = (value: string | undefined) => {
    setCode(value);
    console.log("Value of code", value);
  };

  const handleLanguageChange = (language: string) => {
    setLanguage(language);
    // switch (language) {
    //   case "java":
    //   case ""
    // }
  };
  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <button
          className={styles.codeChangeButton}
          onClick={() => setCodeChange(!codeChange)}
        >
          {language} <ChevronDown />
        </button>
      </div>
      {codeChange && (
        <ul className={styles.codeMenu}>
          <li className={styles.codeOptions}>test</li>
        </ul>
      )}
      <div className={styles.codeEditor}>
        <Editor
          height="600px"
          language={language}
          defaultValue="// Write your solution here"
          theme="leetcode-dark"
          options={{
            fontFamily: "Menlo, Monaco, 'Courier New', monospace",
            fontSize: 14,
            lineHeight: 22,

            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            wordWrap: "on",

            padding: { top: 12, bottom: 12 },

            renderLineHighlight: "line",
            lineNumbersMinChars: 3,

            smoothScrolling: true,
            cursorSmoothCaretAnimation: "on",

            contextmenu: false,
            hover: { enabled: false },

            scrollbar: {
              verticalScrollbarSize: 6,
              horizontalScrollbarSize: 6,
              useShadows: false,
            },

            overviewRulerLanes: 0,
          }}
          onMount={(editor, monaco) => {
            // Disable command palette
            editor.addCommand(
              monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyP,
              () => {}
            );
            editor.addCommand(monaco.KeyCode.F1, () => {});

            // Disable double-click selection
            editor.onMouseDown((e) => {
              if (e.event.detail === 2) {
                e.event.preventDefault();
              }
            });

            // Define LeetCode-like theme
            monaco.editor.defineTheme("leetcode-dark", {
              base: "vs-dark",
              inherit: true,
              rules: [
                { token: "comment", foreground: "6B7280" },
                { token: "keyword", foreground: "60A5FA" },
                { token: "string", foreground: "34D399" },
                { token: "number", foreground: "FBBF24" },
              ],
              colors: {
                "editor.background": "#262626",
                "editor.lineHighlightBackground": "#111827",
                "editor.selectionBackground": "#374151",
                "editorCursor.foreground": "#60a5fa",
                "editorLineNumber.foreground": "#6b7280",
                "editorLineNumber.activeForeground": "#e5e7eb",
              },
            });

            monaco.editor.setTheme("leetcode-dark");
          }}
        />
      </div>
    </div>
  );
}
