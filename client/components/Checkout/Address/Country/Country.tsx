import React ,  { useEffect, useState }from 'react'
import { Country, State, City } from "country-state-city";
import Select from "react-select";
import {ContryCoBox,SelectS} from '../styles'
interface Props{
       handelContry:any, handelCity:any, handelState:any
}
interface Country {
    isoCode: string;
    name: string;
    // Add other necessary properties here
  }
  
  interface State {
    countryCode?: string;
    isoCode: string;
    name: string;
    // Add other necessary properties here
  }
  
  interface City {
    countryCode?: string;
    stateCode?: string;
    name: string;
    // Add other necessary properties here
  }

function CountryCo({ handelContry, handelCity, handelState}:Props) {
 
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
    const [selectedState, setSelectedState] = useState<State | null>(null);
    const [selectedCity, setSelectedCity] = useState<City | null>(null);
 
useEffect(() => {
    handelContry(selectedCountry?.name)
}, [selectedCountry])

useEffect(() => {
    handelState(selectedState?.name)
}, [selectedState]) 

useEffect(() => {
    handelCity(selectedCity?.name)
}, [selectedCity])  
  return (
    <>
     <ContryCoBox>
   
      <Select
        placeholder="Country"
        options={Country.getAllCountries()}
        getOptionLabel={(options) => {
          return options["name"];
        }}
        getOptionValue={(options) => {
          return options["name"];
        }}
        value={selectedCountry}
        onChange={(item) => {
          setSelectedCountry(item) ;
        } }
        styles={{
          control: (provided) => ({
            ...provided,
            width: 250, 
            backgroundColor: '#f5f5f5 ',
         height:50,
         marginBottom:20,
         
          }),
          menu: (provided) => ({
            ...provided,
            width: 250,   zIndex:2  , top:-5// Set the desired width for the dropdown menu
          }),
        }}
        
      />
      <Select
      placeholder="State"
        options={State?.getStatesOfCountry(selectedCountry?.isoCode)}
        getOptionLabel={(options) => {
          return options["name"];
        }}
        getOptionValue={(options) => {
          return options["name"];
        }}
        value={selectedState}
        onChange={(item) => {
          setSelectedState(item);
        }}
        styles={{
          control: (provided) => ({
            ...provided,
            width: 250, 
            backgroundColor: '#f5f5f5 ',
         height:50,
         marginBottom:20,
        
          }),
          menu: (provided) => ({
            ...provided,
            width: 250,   zIndex:2 ,top:-5 // Set the desired width for the dropdown menu
          }),
        }}
        
      />
      <Select
      
       placeholder="City"
        options={City.getCitiesOfState(
            selectedState ? selectedState.countryCode || '' : '',
            selectedState ? selectedState.isoCode || '' : ''
        )}
        getOptionLabel={(options:any) => {
          return options["name"];
        }}
        getOptionValue={(options:any) => {
          return options["name"];
        }}
        value={selectedCity}
        onChange={(item) => {
          setSelectedCity(item);
        }}
        styles={{
          control: (provided) => ({
            ...provided,
            width: 250, 
            backgroundColor: '#f5f5f5 ',
         height:50,
         marginBottom:20,
          }),
          menu: (provided) => ({
            ...provided,
            width: 250,
            zIndex:2, top:-5 // Set the desired width for the dropdown menu
          }),
        }}
        
      />
     
         </ContryCoBox>
     </>
  )
}

export default CountryCo

