// Title    - 4. Java Stdin and Stdout II
// Link     - https://www.hackerrank.com/challenges/java-stdin-and-stdout-1/
// Solution -  as below

import java.util.*;

public class JavaStdinANDStdoutII {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int i = Integer.parseInt(scan.nextLine());
        double d = Double.parseDouble(scan.nextLine());
        String s = scan.nextLine();
        
        scan.close();
        // Write your code here.

        System.out.println("String: " + s);
        System.out.println("Double: " + d);
        System.out.println("Int: " + i);
    }
}
