import React, { useEffect, useState } from "react";

// Components
import Logo from "../../components/logo";
import Header from "../../components/header";
import Content from "../../components/content";
import Aside from "../../components/aside";
import Main from "../../components/main";
import Footer from "../../components/footer";
import TotalBox from "../../components/totalBox";

// Features
import Sorting from "../../features/sorting";
import sortingOptions from "../../features/sorting/options.js";
import Brands from "../../features/brands";
import Tags from "../../features/tags";
import Products from "../../features/products";
import Links from "../../features/links";
import Basket from "../../features/basket";

const Home = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSorting, setSelectedSorting] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [tags, setTags] = useState([]);
  const [relatedTypes, setRelatedTypes] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    getCompanies();
    getItems();
  }, []);

  useEffect(() => {
    filteredData.sort(handleSortingClick(selectedSorting));
  }, [selectedSorting]);

  useEffect(() => {
    let brandFilterResult = [];
    let tagFilterResult = [];
    let typeFilterResult = [];

    if (selectedBrands.length > 0) {
      items.forEach((item) => {
        if (selectedBrands.includes(item.manufacturer)) {
          brandFilterResult.push(item);
        }
      });
    } else {
      brandFilterResult = [...items];
    }

    if (selectedTags.length > 0) {
      brandFilterResult.forEach((item) => {
        let tagCheck = false;
        item.tags.forEach((tag) => {
          if (selectedTags.includes(tag.toLowerCase())) {
            tagCheck = true;
          }
        });
        if (tagCheck) {
          tagFilterResult.push(item);
        }
      });
    } else {
      tagFilterResult = brandFilterResult;
    }

    const types = [];
    tagFilterResult.forEach((result) => {
      const found = types.find((item) => item === result.itemType);
      if (!found) {
        types.push(result.itemType);
      }
    });
    setRelatedTypes(types);
    if (selectedTypes.length === 0) {
      setSelectedTypes(types);
    }

    if (selectedTypes.length > 0) {
      tagFilterResult.forEach((item) => {
        if (selectedTypes.includes(item.itemType)) {
          typeFilterResult.push(item);
        }
      });
    } else {
      typeFilterResult = tagFilterResult;
    }

    setFilteredData(typeFilterResult);
  }, [selectedBrands, selectedTags, selectedTypes, items]);

  const getCompanies = () => {
    fetch(`https://market-api-v4.herokuapp.com/companies`)
      .then((response) => response.json())
      .then((data) => {
        setCompanies(data);
      });
  }

  const getItems = () => {
    fetch(`https://market-api-v4.herokuapp.com/items`)
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        getTags(data);
      });
  }

  const getTags = (data) => {
    const tagsData = [];
    data.forEach((item) => {
      item.tags.forEach((tag) => {
        if (!tagsData.includes(tag)) {
          tagsData.push(tag);
        }
      });
    });
    setTags(tagsData.sort());
  };

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

  const handleTagsClick = (val) => {
    let newSelectedTags = [...selectedTags];
    const found = newSelectedTags.find((item) => item === val);
    if (found) {
      newSelectedTags = newSelectedTags.filter((item) => item !== val);
    } else {
      newSelectedTags.push(val);
    }
    setSelectedTags(newSelectedTags);
  };

  const onSelectType = (val) => {
    let newSelectedTypes = [...selectedTypes];
    const found = newSelectedTypes.find((item) => item === val);
    if (found) {
      newSelectedTypes = newSelectedTypes.filter((item) => item !== val);
    } else {
      newSelectedTypes.push(val);
    }
    setSelectedTypes(newSelectedTypes);
  };

  return (
    <>
      <Header center={<Logo />} right={<TotalBox/>} />
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
          <Tags
            title="Tags"
            data={tags}
            value={selectedTags}
            onChange={(val) => handleTagsClick(val)}
          />
        </Aside>
        <Main>
          <Products
            data={filteredData}
            itemCount={16}
            relatedTypes={relatedTypes}
            selectedTypes={selectedTypes}
            selectType={(val) => onSelectType(val)}
          />
        </Main>
        <Aside>
          <Basket/>
        </Aside>
      </Content>
      <Footer>
        <Links />
      </Footer>
    </>
  );
};

export default Home;
