import React from 'react'
import Scroll from './scroll'
import './example.scss'

const ScrollExample: React.FC = (props) => {
  return (
    <div>
      <h1># example 1</h1>
      <Scroll
        className="scroll-example-1"
        style={{
          width: '400px',
          height: '200px',
          border: '1px solid #eee',
          borderRadius: '2px',
        }}
      >
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <p>10</p>
        <p>11</p>
        <p>12</p>
        <p>13</p>
        <p>14</p>
        <p>15</p>
        <p>16</p>
        <p>17</p>
        <p>18</p>
        <p>19</p>
        <p>20</p>
      </Scroll>
    </div>
  )
}

export default ScrollExample
