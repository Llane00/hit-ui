import React from 'react'
import ReactDOM from 'react-dom'
import IconExample from './icon/example'
import DialogExample from './dialog/example'
import LayoutExample from './layout/example'
import { Layout, Header, Content, Footer, Aside } from '../lib/layout'

ReactDOM.render(
  <Layout>
    <Aside>组件列表</Aside>
    <Layout>
      <Header>Hit-UI</Header>
      <Content>
        <IconExample></IconExample>
        <LayoutExample></LayoutExample>
        <DialogExample></DialogExample>
      </Content>
      <Footer>By Llane00</Footer>
    </Layout>
  </Layout>,
  document.getElementById('root')
)
