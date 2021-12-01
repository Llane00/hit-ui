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
      <div className="checkbox-list-example-content">
        <div className="checkbox-list-content">
          <CheckboxList
            data={testData}
            headerCells={['select', 'ID', 'Name', 'Score', 'delete']}
            allCheckedTip={{
              all: 'Select all',
              none: 'Cancel all',
            }}
            onCheckedDataChange={getCheckedData}
          ></CheckboxList>
        </div>

        <div className="data-list-content">
          <h2>selected data：</h2>
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
              <p>no data</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
