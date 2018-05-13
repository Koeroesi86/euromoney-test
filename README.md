# EuroMoney test

### Dependencies to run
* [NodeJS](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/en/)

### Usage

Please enter in a console/terminal:
    
    yarn install
    yarn start


### Testing

Please enter in a console/terminal:

    yarn test


## The Brief

> Present useful information to visitors in the reception area of Euromoney Institutional Investor PLC's main London office.

The reception area has a display screen. This screen should display information that our visitors will hopefully find useful and a welcome distraction for the short period they are waiting. Information pertinent to our visitors may also be useful to our employees. They should be able to access the same from their work laptops and mobile devices.

## Advice to candidates

- Feel free to use whatever libararies you would like when completing this assignment.
    - e.g. if you like to use Sass, Jquery and Gulp then go for it. If on the other hand you prefer React with ES6 then that is also suitable :).
- You should approach this task in the same way that you would a real, production assignment. Do not 'code to the test'.
- It is more important that you show the right approach than that you complete all the stories. If you run low on time, apply an MVP to the stories. 
- We will assume that the code you produce for this exercise reflects the kind of code you would write in a real-world situation, and assess accordingly.
- We are particularly interested in how you approach the exercise and understanding why you chose to do things a certain way. Inline commenting is your friend for this.
- We don't just want to see the output. If you use pre-processors, build tools etc we want to see all of that because that's a skill too, so make sure it's in your submission
- It needs to be platform agnostic. If it's hooked into a particular IDE or OS or needs complicated config we aren't going to be spending time to set it up

## Task Stories

Please complete each story in order.

---

### Story 1

As a **visitor waiting in reception**  
I want **to see some news articles displayed on a TV screen in reception**  
So that **I can be entertained while I wait for my appointment**

#### Acceptance criteria

- The content of [./static/news.json](./public/static/news.json) is displayed in a browser

---

### Story 2

As an **employee**  
I want **see some news articles displayed on my mobile device**  
So that **I can be kept up to date with news that is of interest for the company**

#### Acceptance criteria

- The content of [./static/news.json](./public/static/news.json) is displayed in a browser
- The page is responsive

---

### Story 3

As a **visitor waiting in reception**  
I want **the news articles to be refreshed with new content when its available**  
So that **I remain entertained even if I'm waiting in reception for a long time**

#### Acceptance criteria

- The content retrieved from a news API is displayed in a browser
    - Tip: you can sign up for a free API key from https://newsapi.org 
- The display updates on a regular interview to make sure we are displaying the most recent news to the visitor
- If data is not available through loss of connection or error, the display should have a gracefull fallback mode

---

### Story 4

As a **CEO**  
I want **to start displaying news from Euromoney's news API instead of using the generic news api**  
So that **I can entertain our guests with news that is relevant for our company**

#### Acceptance criteria

- This news API doesn't currently exist, so instead we would like you to prove that your existing solution would continue to work even if we changed out the API for a different one (perhaps even one accepting a different request and providing a different response)
    - Tip: create some unit tests around your solution that will give us confidence that it will continue to work even if we update the API's signature.

---

## Submitting your work

- Send us a link to your work from GitHub, Bitbucket, Dropbox ... whatever
- Please do not send attached zip files via email
- If you want to branch (named with your full name) and send us a pull request that works too
- **If there is any setup necessary please update this README.md file with a step by step guide**
- **Please gitignore any build dependencies such as /node_modules. We will get them in the build** 
&nbsp; 