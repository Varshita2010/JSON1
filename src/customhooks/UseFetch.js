// import React, { useEffect, useState } from 'react'
// const UseFetch = (url) => {
// const  [data,setData]=useState([]);
// const [loading,setLoading]=useState(true);
// useEffect(()=>{
//     const fetchData=async()=>{
//         const res=await fetch(url)
//         const json=await res.json()
//         setData(json)
//         setLoading(false)
//     }
//     fetchData()
// },)
//   return {data,loading}
// }

// export default UseFetch

import { useState, useEffect } from 'react';

const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(err => {
        console.error('Fetch error:', err);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
};

export default UseFetch;
