import { useState } from 'react';

function Categories() {
  const [activIndex, setActivIndex] = useState(0);
  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];
  const onClickCategory = (index) => {
    setActivIndex(index);
  };

  return (
    <div className='categories'>
      <div>
        {categories.map((value, index) => {
          return (
            <button
              key={value}
              onClick={() => {
                onClickCategory(index);
              }}
              className={activIndex === index ? 'active' : ''}
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
