const key='DXDnrW88ZaGcCPLRuQrIeEWEMksHydJl';

const getweather= async (id) => {
    const base="http://dataservice.accuweather.com/currentconditions/v1/";
    const querry=`${id}?apikey=${key}`;

    const response = await fetch(base + querry);
    const data =await response.json();
    return data[0];

};
const getcity= async (city)=>{
    const base="http://dataservice.accuweather.com/locations/v1/cities/search";
    const querry=`?apikey=${key}&q=${city}`;


    const response= await fetch(base + querry);
    const data= await response.json();
    return data[0];


}
getcity('manchester')
.then(data => {
    return getweather(data.Key)})
    .then(data =>{
        console.log(data);
    })
.catch(err => {console.log(err)});
