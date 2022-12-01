import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import 'normalize.css';
import './index.css';

const rootNode = document.getElementById('app')!;
createRoot(rootNode).render(<App />);