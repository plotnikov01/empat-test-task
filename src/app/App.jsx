import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { Home, Layout, ProductPage } from 'src/features';
import { AuthorHeader, Header } from 'src/components';

import { productsData } from 'src/constants/productsData';

import { useWindowWidth } from 'src/hooks/useWindowWidth';

import './app.scss';

export const App = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [activeSortingOption, setActiveSortingOption] = useState(null);
  const windowWidth = useWindowWidth();

  const filterProducts = () => {
    let filteredProductsCopy = [...productsData];

    if (selectedBrands.length > 0) {
      filteredProductsCopy = filteredProductsCopy.filter((product) =>
        selectedBrands.includes(product.brand),
      );
    }

    filteredProductsCopy = filteredProductsCopy.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1],
    );

    setFilteredProducts(filteredProductsCopy);

    return filteredProductsCopy;
  };

  const handleLowToHigh = () => {
    setFilteredProducts([...filteredProducts].sort((a, b) => a.price - b.price));
    setActiveSortingOption('lowToHigh');
  };

  const handleHighToLow = () => {
    setFilteredProducts([...filteredProducts].sort((a, b) => b.price - a.price));
    setActiveSortingOption('highToLow');
  };

  useEffect(() => {
    if (windowWidth > 820) {
      setIsMenuOpen(true);
    }
  }, [windowWidth]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <div className="App">
      <AuthorHeader />
      <Header
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        handleLowToHigh={handleLowToHigh}
        handleHighToLow={handleHighToLow}
        activeSortingOption={activeSortingOption}
      />
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <Home
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                setSelectedBrands={setSelectedBrands}
                isMenuOpen={isMenuOpen}
                filterProducts={filterProducts}
                filteredProducts={filteredProducts}
                handleLowToHigh={handleLowToHigh}
                handleHighToLow={handleHighToLow}
                activeSortingOption={activeSortingOption}
              />
            }
          />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};
