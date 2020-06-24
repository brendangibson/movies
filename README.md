# Movie Searcher

To run:
* Clone this repo
* `npm install && npm run start`

or

[Go to this link](http://doordropping.com/fast/)

To use the app, start typing in the search box. After a few letters you should see some movie boxart. Click on the boxarts to select/unselect the movies. You should see the cart icon on the top right show how many movies have been selected. Click on the cart icon to see a modal confirming the movie selections.

## Extra Tasks

If you have time and would like to add more

- Introduce testing to the application

Run `npm run test` to run the tests. I put in some tests for the `CartIcon` component, using [enzyme](https://airbnb.io/projects/enzyme/).
- Use Typescript

I used Typescript.

- Use Redux

I did not use Redux. Instead I used [recoil](https://recoiljs.org/) which is the new hotness and using it gave me some good experience as it looks like it will be widely used in the future.

## Summary Questions

### What were the most difficult tasks?

The most difficult tasks were getting the requests to the API working with `recoil`. I planned to cache the results to save on my allotment and to make the app faster. I did not work out a good way to do this with recoil and fell back to using the movie results straight from the request.  

### Did you learn anything new while completing this assignment?

I decided to use `recoil` and [tailwind](https://tailwindcss.com) for this exercise. I had given a presentation on `recoil` previously but had not used it extensively. I had heard a lot about `tailwind` and this was my first time using it. I like the developer experience with `recoil` which is much easier to use than `redux` and look forward to learning more about it. I also liked `tailwind` and I can see that it helps manage CSS complexity well. My concern with `tailwind` is that it may be a framework that makes the easy things easier and the hard things impossible.

### What did you not have time to add? What work took the up majority of your time?

I did not have time to add any animations or make the the styling professional. I did not spend much time dealing with the errors and edge cases like missing and inconsistently-sized boxart.

I did not add any handling of pagination. It looks like the default search returns 10 results. If I had time I would prefetch more results as the user scrolls down.

The majority of my time was spent trying to get `recoil` to cache incoming data.

### How could the application be improved?

The application could be improved by adding loading animations and by improving the algorithm for the instant search. I would like an algorithm that shows the first results that come back initially and then only shows the latest results as the user types, but still making the requests for the results so that the results can be shown if the user stops typing. I have implemented this application before, in the real world, and that algorithm worked very well.

It could also be improved by working out why it doesn't work in IE.
