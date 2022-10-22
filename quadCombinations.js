let array =[-3, -2, -1, 0, 1, 2, 3]
let count = 0

//brute force approach
for(let i = 0; i < array.length; i++){
    for(let j = 0; j<array.length; j++){
        for(let k = 0; k < array.length; k++){
            // count += 1
            let a = array[i]
            let b = array[j]
            let c = array[k]


            // let a = array[i] == 0 ? " " : array[i] >= 1 ? array[i] == 1 ? "x^2" : `${array[i]}x^2` : array[i] == -1 ? "-x^2" : `${array[i]}` 
            // let b = array[j] == 0 ? " " : array[j] >= 1 ? array[j] == 1 ? "x" : `${array[j]}x` : array[j] == -1 ? "-x" : `${array[j]}` 
            // let c = array[k] == 0 ? " " : array[k] >= 1 ? `${array[k]}` : `${array[k]}` 
            
            
            // let output = `${a!=0 ? a + 'x^2' :"" } ${b !=0 ? b + "x" : ""} ${c !=0 ? c : ""}`
            if(a > 0 && b > 0 && c > 0){//all positives

                if(a == 1 || b ==1){
                    console.log(`${a == 1 ? "": a }x^2+${b == 1 ? "":b}x+${c}`)    
                    // console.log("a=",a,"b=", b,"c=", c)
                    // console.log("here")
                }
                
                else{ 
                    console.log(`${a}x^2+${b}x+${c}`)

                }
            }
            if(a < 0 && b < 0 && c < 0){//all negatives
                if(a == -1 || a == -1){
                    console.log(`${a == -1 ? "-": a }x^2${b == -1 ? "-":b}x${c}`)
                }
                else{
                    console.log("here")

                }
            }
            if(a == 0 && b > 0 && c > 0){

            }
            
            else{
                console.log(a, b, c)

            }
         
        
        }
    }
}
// console.log( )

// // Javascript program to print all
// // combination of size r in an array of size n  
 
//     /* arr[]  ---> Input Array
//     data[] ---> Temporary array to store current combination
//     start & end ---> Starting and Ending indexes in arr[]
//     index  ---> Current index in data[]
//     r ---> Size of a combination to be printed */
//     function combinationUtil(arr,data,start,end,index,r)
//     {
//         // Current combination is ready to be printed, print it
//         if (index == r)
//         {
//             for (let j=0; j<r; j++)
//             {
//                 document.write(data[j]+" ");
//             }
//             document.write("<br>")
//         }
         
//         // replace index with all possible elements. The condition
//         // "end-i+1 >= r-index" makes sure that including one element
//         // at index will make a combination with remaining elements
//         // at remaining positions
//         for (let i=start; i<=end && end-i+1 >= r-index; i++)
//         {
//             data[index] = arr[i];
//             combinationUtil(arr, data, i+1, end, index+1, r);
//         }
//     }
     
//     // The main function that prints all combinations of size r
//     // in arr[] of size n. This function mainly uses combinationUtil()
//     function printCombination(arr,n,r)
//     {
//         // A temporary array to store all combination one by one
//         let data = new Array(r);
         
//         // Print all combination using temporary array 'data[]'
//         combinationUtil(arr, data, 0, n-1, 0, r);
//     }
     
//     /*Driver function to check for above function*/
//     let arr=[1, 2, 3, 4, 5];
//     let r = 3;
//     let n = arr.length;
//     printCombination(arr, n, r);
     
     
//     // This code is contributed by rag2127
     
// </script>