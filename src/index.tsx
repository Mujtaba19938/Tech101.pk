import React, { createElement } from 'react';
import './index.css';
import { render } from 'react-dom';
import { App } from './App';
// Add meta tags for SEO
const meta = document.createElement('meta');
meta.name = 'description';
meta.content = 'Tech101 Pakistan - Launch your tech career with industry-relevant skills and training for the digital economy';
document.head.appendChild(meta);
// Add Open Graph tags
const ogTitle = document.createElement('meta');
ogTitle.setAttribute('property', 'og:title');
ogTitle.content = 'Tech101 Pakistan - Tech Education';
document.head.appendChild(ogTitle);
const ogDesc = document.createElement('meta');
ogDesc.setAttribute('property', 'og:description');
ogDesc.content = 'Industry-relevant skills and training for the digital economy in Pakistan';
document.head.appendChild(ogDesc);
render(<App />, document.getElementById('root'));