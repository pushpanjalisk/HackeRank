// Title    - 1. Simple Array Sum
// Link     - https://www.hackerrank.com/challenges/simple-array-sum/
// Solution -  as below

import java.util.*;



class Result {

    /*
     * Complete the 'simpleArraySum' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts INTEGER_ARRAY ar as parameter.
     */

    public static int simpleArraySum(List<Integer> ar) {
    // Write your code here
        int sum = 0;

        for (int i = 0; i < ar.size(); i++) {
            sum +=  ar.get(i);
        }
        return sum;
    }

}

public class SimpleArraySum{
    public static void main(String[] args) {

        List<Integer> ar = List.of(1,2, 3, 4, 10, 11);

        int result = Result.simpleArraySum(ar);
        System.out.println(result);

    }
}




