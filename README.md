# Schedule planner
Hi! The development team for this project consists of:
- Dennis (AnderssonDennis)
- Maria (MariaFranz)
- Jesper (Jsvensson)
- Tomas (tvoul)
- Rie (r-clementz)

We will be supporting you through out this project. We communicate on Discord, plan on Miro and keep track of the project through Trello.
# How to get started
To get started you need to clone the code from the Github repository and open it in your IDE. First you need to run "npm install" (Node Package Manager) in the terminal. Then you need to "cd schedule-data-service" before you use "npm start" to run the project. 
# Branching
How we are working in branches:

The main branch we use for code ready to go live. 

The dev branch is our default branch. This is where the version of the product that is under development is.

Feature branches are where you develop your own feature. You create a feature branch for your work and when you secured that it works then merge it into dev branch.

The branches dev and main are protected. To be able to merge your changes into them you need to do a pull-request. The codeowners will manually code review them. (Thomas & Maria)

Remember to push, pull and commit often! We dont want hours of work to go to waste. :)
# Merging
A feature branch may branch off from:

- dev-branch

Must merge back into:

- dev-branch

First you merge dev into your feature branch to secure that you have the latest code then you merge your feature into the dev branch. When your feature is no longer under development the branch get deleted to get a clean developming enviroment.
# Merge conflicts
If you encounter a merging conflict where another team members code clashes with your own and you need to discuss how to proceed (compromise or decide whose code takes precedence) the team communicates primarily via Discord.

# Tests
(Place holder)
- Feel free to write anything that comes to mind
# CD
(Place holder)
- Feel free to write anything that comes to mind

# Ready to go live

When we are ready to go live with a new version of the project the dev branch will be merged into the main branch.

First you merge main into dev. Then you may merge dev into main and trigger the process for a new version of the product to go live.

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

