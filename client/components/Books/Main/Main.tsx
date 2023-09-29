import React,{useEffect, useState,useRef, useCallback} from 'react'
import { fetchData } from '../../../utiles';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { selectedcategory } from '../../../features/CategorySlice'
import BookItem from '../../BookItem/BookItem';
import {BooksConatiner, LoadMore, Top,Container, Grid, BooksConatiner2, Layout ,ResDiv} from './styles'

import { bookType } from '../../../types/bookType';
import ToTop from '../../Landing/ToTop/ToTop';
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { TfiLayoutListThumbAlt } from "react-icons/tfi";
import BookItem2 from '../../BookItem2/BookItem2';
import Invalid from '../../Invalid/Invalid';
import SortBox from '../SortBox/SortBox';
import axios from "axios";
import LimitNumber from '../LimitNumber/LimitNumber';
import { debounce } from 'lodash';
import PaginationCo from '../Pagination/PaginationCo';
import ResetFilters from '../ResetFilters/ResetFilters';
import AddCardAlert from '../Alerts/AddCardAlert';
import {useRouter} from 'next/router';



function Main() {
  let location = useRouter();
  const dispatch=useAppDispatch()
  //get data form redux and fech data 
  const categorySelected =useAppSelector((state=>state.category.category))
  const rateSelected = useAppSelector((state=>state.rate.rate))
  const priceSelected = useAppSelector((state=>state.price.price))
  const searchTerm = useAppSelector((state=>state.search.searchTerm))
  const sortby = useAppSelector((state=>state.sort.sort))
  const limitNumber = useAppSelector((state=>state.limitNumber.limitNumber))
  const pageNum = useAppSelector((state=>state.page.page))
  let min=priceSelected[0]
  let max=priceSelected[1]


//console.log(location)




//change the value that come from redux to user in url'//
  const checkSort=(sortby:string)=>{
  if(sortby ==='z-a'){
    return '-name'
  }
  if(sortby ==='a-z'){
    return 'name'
  }
  if(sortby ==='High price first'){
    return '-price'
  }
  if(sortby ==='Low price first'){
    return 'price'
  }
  }


const [loading, setLoading]=useState<boolean>(false)
    const [data, setData] =useState<bookType[]>([])
     const [filtedData , setFilteredData] =useState([])

    const [page, setPage] =useState<number>(1)
    const [grid, setGrid] =useState(true)
    /**in this part we check if the width is less than 1200 setgrid to true to show just main layout */
    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
     
      const updateScreenWidth = () => {
        setScreenWidth(window.innerWidth);
        if(screenWidth<1200){
          setGrid(true)
        }
      };
        updateScreenWidth();
        window.addEventListener('resize', updateScreenWidth);
  
      return () => {
        window.removeEventListener('resize', updateScreenWidth);
      };
    }, []);
  
console.log(screenWidth)
//first load of page///get all books// reset all filters//
useEffect(() => {
  setLoading(true)
   axios
   //.get("https://mern-book-store-api.vercel.app/api/v1/books")
      .get("http://localhost:4000/api/v1/books")
      .then(response => setData(response.data.books));
      setLoading(false)
}, [])


useEffect(() => {
  setLoading(true)
const m=checkSort(sortby)

   axios
       .get(`http://localhost:4000/api/v1/books?limit=${limitNumber}&page=${pageNum}&sort=${m}&numericFilters=rating>=${rateSelected},price>${min}&category=${categorySelected}`)
       .then(response => setData(response.data.books));
      
       setLoading(false)
}, [categorySelected,rateSelected,min,sortby,limitNumber, pageNum])
//use debounce lodash to set delay to fech data

// const handleDebounceFn =  (s:any) => {
//   setLoading(true);
//   axios.get(`http://localhost:4000/api/v1/books?name=${s}`)
//   .then(response => setData(response.data.books));
//   setLoading(false);
// };
// const debounceFn = useCallback(debounce(handleDebounceFn, 2000), []);




useEffect(() => {
  axios.get(`http://localhost:4000/api/v1/books`)
  .then(response => {
    const searchTermRegex = new RegExp(searchTerm, 'i');
    // Filter the books based on the searchTerm when the data is available
    const nameFilter = response.data.books.filter((item: bookType) => {
      return item.name.match(searchTermRegex);;
    });
    setData(nameFilter);
    // Log the filtered result here
   
  })
  .catch(error => {
    
    console.error(error);
  });
    
}, [searchTerm])

 
  return (
    <>
    <Container>
    <AddCardAlert/>
    <Top> 
      <SortBox /> 
      <ResDiv>
      <LimitNumber /> 
      </ResDiv>
    
      <Layout>
     
     <Grid>
           <span className={grid ? '' : 'active'} onClick={()=>setGrid(!grid)}><TfiLayoutListThumbAlt/></span>
          <span className={grid ? 'active' : ''} onClick={()=>setGrid(!grid)}><TfiLayoutGrid3Alt /></span>
     </Grid>
     </Layout> 
    </Top>
   <div>
    {!loading && data && data.length<1 && <ResetFilters /> }  
    {loading && !data  && <p>loading </p> }  
     { grid ? 
    <BooksConatiner>
      {!loading && data && data.length>0
      ? data.map((item)=>{
        return <BookItem key={item._id}item={item}/>
      })   
      :''}

    
    </BooksConatiner> :


    <BooksConatiner2>
      {!loading && data ?data.map((item)=>{
        return <BookItem2 key={item._id}item={item}/>
      }): <p>Loading</p>}
   
   
 
</BooksConatiner2> }
</div>  
 

           <PaginationCo /> 
    </Container>
   
      </>
  )
}

export default Main





function then(arg0: void) {
  throw new Error('Function not implemented.');
}
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
