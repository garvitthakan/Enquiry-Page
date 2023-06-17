import React from 'react';
import bgImg from '../assets/Space Img.jpg';
// import { useForm } from 'react-hook-form';
// import { Data } from './Data';
import {useState} from 'react'

// import Database from './Database';
import axios from 'axios';

function Form() {

    // form states 
    const [name,setName]=useState('');
    const [company,setCompanyName]=useState('');
    const [number,SetTelNumber]=useState('');
    const [email,SetEmail]=useState('');
    const [query,setQuery]=useState('');


    //submit event
    const handleSubmit=(e)=>{
       e.preventDefault();
       console.log(name,company,number,email,query); 
       alert("Thanks for filling the form. Your response has been recorded.")

         // data state
        const data={
            Name: name,
            Company: company,
            TelNumber: number,
            Email: email,
            Query: query
        }

        axios.post('https://sheet.best/api/sheets/0c7597a9-54df-4858-9fc7-8d4a954c9a88',data).then((response)=>{
            console.log(response);

            // clearing form fields
            setName('');
            setCompanyName('');
            SetTelNumber('');
            SetEmail('');
            setQuery('');
        })
    }


  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2>Enquiry Form</h2>
                <span>Submit your query & we will get back to you soon</span>

                <form id='form' autoComplete="off" className='flex flex-col' onSubmit={handleSubmit}>
                    
                    <input type="text" id="name" name="name" placeholder='Your Name' required 
                    onChange={(e)=>setName(e.target.value)} value={name}></input>

                    <input type="text" id="name" name="name" placeholder='Company Name' required
                    onChange={(e)=>setCompanyName(e.target.value)} value={company}></input> 

                    <input type="number" id="mobile" name="mobile" placeholder='10-digit Phone Number' 
                    pattern="[0,9]" required onChange={(e)=>SetTelNumber(e.target.value)} value={number} ></input>

                    <input type="email" id="email" name="email" placeholder='Email for contact' required
                    onChange={(e)=>SetEmail(e.target.value)} value={email}></input>

                    <textarea name="Your Details" id="query" cols="4" rows="4" 
                    placeholder='Your Query' resize="none" required onChange={(e)=>setQuery(e.target.value)} value={query}></textarea>

                    <button className='btn' name="submit" type="Submit">Submit</button>
                </form>

            </div>
            <div className="col-2">
                {/* <img src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700006748.jpg" alt="" /> */}
                <img src={bgImg} alt="" />
            </div>
        </div>
        {/* <Database /> */}
    </section>
  )
}

export default Form;