import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';
import { Button } from './ui/button';

interface FileUploadProps {
  onFileAccepted: (file: File) => void;
  acceptedFileTypes: string[];
  maxSize?: number;
}

export function FileUpload({ onFileAccepted, acceptedFileTypes, maxSize = 5242880 }: FileUploadProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onFileAccepted(acceptedFiles[0]);
    }
  }, [onFileAccepted]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: acceptedFileTypes.reduce((acc, type) => ({ ...acc, [type]: [] }), {}),
    maxSize,
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
        ${isDragActive ? 'border-primary bg-primary/5' : 'border-gray-300 hover:border-primary'}`}
    >
      <input {...getInputProps()} />
      <Upload className="mx-auto h-12 w-12 text-gray-400" />
      <p className="mt-2 text-sm text-gray-600">
        {isDragActive ? (
          'Drop the file here...'
        ) : (
          <>
            Drag & drop a file here, or{' '}
            <Button variant="link" className="p-0">browse</Button>
          </>
        )}
      </p>
      <p className="mt-1 text-xs text-gray-500">
        Supported formats: {acceptedFileTypes.join(', ')}
      </p>
    </div>
  );
}