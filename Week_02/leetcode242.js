// leetcode 242 有效的字母异位词

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * hash法
 */
const isAnagram = function(s, t) {
    const map = new Map();
    Array.from(s).forEach(val => {
        if(map.has(val)) {
            map.set(val, map.get(val) + 1);
        } else {
            map.set(val, 1);
        }
    })
    try{
        Array.from(t).forEach(val => {
            if (map.has(val)) {
                map.set(val, map.get(val) - 1)
                if (map.get(val) === 0) {
                    map.delete(val)
                }
            } else {
                throw new Error("LoopTerminates");
            }
        })
        return !map.size
    }catch (e) {
        return false
    }
};
// 暴力排序
const isAnagram1 = function(s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('')
};