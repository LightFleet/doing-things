def move_elements_to_the_end(array, element):
	i = 0
	j = len(array) - 1

	while i < j:
		while array[j] == element:
			j -= 1
		if array[i] == element:
			array[i], array[j] = array[j], array[i] 
		i += 1

	return array


array = [4, 21, 41, 2, 2, 2, 4, 5, 4, 2, 3 , -1, 0]

print(move_elements_to_the_end(array, 2))
