import java.util.Scanner;
// import java.lang.*;

public class solution {

    // public static void main(String[] args) {
    // Scanner sc = new Scanner(System.in);
    // String lang[] = { "", "", "" };
    // int x[] = { 0, 0, 0 };
    // for (int i = 0; i < 3; i++) {
    // lang[i] = sc.next();
    // x[i] = sc.nextInt();
    // // Complete this line
    // }

    // System.out.println("================================");
    // for (int i = 0; i < 3; i++) {
    // System.out.printf("%-15s %03d\n", lang[i], x[i]);
    // }
    // System.out.println("================================");
    // sc.close();
    // }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        String A = sc.next();
        String B = sc.next();
        /* Enter your code here. Print output to STDOUT. */
        System.out.println(A.length() + B.length());
        if (A.compareTo(B) >1 ) {
            System.out.println("Yes");
        } else {
            System.out.println("No");
        }
        A = A.substring(0,1).toUpperCase() + A.substring(1);

        B = B.substring(0,1).toUpperCase() + B.substring(1);
        System.out.println(A + " " + B);
        sc.close();
    }
}