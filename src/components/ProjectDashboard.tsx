import { Book, Image, FileText, Settings } from 'lucide-react';
import { Button } from './ui/button';
import { FileUpload } from './FileUpload';
import { SUPPORTED_FORMATS } from '../config/constants';
import type { Project } from '../types';

interface ProjectDashboardProps {
  project: Project;
  onFileUpload: (file: File, type: 'content' | 'cover' | 'illustration') => void;
}

export function ProjectDashboard({ project, onFileUpload }: ProjectDashboardProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{project.title}</h1>
              <p className="mt-1 text-sm text-gray-500">by {project.author}</p>
            </div>
            <Button>
              <Settings className="mr-2 h-4 w-4" />
              Project Settings
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Content Upload */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <Book className="h-6 w-6 text-primary mr-2" />
              <h2 className="text-lg font-semibold">Content</h2>
            </div>
            <FileUpload
              onFileAccepted={(file) => onFileUpload(file, 'content')}
              acceptedFileTypes={SUPPORTED_FORMATS.content}
            />
          </div>

          {/* Cover Upload */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <Image className="h-6 w-6 text-primary mr-2" />
              <h2 className="text-lg font-semibold">Cover Image</h2>
            </div>
            <FileUpload
              onFileAccepted={(file) => onFileUpload(file, 'cover')}
              acceptedFileTypes={SUPPORTED_FORMATS.images}
            />
          </div>

          {/* Illustrations Upload */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <FileText className="h-6 w-6 text-primary mr-2" />
              <h2 className="text-lg font-semibold">Illustrations</h2>
            </div>
            <FileUpload
              onFileAccepted={(file) => onFileUpload(file, 'illustration')}
              acceptedFileTypes={[...SUPPORTED_FORMATS.images, ...SUPPORTED_FORMATS.vectors]}
            />
          </div>
        </div>
      </main>
    </div>
  );
}