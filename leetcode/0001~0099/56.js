/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    if (intervals.length == 0) return [];
    
    var sortFunc = function(interval1, interval2) {
        if (interval1.start != interval2.start) {
            return interval1.start - interval2.start;
        } else {
            return interval1.end - interval2.end;
        }
    }
    intervals.sort(sortFunc);
    var ret = [intervals[0]];
     
    for (var i = 1; i != intervals.length; ++i) {
        var last = ret[ret.length-1];
        if (intervals[i].start <= last.end) {
            if (intervals[i].end > last.end) {
                last.end = intervals[i].end;
            }
        } else {
            ret.push(intervals[i]);
        }
    }
    
    return ret;
};