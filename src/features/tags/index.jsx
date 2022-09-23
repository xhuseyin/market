import Box from "../../components/box";
import Title from "../../components/boxTitle";
import CheckboxGroup from "../../components/checkboxGroup";

const Tags = ({ title, data, value, onChange }) => {
  const mappedData = data.map((obj) => {
    return {
      id: obj.toLowerCase(),
      label: obj,
    };
  });

  return (
    <>
      <Title title={title} />
      <Box>
        <CheckboxGroup
          data={mappedData}
          onChange={onChange}
          value={value}
          placeholder="Search tag"
        />
      </Box>
    </>
  );
};

export default Tags;
