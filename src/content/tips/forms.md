---
title: Forms
---

# Forms

Forms often pose difficult design challenges because of push and pull of UX considerations, browser eccentricities and development time.

Typical forms are the most out-of-the-box and ready-to-go interactive elements available to us in the browser. Because of that, there are a lot of established patterns, which can be both good and bad. It’s important a UI designer understand these patterns, and can build designs to support them, rather than fight them.

There are also a lot of limitations for styling. Browser makers have built in styling for forms, and there are limitations regarding what can be styled, and what can’t.

## Input Types

Know your input types. Here are the basics:

### Text

Single line text entry. This also includes special inputs for email addresses, telephone numbers, search, password, and more.

<label for="text-ex">Text</label>
<input type="text" id="text-ex">
<label for="pw-ex">Password</label>
<input type="password" id="pw-ex">

### Text Areas

Muli-line text entry.
<label for="ta-ex">Text Area</label>
<textarea id="ta-ex" />

### Number

This field lets you define a min, a max, and a step property allowing the user to bump them with UI or even the arrow keys on their keyboard. Most often seen in quantity boxes when shopping.

<label for="number-ex">Number</label>
<input id="number-ex" type="number">

### Range

Similar to number, but gives you a slider as the UI. However, custom styling is difficult, so most of the time you see these, they've been painstakingly re-created, rather than use the default styles.

<input type="range">

### Date

Browser support is still pretty bad, so most of the time you see a date-picker, it's a custom solution, but someday native date fields will be useable.

<input type="date">

### Checkboxes

Checkboxes represent true/false or on/off options in forms. They have no relationships other than to themselves. Styling involves hiding the real elements, and controlling them with fakes, aka "psuedo elements".

<input type="checkbox" id="cl" name="cl"
        checked>
<label for="cl">Checkbox Label</label>

### Radio Buttons

The little circle inputs are radio buttons and exist as a group. Turning on one means turning off another. Styling them also involves hiding the real elements and replacing them with psuedo elements.

<input type="radio" id="huey" name="drone" value="huey" checked>
	<label for="huey">Huey</label>
	<input type="radio" id="dewey" name="drone" value="dewey">
	<label for="dewey">Dewey</label>
	<input type="radio" id="louie" name="drone" value="louie">
	<label for="louie">Louie</label>

### Selects or "Dropdowns"

Selects can hide big lists of options. If there are less than 4 or so, consider using a radio group instead. Big long lists can be detrimental to the user experience.

You may have seen type-ahead or searchable dropdowns. These are not native fields, but custom implementations. There is an input called a datalist that is similar, but not quite as robust as those custom solutions.

Selects can also be tricky to style, but it's do-able. A good recommendation is to not attempt to style the contents of the dropdown, but just the dropdown itself.

<select name="pets" id="pet-select">
    <option value="">--Please choose an option--</option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
    <option value="goldfish">Goldfish</option>
</select>

### File

A button for uploading a file. The file upload has to be handled by separate programming, so these are just a UI that allows for picking a file reference from the users computer. Drag and drop implementations are not-native fields.

<input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg">

### Native?

So what is meant by "native" fields? Those types described above all have native implementations that work in the browser. Native is preferred, especially for mobile usage, where a user on iOS gets an iOS experience, and an android user gets and android experience. However, styling options can be limited, meaning often, some inputs are manually pieced together to allow for full styling. Having an idea of the difference can help prioritize needs, as these custom styles are often very time consuming, and less accessible to users with disabilities.

## Input Labels, Accessibility, and Placeholders

All inputs should have corresponding labels to remain accessible. The labels also need to remain visible. Placeholders can technically be put in text inputs, but once the user starts typing, they disappear.

## Front-end Form Validation

Form data should be validated before getting sent to the server. This means checking formats, lengths, required fields etc. There are two basic types:

### Built-in, or "native" Form Validation

HTML5 forms have validation features built in. They can check your data and show an error to the user before the form will be allowed to send. However, those validation messages are not customizable, and how they look varies by browser.

This kind of validation can be extended, to a point, with additional Javascript.

### Custom Javascript Validation

This validation turns off the HTML5 validation, and uses Javascript to completely customize the error messages look and the actual text being used.

Typically a library of some sort is used, but it can still take a significant chunk of time to build this type of validation.

### Why does it matter?

Make sure you and your developer have a plan for the kind of validation being used. If the plan is to use native validation, you'll be wasting your time designing custom errors. If the plan is to use custom validation, you will then need to design it.
