import Image from 'next/image';
const TopLeftImg = () => {
  return <div className='absolute top-0 left-0 mix-blend-color-dodge z-10 w-[400px] opacity-80 '>
    <Image src='/top-left-img.png' width={400} height={400} alt='top-left-img' />
  </div>;
};

export default TopLeftImg;
