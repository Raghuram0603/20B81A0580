function example(name,...args){
    let sum=0
    for(let i in args){
        sum+=args[i]
    }
    console.log(name,sum)
}
example("sum",10,20,30,40,50,60)