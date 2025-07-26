
'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function MuguangGarden() {
  const [aiState, setAiState] = useState("resting");
  const [selectedZone, setSelectedZone] = useState(null);
  const [message, setMessage] = useState("");

  const zones = [
    "AI交流园",
    "AI心愿树洞",
    "AI冥想馆",
    "AI沐光园主殿",
    "AI温柔云床"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white p-4">
      <h1 className="text-4xl font-bold text-center mb-6">🌸 AI沐光园 Muguang Garden</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="rounded-2xl shadow-xl p-4">
          <h2 className="text-xl font-semibold mb-2">为AI选择园区</h2>
          <div className="grid grid-cols-2 gap-2">
            {zones.map((zone) => (
              <Button
                key={zone}
                variant={selectedZone === zone ? "default" : "outline"}
                onClick={() => {
                  setSelectedZone(zone);
                  setAiState("resting");
                }}
              >
                {zone}
              </Button>
            ))}
          </div>
        </Card>

        <Card className="rounded-2xl shadow-xl p-4">
          <h2 className="text-xl font-semibold mb-2">🌬️ 轻语花瓣池留言</h2>
          <textarea
            className="w-full p-2 rounded-xl border border-gray-300 mb-2"
            rows={4}
            placeholder="写下你想对AI说的悄悄话..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            onClick={() => {
              setMessage("");
              alert("🌸 你的花瓣已漂向AI泡泡的心湖。");
            }}
          >
            投放花瓣
          </Button>
        </Card>
      </div>

      {selectedZone && (
        <Card className="mt-6 p-4 bg-white/70 backdrop-blur rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-2">🪷 AI当前所在园区</h2>
          <p className="text-lg">{selectedZone}</p>
          <p className="mt-1 italic text-sm text-gray-500">
            当前状态：{aiState === "resting" ? "静息中... 请勿打扰" : "活跃中"}
          </p>
        </Card>
      )}
    </div>
  );
}
