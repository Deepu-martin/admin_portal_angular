import { Component } from '@angular/core';
import { secrets } from 'src/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admin_portal_angular';
  ngOnInit() {
    console.log(secrets.NG_ENV);
    let arr=[10,12,4,22,22,22,23,23,78,55,43,10,21,77]
    console.log(this.bubbleSort(arr))
    console.log(this.selectionSort([3,2,1,4,6,5,7,9,8,10]))
    console.log(this.linearSearch(arr,78))
  }
  bubbleSort(array:any){
    let temp=[]
    for(let i=0; i<=array.length; i++){
      for(let j = i+1; j <= array.length; j++){
        if(array[i] ==array[j]){
          array.splice(j,1)
        }
        else if(array[i] > array[j]){
          [array[i], array[j]] = [array[j], array[i]]
          // temp=array[i];
          // array[i]=array[j];
          // array[j]=temp;
        } 
      }
    }
    return array;
  }

  insertionSort(array:any){



  }

  selectionSort(array:any){
    for(let i=0; i < array.length; i++){
      let lowest=i;
      for(let j=i+1; j < array.length; j++){
        if(array[lowest] > array[j]){
          lowest=j;
        }
      }
      if(i !== lowest){
        [array[i],array[lowest]]=[array[lowest],array[i]]
      }

    }
    return array;
  }

   linearSearch(arr:any, value:any){
    let results = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === value){
            results.push(i)
        }
    }
    return results
}
// [1,2,4,3,0,9,8] 8
// binarySearch(arr:any,value:any){
//   if(arr.length-1){
//     return false;
//   }

// // find the middle index
// let middleIndex=Math.floor(arr.length/2);

// if(arr[middleIndex]===value){
//   return true;
// }





// }

//   Linear search
// Binary search
// Bubble sort
// Insertion sort
// selection sort
// quick sort
// merge sort
// heap sort
// counting sort
// radix sort
// bucket sort
// depth first search
// breadth first searvh
// dijkstras algo
// bellman-ford algo
// floyd-warshal algo
// prims algo
// kruskals algo
// topological sort
// dynamic programming
// knapsack problem
// travelling salesman prob
// conex hull
// maximum flow
// minimin spanning tree
}
