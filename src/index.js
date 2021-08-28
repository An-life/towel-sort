

module.exports = function towelSort (matrix) {
    if (!matrix){
        return ([]);
    }else{ let arr1=[];
    for(let i=0;i<matrix.length;i++){
        if(i%2===0){
            arr1.push(matrix[i]);
        }else if (i%2!==0){
            arr1.push(matrix[i].reverse());
        }
    }
    let arr2=[];
    for(let x=0;x<arr1.length;x++){
        for (let j=0;j<arr1[x].length;j++){
            arr2.push(arr1[x][j])  ;
        }
    }
    return (arr2);
    }
}


