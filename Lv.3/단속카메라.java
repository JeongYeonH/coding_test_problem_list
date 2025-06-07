import java.util.Arrays;

class Solution {
    public int solution(int[][] routes) {
        int answer = 0;
        Arrays.sort(routes, (a,b) -> Integer.compare(a[1], b[1]));
        int checkCameraPos = -30001;
        for(int[] route : routes){
            if(route[1] > checkCameraPos){
                if(route[0] <= checkCameraPos) continue;
                checkCameraPos = route[1];
                answer++;
            }
        }      
        return answer;
    }
}