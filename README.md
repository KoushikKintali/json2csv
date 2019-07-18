# json2csv
Main criteria of thisproject is to convert a json to comma separated values

Sample Input:
{
	"Name":"Koushik",
	"Gender":"Male",
	"Study":{"Btech":"NITBhopal","HighSchool":"Sri Chaitanya Junior College","School":{"8-10":"Dr.Kkrs Gowtham Concept School","kg-8":"Vignan"}}
}

Sample Output:
{
    "headers": "Name,Gender,Study_Btech,Study_HighSchool,Study_School_8-10,Study_School_kg-8,",
    "values": "Koushik,Male,NITBhopal,Sri Chaitanya Junior College,Dr.Kkrs Gowtham Concept School,Vignan,"
}

[![LoopBack](https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)
