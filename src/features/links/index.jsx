import Link from "../../components/link";

const Links = () => {
  const links = [
    {
      id: 1,
      label: "©2019 Market",
    },
    {
      id: 2,
      label: "Privacy Policy",
    },
  ];

  return (
    <>
      {links.map((item, index) => (
        <Link label={item.label} key={index} />
      ))}
    </>
  );
};

export default Links;
