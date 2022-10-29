import React from 'react';
import { useLoaderData} from 'react-router-dom';

const Category = () => {
     const { params} = useLoaderData()
     console.log(params)

     return (
          <div>
               this is category man
          </div>
     );
};

export default Category;