import React,{useEffect, useState,useRef, useCallback} from 'react'
import { fetchData } from '../../../utiles';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { selectedcategory } from '../../../features/CategorySlice'
import BookItem from '../../BookItem/BookItem';
import {BooksConatiner, LoadMore, Top,Container, Grid, BooksConatiner2} from './styles'
import { Item } from '../../Features/Features';
import { bookType } from '../../../types/bookType';
import ToTop from '../../ToTop/ToTop';
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { TfiLayoutListThumbAlt } from "react-icons/tfi";
import BookItem2 from '../../BookItem2/BookItem2';
import Invalid from '../../Invalid/Invalid';
//import FilterPrice from '../FilterPrice/FilterPrice';
import axios from "axios";

import { debounce } from 'lodash';

function Main() {
  const dispatch=useAppDispatch()
  //get data form redux and fech data 
  const categorySelected =useAppSelector((state=>state.category.category))
  const rateSelected = useAppSelector((state=>state.rate.rate))
  const priceSelected = useAppSelector((state=>state.price.price))
  const searchTerm = useAppSelector((state=>state.search.searchTerm))
 
  let min=priceSelected[0]
  let max=priceSelected[1]

const [loading, setLoading]=useState<boolean>(false)
    const [data, setData] =useState<bookType[]>([])
     const [filtedData , setFilteredData] =useState([])

    const [page, setPage] =useState<number>(1)
    const [grid, setGrid] =useState(true)
    
    const [invalidSearchTerm, setInvalidSearchTerm] =useState(false)


useEffect(() => {
  setLoading(true)
   axios
      .get("http://localhost:4000/api/v1/books")
      .then(response => setData(response.data.books));
      setLoading(false)
}, [])

useEffect(() => {
  setLoading(true)
 //console.log(categorySelected)
   axios
       .get(`http://localhost:4000/api/v1/books?numericFilters=rating>=${rateSelected},price>${min}&category=${categorySelected}`)
       .then(response => setData(response.data.books));
      
       setLoading(false)
}, [categorySelected,rateSelected,min])
//use debounce lodash to set delay to fech data

const handleDebounceFn =  (s:any) => {
  axios.get(`http://localhost:4000/api/v1/books?name=${s}`)
  .then(response => setData(response.data.books));
};
const debounceFn = useCallback(debounce(handleDebounceFn, 2000), []);
useEffect(() => {
  setLoading(true)
 //console.log(categorySelected)
 debounceFn(searchTerm)
       setLoading(false)
}, [searchTerm])
  
  return (
    <>
    <Container>
    
    <Top> 
     <Grid>
          <span className={grid ? '' : 'active'} onClick={()=>setGrid(!grid)}><TfiLayoutListThumbAlt/></span>
          <span className={grid ? 'active' : ''} onClick={()=>setGrid(!grid)}><TfiLayoutGrid3Alt /></span>
     </Grid>
    </Top>
  {invalidSearchTerm ? <Invalid /> :
    <div>
     { grid ? 
    <BooksConatiner>
      {!loading && data ?data.map((item)=>{
        return <BookItem key={item._id}item={item}/>
      }): <p>Loading</p>}
   

       <ToTop />
    {/* <LoadMore >More</LoadMore> */}
    </BooksConatiner> :


    <BooksConatiner2>
      {!loading && data ?data.map((item)=>{
        return <BookItem2 key={item._id}item={item}/>
      }): <p>Loading</p>}
    <ToTop />
   
 <LoadMore >More</LoadMore>
</BooksConatiner2> }
</div> }

    </Container>
   
      </>
  )
}

export default Main




// const observer=useRef<IntersectionObserver>()
   
// const lastBookelementRef = useCallback((node: any)=>{
//        if(loading) return
//        if (observer.current) observer.current.disconnect()
//        observer.current = new IntersectionObserver(entries=>{
//         if(entries[0].isIntersecting){
//         setPage(5)
//           }
//        })
//      if(node) observer.current.observe(node)
//        },[loading])


//if searchTerm change in redux//
//    useEffect( () => {
//     setLoading(true);
//     if(searchTerm.length>1){
      
//       (fetchData(searchTerm, page*15+1).then(function(result){
//         setData ([...result.items])
// }))
// setLoading(false);
//     }
   
//     }, [searchTerm.length])

////const price=useAppSelector(state=>state.price.price)

//console.log(category)
// useEffect(() => {
//   const t= data.filter((item)=>{
//    return item.volumeInfo.pageCount>= price[0] && item.volumeInfo.pageCount <= price[1]
//   })
//   setData(t)
//   }, [price])
//   //category cahnged make new arr
//      useEffect( () => {
//       setLoading(true);
//       setPage(0);
//       setData([]);
//       //console.log(page);
//       if(category.length>1){
//         setInvalidSearchTerm(false);
//         (fetchData(category, page*15).then(function(result){
//           setData ([...result.items])
         
//         }))
//       }else{
//        setInvalidSearchTerm(true)
//       }
      
//         setLoading(false);
      
//       }, [category])
  
  
//   //just page cahnged add to the end of page
//       useEffect( () => {
//         setLoading(true);
//           (fetchData(category, page*15+1).then(function(result){
//                    setData ([...data,...result.items])
//            }))
//           setLoading(false);
//         }, [page])
  
//   //if query changed//
  
  
//      const handelPage=()=>{
//       setPage(page+1)
//      }
