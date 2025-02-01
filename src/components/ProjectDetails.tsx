"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import type { Project } from "../types/project"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X, ExternalLink, Github, Maximize2, Monitor, ChevronLeft, ChevronRight } from "lucide-react"

interface ProjectDetailsProps {
  project: Project
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null)

  const openFullscreen = (image: string, index: number) => {
    setSelectedImage(image)
    setCurrentImageIndex(index)
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (currentImageIndex === null) return
    const newIndex =
      direction === "next"
        ? (currentImageIndex + 1) % project.images.length
        : (currentImageIndex - 1 + project.images.length) % project.images.length
    setSelectedImage(project.images[newIndex])
    setCurrentImageIndex(newIndex)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-16 px-4">
      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            onClick={() => {
              setSelectedImage(null)
              setCurrentImageIndex(null)
            }}
            className="absolute top-4 right-4 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            aria-label="Close fullscreen image"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            onClick={() => navigateImage("prev")}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => navigateImage("next")}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="relative w-[90vw] h-[90vh]">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Project screenshot"
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        </div>
      )}

      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mt-12 mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 pb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            {project.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{project.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-7">
            <Card className="bg-gray-800 border-gray-700 shadow-lg">
              <CardContent className="p-6">
                {/* Technologies Section */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-100">Technologies Used</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="bg-blue-900 text-gray-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features Section */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-100">Key Features</h2>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 mt-2 mr-2 bg-blue-400 rounded-full flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  {project.liveUrl && (
                    <Button asChild className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Monitor className="w-4 h-4" />
                        View Live
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button asChild variant="outline" className="flex items-center gap-2">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        View Source
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Image Gallery */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {project.images.map((image, index) => (
                <div key={index} className="group relative aspect-video rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} screenshot ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <button
                    onClick={() => openFullscreen(image, index)}
                    className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100"
                    aria-label={`View ${project.title} screenshot ${index + 1} fullscreen`}
                  >
                    <Maximize2 className="w-8 h-8 text-white" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className="bg-gray-800 border-gray-700 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-100">Project Details</h2>
              <p className="text-gray-300">{project.longDescription}</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-100">Challenges & Solutions</h2>
              <p className="text-gray-300">{project.challenges}</p>
            </CardContent>
          </Card>
        </div>

        {/* Future Improvements */}
        <Card className="bg-gray-800 border-gray-700 shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-100">Future Improvements</h2>
            <p className="text-gray-300">{project.futureImprovements}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ProjectDetails

