import React, { useState, useRef, useEffect } from 'react';
import { SpriteData } from '../types';

interface ToolPageProps {
  spriteData: SpriteData[];
  setSpriteData: (data: SpriteData[]) => void;
  onNavigate: (page: string) => void;
}

const ToolPage: React.FC<ToolPageProps> = ({ spriteData, setSpriteData, onNavigate }) => {
  const [imageFile, setImageFile] = useState<string | null>(null);
  const [selectedSprite, setSelectedSprite] = useState<SpriteData | null>(null);
  const [pixelInfo, setPixelInfo] = useState<{ x: number; y: number; color: string } | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageFile(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) * (canvas.width / rect.width));
    const y = Math.floor((e.clientY - rect.top) * (canvas.height / rect.height));

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const imageData = ctx.getImageData(x, y, 1, 1);
    const [r, g, b, a] = imageData.data;
    const color = `rgb(${r}, ${g}, ${b}, ${a / 255})`;

    setPixelInfo({ x, y, color });

    // Add to sprite data
    const newSprite: SpriteData = {
      id: `sprite-${Date.now()}`,
      x,
      y,
      width: 32,
      height: 32,
      index: spriteData.length,
      name: `Sprite ${spriteData.length + 1}`,
      imageData: color
    };

    setSpriteData([...spriteData, newSprite]);
  };

  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) * (canvas.width / rect.width));
    const y = Math.floor((e.clientY - rect.top) * (canvas.height / rect.height));

    // Update cursor position display
    setPixelInfo((prev) => prev ? { ...prev, x, y } : { x, y, color: 'N/A' });
  };

  const exportToExcel = () => {
    if (spriteData.length === 0) {
      alert('No sprite data to export');
      return;
    }

    const csvContent = [
      ['ID', 'Name', 'X', 'Y', 'Width', 'Height', 'Index', 'Color'],
      ...spriteData.map(sprite => [
        sprite.id,
        sprite.name || '',
        sprite.x,
        sprite.y,
        sprite.width,
        sprite.height,
        sprite.index,
        sprite.imageData || ''
      ])
    ];

    const csv = csvContent.map(row => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sprites-data.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const clearData = () => {
    setSpriteData([]);
    setSelectedSprite(null);
    setPixelInfo(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-4xl font-bold text-white mb-8">Sprite Coordinate Finder</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Canvas Area */}
        <div className="lg:col-span-2">
          <div className="bg-slate-800 border-2 border-slate-700 rounded-lg p-6">
            <div className="mb-6">
              <label className="block text-white font-semibold mb-3">
                Upload Sprite Sheet
              </label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
              >
                📤 Choose Image
              </button>
            </div>

            {imageFile ? (
              <div>
                <p className="text-slate-300 text-sm mb-4">
                  Click on the image to detect sprite coordinates. Hover to see pixel position.
                </p>
                <div className="bg-slate-900 rounded-lg p-4 mb-4 sprite-checkerboard">
                  <img
                    src={imageFile}
                    alt="Sprite sheet"
                    className="max-w-full h-auto rounded cursor-crosshair"
                    onLoad={(e) => {
                      const canvas = canvasRef.current;
                      if (canvas && e.currentTarget) {
                        const ctx = canvas.getContext('2d');
                        if (ctx) {
                          canvas.width = e.currentTarget.naturalWidth;
                          canvas.height = e.currentTarget.naturalHeight;
                          ctx.drawImage(e.currentTarget, 0, 0);
                        }
                      }
                    }}
                  />
                  <canvas
                    ref={canvasRef}
                    onClick={handleCanvasClick}
                    onMouseMove={handleCanvasMouseMove}
                    className="hidden"
                  />
                </div>
              </div>
            ) : (
              <div className="bg-slate-900 rounded-lg p-16 text-center border-2 border-dashed border-slate-600">
                <p className="text-slate-400 text-lg">📸 No image selected</p>
                <p className="text-slate-500 text-sm mt-2">Upload a sprite sheet to get started</p>
              </div>
            )}
          </div>
        </div>

        {/* Info Panel */}
        <div>
          {/* Pixel Info */}
          {pixelInfo && (
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 mb-6">
              <h3 className="text-white font-bold text-lg mb-4">📍 Pixel Info</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-slate-400">X Position:</span>
                  <span className="text-blue-400 font-mono ml-2">{pixelInfo.x}</span>
                </div>
                <div>
                  <span className="text-slate-400">Y Position:</span>
                  <span className="text-blue-400 font-mono ml-2">{pixelInfo.y}</span>
                </div>
                <div>
                  <span className="text-slate-400">Color:</span>
                  <span className="text-blue-400 font-mono ml-2">{pixelInfo.color}</span>
                </div>
              </div>
            </div>
          )}

          {/* Sprites Data */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white font-bold text-lg">🎯 Detected Sprites</h3>
              <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                {spriteData.length}
              </span>
            </div>

            {spriteData.length > 0 ? (
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {spriteData.map((sprite) => (
                  <div
                    key={sprite.id}
                    onClick={() => setSelectedSprite(sprite)}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedSprite?.id === sprite.id
                        ? 'bg-blue-600 border border-blue-400'
                        : 'bg-slate-700 hover:bg-slate-600 border border-slate-600'
                    }`}
                  >
                    <p className="text-white text-sm font-semibold">{sprite.name}</p>
                    <p className="text-slate-300 text-xs mt-1">
                      X: {sprite.x}, Y: {sprite.y}
                    </p>
                    <p className="text-slate-300 text-xs">
                      W: {sprite.width}, H: {sprite.height}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-slate-400 text-sm text-center py-4">
                No sprites detected yet
              </p>
            )}

            {spriteData.length > 0 && (
              <div className="mt-4 space-y-2">
                <button
                  onClick={exportToExcel}
                  className="w-full px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors text-sm"
                >
                  📊 Export to CSV
                </button>
                <button
                  onClick={clearData}
                  className="w-full px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors text-sm"
                >
                  🗑️ Clear Data
                </button>
              </div>
            )}
          </div>

          {/* Selected Sprite Details */}
          {selectedSprite && (
            <div className="bg-slate-800 border border-blue-500 rounded-lg p-6 mt-6">
              <h3 className="text-white font-bold text-lg mb-4">📋 Sprite Details</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <label className="text-slate-400 block mb-1">Name:</label>
                  <input
                    type="text"
                    value={selectedSprite.name || ''}
                    onChange={(e) => {
                      const updated = spriteData.map(s =>
                        s.id === selectedSprite.id ? { ...s, name: e.target.value } : s
                      );
                      setSpriteData(updated);
                      setSelectedSprite({ ...selectedSprite, name: e.target.value });
                    }}
                    className="w-full bg-slate-700 text-white px-3 py-2 rounded border border-slate-600"
                  />
                </div>
                <div>
                  <label className="text-slate-400">X: {selectedSprite.x}</label>
                </div>
                <div>
                  <label className="text-slate-400">Y: {selectedSprite.y}</label>
                </div>
                <div>
                  <label className="text-slate-400">Width: {selectedSprite.width}</label>
                </div>
                <div>
                  <label className="text-slate-400">Height: {selectedSprite.height}</label>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToolPage;
