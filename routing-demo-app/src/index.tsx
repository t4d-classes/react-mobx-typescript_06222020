import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

import { Layout } from './components/Layout';
import { HomePage } from './components/pages/home';
import { AboutPage } from './components/pages/about';
import { ContactPage } from './components/pages/contact';

import './index.css';

ReactDOM.render(
  <Router>
    <Layout>
      <header className="page-header">
        <h1>A Cool Company, Inc.</h1>
      </header>
      <nav className="main-menu">
        <ul>
          <li><Link to="/" className="menu-link">Home</Link></li>
          <li><Link to="/about" className="menu-link">About</Link></li>
          <li><Link to="/contact/42" className="menu-link">Contact</Link></li>
        </ul>
      </nav>
      <main className="content">
        <Switch>
          <Route path="/" exact><HomePage /></Route>
          <Route path="/about" exact><AboutPage /></Route>
          <Route path="/contact/:id" exact><ContactPage /></Route>
        </Switch>
      </main>
      <aside className="sidebar">
        Sidebar
      </aside>
      <footer className="page-footer">
        <small>&copy; {new Date().getFullYear()} A Cool Company, Inc. (formerly known as Contoso)</small>
      </footer>
    </Layout>
  </Router>,
  document.getElementById('root')
);
