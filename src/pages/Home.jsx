import { useState, useEffect } from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortName, setSortName] = useState({
    id: 0,
    name: 'популярности ↓',
    sortName: 'rating',
    order: 'DESC',
  });

  useEffect(() => {
    console.log(sortName.order);
    setIsLoading(true);
    fetch(
      `https://667be4be3c30891b865a7892.mockapi.io/pizzas?category=${categoryId}&sortBy=${
        sortName.sortName
      }&order=${sortName.order === 'desc' ? 'desc' : 'asc'}`
    )
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortName]);

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
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

export default Home;
