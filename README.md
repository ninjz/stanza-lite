# Stanza-Lite

Stanza front end challenge

### Installation

To run, clone the repositiory and run:

```sh
npm install
```

Once installation is done, run:

### `npm start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


To build for production:

### `npm run build`

### My Approach

I explored the graphql schema using graphIql. Decided on implementing the front-end
using React, and Apollo as the client-side GraphQL Library. 

I chose Apollo over Facebook's Relay, because I did not like the strict restrictions on how GraphQL 
is to be implemented on the server side. It also seems like Stanza's server-side GraphQL 
implementation is not compatible with the pagination features of Relay. The other alternative was 
Lokka, but it's feature set is very barebones, and I opted for Apollo for the sake of future 
extensibility. 

## Things I wanted to do but didn't have the time to do

* I wanted to split off the query for the Event data into a fragment so I would have been able to
co-locate the field access with the CalendarEvent component.

* Make UI nicer and switch to using React based approaches to CSS styling.

* Plug in React-Lite for increased client-side performance.

## Demo

I deployed the application on to my Github pages:

Open [https://ninjz.github.io/stanza-lite/](https://ninjz.github.io/stanza-lite/) to view