

//--- count no.of occurences elements in an array and display in object---///

function count_occur(arr){
    let c={}
    for(i of arr){
        if(c[i]){
            c[i]++
        }
        else{
            c[i]=1
        }
    }
    return c
}
let arr=[1,2,2,3,3,3,1,4,4,4]
console.log(count_occur(arr))

//---remove duplicates in an aray-----///

function dup(arr){
    array.sort((a,b)=>a-b);
    newarr=[]
    for(i=0;i<arr.length;i++){
        if(i==0 || arr[i]!==arr[i-1]){
            newarr.push(arr[i])
        }
    }
    return newarr
}
let array=[1,1,2,2,3,3,4,5,6,7,7,5,]
console.log(dup(array))




