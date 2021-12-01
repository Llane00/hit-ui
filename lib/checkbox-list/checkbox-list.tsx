import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { Checkbox } from '../../lib/checkbox/checkbox'
import { Button } from '../../lib/button/button'
import './checkbox-list.scss'

type dataItem = {
  id: number
  [key: string]: number | string
}

interface IProps {
  data: Array<dataItem>
  headerCells: Array<string>
  allCheckedTip: { [key: string]: string }
  onCheckedDataChange: (data: Array<dataItem>) => void
}

export const CheckboxList: FC<IProps> = ({
  data,
  headerCells,
  allCheckedTip,
  onCheckedDataChange,
  children,
  ...restProps
}) => {
  const [checkedData, setCheckedData] = useState([] as Array<dataItem>)
  const [originData, setOriginData] = useState(data)
  const dataProps = Object.keys(originData[0])

  const allCheckedText = useMemo(() => {
    if (checkedData.length >= 0 && checkedData.length < originData.length) {
      return allCheckedTip.all || 'Select all'
    }
    return allCheckedTip.none || 'Cancel all'
  }, [checkedData])

  useEffect(() => {
    onCheckedDataChange(checkedData)
  }, [checkedData])

  const setAllChecked = useCallback(
    (e) => {
      const _checked = e.target.checked
      setCheckedData(_checked ? originData : [])
    },
    [originData]
  )

  const setSingleChange = useCallback((e, item: dataItem) => {
    const _checked = e.target.checked
    setCheckedData((checkedData) =>
      _checked
        ? [...checkedData, item]
        : checkedData.filter((data) => data.id !== item.id)
    )
  }, [])

  const removeItem = useCallback((id: number) => {
    setOriginData((originData) => originData.filter((item) => item.id !== id))
    setCheckedData((checkedData) =>
      checkedData.filter((item) => item.id !== id)
    )
  }, [])

  return (
    <div>
      <table>
        {headerCells && (
          <thead>
            <tr>
              <td colSpan={headerCells.length}>
                <Checkbox
                  checked={checkedData.length === originData.length}
                  onChange={(e) => setAllChecked(e)}
                >
                  {allCheckedText}
                </Checkbox>
              </td>
            </tr>
            <tr>
              {headerCells.map((item) => (
                <th key={item}>{item}</th>
              ))}
            </tr>
          </thead>
        )}

        <tbody>
          {originData.map((item) => (
            <tr key={item.id}>
              <td>
                <Checkbox
                  checked={checkedData.some(
                    (data: dataItem) => data.id === item.id
                  )}
                  onChange={(e) => setSingleChange(e, item)}
                ></Checkbox>
              </td>
              {dataProps.map((prop) => (
                <td key={prop}>{item[prop]}</td>
              ))}
              <td>
                <Button styleType="warn" onClick={() => removeItem(item.id)}>
                  delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
