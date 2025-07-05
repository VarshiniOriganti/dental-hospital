// Define Metadata type
export interface Metadata {
  title: string;
  description: string;
  keywords?: string[];
  authors?: Array<{ name: string }>;
  openGraph?: {
    title: string;
    description: string;
    type: string;
  };
}

export const dentalImplantsMetadata: Metadata = {
  title: 'Dental Implants | Galaxy Dental',
  description: 'Professional dental implant services to restore your smile and confidence.',
  keywords: ['dental implants', 'teeth replacement', 'dental surgery', 'cosmetic dentistry'],
  authors: [{ name: 'Galaxy Dental Team' }],
  openGraph: {
    title: 'Dental Implants | Galaxy Dental',
    description: 'Professional dental implant services to restore your smile and confidence.',
    type: 'website',
  },
}
