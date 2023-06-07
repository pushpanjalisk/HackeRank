// Title    - 5. Java Output Formatting
// Link     - https://www.hackerrank.com/challenges/java-output-formatting/
// Solution -  as below
import java.util.Scanner;

public class JavaOutputFormatting {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String lang[] = { "", "", "" };
        int x[] = { 0, 0, 0 };
        for (int i = 0; i < 3; i++) {
            lang[i] = sc.next();
            x[i] = sc.nextInt();
            // Complete this line
        }

        System.out.println("================================");
        for (int i = 0; i < 3; i++) {
            System.out.printf("%-15s%03d\n", lang[i], x[i]);
        }
        System.out.println("================================");
        sc.close();
    }
}
