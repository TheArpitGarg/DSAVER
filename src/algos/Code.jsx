import React from "react";
import "../index.css"

const Code = () => {
    var title = String.raw`
    #include<stdio.h>
    int main(){
       int i, j, count, temp, number[25];
       printf("How many numbers u are going to enter?: ");
       scanf("%d",&count);
       printf("Enter %d elements: ", count);
       // This loop would store the input numbers in array
       for(i=0;i<count;i++)
          scanf("%d",&number[i]);
       // Implementation of insertion sort algorithm
       for(i=1;i<count;i++){
          temp=number[i];
          j=i-1;
          while((temp<number[j])&&(j>=0)){
             number[j+1]=number[j];
             j=j-1;
          }
          number[j+1]=temp;
       }
       printf("Order of Sorted elements: ");
       for(i=0;i<count;i++)
          printf(" %d",number[i]);
       return 0;
    }
        `;
    return(
        <div className="nicheWala"> 
                <pre className="nicheWala"> {title} </pre>
            </div>
    );
};

export default Code;