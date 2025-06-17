import React, { useState } from 'react';
import { Link, Copy, CheckCheck, ExternalLink } from 'lucide-react';

export function ZoomLink() {
  const [copied, setCopied] = useState(false);
  const zoomLink = "https://us06web.zoom.us/s/86452377111";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(zoomLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="container mx-auto px-4 mt-8">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/10 rounded-lg">
                <Link className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Challenge Zoom Link</h3>
                <p className="text-sm text-blue-100">Use this link for all live sessions</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={zoomLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
              >
                Open in Zoom
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <button
                onClick={copyToClipboard}
                className="inline-flex items-center px-4 py-2 bg-white text-blue-700 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                {copied ? (
                  <>
                    <CheckCheck className="w-4 h-4 mr-2" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>
            </div>
          </div>
          <div className="mt-4 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
            <code className="text-sm text-white font-mono select-all">{zoomLink}</code>
          </div>
        </div>
      </div>
    </div>
  );
}