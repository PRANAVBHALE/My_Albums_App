import { Select } from "antd"

const SelectPage = (props) => {

  const {pageLimit} = props

  return(
    <Select
    defaultValue={pageLimit + " / page"}
    style={{ width: 120 }}
    onChange={(pageLimit) => props.onPageChange(pageLimit)}
    options={[
      { value: "20", label: "20 / page" },
      { value: "30", label: "30 / page" },
      { value: "50", label: "50 / page" },
      { value: "100", label: "100 / page" },
    ]}
  />
  )
}

export default SelectPage