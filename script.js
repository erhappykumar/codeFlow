"use strict";
import * as p  from "./data.js"


let body=document.querySelector("body");

body.innerHTML+=`<nav class="nav"><div class="tb nav_div_equal">☰</div><div class="nav_div_html">html</div><div class="nav_div_css" >css</div>
  <div>javascript</div></nav>`;
  body.innerHTML+=`<article class="article_left"></article>`;
  
  
  
  const nav_div_html=document.querySelector(".nav_div_html");
  const nav_div_css=document.querySelector(".nav_div_css");
  
  const nav_div_javascript=document.querySelector(".nav_div_javascript");
  
  const nav_div_equal=document.querySelector(".nav_div_equal");
  const article_left=document.querySelector(".article_left");
  
  
const nav=document.querySelector(".nav");


  nav.addEventListener("click",(e)=>{
    
    
    e.target.style.color=`green`
    nav_div_equal.addEventListener("click",()=>{
      
   if(e.target.innerText==`html`){
  article_left.innerHTML=`${p.a_l_h}`;} 
  else if(e.target.innerText==`css`){
 article_left.innerHTML=`${p.a_l_c}`;}
else if(e.target.innerText==`javascript`)
{article_left.innerHTML=`${p.a_l_j}`;}  
  })////nav_div_equal
  })//nav
  

  nav_div_equal.addEventListener("click",()=>{article_left.classList.toggle("article_left_toggle");
  console.log(article_left.className);
  
 })
  