import React, { useState } from 'react';
import { ProjectDashboard } from './components/ProjectDashboard';
import type { Project } from './types';

function App() {
  const [project] = useState<Project>({
    id: '1',
    title: 'My First Book',
    author: 'Artawakes',
    illustrations: [],
    status: 'draft',
    created: new Date(),
    updated: new Date(),
  });

  const handleFileUpload = (file: File, type: 'content' | 'cover' | 'illustration') => {
    // Handle file upload logic here
    console.log(`Uploading ${type} file:`, file);
  };

  return (
    <ProjectDashboard
      project={project}
      onFileUpload={handleFileUpload}
    />
  );
}

export default App;