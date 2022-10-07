import Head from 'next/head'
import Image from 'next/future/image'
import styles from '../styles/Home.module.css'

const IMAGE_URL = "https://picsum.photos/200/200"
const IMAGE_URL2 = "https://picsum.photos/450/450"
const imageStyle =  { width: '100%', height: 'auto', borderRadius: 20}
const IMAGE_PROPS = {
  width: "420",
  height:"200",
  style: imageStyle
}
export default function Home() {
  return (
    <div className='px-8 pt-4'>
      <section className="mb-[5vh]">
        <div className='grid sm:grid-cols-1 md:grid-cols-2 h-full'>
          <div className='not-prose'>
            <span>author name</span>
            <h2 className='text-[40px] font-bold'> title here</h2>
            <p className='text-xl'>short description about articles</p>

          </div>
          <div>
            <Image src={IMAGE_URL2} {...IMAGE_PROPS} style={{ height: 'auto', borderRadius: 20}}/>
          </div>
        </div>
      </section>
      
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8  place-item-start justify-items-stretch'>
        <div className=''>
          <Image src={IMAGE_URL} width="200" height="200" style={{ width: '100%', height: 'auto'}} />
          <h3>title</h3> 
          <p>short description</p>
        </div>
        <div className=''>
          <Image src={IMAGE_URL} width="200" height="200" style={{ width: '100%', height: 'auto'}} />
          <h3>title</h3> 
          <p>short description</p>
        </div>
        <div className=''>
          <Image src={IMAGE_URL} width="200" height="200" style={{ width: '100%', height: 'auto'}} />
          <h3>title</h3> 
          <p>short description</p>
        </div>
        <div className=''>
          <Image src={IMAGE_URL} width="200" height="200" style={{ width: '100%', height: 'auto'}} />
          <h3>title</h3> 
          <p>short description</p>
        </div>
        <div className=''>
          <Image src={IMAGE_URL} width="200" height="200" style={{ width: '100%', height: 'auto'}} />
          <h3>title</h3> 
          <p>short description</p>
        </div>
        <div className=''>
          <Image src={IMAGE_URL} width="200" height="200" style={{ width: '100%', height: 'auto'}} />
          <h3>title</h3> 
          <p>short description</p>
        </div>
        <div className=''>
          <Image src={IMAGE_URL} width="200" height="200" style={{ width: '100%', height: 'auto'}} />
          <h3>title</h3> 
          <p>short description</p>
        </div>
        <div className=''>
          <Image src={IMAGE_URL} width="200" height="200" style={{ width: '100%', height: 'auto'}} />
          <h3>title</h3> 
          <p>short description</p>
        </div>
      </div>
    </div>
  )
}
