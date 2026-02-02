// Added React import to resolve the React namespace issue in non-JSX files
import React from 'react';

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface ToolCategory {
  name: string;
  tools: string[];
  color: string;
}

export enum SectionType {
  HERO = 'HERO',
  FEATURES = 'FEATURES',
  TOOLS = 'TOOLS',
  TESTIMONIALS = 'TESTIMONIALS',
  CTA = 'CTA'
}