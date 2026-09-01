import React from 'react';
import { DropZone } from './DropZone';

export const HomeDropZone: React.FC = () => {
  const handleFileLoaded = (file: File) => {
    // Redirect to crop-image tool or store file session
    window.location.href = '/crop-image';
  };

  return (
    <DropZone
      onFileLoaded={handleFileLoaded}
      title="Drop an image to start editing"
      subtitle="or choose a file from your device • 100% In-Browser"
    />
  );
};
