import { SupportedContentFormat, SupportedImageFormat, SupportedVectorFormat, SupportedStyleFormat, LayoutTemplate } from '../types';

export const SUPPORTED_FORMATS = {
  content: ['.md', '.docx', '.txt'] as SupportedContentFormat[],
  images: ['.jpg', '.png', '.tiff'] as SupportedImageFormat[],
  vectors: ['.svg'] as SupportedVectorFormat[],
  styles: ['.css', '.scss'] as SupportedStyleFormat[],
};

export const PLATFORM_REQUIREMENTS = {
  amazon: {
    coverDimensions: {
      width: 2560,
      height: 1600,
      minDPI: 300,
    },
    formats: ['mobi', 'epub'],
    maxFileSize: '650MB',
  },
};

export const LAYOUT_TEMPLATES: Record<string, LayoutTemplate> = {
  standard: {
    dimensions: {
      width: '6in',
      height: '9in',
    },
    margins: {
      inner: '0.75in',
      outer: '0.5in',
      top: '0.5in',
      bottom: '0.5in',
    },
  },
  mobile: {
    dimensions: {
      width: '320px',
      maxWidth: '100vw',
    },
    margins: {
      horizontal: '16px',
      vertical: '24px',
    },
  },
};