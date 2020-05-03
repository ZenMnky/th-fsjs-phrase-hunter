okay, so this add phrase to display.

i get a phrase, i slice it into units (letters and spaces), those are in an array

i want to take those units and build list items with it. depending on the unit (letter/space), i want to add the appropriate class.

i want to take all those list items and append them to the unordered list in the index.

i also want to clear out the unordered list at the start.

so, making the list, for each item in the array of units:
- create a new list item element
- sent its innerHTML to the given array unit
- test the unit, if letter or white space, and add the right class
- append to the UL