import React, { FC } from 'react'
import { Layout, Header, Content, Footer, Aside } from './index'
import './example.scss'

const LayoutExample: FC = () => {
  return (
    <div className="example-style">
      <div>layout example</div>
      <div>
        <h1>example 1</h1>
        <Layout style={{ height: 500 }} className="test1 test2">
          <Header>header</Header>
          <Content>content</Content>
          <Footer>footer</Footer>
        </Layout>
      </div>

      <div>
        <h1>example 2</h1>
        <Layout style={{ height: 500 }} className="test1 test2">
          <Header>header</Header>
          <Layout>
            <Aside>aside</Aside>
            <Content>content</Content>
          </Layout>
          <Footer>footer</Footer>
        </Layout>
      </div>

      <div>
        <h1>example 3</h1>
        <Layout style={{ height: 500 }} className="test1 test2">
          <Header>header</Header>
          <Layout>
            <Content>content</Content>
            <Aside>aside</Aside>
          </Layout>
          <Footer>footer</Footer>
        </Layout>
      </div>

      <div>
        <h1>example 4</h1>
        <Layout style={{ height: 500 }} className="test1 test2">
          <Aside>aside</Aside>
          <Layout>
            <Header>header</Header>
            <Content>content</Content>
            <Footer>footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  )
}

export default LayoutExample
