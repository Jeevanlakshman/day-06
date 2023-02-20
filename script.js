
class Movie {
   
    constructor (title, studio, rating) {
     
       this.title = title;
       this.studio = studio;
       this.rating = rating;
     
       if(rating==null) {
         return this.rating = "PG"
     }
       else{
         return this.rating = rating;
     }
  }
      getPG(array){
     
        var result = array.filter((element)=> element.rating =="PG")
        return result
  }

}

  let movie1 = new Movie ("varisu","seven studios","PG13");
  let movie2 = new Movie ("thunivu","redgiant studios","PG1");
  let movie3 = new Movie ("A","red studios");
  let movie4 = new Movie ("B","pink studios");

  console.log(movie3)


  const array = [movie1, movie2, movie3,movie4]

  console.log(movie1.getPG(array));

  let movie5 = new Movie ("Casino Royale","Eon Productions","PG13")

  console.log(movie5)

  //Convert the UML diagram to Typescript class. - use number for double
//Circle-Class
// -radius:double=1.0;
// -color:string="Red";
// To write-->Circle(),
//            Circle(radius:double)
//            Circle(radius:double,color:string)
//            getRadius():double
//            setRadius(radius:double):void
//            getColor():string
//            setColor(color:string):void
//            getArea():double
//            getCircumtance():double
//Answer:


class circle{
  constructor(radius,color){
    this.radius=radius;
    this.color=color;
  }
     getRadius(){
     return this.radius
  }
     setRadius(data){
     this.radius=data
  }
     getColor(){
     return this.color
  }
     setColor(data){
     this.color=data
  }
     getArea(){
     return Math.PI*(this.radius*this.radius)
  }
     getCircumference(){
     return 2*Math.PI*this.radius
  }
}  
     var res=new circle(1.0,"red")
   //res.setColor("yellow")
   //res.setRadius(3.0)
    console.log(res.getColor());
    console.log(res.getRadius());
    console.log(res.getArea());
    console.log(res.getCircumference());
 
   //     Output:red
  //            1
  //            3.141592653589793
  //            6.283185307179586

  //Write a “person” class to hold all the details.

class person{
  constructor(FirstName,LastName,gender,age,email){
    this.FirstName=FirstName;
    this.LastName=LastName;
    this.gender=gender;
    this.age=age;
    this.email=email;
  } 
    getdetails(){
    
      return(`The person details-FirstName:${this.FirstName},LastName:${this.LastName},Gender:${this.gender},Age:${this.age},Email:${this.email}`) 
}
}

var res1=new person("jeeva","l","male",21,"jeevalakshman6096@gmail.com")
  var res2=new person("tamil","l","male",23,"masstamil@gmail.com")
  console.log(res1.getdetails());
  console.log(res2.getdetails());

  //write a class to calculate the uber price.

class Uber {
  constructor(distance,rate,waitingperiod){
      this.distance=distance;
      this.rate=rate;
      this.waitingperiod= waitingperiod;
  }
      setDistance(dist){
      
       this.distance=dist;
 
  }
      getRideDetails(){
      
       return(`The distance of the ride is ${this.distance} with rate of ${this.rate} 
         with a waiting period of ${this.waitingperiod}`)
 
 }
      getPrice(){
      
       let price =(this.distance * this.rate) + (5*this.waitingperiod)
       return price;
 }
 }
  let uber1 = new Uber (100,12,10);
  uber1.setDistance(130);

  console.log(uber1.getPrice())
  console.log(uber1.getRideDetails())