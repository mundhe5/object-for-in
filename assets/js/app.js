var cl=console.log;

// 1======================================


var person={
    fname:"priya",
    lname:"pandit",
    age:25,
    country:"india",
    contact:7777777777,
    email:"priya2@gmail.com",

}


cl(person.fname); //it gievs only valu
cl(person.lname); //it gievs only valu
cl(person.contact); //it gievs only valu
cl(person["age"]); //it gievs only valu


for(var i in person){
    cl(i); // it gives key of object
    cl(person[i]);  //it gives valu of object
}



// 2===================================================


var person={
    fname:"rani",
    lname:"reddy",
    age:21,
    country:"india",
    contact:8888888888,
    email:"rani2@gmail.com",

}


cl(person.email);
cl(person.age);
cl(person["age"]);

for(var r in person){
    cl(r);  //it gives key object
    cl(person[r]); //it gives value of object
}


// 3=================================================

var person={
    fname:"rohit",
    lname:"patil",
    age:28,
    country:"india",
    contact:9999999999,
    email:"rohit2@gmail.com",

}


cl(person);
cl(person.lname);
cl(person.fname);
cl(person["contact"]);

for(var p  in person){
    cl(p);
    cl(person[p]);
}

// 4===============================================

var person={
    fname:"komal",
    lname:"mundhe",
    age:29,
    country:"india",
    contact:9126256351,
    email:"komal2@gmail.com",

}

cl(person);
cl(person.age);
cl(person.contact);
cl(person["fname"]);


for(var y in person){
    cl(y);
    cl(person[y]);
}

// 5==================================================

var person={
    fname:"shradha",
    lname:"mundhe",
    age:20,
    country:"india",
    contact:7735364534,
    email:"shradha2@gmail.com",

}

cl(person);
cl(person.email);
cl(person.contact);
cl(person["lname"]);


for(var u in person){
    cl(u);
    cl(person[u]);
}

// 6=================================================

var person=[
    {
    fname:"advet",
    lname:"patil",
    age:25,
    country:"india",
    contact:8765432198,
    email:"advet2@gmail.com",

},
{
    fname:"advika",
    lname:"jadhvar",
    age:21,
    country:"india",
    contact:9876543212,
    email:"advika2@gmail.com",

},
{
    fname:"prashant",
    lname:"mundhe",
    age:32,
    country:"india",
    contact:7754765432,
    email:"prashant2@gmail.com",

},
{
    fname:"pramod",
    lname:"rathi",
    age:24,
    country:"india",
    contact:9089876534,
    email:"pramod2@gmail.com",

},
{
    fname:"mohini",
    lname:"bedi",
    age:50,
    country:"india",
    contact:8778876765,
    email:"mohini2@gmail.com",

}
]




for(var i=0;i<person.length;i++){
cl(person);
 
}
cl(person[0]);
cl(person[0].fname);
cl(person[0].lname);
cl(person[0].contact);
cl(person[0]["fname"]);
cl(person[0]["email"]);

for(var q in person){
    cl(q); //it gives index no
    cl(person[q]);//it gives one by one object
    cl(person[q]["fname"]); //it gives fname of all object
    // cl(person[q][0]["fname"]);
}


cl(person[1]);
cl(person[1].fname);
cl(person[1].lname);
cl(person[1].contact);
cl(person[1]["country"]);
cl(person[1]["fname"]);

for(var v in person){
    cl(v); //it gives index no
    cl(person[v]);//it gives one by one object
    cl(person[v]["fname"]); //it gives fname of all object
    // cl(person[v][0]["fname"]);
}


cl(person[2]);
cl(person[2].fname);
cl(person[2].lname);
cl(person[2].contact);
cl(person[2]["age"]);
cl(person[2]["contact"]);

for(var u in person){
    cl(u); //it gives index no
    cl(person[u]);//it gives one by one object
    cl(person[u]["fname"]); //it gives fname of all object
    // cl(person[u][0]["fname"]);
}



cl(person[3]);
cl(person[3].fname);
cl(person[3].lname);
cl(person[3].country);
cl(person[3]["fname"]);
cl(person[3]["lname"]);

for(var r in person){
    cl(r); //it gives index no
    cl(person[r]);//it gives one by one object
    cl(person[r]["fname"]); //it gives fname of all object
    // cl(person[r][0]["fname"]);
}





cl(person[4]);
cl(person[4].age);
cl(person[4].email);
cl(person[4].contact);
cl(person[4]["fname"]);
cl(person[4]["lname"]);

for(var e in person){
    cl(e); //it gives index no
    cl(person[e]);//it gives one by one object
    cl(person[e]["fname"]); //it gives fname of all object
    // cl(person[e][0]["fname"]);
}