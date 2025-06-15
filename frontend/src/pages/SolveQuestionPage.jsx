import React, { useState, useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";
import {
  Play,
  Terminal,
  FileText,
  Folder,
  Plus,
  Save,
  Code,
} from "lucide-react";
import ProblemStatement from "../components/ProblemStatement";
import FileExplorer from "../components/FileExplorer";
import LivePreview from "../components/LivePreview";
import TerminalPanel from "../components/TerminalPanel";
import { initialFiles, questionData } from "../data/sampleData";

const CodeEditor = () => {
  const [activeFile, setActiveFile] = useState("index.html");
  const [files, setFiles] = useState(initialFiles);
  const [terminalOutput, setTerminalOutput] = useState([
    "Welcome to CodeEditor Terminal",
    "$ ",
  ]);
  const [terminalInput, setTerminalInput] = useState("");
  const [previewKey, setPreviewKey] = useState(0);
  const [isTerminalVisible, setIsTerminalVisible] = useState(true);

  const editorRef = useRef(null);

  const fileStructure = [
    { name: "index.html", type: "file", icon: FileText, language: "html" },
    { name: "styles.css", type: "file", icon: FileText, language: "css" },
    { name: "script.js", type: "file", icon: FileText, language: "javascript" },
  ];

  const getFileLanguage = (fileName) => {
    const extension = fileName.split(".").pop();
    const languageMap = {
      html: "html",
      css: "css",
      js: "javascript",
      ts: "typescript",
      json: "json",
      md: "markdown",
    };
    return languageMap[extension] || "plaintext";
  };

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;

    // Configure Monaco Editor theme and settings
    monaco.editor.defineTheme("darkTheme", {
      base: "vs-dark",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": "#1f2937",
        "editor.foreground": "#f3f4f6",
      },
    });
    monaco.editor.setTheme("darkTheme");
  };

  const handleFileChange = (content) => {
    setFiles((prev) => ({
      ...prev,
      [activeFile]: content,
    }));

    // Refresh preview when HTML/CSS/JS changes
    if (
      activeFile.endsWith(".html") ||
      activeFile.endsWith(".css") ||
      activeFile.endsWith(".js")
    ) {
      setPreviewKey((prev) => prev + 1);
    }
  };

  const handleRunCode = () => {
    setPreviewKey((prev) => prev + 1);
    const newOutput = [...terminalOutput];
    newOutput[newOutput.length - 1] = "$ run";
    newOutput.push("🚀 Running code...");
    newOutput.push("✅ Code executed successfully");
    newOutput.push("$ ");
    setTerminalOutput(newOutput);
  };

  const handleSaveFile = () => {
    const newOutput = [...terminalOutput];
    newOutput[newOutput.length - 1] = "$ save";
    newOutput.push(`💾 Saved ${activeFile}`);
    newOutput.push("$ ");
    setTerminalOutput(newOutput);
  };

  const handleTerminalCommand = (command) => {
    const newOutput = [...terminalOutput];
    newOutput[newOutput.length - 1] = `$ ${command}`;

    if (command === "clear") {
      setTerminalOutput(["$ "]);
    } else if (command === "ls") {
      newOutput.push("index.html  styles.css  script.js");
      newOutput.push("$ ");
      setTerminalOutput(newOutput);
    } else if (command === "help") {
      newOutput.push(
        "Available commands: ls, clear, help, run, cat <filename>"
      );
      newOutput.push("$ ");
      setTerminalOutput(newOutput);
    } else if (command === "run") {
      newOutput.push("🚀 Starting development server...");
      newOutput.push("✅ Server running on http://localhost:3000");
      newOutput.push("$ ");
      setTerminalOutput(newOutput);
      setPreviewKey((prev) => prev + 1);
    } else if (command.startsWith("cat ")) {
      const fileName = command.replace("cat ", "");
      if (files[fileName]) {
        newOutput.push(`--- ${fileName} ---`);
        const lines = files[fileName].split("\n").slice(0, 10);
        lines.forEach((line) => newOutput.push(line));
        if (files[fileName].split("\n").length > 10) {
          newOutput.push("... (truncated)");
        }
      } else {
        newOutput.push(`cat: ${fileName}: No such file or directory`);
      }
      newOutput.push("$ ");
      setTerminalOutput(newOutput);
    } else if (command) {
      newOutput.push(`Command not found: ${command}`);
      newOutput.push('Type "help" for available commands');
      newOutput.push("$ ");
      setTerminalOutput(newOutput);
    } else {
      newOutput.push("$ ");
      setTerminalOutput(newOutput);
    }
  };

  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-gray-800 p-4 border-b border-gray-700 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Code className="text-blue-400" size={24} />
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              CodeEditor Pro
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleRunCode}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors font-medium"
            >
              <Play size={16} />
              Run Code
            </button>
            <button
              onClick={handleSaveFile}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors font-medium"
            >
              <Save size={16} />
              Save
            </button>
            <button
              onClick={() => setIsTerminalVisible(!isTerminalVisible)}
              className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors font-medium"
            >
              <Terminal size={16} />
              Terminal
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-80 bg-gray-800 border-r border-gray-700 flex flex-col flex-shrink-0">
          <ProblemStatement questionData={questionData} />
          <FileExplorer
            fileStructure={fileStructure}
            activeFile={activeFile}
            onFileSelect={setActiveFile}
          />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Code Editor and Preview */}
          <div className="flex-1 flex overflow-hidden">
            {/* Editor */}
            <div className="flex-1 flex flex-col">
              {/* Editor Header */}
              <div className="bg-gray-800 p-3 border-b border-gray-700 flex-shrink-0">
                <div className="flex items-center gap-2">
                  <FileText size={16} className="text-blue-400" />
                  <span className="text-sm font-medium">{activeFile}</span>
                  <div className="ml-auto flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-xs text-gray-400">Saved</span>
                  </div>
                </div>
              </div>

              {/* Monaco Editor */}
              <div className="flex-1">
                <Editor
                  height="100%"
                  language={getFileLanguage(activeFile)}
                  value={files[activeFile] || ""}
                  onChange={(value) => handleFileChange(value || "")}
                  onMount={handleEditorDidMount}
                  theme="vs-dark"
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    fontFamily: "Monaco, Menlo, monospace",
                    lineNumbers: "on",
                    wordWrap: "on",
                    automaticLayout: true,
                    scrollBeyondLastLine: false,
                    folding: true,
                    renderWhitespace: "selection",
                    cursorBlinking: "smooth",
                    smoothScrolling: true,
                    contextmenu: true,
                    mouseWheelZoom: true,
                  }}
                />
              </div>
            </div>

            {/* Live Preview */}
            <LivePreview files={files} previewKey={previewKey} />
          </div>

          {/* Terminal */}
          {isTerminalVisible && (
            <TerminalPanel
              terminalOutput={terminalOutput}
              terminalInput={terminalInput}
              onTerminalInputChange={setTerminalInput}
              onTerminalCommand={handleTerminalCommand}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
