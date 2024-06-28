function Categories({ value, onChangeCategory }) {
  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'С курицей',
  ];

  return (
    <div className='categories'>
      <div>
        {categories.map((categoryName, index) => {
          return (
            <button
              key={categoryName}
              onClick={() => onChangeCategory(index)}
              className={value === index ? 'active' : ''}
            >
              {categoryName}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
