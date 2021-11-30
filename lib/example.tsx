import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, NavLink } from 'react-router-dom'

import { Layout, Header, Content, Footer, Aside } from './layout'
import Hello from './hello'
import IconDemo from './icon/demo'
import DialogDemo from './dialog/demo'
import LayoutDemo from './layout/demo'
import CheckboxDemo from './checkbox-list/demo'

import './example.scss'

ReactDOM.render(
  <Router>
    <Layout className="page-main-layout">
      <Header className="page-header">
        <NavLink to="/">
          <span className="logo">Hit-ui</span>
        </NavLink>
      </Header>
      <Layout>
        <Aside className="page-aside">
          <h2>
            <NavLink to="/">Components</NavLink>
          </h2>
          <ul>
            <li>
              <NavLink to="/icon">Icon</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">Dialog</NavLink>
            </li>
            <li>
              <NavLink to="/layout">Layout</NavLink>
            </li>
            <li>
              <NavLink to="/checkbox-list">checkbox-list</NavLink>
            </li>
          </ul>
        </Aside>
        <Content className="page-content">
          <Route path="/" exact component={Hello} />
          <Route path="/icon" component={IconDemo} />
          <Route path="/dialog" component={DialogDemo} />
          <Route path="/layout" component={LayoutDemo} />
          <Route path="/checkbox-list" component={CheckboxDemo} />

          <Footer className="page-footer">
            <p>&copy; Llane00, All rights reserved.</p>
            <p>
              <a href="https://github.com/Llane00" target="_blank">
                https://github.com/Llane00
              </a>
            </p>
            <p>bluetinestyle@126.com</p>
          </Footer>
        </Content>
      </Layout>
    </Layout>
  </Router>,
  document.getElementById('root')
)
