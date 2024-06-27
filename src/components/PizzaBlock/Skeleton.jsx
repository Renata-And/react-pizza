import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className='pizza-block'
    speed={2}
    width={280}
    height={466}
    viewBox='0 0 280 466'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <circle cx='135' cy='125' r='118' />
    <rect x='-2' y='270' rx='10' ry='10' width='280' height='27' />
    <rect x='2' y='313' rx='10' ry='10' width='280' height='88' />
    <rect x='0' y='425' rx='10' ry='10' width='90' height='30' />
    <rect x='132' y='419' rx='25' ry='25' width='152' height='45' />
  </ContentLoader>
);

export default Skeleton;
