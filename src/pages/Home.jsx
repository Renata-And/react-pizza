import { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';
import { setCategoryId } from '../redux/slises/filterSlice';

function Home() {
  const dispatch = useDispatch();
  const { categoryId, sort } = useSelector((state) => state.filter);

  const { searchValue } = useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const onChangeCategory = (id) => {
    console.log(id);
    dispatch(setCategoryId(id));
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://667be4be3c30891b865a7892.mockapi.io/pizzas?page=${currentPage}&limit=4&category=${categoryId}&sortBy=${
        sort.sortName
      }&title=${searchValue}&order=${sort.order === 'desc' ? 'desc' : 'asc'}`
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
  }, [categoryId, sort, searchValue, currentPage]);

  const skeletonBlocks = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const pizzasBlocks = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
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
