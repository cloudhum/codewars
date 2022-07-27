/*
    An array of boolean values is divided into two sections; the left section consists of all false and the right section consists of all true. Find the boundary of the right section, i.e. the index of the first true element. If there is no true element, return -1.
*/

function find_boundary(arr) {
    let left = 0
    let right = arr.length - 1
    let boundaryIndex = -1

    while (left <= right) {
        let mid = left + Math.floor(right - left / 2)

        if (arr[mid] == false) {
            left = mid + 1
        } else if (arr[mid] == true) {
            boundaryIndex = mid
            right = mid - 1
        }
    }
    return boundaryIndex
}