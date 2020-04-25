/*
给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
示例 1:
    输入: "Let's take LeetCode contest"
    输出: "s'teL ekat edoCteeL tsetnoc"
    注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let arr = s.split(' ')
    function reverseStr(str) {
        let res = str.split('')
        res.reverse()
        return res.join('')
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = reverseStr(arr[i])
    }
    return arr.join(' ')
}
