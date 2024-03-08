class Solution {
    public int maxFrequencyElements(int[] nums) {
        Map<Integer, Integer> freq = new HashMap<>();

        for(int num : nums){
            freq.put(num, freq.getOrDefault(num, 0)+1);
        }

        int maxFreq = 0;
        int countOfMaxFreq = 0;
        for(int fr:freq.values()){
            if(fr>maxFreq){
                countOfMaxFreq = 1;
                maxFreq = fr;
            }else if(fr==maxFreq){
                countOfMaxFreq++;
            }
        }

        // System.out.println("max: "+maxFreq+" . count: "+countOfMaxFreq);

        return maxFreq * countOfMaxFreq;
    }
}
