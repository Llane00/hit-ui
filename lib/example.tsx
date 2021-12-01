import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, NavLink } from 'react-router-dom'

import { Layout, Header, Content, Footer, Aside } from './layout'
import Hello from './hello'
import IconDemo from './icon/demo'
import DialogDemo from './dialog/demo'
import LayoutDemo from './layout/demo'
import CheckboxDemo from './checkbox-list/demo'
import { FormExample as FormDemo } from './form/example'

import './example.scss'

ReactDOM.render(
  <Router>
    <Layout className="page-main-layout">
      <Header className="page-header">
        <NavLink to="/">
          <span className="logo">Hit-UI</span>
        </NavLink>
      </Header>
      <Layout>
        <Aside className="page-aside">
          <h2>
            <NavLink to="/">Components</NavLink>
          </h2>
          <ul>
            <li>
              <NavLink to="/icon">
                <div>Icon</div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dialog">
                <div>Dialog</div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/layout">
                <div>Layout</div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/checkbox-list">
                <div>checkbox-list</div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/form">
                <div>form</div>
              </NavLink>
            </li>
          </ul>
        </Aside>
        <Content className="page-content">
          <Route path="/" exact component={Hello} />
          <Route path="/icon" component={IconDemo} />
          <Route path="/dialog" component={DialogDemo} />
          <Route path="/layout" component={LayoutDemo} />
          <Route path="/checkbox-list" component={CheckboxDemo} />
          <Route path="/form" component={FormDemo} />

          <Footer className="page-footer">
            <p>
              &copy;{' '}
              <a href="https://github.com/Llane00" target="_blank">
                Llane00
              </a>
              , All rights reserved.
            </p>
          </Footer>
        </Content>
      </Layout>
    </Layout>
  </Router>,
  document.getElementById('root')
)
