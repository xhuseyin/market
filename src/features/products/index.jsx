import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/actions/basket";

// Components
import Title from "../../components/boxTitle";
import Grid from "../../components/grid";
import ProductFilter from "../../components/productFilter";
import ProductPager from "../../components/productPager";
import ProductTile from "../../components/productTile";
import EmptyResult from "../../components/emptyResult";

const Products = ({
  data,
  relatedTypes,
  selectedTypes,
  selectType,
  itemCount,
}) => {
  const dispatch = useDispatch();
  const [rangeStart, setRangeStart] = useState(null);
  const [rangeEnd, setRangeEnd] = useState(null);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    setRangeStart(activePage * itemCount - itemCount);
    setRangeEnd(activePage * itemCount);
  }, [activePage, itemCount]);

  return (
    <>
      <Title size="md" title="Products" />
      {data.length > 0 ? (
        <>
          <ProductFilter
            relatedTypes={relatedTypes}
            selectedTypes={selectedTypes}
            selectType={selectType}
          />
          <Grid>
            {data.map((item, index) => (
              <React.Fragment key={index}>
                {index >= rangeStart && index + 1 <= rangeEnd && (
                  <ProductTile
                    label={item.name}
                    price={item.price}
                    onClick={() => dispatch(addItem(item))}
                  />
                )}
              </React.Fragment>
            ))}
          </Grid>
          <ProductPager
            dataCount={data.length}
            itemCount={16}
            activePage={activePage}
            onChange={(val) => setActivePage(val)}
          />
        </>
      ) : (
        <EmptyResult label="No results found" />
      )}
    </>
  );
};

export default Products;
