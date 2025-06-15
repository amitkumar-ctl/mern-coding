import React, { useRef, useEffect } from "react";
import { Terminal } from "lucide-react";

const TerminalPanel = ({
  terminalOutput,
  terminalInput,
  onTerminalInputChange,
  onTerminalCommand,
}) => {
  const terminalRef = useRef(null);
  const outputRef = useRef(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [terminalOutput]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const command = terminalInput.trim();
      onTerminalCommand(command);
      onTerminalInputChange("");
    }
  };

  const handleTerminalClick = () => {
    terminalRef.current?.focus();
  };

  return (
    <div className="h-48 bg-black border-t border-gray-700 flex flex-col flex-shrink-0">
      {/* Terminal Header */}
      <div className="bg-gray-800 p-3 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <Terminal size={16} className="text-green-400" />
          <span className="text-sm font-medium">Terminal</span>
          <div className="ml-auto flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-xs text-gray-400">Ready</span>
          </div>
        </div>
      </div>

      {/* Terminal Content */}
      <div
        ref={outputRef}
        onClick={handleTerminalClick}
        className="flex-1 p-4 font-mono text-sm overflow-y-auto cursor-text"
      >
        {terminalOutput.map((line, idx) => (
          <div key={idx} className="text-green-400 whitespace-pre-wrap">
            {line}
          </div>
        ))}

        <div className="flex items-center text-green-400">
          <span>$ </span>
          <input
            ref={terminalRef}
            value={terminalInput}
            onChange={(e) => onTerminalInputChange(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 bg-transparent border-none outline-none text-green-400 ml-1 font-mono"
            placeholder="Type 'help' for available commands"
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
};

export default TerminalPanel;
