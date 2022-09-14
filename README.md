# Schedule planner
Hi! The development team for this project consists of:
- Dennis (AnderssonDennis)
- Jesper (Jsvensson)
- Maria (MariaFranz)
- Rie (r-clementz)
- Tomas (tvoul)


We communicate on Discord, plan on Miro and docs and keep track of the project through Trello. As a new teammember you get access to these - if you haven't already gotten access ask Tomas (Discord), Maria(docs) and Dennis (Trello/Miro).
# How we work
In this project we work with scum-metology and have an agile way of thinking. That means that means that we work in sprints and use daily standups to keep track of the work. Dennis is our scrum master and the one to invite and structuring the daily standups. We often meet at nine sharp to talk over what we have done, if we met any problems and what we are going to do during the day. We don’t do problem-solving during these meetings, that’s something we do after in smaller groups. 

# How to get started
To get started you need to clone the code from the Github repository and open it in your workin tool of choice. 

### Install before start
First you need to install Node Package Manager
```bash
    npm install
    cd admin && npm install
    npm run build
    cd.. 
    cd schedule-data-service && npm install
```
Start:
```bash
    npm run dev
```

# Branching
How we are working in branches:

The main branch we use for code ready to go live. The current main branch is also the product in use.

The dev branch is our default branch. This is where the version of the product that is under development is.

Hotfix branches are used when somthing goes wrong and need to be fixed as soon as possible. 

Feature branches are where you develop your features and is where you do moste of you daily work. You create a feature branch from dev and when your done with the feature you secure thet it works and merge it into dev branch. 

Remember to push, pull and commit often! We dont want hours of work to go to waste and we work mvp (minimum viable product).

## Naming-convention 
Feature branches should always start with the name **dev** and after you write your **feature**. Example: **'dev-describe-feature'**. 

## Merging
A feature branch should always branch off from:

- dev-branch

and must merge back into:

- dev-branch

First you merge dev into your feature branch to secure that you have the latest version and no conflicts, before you merge your feature into the dev branch. The branches dev and main are protected. To be able to merge your changes into them you need to do a pull-request. The codeowners (Thomas & Maria) will manually code review them. 

When your feature is no longer under development you should deleted the branch so we can maintain clean developming enviroment.
## Merge conflicts
If you encounter a merging conflict where another team members code clashes with your own and you need to discuss how to proceed (compromise or decide whose code takes precedence) the team communicates primarily via Discord.

# Tests
This project has automated test trough GitHub actions and we are preform two types of tests in this project: 
 - API tests with Postman/Newman
 - UI/unit tests with Cypress 

 The tests are gathered and automated to run in the test.yml workflow. test.yml are triggerd on pull and push from our protected default branch **dev**.

 To be able to merge in to our protected braches all tests need to pass before the it's sent for approval by the codeowners. 


# CD
(Place holder)
- Feel free to write anything that comes to mind

## Ready to go live

When we are ready to go live with a new version of the project the dev branch will be merged into the main branch.

First you merge main into dev to make shure that there are no conflicts between the two versions. Then you may merge dev into main and trigger the process for a new version of the product to go live.

## Schedule
REST API Description at `/data`


## Invoicing
REST API (Invoices PDFs are generated in /schedule-data-service/invoices)

POST /data/invoices

```json
{
    "startDate": "date",
    "endDate": "date",
    "school": INT,
    "class": INT (optional),
    "course": INT id (optional)
}
```

