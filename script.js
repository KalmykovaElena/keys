function func(arr){
    let sum=arr[0];
    for(i=1;i<arr.length;i++){
        if(sum>arr[i]){
            return false
        }else{
            sum+=arr[i]
        }
    }
    return true
}




// let func=numbersArr=>{
//      let check= numbersArr.every((el, index,arr) =>{
//      return  el>numbersArr.slice(0,numbersArr.indexOf(el)).reduce((acc,el)=>acc+=el,0);
//          
//       })
//       return check
//     }
    console.log(func([2,3,7,24,4]));
    