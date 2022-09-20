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


const Home = () => {
  const [selectedSorting, setSelectedSorting] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    filteredData.sort(handleSorting(selectedSorting));    
  }, [selectedSorting]);

  const handleSorting = (property) => {
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
  }

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
        </Aside>
        <Main></Main>
        <Aside></Aside>
      </Content>
      <Footer></Footer>
    </>
  );
};

export default Home;
