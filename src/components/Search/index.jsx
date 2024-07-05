import styles from './search.module.scss';

function Search({ searchValue, setSearchValue }) {
  return (
    <div className={styles.root}>
      <svg
        className={styles.searchIicon}
        enableBackground='new 0 0 512 512'
        height='512px'
        id='Layer_1'
        version='1.1'
        viewBox='0 0 512 512'
        width='512px'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M503.866,477.974L360.958,335.052c28.725-34.544,46.017-78.912,46.017-127.336  c0-110.084-89.227-199.312-199.312-199.312C97.599,8.403,8.351,97.631,8.351,207.715c0,110.064,89.248,199.312,199.312,199.312  c48.435,0,92.792-17.292,127.336-46.017l142.908,142.922L503.866,477.974z M29.331,207.715c0-98.334,79.987-178.332,178.332-178.332  c98.325,0,178.332,79.998,178.332,178.332s-80.007,178.332-178.332,178.332C109.318,386.047,29.331,306.05,29.331,207.715z'
          fill='#37404D'
        />
      </svg>
      <input
        value={searchValue}
        className={styles.input}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder='Поиск пиццы...'
      />
      {searchValue && (
        <svg
          className={styles.closeIcon}
          onClick={() => setSearchValue('')}
          enableBackground='new 0 0 32 32'
          height='32px'
          id='Layer_1'
          version='1.1'
          viewBox='0 0 32 32'
          width='32px'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g>
            <polyline
              fill='none'
              points='   649,137.999 675,137.999 675,155.999 661,155.999  '
              stroke='#FFFFFF'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeMiterlimit='10'
              strokeWidth='2'
            />
            <polyline
              fill='none'
              points='   653,155.999 649,155.999 649,141.999  '
              stroke='#FFFFFF'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeMiterlimit='10'
              strokeWidth='2'
            />
            <polyline
              fill='none'
              points='   661,156 653,162 653,156  '
              stroke='#FFFFFF'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeMiterlimit='10'
              strokeWidth='2'
            />
          </g>
          <g>
            <path d='M11.312,12.766c0.194,0.195,0.449,0.292,0.704,0.292c0.255,0,0.51-0.097,0.704-0.292c0.389-0.389,0.389-1.02,0-1.409   L4.755,3.384c-0.389-0.389-1.019-0.389-1.408,0s-0.389,1.02,0,1.409L11.312,12.766z' />
            <path d='M17.407,16.048L28.652,4.793c0.389-0.389,0.389-1.02,0-1.409c-0.389-0.389-1.019-0.561-1.408-0.171L15.296,15   c0,0-0.296,0-0.296,0s0,0.345,0,0.345L3.2,27.303c-0.389,0.389-0.315,1.02,0.073,1.409c0.194,0.195,0.486,0.292,0.741,0.292   s0.528-0.097,0.722-0.292L15.99,17.458l11.249,11.255c0.194,0.195,0.452,0.292,0.706,0.292s0.511-0.097,0.705-0.292   c0.389-0.389,0.39-1.02,0.001-1.409L17.407,16.048z' />
          </g>
        </svg>
      )}
    </div>
  );
}

export default Search;
