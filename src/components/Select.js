import { Select } from "antd";
import { useContext } from "react";
import { MyContext } from "./AppContext";

const onSearch = (value) => {
  console.log("search:", value);
};
const SelectBox = () => {
  const { setCurrentCity, currentCity } = useContext(MyContext);

  const onChange = (value) => {
    setCurrentCity(value);
  };

  console.log(currentCity);

  return (
    <Select
      style={{ marginTop: "5px" }}
      showSearch
      placeholder="Select a city"
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option) =>
        (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
      }
      options={[
        {
          value: "Chennai",
          label: "Chennai",
        },
        {
          value: "Mumbai",
          label: "Mumbai",
        },
        {
          value: "Kolkata",
          label: "Kolkata",
        },
        {
          value: "Hosur",
          label: "Hosur",
        },
        {
          value: "Bangalore",
          label: "Bangalore",
        },
      ]}
    />
  );
};
export default SelectBox;
