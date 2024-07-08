import { useState, useEffect } from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';

function Home({ searchValue }) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortName, setSortName] = useState({
    id: 0,
    name: 'популярности ↓',
    sortName: 'rating',
    order: 'DESC',
  });

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://667be4be3c30891b865a7892.mockapi.io/pizzas?page=${currentPage}&limit=4&category=${categoryId}&sortBy=${
        sortName.sortName
      }&title=${searchValue}&order=${
        sortName.order === 'desc' ? 'desc' : 'asc'
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setItems(data);
        } else {
          setItems([]);
        }
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortName, searchValue, currentPage]);

  const skeletonBlocks = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const pizzasBlocks = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories
          value={categoryId}
          onChangeCategory={(id) => setCategoryId(id)}
        />
        <Sort value={sortName} onChangeSort={(i) => setSortName(i)} />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {isLoading ? skeletonBlocks : pizzasBlocks}
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
}

export default Home;
