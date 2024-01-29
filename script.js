let request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
   let res=JSON.parse(request.response);
   //  console.log(res)
   
   let region=res.filter((ele)=>ele.region  ==="Asia");
   console.log(region)

   let population=res.filter((ele)=>ele.population <200000);
   console.log(population)
   
   res.forEach(obj => {
       console.log(obj.name,obj.flag,obj.capital);
   });

   let red =(res.reduce((acc,cv)=>{
      return acc + cv.population;
   },0))
   console.log("Total population",red)

   let Usdollars=res.filter((ele)=>ele.currencies ===" United States dollar");
   console.log(Usdollars)
   
}