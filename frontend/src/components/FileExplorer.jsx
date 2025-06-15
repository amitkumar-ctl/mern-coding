import React from "react";
import { Folder, Plus } from "lucide-react";

const FileExplorer = ({ fileStructure, activeFile, onFileSelect }) => {
  return (
    <div className="p-4 flex-1 overflow-y-auto">
      <div className="flex items-center gap-2 mb-4">
        <Folder size={18} className="text-yellow-400" />
        <h3 className="font-semibold text-lg">Explorer</h3>
        <button className="ml-auto text-gray-400 hover:text-white p-1 rounded hover:bg-gray-700 transition-colors">
          <Plus size={16} />
        </button>
      </div>

      <div className="space-y-1">
        {fileStructure.map((item) => (
          <button
            key={item.name}
            onClick={() => onFileSelect(item.name)}
            className={`w-full flex items-center gap-3 p-3 rounded-lg text-sm transition-all duration-200 ${
              activeFile === item.name
                ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                : "text-gray-300 hover:bg-gray-700 hover:text-white"
            }`}
          >
            <item.icon size={16} />
            <span className="font-medium">{item.name}</span>
          </button>
        ))}
      </div>

      <div className="mt-6 p-3 bg-gray-700/50 rounded-lg">
        <h4 className="text-xs font-medium text-gray-400 mb-2">PROJECT INFO</h4>
        <div className="space-y-1 text-xs text-gray-300">
          <div>Files: {fileStructure.length}</div>
          <div>Language: Multi</div>
          <div>Type: Web Project</div>
        </div>
      </div>
    </div>
  );
};

export default FileExplorer;
