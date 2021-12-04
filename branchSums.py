class BinaryTree(object):
	
	def __init__(self, value):
		self.value = value
		self.right = None
		self.left = None	
	

def branchSums(root):
	sums = []
	calculateBranchSums(root, 0, sums)
	return sums

def calculateBranchSums(node, runningSum, sums):
	if node is None:
		return

	newRunningSum = runningSum + node.value
	if node.right is None and node.left is None:
		sums.append(newRunningSum)
		return
		
	calculateBranchSums(node.left, newRunningSum, sums)
	calculateBranchSums(node.right, newRunningSum, sums)
	