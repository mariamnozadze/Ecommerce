import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import customSchemas from './schemas/schema'; 

export default defineConfig({
  name: 'default',
  title: 'ecommerce',

  projectId: 'n1mj5bxs',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: customSchemas,
  },
});
