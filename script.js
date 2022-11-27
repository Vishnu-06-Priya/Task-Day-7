var request=new XMLHttpRequest();

request.open("GET","https://restcountries.com/v2/all");

request.send();
 
request.onload=function()
  {
    var res=JSON.parse(request.response);
    console.log(res);

    //  Get all the countries from the Asia continent /region using the Filter function
var result=res.filter((ele)=>ele.region=="Asia").map((ele)=>ele.name);
  console.log(result);

  // Get all the countries with a population of less than 2 lakhs using Filter function
var result=res.filter((ele)=>ele.population<200000).map((ele)=>ele.name);
console.log(result);

// Print the following details name, capital, flag using forEach function
var result = JSON.parse(request.response);    
  result.forEach(element => console.log(country : $this.name),capital.${this.capital},flag: ${this.flags.png});   

  // Print the total population of countries using reduce function
var result=res.reduce((acc,cv)=>acc+cv.population,0);
console.log(result);

// Print the country which uses US Dollars as currency.
var res = result.filter((ele)=>(ele.currencies!=undefined && ele.currencies[0].code=="USD")).map((country)=>country.name);    
console.log(res);
}