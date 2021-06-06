const merge = function (arr1 ,arr2) {
  if(arr1 && arr2){
     if(arr1[0]<arr2[0]){
      arr2.forEach(element => {
        arr1.push(element);
      });
      return arr1;
     }
     else {
      arr1.forEach(element => {
        arr2.push(element);
      });
      return arr2;
     }
   }
   else if (arr1 && !arr2){
     return arr1;
   }
   else if (!arr1 && arr2){
     return arr2;
   }
   else{
     return [];
   }
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);