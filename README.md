# anagramsApp
There are two solutions to solve this problem. 
The first solution is in the sol1.js file, where the user can input whatever word
they want and the program will find all the permutations of that word then it will 
compare them with each word of the same length from the dictionary.txt file. 
This solution has a complexity of O(n^2) but thats not the only drawback
the second drawback is that because of the number of permutations that 
can be computed from the word it will take a huge amount of calculations 
(number of permutations * number of words the same length as the given word in dictionary.txt)
to be done in onder to find the anagrams, which slows down the process a lot. 

With this problem in mind I came up with another much simpler solution (sol2.js) that uses 
built-in javascript functions where we modify the words from the dictionary.txt so we convert
each word to have lower case characters then we split the word into separate characters then 
we sort them in a alphabetical way (a-z) and finally we join them together sorted, we do the same with 
the word that the user inputs in this way we can compare the modified words to the given word that
the user did enter to find the anagrams. Using this approach we have to compare the given word with the
number of words of the same length from the dictionary.txt only once (which means much less comparations). 
This solution has O(n) complexity which is much better than the previous solution.


