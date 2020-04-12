/**
 * 获取一个随机整数，从begin 到end  :[begin,end]
 * @param begin
 * @param end
 */
export function getRandomNumberFromTo (begin = 1, end = 10) {
    return Math.floor(Math.random() * (end - begin + 1) + begin)
}
