
class BirdWatcher {
    private final int[] birdsPerDay;
    private static int len;

    public BirdWatcher(int[] birdsPerDay) {
        this.birdsPerDay = birdsPerDay.clone();
        this.len = this.birdsPerDay.length;
    }

    public static int[] getLastWeek() {
        return new int[] {0, 2, 5, 3, 7, 8, 4};
    }

    public int getToday() {
        return birdsPerDay[len - 1];
    }

    public void incrementTodaysCount() {
        birdsPerDay[len - 1] = birdsPerDay[len - 1] + 1;
    }

    public boolean hasDayWithoutBirds() {
        for(int c: birdsPerDay){
            if(c == 0) return true;
        }
        return false;
    }

    public int getCountForFirstDays(int numberOfDays) {
        int sum = 0;
        for(int i = 0; i < numberOfDays; i++){
            if(i >= len) continue;
            sum += birdsPerDay[i];
        }
        return sum;
    }

    public int getBusyDays() {
        int busy = 0;
        for(int c: birdsPerDay){
            if(c >= 5) busy++;
        }
        return busy;
    }
}
