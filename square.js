function square(arr){
    let index =0;
    return{
        next:function(){
            if(index<arr.length){
                index++;
                return {value:arr[index-1]*arr[index-1],done:false};                
            }
            return {done:true};
        }
    }
}
const arr = [1,2,3,4,5,6,7,8,9,10];
const element = square(arr);
for (let index = 0; index < arr.length; index++) {
    console.log(element.next());
}