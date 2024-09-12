'use client'

import { useState } from 'react'
import { Card } from "~/components/ui/card"

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80", name: "Mountain Vista" },
    { url: "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?w=500&q=80", name: "Ocean Sunset" },
    { url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&q=80", name: "Forest Path" },
    { url: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=500&q=80", name: "Desert Dunes" },
    { url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=500&q=80", name: "City Skyline" },
    { url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=500&q=80", name: "Snowy Peaks" },
    { url: "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?w=500&q=80", name: "Tropical Beach" },
    { url: "https://images.unsplash.com/photo-1501261379837-c3b516327829?w=500&q=80", name: "Autumn Colors" },
    { url: "https://images.unsplash.com/photo-1499678329028-101435549a4e?w=500&q=80", name: "Lavender Fields" },
    { url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&q=80", name: "Northern Lights" },
    { url: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=500&q=80", name: "Cherry Blossoms" },
    { url: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=500&q=80", name: "Grand Canyon" },
    { url: "https://images.unsplash.com/photo-1498855926480-d98e83099315?w=500&q=80", name: "Venetian Canals" },
    { url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=500&q=80", name: "Sahara Desert" },
    { url: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=500&q=80", name: "Great Barrier Reef" },
    { url: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=500&q=80", name: "Machu Picchu" },
    { url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500&q=80", name: "Taj Mahal" },
    { url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500&q=80", name: "Santorini Sunset" },
    { url: "https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=500&q=80", name: "Amazon Rainforest" },
    { url: "https://images.unsplash.com/photo-1506670053850-3d36b59eba2b?w=500&q=80", name: "Scottish Highlands" },
  ]

  return (
    <div className="container mx-auto p-4 bg-gray-900 text-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Side Card */}
        <Card className="bg-gray-800 row-span-2 hidden md:block border-gray-700">
          <div className="h-full flex items-center justify-center text-gray-400">
            Side Card
          </div>
        </Card>

        {/* Image Grid */}
        {images.map((image, index) => (
          <Card
            key={index}
            className="cursor-pointer overflow-hidden bg-gray-800 border-gray-700 transition-transform hover:scale-105"
            onClick={() => setSelectedImage(index)}
          >
            <div className="relative pb-[75%]"> {/* 4:3 aspect ratio */}
              <img
                src={image.url}
                alt={image.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 text-xs text-gray-200 font-semibold bg-gray-900 bg-opacity-70 px-2 py-1 rounded">
                {image.name}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <Card className="max-w-3xl max-h-full p-4 bg-gray-800 border-gray-700">
            <img
              src={images[selectedImage].url}
              alt={images[selectedImage].name}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </Card>
        </div>
      )}
    </div>
  )
}