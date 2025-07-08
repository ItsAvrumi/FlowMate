import { useState, ChangeEvent } from "react";
import "../global.css";

export const Popup = () => {
  const [serverUrl, setServerUrl] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [status, setStatus] = useState<null | { type: "success" | "error"; message: string }>(null);
  const [loading, setLoading] = useState(false);

  const handleTestConnection = async () => {
    setLoading(true);
    setStatus(null);
    try {
      const url = serverUrl.replace(/\/$/, "");
      const res = await fetch(`${url}/api/v1/workflows`, {
        headers: {
          "X-N8N-API-KEY": apiKey,
        },
      });
      if (res.ok) {
        setStatus({ type: "success", message: "Connected!" });
      } else if (res.status === 401) {
        setStatus({ type: "error", message: "Unauthorized: Invalid API Key." });
      } else {
        setStatus({ type: "error", message: `Error: ${res.statusText}` });
      }
    } catch (e) {
      setStatus({ type: "error", message: "Connection failed. Check URL and network." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[350px] p-6 bg-white rounded-lg shadow flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">FloMate Setup</h1>
      <label className="flex flex-col gap-1">
        <span className="text-sm font-medium text-gray-700">N8N Server URL</span>
        <input
          type="text"
          className="border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="https://n8n.example.com"
          value={serverUrl}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setServerUrl(e.target.value)}
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-sm font-medium text-gray-700">API Key</span>
        <input
          type="password"
          className="border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Paste your API key"
          value={apiKey}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setApiKey(e.target.value)}
        />
      </label>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition disabled:opacity-50"
        onClick={handleTestConnection}
        disabled={loading || !serverUrl || !apiKey}
      >
        {loading ? "Testing..." : "Test Connection"}
      </button>
      {status && (
        <div
          className={`mt-2 text-center font-medium ${
            status.type === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {status.message}
        </div>
      )}
    </div>
  );
};
