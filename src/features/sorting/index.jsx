import Box from "../../components/box";
import BoxTitle from "../../components/boxTitle";
import RadioGroup from "../../components/radioButtonGroup";

const Sorting = ({ title, data, value, onChange }) => {
  return (
    <>
      <BoxTitle title={title} />
      <Box>
        <RadioGroup data={data} value={value} onChange={onChange} />
      </Box>
    </>
  );
}

export default Sorting;