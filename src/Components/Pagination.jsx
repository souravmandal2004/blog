import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Pagination() {

  const {page, totalPages, handlePageChange} = useContext (AppContext);

  return (
    <div className='w-full flex justify-center items-center border py-4 fixed bottom-0 bg-white dark:bg-black'>
      <div className='flex w-11/12 max-w-[700px] justify-between'>

        <div className='flex gap-x-3'>
            { page > 1 && 
              (<button className='border rounded-md px-4 py-1' onClick={() => handlePageChange (page-1)}>Previous</button>)
            }

            { page < totalPages &&
              (<button onClick={() => handlePageChange (page+1)} className='border rounded-md px-4 py-1' >Next</button>)
            }
        </div>

        <p className='font-bold text-sm'>
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Pagination