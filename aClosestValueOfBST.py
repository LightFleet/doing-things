# Avg: O(log(n)) time | O(log(n)) space
# Worst: O(n) time | O(n) space

def findClosestValueInBST(tree, target):
	return findClosestValueInBSTHelper(tree, target, float('inf'))

def findClosestValueInBSTHelper(tree, target, closest):
	if tree is None: 
		return closest
	if abs(target - closest) > abs(target - tree.value):
		closest = tree.value
	if target < tree.value:
		return findClosestValueInBSTHelper(tree.left, target, closest):
	elif target > tree.value:
		return findClosestValueInBSTHelper(tree.right, target, closest):
	else:
		return closest