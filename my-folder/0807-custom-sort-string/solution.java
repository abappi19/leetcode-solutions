class Solution {
    public String customSortString(String order, String s) {
        Map<Character, Integer> m = new HashMap<>();

        for(char o :order.toCharArray()){
            m.put(o, 0);
        }

        StringBuilder r = new StringBuilder();
        for(char c:s.toCharArray()){
            if(m.get(c)!=null){
                m.put(c, m.get(c) + 1);
            }else{
                r.append(c);
            }
        }

        for(char c:order.toCharArray()){
            for(int i = 0; i<m.get(c); i++){
                r.append(c);
            }
        }

      
        
        return r.toString();
    }
}
