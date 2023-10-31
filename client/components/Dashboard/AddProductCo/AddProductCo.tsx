import React ,{useEffect , useRef, useState} from 'react'
import { Boxs, Title, Form,Submite, BtnDiv,AddImgeBtn ,PreViewImage} from './styles'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AddProductCo() {
  const fileInputRef=useRef<HTMLInputElement | null>( null);
  const [image, setImage] =useState<File | null>()
  const [preview, setPreview] =useState<string | any>()
  const [imageValue, setImageValue] =React.useState('')
  const [bookState, setBookState] = React.useState({
    name: "",  author: "", price:"", discont:"", publisher:"", language:"",description:"", category:"", format:"", imageUrl: imageValue
  })

  /*On change*/
const handelInput=(e: SelectChangeEvent<string> | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >)=>{
   const inputName = e.target.name;
    const inputValue = e.target.value;
    setBookState({
      ...bookState,
      [inputName]: inputValue
    });
 
}
const handelSubmite= async()=>{
  { toast(`A new book added `,{
    draggable:true,
    position:toast.POSITION.TOP_RIGHT
  })
 }
  try{
    // const updateData = { status: value }
     const res =await axios.post(`http://localhost:4000/api/v1/books`, {
        newbook: bookState 
     },
     {
       headers: {
         "Content-Type": "application/json"
       }}
     )

 }

 catch(error){
   
   }
 }
 //console.log(bookState)
const uploadImage= async(e:any)=>{
  const imageFile =e.target.files[0]
  /*preview of image*/
  
if(imageFile){
  setImage(imageFile)
}else{
  setImage(null)
}
 /*preview of image*/
const formData =new FormData()
formData.append('imageUrl', imageFile)

try{
const {data} =await axios.post(`http://localhost:4000/api/v1/books/uploads`, formData, {
  headers:{
    'Content-Type':'multipart/form-data'
  }
})
console.log("here is what I receive from upload:")
console.log(data)
setBookState((prevState) => ({
  ...prevState,
  imageUrl: data.imageUrl.src,
}));

}catch{

}
}
const handelPreview =(e:any)=>{
e.preventDefault()
if (fileInputRef.current) {
  fileInputRef.current.click();
}
}
useEffect(() => {
if(image){
const reader= new FileReader()
reader.onload=()=>{
setPreview(reader.result as string)
}
reader.readAsDataURL(image)
}else{
setPreview(null)
}
}, [image])


  return (
    <Boxs>
         <ToastContainer draggable={false} autoClose={3000}/> 
   
      <br />
      <Title>Add New Product</Title>
      <hr />
      <br />
        <Grid container spacing={6}>
        <Grid item xs={12} md={12} lg={3}  style={{textAlign:'center'}}>
          {/* image cover */}
        {preview ?  <PreViewImage src={preview} />:
         <AddImgeBtn onClick={handelPreview}></AddImgeBtn>} 
        <input type="file" accept=".jpg, .png" name='imageUrl' onChange={uploadImage} style={{display:"none"}} ref={fileInputRef}/>
        {/* image cover */}
        </Grid>
        <Grid item xs={12} md={12} lg={9} >
          <Form>
            <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth name='name' onChange={(e)=>handelInput(e)}/>
            <br /><br />
            <TextField id="outlined-basic" label="Author" variant="outlined" fullWidth name='author' onChange={(e)=>handelInput(e)}/>


            <Grid container spacing={1} sx={{ marginTop: 2 }}>
              <Grid item xs={12} md={6} lg={6}>
                <Box>
                  <TextField id="outlined-basic" label="Price" variant="outlined" fullWidth name='price' onChange={(e)=>handelInput(e)}/>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Box >
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Discont</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={bookState.discont}
                      label="Discont"
                      name='discont'
                      onChange={(e)=>handelInput(e)}
                    >
                      <MenuItem value={0}>0 %</MenuItem>
                      <MenuItem value={10}>10%</MenuItem>
                      <MenuItem value={20}>20%</MenuItem>
                      <MenuItem value={30}>30%</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <br />
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Box >
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={bookState.category}
                      label="Category"
                      name='category'
                      onChange={(e)=>handelInput(e)}
                    >
                      <MenuItem value='art'>Art</MenuItem>
                      <MenuItem value='biography'>Biography</MenuItem>
                      <MenuItem value='child'>Children Books</MenuItem>
                      <MenuItem value='child'>Children Books</MenuItem>
                      <MenuItem value='craft'>Craft & Hobbies</MenuItem>
                      <MenuItem value='romance'>Romance</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Box >
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Format</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={bookState.format}
                      label="Format"
                      name='format'
                      onChange={(e)=>handelInput(e)}
                    >
                      <MenuItem value='ebook'>E Book</MenuItem>
                      <MenuItem value='paperback'>Paperback</MenuItem>
                      <MenuItem value='hardback'>Hardback</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <br />
              </Grid>
          
              <Grid item xs={12} md={6} lg={6}>
                <Box >
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Publisher</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={bookState.publisher}
                      name="publisher"
                      label="Publisher"
                      onChange={(e)=>handelInput(e)}
                    >
                      <MenuItem value='Seven Seas Entertainment'>Seven Seas Entertainment</MenuItem>
                      <MenuItem value='Pearson Education (US)'>Pearson Education (US)</MenuItem>
                      <MenuItem value='David and Charles'>David and Charles</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Box >
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Language</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={bookState.language}
                      label="Language"
                      name='language'
                      onChange={(e)=>handelInput(e)}
                    >
                      <MenuItem value='English'>English</MenuItem>
                      <MenuItem value='Portuguese'>Portuguese</MenuItem>
                      <MenuItem value='Spanish'>Spanish</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            </Grid>
            <br/>
            <Grid>
   <TextField
      label="Description"
      multiline
      minRows={5}
      placeholder="A brief description"
      fullWidth
      name='description'
      onChange={(e)=>handelInput(e)}
    />
   </Grid>
          </Form>
        </Grid>
  
      </Grid>
      <BtnDiv><div></div> <Submite onClick={handelSubmite}>Submite</Submite></BtnDiv>
     
    
    </Boxs>
  )
}

export default AddProductCo