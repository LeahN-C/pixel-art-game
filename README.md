# Pixel Art Grid Editor

## Explanation

In this project you will use HTML, CSS, and JavaScript DOM Scripting to change the background color of cells within an 8x8 grid to create a pixel art editor.

You will need to draw upon your understanding of writing JavaScript functions, registering event listeners, and calling event handlers based on a user's interaction with the web page.

Below you will see several sections to help you in your work on this project.

- The [Project Hints](#project-hints) provides short helper explanations to lead you in right direction of the project stories
- The [Stories](#stories) outlines the features using natural language. Make sure to attempt the first story, and move on only after you complete each one in turn.

# Project Hints

## Find all the Grid Cells

Create a variable that is the result of locating all the elements on the page with a class of `cell`.

> Remember that you can use `document.querySelectorAll('someClassName')` to find elements on the page with a class of `someClassName`.

## Find all the Color Buttons

Create a variable that is the result of locating all the elements on the page with a class of `colorButton`.

> Remember that you can use `document.querySelectorAll('someClassName')` to find elements on the page with a class of `someClassName`.

## Enable the Color Selection Buttons

Add an event listener to the `Start` button so that when the button is clicked, then a function is called to find all the elements with class of `colorButton`, loop over each element, and change its `disabled` property to false.

> Remember that you can use `document.querySelectorAll('someClassName')` to find elements on the page with a class of `someClassName`.

For example:

```js
someElement.disabled = false
```

## Register event listeners on the cells in the grid

After finding all elements with class `cell` in the page. 

When the `Start` button is clicked, use the variable that references the collection of cells, loop over them using either a `while() {}` loop, `for() {}` loop, or `allCells.forEach()` and add an event listener function similar to the following: 

```js
someElement.addEventListener('click', someEventHandlerFunction);
```

If you want to test out whether the handler has been added successfully, you can experiment by having the handler simply call `window.alert('some message')` or `console.log('some message')` for your own verification. Remember to change the handler to do something useful after your confirmation.

## Update the cell `style` in response to a `click` event

The event handler for each `cell`, should use a reference to selected color, and change the clicked cell's `background` or `background-color` to match the selected color.

The code below would change the text color of a cell

```js
someCell.style.color = 'red'
```

## Find the "Clear Cell" Button

You will also want to have a variable to represent the buttons with and `id` attribute of `clearCell`. You can find this element by searching the document using the `document.getElementById('someIdHere')`. In this case you only want to find a single element, and not a collection of elements.

## Register an event handler to clear the cell

When a user clicks the `Clear Cell` selection buttons, you will want to trigger an event listener to change the value of some selected color variable such that it represents the color `lightgray`.

## Find the "Clear Board" Button

You will also want to have a variable to represent the buttons with and `id` attribute of `clearBoard`. You can find this element by searching the document using the `document.getElementById('someIdHere')`. In this case you only want to find a single element, and not a collection of elements.

## Register an event handler to clear the board

When the user clicks the "Clear Board" button, then you should trigger an event listener that loops over all the elements with a class of `cell` (either by using the existing variable, or by finding all the elements again), and then reset their `background-color` to be `grey`.

## Use a dialog to confirm clearing the screen

When the user clicks `Clear Board` you will want to confirm that the user really intends to clear everything before performing that action.

Take a look at the documentation on `window.confirm()` below

[Documentation on Dialog Confirmations](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm)

```js
  let result = window.confirm('Are You Sure?');
  // result will be either `true` or `false`
  if (result) {
    // do something now that the user has confirmed
  }
```

# Stories

## Click "Start" to begin editing

**GIVEN:** A page with an 8x8 Grid and a `START` button

**WHEN:** A user clicks the `START` button 

**THEN:** The color selectors should become enabled, and the black color is selected

**AND:** The `START` button is disabled, until the `RESET` has been clicked

## Click any cell

**GIVEN:** The `START` button has been clicked, and the black color selector is enabled

**WHEN:** A user clicks a grid cell

**THEN:** Then the cell background color changes to black

## Select a new cell color

**GIVEN:** The `START` button has been clicked, the color selectors are enabled, and the user has selected a color by clicking the selector

**WHEN:** A user clicks a grid cell

**THEN:** Then the background color of the cell clicked in the grid changes to the selected color.

## Clear a Cell Color

**GIVEN:** The `START` button has been clicked, and a cell has had its color changed

**WHEN:** A user clicks a "Clear Cell"

**THEN:** Then the background color of the cell clicked in the grid changes to `lightgray`.

## Start over

**GIVEN:** The user has selected some cells -OR- is satisfied with their artwork

**WHEN:** The user clicks the button `RESET`, then they are asked to confirm that they want to clear the grid.

**THEN:** The grid cells are reset to an empty state, so that the user can then start anew and create another masterpiece

**AND:** The user can start again with an empty board

## Confirm your decision

**GIVEN:** The user has clicked the button `RESET`,

**WHEN:**  They are presented with a confirmation in the form of a `window.confirm("Are you sure?")` dialog, and they click `Ok`

**THEN:** The grid cells are reset to an empty state, so that the user can then start anew and create another masterpiece

**OTHERWISE:** The resetting of the grid cells is cancelled

## Icebox Bonus Challenges

- Try to add at least three more colors as selection options
- The user can click a `SHUFFLE` button, and randomize the order of the cells
- The user can click `SAVE` to store their artwork with a name
- The user can replace the grid with a new one, by selecting from sizes, such as 16x16, 32x32, or 64x64, and the grid cells will shrink to fit the page
- The user can click `UNDO` to reverse up to the last 10 steps
