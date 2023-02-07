function example(name,...args){
    
        let sum=0
        for(let i in args){
            sum+=args[i]
        }
        console.log(name,sum)
    
}
example("sum",10,20,30,40,50,60)
let arr=[1,2,3,4,5]
console.log(...arr)


let obj = {
    name:"raghu",
    age:19,
    display(){
        console.log(this)
        setTimeout(()=>{
            console.log(this)
            console.log(this.name,this.age)
        },2000)   
    }
}
let obj1 = {
    name:"ram",
    age:19,
    display(){
        console.log(this)
        setTimeout(function(){
            console.log(this)
            console.log(this.name,this.age)
        },2000)   
    }
}
let obj2 = {
    name:"datta",
    age:19,
    display(){
        console.log(this)
        setTimeout(function(){
            console.log(this)
            console.log(this.name,this.age)
        }.bind(this),2000)   
    }
}
obj.display()
obj1.display()
obj2.display()