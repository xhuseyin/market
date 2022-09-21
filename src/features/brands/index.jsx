import Box from "../../components/box";
import Title from "../../components/boxTitle";
import CheckboxGroup from "../../components/checkboxGroup";

const Brands = ({ title, data, value, onChange }) => {
  const mappedData = data.map((obj) => {
    return {
      id: obj.slug,
      label: obj.name,
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
          placeholder="Search brand"
        />
      </Box>
    </>
  );
};

export default Brands;
