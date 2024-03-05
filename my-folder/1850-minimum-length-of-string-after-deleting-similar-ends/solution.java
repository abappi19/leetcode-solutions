class Solution {
    public int minimumLength(String s) {
        int i = 0, j = s.length() - 1;

        while (i < j && s.charAt(i) == s.charAt(j)) {
            char c = s.charAt(i);
            while (i < j && c == s.charAt(i)) {
                i++;
            }
            while (i <= j && c == s.charAt(j)) {
                j--;
            }
        }

        return j-i + 1;

    }
}
