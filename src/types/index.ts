export type SupportedContentFormat = '.md' | '.docx' | '.txt';
export type SupportedImageFormat = '.jpg' | '.png' | '.tiff';
export type SupportedVectorFormat = '.svg';
export type SupportedStyleFormat = '.css' | '.scss';

export interface Project {
  id: string;
  title: string;
  author: string;
  coverImage?: string;
  content?: string;
  illustrations: string[];
  status: 'draft' | 'processing' | 'ready';
  created: Date;
  updated: Date;
}

export interface LayoutTemplate {
  dimensions: {
    width: string;
    height?: string;
    maxWidth?: string;
  };
  margins: {
    inner?: string;
    outer?: string;
    top?: string;
    bottom?: string;
    horizontal?: string;
    vertical?: string;
  };
}