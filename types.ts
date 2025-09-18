// FIX: Import `ComponentType` from 'react' to resolve the "Cannot find namespace 'React'" error.
import type { ComponentType } from 'react';

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: ComponentType<{ className?: string }>;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}
