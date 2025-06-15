import React, { useEffect, useRef } from "react";

const LivePreview = ({ files, previewKey }) => {
  const previewRef = useRef(null);

  const generatePreviewHTML = () => {
    const html = files["index.html"] || "";
    const css = files["styles.css"] || "";
    const js = files["script.js"] || "";

    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>${css}</style>
      </head>
      <body>
        ${html
          .replace(/<script[^>]*src[^>]*><\/script>/g, "")
          .replace(/<link[^>]*stylesheet[^>]*>/g, "")}
        <script>
          try {
            ${js}
          } catch (error) {
            console.error('JavaScript Error:', error);
          }
        </script>
      </body>
      </html>
    `;
  };

  useEffect(() => {
    if (previewRef.current) {
      const iframe = previewRef.current;
      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      if (doc) {
        doc.open();
        doc.write(generatePreviewHTML());
        doc.close();
      }
    }
  }, [files, previewKey]);

  return (
    <div className="w-1/2 border-l border-gray-700 flex flex-col">
      {/* Preview Header */}
      <div className="bg-gray-800 p-3 border-b border-gray-700 flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-sm ml-2 font-medium">Live Preview</span>
          <div className="ml-auto flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-400">Live</span>
          </div>
        </div>
      </div>

      {/* Preview Content */}
      <div className="flex-1 bg-white">
        <iframe
          key={previewKey}
          ref={previewRef}
          className="w-full h-full border-0"
          title="Live Preview"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    </div>
  );
};

export default LivePreview;
