import React from 'react'
import styled from 'styled-components'
import {useEffect, useState} from 'react';
import axios, { AxiosResponse } from 'axios';
import { setDefaultResultOrder } from 'dns';


const feedsMainContainer = styled.div``

const feedsTitle = styled.h1`
font-size: 1.5rem;
`
const feedsImage = styled.img``
const feedsImageContainer = styled.div``
const feedsText = styled.p``

const feedsContainer = styled.div``


function MyFeeds() {

    const [feeds, setFeeds] = useState<String[]>([]);
    const [isLoading,setIsLoading] = useState<Boolean>(false);
    const [error, setError] = useState<Boolean>(false);


const getFeeds = async ():Promise<void> =>  {

setIsLoading(true);
  await axios.get("https://6320c9689f82827dcf34503d.mockapi.io/feeds")
  .then((response: AxiosResponse) => {
    if (response.status ===200){
      setFeeds(response.data);
      setIsLoading(false);
    }
    else
    {
      setError(true)
      setIsLoading(false);
    }
    
  })
  .catch((error:any) => {

    setError(true)
    console.log(error.message);
    setIsLoading(false);
    
  
})
.finally(() => {
  setIsLoading(false);
})

}

    useEffect(() => {
getFeeds();

    }, [ ])



  return (
    <div>

{isLoading ? <h1>fetching feeds...</h1> : 

<section>
{feeds.map((feed:any) => {

return (

<div>
{feed.id}
{feed.news}

</div>
)
  }
  )
}

</section>

}


    </div>
  )
}

export default MyFeeds