import Add from '@/components/Add';
import CustomizeProducts from '@/components/CustomizeProducts';
import ProductImages from '@/components/ProductImages';

export default function SinglePage() {
 return (
  <section className='px-4 mt-5 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16'>
   {/* Image section */}
   <div className='w-full lg:w-1/2 lg:sticky top-20 h-max'>
    <ProductImages />
   </div>

   {/* Texts section */}
   <div className='w-full lg:w-1/2 flex flex-col gap-6'>
    <h2 className='text-4xl font-medium'>Product Name</h2>

    <p className='text-gray-500'>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolorem,
     suscipit sequi corrupti delectus iusto ratione minus. Modi dolorem quo
     voluptatem alias cum, officia repellat? Excepturi iste minus earum
     perspiciatis.
    </p>

    <div className='h-[2px] bg-gray-100' />

    <div className='flex items-center gap-4'>
     <h3 className='text-xl text-gray-500 line-through'>$59</h3>

     <h2 className='text-2xl font-medium'>$49</h2>
    </div>

    <div className='h-[2px] bg-gray-100' />

    <CustomizeProducts />

    <Add />

    <div className='h-[2px] bg-gray-100' />

    <div className='text-sm'>
     <h4 className='font-medium mb-4'>Title</h4>

     <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
      perspiciatis non eligendi laborum sapiente eius iusto, a commodi quidem
      architecto? Quos reiciendis minus ipsa excepturi aliquam ab ut modi
      expedita.
     </p>
    </div>
    <div className='text-sm'>
     <h4 className='font-medium mb-4'>Title</h4>

     <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
      perspiciatis non eligendi laborum sapiente eius iusto, a commodi quidem
      architecto? Quos reiciendis minus ipsa excepturi aliquam ab ut modi
      expedita.
     </p>
    </div>
    <div className='text-sm'>
     <h4 className='font-medium mb-4'>Title</h4>

     <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
      perspiciatis non eligendi laborum sapiente eius iusto, a commodi quidem
      architecto? Quos reiciendis minus ipsa excepturi aliquam ab ut modi
      expedita.
     </p>
    </div>
   </div>
  </section>
 );
}
