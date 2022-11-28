# Grow Takehome

Hi! Here are some notes about how I approached the take home assignment.

**Setup:** I used create-react-app for a quick setup and configuration.

**Primary Tools:** React, TypeScript, Axios, ReactRouter, ReactQuery, and AntDesign

**API:** I created an `articlesService` which uses Axios as the HTTP client, declares the API call functions, and exports custom hooks to handle the requests from the components. The hooks are are used as an extension of react-query's `useQuery` hook. Check out the `services` folder

**Routing:** I created a simple routing structure for `/articles` and `/article/:id`. The primary use case is actually to hold query parameters for the date, count, and country selections.

**Testing:** I only had time to add a couple tests which were done using react testing library. Unfortunatley, I begain to run out of time at this point so this is one thing I would have loved to work more on. (I have a lot of experience writing tests using Jest/Enzyme and coverage is always a high priority for me)

**Performance Considerations:** For the API calls, I used a cache to prevent duplicate requests in the same user session. Given more time I would have like to spend some more time on component re-renders. Places I would start would be looking into would be caching values/functions in components with things like useMemo and useCallback, refactoring state location, managing some prop drilling I had with pins, _potentially_ looking into potentially using context/global state, and looking into side effect's and their dependencies.

**Issues:**
The lack of ID's in the wikipedia/wikimedia API responses made it difficult to do certain things. I used loop indexes as component keys and used the article titles for various things like API request parameters, cache keys, and identifiers. This resulted in an edge case with the pinned article feature where the localStoarage key was the article title. In this case, if a user pinned `Thanksgiving` in the USA and then pinned `Thanksgiving` in Germany the project for the `Thanksgiving` key in localStorage would be overwritten.

**Reflect:**
With more time I would have liked to add unit tests for each component as well as test my API interface and routing. I would have also liked to separate out some concerns in `ArticlePage`. There are a lot of props, API calls, and side effects being handled/passed down from there. Lastly, I would have liked to refine the loading / error application states and the UI in general!

## Primary Features

### Filter by date and query count


https://user-images.githubusercontent.com/46094451/204303663-d2984e7b-551a-4a40-b83a-548942b2302b.mov


I tackled this by storing these as query parameters in the url. This way users could bookmark pages, access the forward and back browser buttons, and refrest the page without losing their current query. On app load, the parameters are defaulted to yesterday's date and 100 articles displayed. Each time an input is changed a call is made to the wikipedia/wikimedia API to update the current articles

### Pinned Articles


https://user-images.githubusercontent.com/46094451/204303896-88a028d6-c225-44e5-9951-c975c64c53d6.mov


For pinning articles, I used `localStorage` to store key value pairs of article titles and projects respectively. The project represents the country/language of the article. For example, for English articles the project would be `en.wikipedia` and for German articles it would be `de.wikipedia`. When a country is selected, the top articles for that country/language's project is ranked. This is also the case for the individual rankings on the detail page. Only the summary on the detail page is in english.
The project is also stored to allow pinned articles to bring you to the detail page and load the top days this month for the country of the article require the project to be specified.

Articles can be pinned (or unpinned) with the pin icon in the article list or the pinned article section. I achieve this with local state that pulls from localStorage and updates localStorage on each state change so the pins will persist on page load.

### Detail Page


https://user-images.githubusercontent.com/46094451/204303928-9fe7f396-9cdf-4efe-89d6-2d5c477ad99c.mov


The detial page requires two api calls. The first is to the wikimedia api to retrieve top day rankings for that article over the current month and the other is to the wikipedia api for the summary. As mentioned above, rankings are based on original country's project and the summary is based on the english project so we could all read the summary previews!

### Running the app locally
Download dependencies `npm install` and run `npm start`! (or you can use yarn)
