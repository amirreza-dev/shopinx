export default function Filter() {
 return (
  <div className='mt-12 flex justify-between'>
   <div className='flex flex-wrap gap-6'>
    <select
     name='type'
     id=''
     className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]'
    >
     <option>Type</option>
     <option value='physical'>Physical</option>
     <option value='digital'>Digital</option>
    </select>

    <input
     type='text'
     name='min'
     placeholder='min price'
     className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400'
    />

    <input
     type='text'
     name='max'
     placeholder='max price'
     className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400'
    />

    <select
     name='type'
     id=''
     className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]'
    >
     <option>Type</option>
     <option value='physical'>Physical</option>
     <option value='digital'>Digital</option>
    </select>

    <select
     name='type'
     id=''
     className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]'
    >
     <option>Color</option>
     <option value=''>Test</option>
    </select>

    <select
     name='ribon'
     id=''
     className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]'
    >
     <option>Category</option>
     <option value=''>New Arrival</option>
     <option value=''>Popular</option>
    </select>

    <select
     name='type'
     id=''
     className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]'
    >
     <option>All Filters</option>
    </select>
   </div>

   <div className=''>
    <select
     name=''
     id=''
     className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]'
    >
     <option>Sort By</option>
     <option value=''>Price (low to high)</option>
     <option value=''>Price (high to low)</option>
     <option value=''>Newest</option>
     <option value=''>Oldest</option>
    </select>
   </div>
  </div>
 );
}
