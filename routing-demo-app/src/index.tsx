import React from 'react';
import ReactDOM from 'react-dom';

import { Layout } from './components/Layout';

import './index.css';

ReactDOM.render(
  <Layout>
    <header className="page-header">
      <h1>A Cool Company, Inc.</h1>
    </header>
    <nav className="main-menu">
      <ul>
        <li><a href="#" className="menu-link">Home</a></li>
        <li><a href="#" className="menu-link">About</a></li>
        <li><a href="#" className="menu-link">Contact</a></li>
      </ul>
    </nav>
    <main className="content">
      Content
    </main>
    <aside className="sidebar">
      Sidebar
    </aside>
    <footer className="page-footer">
      <small>&copy; {new Date().getFullYear()} A Cool Company, Inc. (formerly known as Contoso)</small>
    </footer>
  </Layout>,
  document.getElementById('root')
);
