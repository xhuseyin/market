import React, { useEffect, useState } from "react";

// Components
import Logo from "../../components/logo";
import Header from "../../components/header";
import Content from "../../components/content";
import Aside from "../../components/aside";
import Main from "../../components/main";
import Footer from "../../components/footer";

// Features
import Sorting from "../../features/sorting";
import sortingOptions from "../../features/sorting/options.js";
import Brands from "../../features/brands";

// Services
import companies from "../../api/mocks/companies.json";

const Home = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSorting, setSelectedSorting] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    filteredData.sort(handleSortingClick(selectedSorting));
  }, [selectedSorting]);

  const handleSortingClick = (property) => {
    let newFilteredData = [...filteredData];
    if (property === "lowToHigh") {
      newFilteredData = newFilteredData.sort((a, b) => a.price - b.price);
    } else if (property === "highToLow") {
      newFilteredData = newFilteredData.sort((a, b) => b.price - a.price);
    } else if (property === "newToOld") {
      newFilteredData = newFilteredData.sort((a, b) => b.added - a.added);
    } else if (property === "oldToNew") {
      newFilteredData = newFilteredData.sort((a, b) => a.added - b.added);
    }
    setFilteredData(newFilteredData);
  };

  const handleBrandsClick = (val) => {
    let newSelectedBrands = [...selectedBrands];
    const found = newSelectedBrands.find((item) => item === val);
    if (found) {
      newSelectedBrands = newSelectedBrands.filter((item) => item !== val);
    } else {
      newSelectedBrands.push(val);
    }
    setSelectedBrands(newSelectedBrands);
  };

  return (
    <>
      <Header center={<Logo />} />
      <Content>
        <Aside>
          <Sorting
            title="Sorting"
            data={sortingOptions}
            value={selectedSorting}
            onChange={(val) => setSelectedSorting(val)}
          />
          <Brands
            title="Brands"
            data={companies}
            value={selectedBrands}
            onChange={(val) => handleBrandsClick(val)}
          />
        </Aside>
        <Main></Main>
        <Aside></Aside>
      </Content>
      <Footer></Footer>
    </>
  );
};

export default Home;
