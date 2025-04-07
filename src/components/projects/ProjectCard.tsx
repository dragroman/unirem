import { Button } from "@/components/ui/button"
import { Project } from "@/data/projects"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-64">
        <div className="absolute inset-0 bg-gray-300"></div>
        <div className="absolute top-4 left-4 bg-primary text-white text-sm font-medium py-1 px-3 rounded">
          {project.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">{project.year} год</span>
          <Button variant="link" className="font-medium">
            Подробнее
          </Button>
        </div>
      </div>
    </div>
  )
}
