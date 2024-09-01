
    >>>> explaination of split(),map(),charAt(),toUpperCase(),slice(),join()

      this.inputString.split(' ') - 

      split(' ') method splits the string into an array of words by spaces.

      Result: ['subscribe', 'target', 'developers']
      ----------------------------------------------------------------------
      ['subscribe', 'target', 'developers'].map((word) => word.charAt(0).toUpperCase() + word.slice(1))-

       The map function iterates over each word in the array and
       capitalizes the first letter of each word

       For "subscribe", it becomes "Subscribe":

       word.charAt(0).toUpperCase() returns "S"
       word.slice(1) returns "ubscribe"
       Combined, it results in "Subscribe"

       Result: ['Subscribe', 'Target', 'Developers']
       ---------------------------------------------------------------

      ['Subscribe', 'Target', 'Developers'] .join(' ') - 
       
      The join(' ') method combines the words back into a single string,
      with each word separated by a space.
      -----------------------------------------------------------------
      The final transformed string is "Subscribe Target Developers"

     ################################################################################################
     
     >>>> explaination of split(),reverse(),join()

     "subscribe target developers".split('') ----> 
     ['s', 'u', 'b', 's', 'c', 'r', 'i', 'b', 'e', ' ', 't', 'a', 'r', 'g', 'e', 't', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', 's']
     
     The split('') method splits the string into an array of individual characters.
     --------------------------------------------------------------------------------
     
        ['s', 'u', 'b', 's', 'c', 'r', 'i', 'b', 'e', ' ', 't', 'a', 'r', 'g', 'e', 't', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', 's'].reverse()  ----->

        ['s', 'r', 'e', 'p', 'o', 'l', 'e', 'v', 'e', 'd', ' ', 't', 'e', 'g', 'r', 'a', 't', ' ', 'e', 'b', 'i', 'r', 'c', 's', 'u', 's']

        The reverse() method reverses the order of the elements in the array
        -----------------------------------------------------------------------------

           ['s', 'r', 'e', 'p', 'o', 'l', 'e', 'v', 'e', 'd', ' ', 't', 'e', 'g', 'r', 'a', 't', ' ', 'e', 'b', 'i', 'r', 'c', 's', 'u', 's'].join()

          Final Output --->   "srepoleved tegrat ebircsus"

          The join('') method joins the array of characters back into a single string, with no separator between the characters.

          ##########################################################################################

          >>>> explaination of split(),filter(),test(),join()

         i/p ---- "subscribe target developers!@".split('');

         o/p ---- ['s', 'u', 'b', 's', 'c', 'r', 'i', 'b', 'e', ' ', 't', 'a', 'r', 'g', 'e', 't', '  ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', 's', '!', '@']  

         ------------------------------------------------------------------------------
         i/p ----
         ['s', 'u', 'b', 's', 'c', 'r', 'i', 'b', 'e', ' ', 't', 'a', 'r', 'g', 'e', 't', '  ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', 's', '!', '@'] .filter((char) => /[a-zA-Z0-9 ]/.test(char))

          o/p ----
          ['s', 'u', 'b', 's', 'c', 'r', 'i', 'b', 'e', ' ', 't', 'a', 'r', 'g', 'e', 't', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', 's']

          explaination of [a-zA-Z0-9 ] 

          A lowercase letter (a-z)
          An uppercase letter (A-Z)
          A digit (0-9)
          A space (' ')

          test() checks if a specific pattern (like a word or a combination of letters and numbers) exists in a string.returning true (if present) or false (if not present)

          ---------------------------------------------------------------------------------
          i/p ----
          ['s', 'u', 'b', 's', 'c', 'r', 'i', 'b', 'e', ' ', 't', 'a', 'r', 'g', 'e', 't', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', 's'].join('')

           Final o/p ---- "subscribe target developers"

           #######################################################################################
            
       
        





