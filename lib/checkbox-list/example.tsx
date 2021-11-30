import React, { useCallback, useState } from 'react'
import { CheckboxList } from './checkbox-list'
import testData from './__test__/testData'

export default function () {
  const [dataList, setDataList] = useState(
    [] as Array<{ id: number; [key: string]: string | number }>
  )

  const getCheckedData = useCallback((data) => {
    setDataList(data)
    console.log(data)
  }, [])

  return (
    <div>
      <h2>checkbox list example</h2>

      <div className="checkbox-list-example-main">
        <div className="checkbox-list-ct">
          <CheckboxList
            data={testData}
            headerCells={['选择', 'ID', '姓名', '得分', '删除']}
            allCheckedTip={{
              all: '全部选择',
              none: '全部撤销',
            }}
            onCheckedDataChange={getCheckedData}
          ></CheckboxList>
        </div>

        <div className="data-list-ct">
          <h2>选中的内容：</h2>
          <ul>
            {dataList && dataList.length > 0 ? (
              dataList.map((item) => {
                return (
                  <li key={item.id}>
                    {item.id}-{item.name}-{item.score}
                  </li>
                )
              })
            ) : (
              <p>暂无数据</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
