import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Spinner from "./Spinner";

function Blogs() {

  // consume context api data
  const {loading, posts} = useContext (AppContext);
  

  return (
    <div className='w-11/12 max-w-[700px] flex flex-col gap-y-7 py-8 mt-12 mb-12 dark:mt-12 dark:mb-12'>
      {
        loading ? (
          <Spinner />
        ) : 
        (
          posts.length === 0 ? 
          (<div>
            <p>No Post Found</p>
          </div>) : 
          (
            posts.map ( (post) => (

              // code for card 
                <div key={post.id}>
                  {/* title */}
                  <p className='font-bold font-md mb-4'>{post.title}</p>

                  {/* author */}
                  <p className='text-sm'>
                    By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>post.category</span>
                  </p>

                  {/* date */}
                  <p className='text-sm'>
                    Posted on {post.date}
                  </p>


                  {/* content */}
                  <p className='text-md my-3'> {post.content} </p>

                  {/* tags */}
                  <div>
                    {post.tags.map ( (tag, index) => {
                      return <span key={index} className='text-blue-700 underline font-bold text-[13px] mx-1'>{`#${tag}`}</span>
                    })}
                  </div>
                </div>
            ))
          ) 
        )
      }
    </div>
  )
}

export default Blogs