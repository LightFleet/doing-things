# O(n) time | O(1) space
def threeLargestNumbers(array):
    threeLargestNums = [None, None, None]

    for num in array:
        updateLargestNumbs(threeLargestNums, num)

    return threeLargestNums


def updateLargestNumbs(largestNums, num):
    if num > largestNums[2] or largestNums[2] is None:
        shiftAndUpdate(largestNums, num, 2)
    if num > largestNums[1] or largestNums[1] is None:
        shiftAndUpdate(largestNums, num, 1)
    if num > largestNums[0] or largestNums[0] is None:
        shiftAndUpdate(largestNums, num, 0)


def shiftAndUpdate(array, num, position):
    for i in range(position + 1):
        if i == position:
            array[position] = num
        else:
            array[position] = array[position + 1]