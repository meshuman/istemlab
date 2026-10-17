// Experiences: practical lessons from planning and running AI, GeoAI and immersive 3D projects.
// Each one is written to be useful on its own: the questions to ask, the mistakes to avoid and a checklist to take away.
// `seed: true` = drafted from our general delivery practice. Add real project stories and numbers before launch.
// Reading time is calculated automatically (lib/readtime.js).

import { p, h2, ul, ol, note, qa } from "./blocks";

export const experiences = [
  /* ------------------------------------------------------------------ */
  {
    seed: true,
    slug: "questions-before-saying-yes-to-an-ai-project",
    title: "Seven questions we ask before we say yes to an AI or GeoAI project",
    phase: "Planning",
    project: "Project intake",
    excerpt:
      "Most failed AI projects were doomed in the first meeting. These are the questions that separate a project worth doing from one that will quietly stall.",
    date: "2026-10-17",
    image: "/experience-photos/questions-before-yes.webp",
    takeaways: [
      "A good project starts with a decision, a user and a measure of success, not with a technology.",
      "Data access, an owner and a plan for after launch matter as much as the model.",
      "Saying “not yet” or “start smaller” early is a service to the client, not a refusal.",
      "A one-page answer to these seven questions is often the most valuable thing a project produces in its first week.",
    ],
    body: [
      p("Every week, organisations arrive with a version of the same request: we have a lot of data, we want to use AI, can you help? It is a sensible question and an exciting one. It is also, on its own, nearly impossible to answer well. The projects that succeed are rarely the ones with the cleverest idea. They are the ones where a few basic questions were asked, and honestly answered, before anyone wrote any code."),
      p("This article shares the seven questions we ask at the start of any AI, GeoAI or immersive 3D project. Use them to test your own project idea, whether you work with us or not."),

      h2("1. What decision will this change?"),
      p("Every useful AI system changes something that someone does. A map of crop stress is useful if it changes where an officer drives this week. A document assistant is useful if it changes how long a team takes to answer a question. If we cannot name the decision, we are about to build a dashboard that nobody opens."),
      ul(
        "Good answer: “We decide which districts get field visits each month, and today we guess.”",
        "Weak answer: “We want insights from our data.”",
        "Follow-up: how is that decision made today, and what would a better answer be worth?",
      ),

      h2("2. Who will use it, and have we asked them?"),
      p("The person who commissions a project is often not the person who will use it. A manager may want a tool that a field officer finds slow and awkward. We ask to speak to at least two real users in the first week, and we ask them to describe their day, not to approve our plan."),
      ul(
        "What do they use today, and what do they dislike about it?",
        "On what device, with what internet, in what setting?",
        "What would make them trust the result, or ignore it?",
      ),

      h2("3. What data exists, and can we actually use it?"),
      p("“We have a lot of data” can mean anything from a clean, documented database to a shared folder of spreadsheets that three people understand. We ask to see the data in the first week, not the last, and we check four things."),
      ol(
        "Access: can we legally and technically use it for this purpose, and who must approve?",
        "Quality: how complete, current and consistent is it?",
        "Labels: for supervised models, are there examples of the right answer, and who created them?",
        "Continuity: will it keep arriving after the project ends, and who is responsible for that?",
      ),
      note("If the data cannot be used, or does not exist, the first project is a data project. That is not a failure. It is the honest starting point."),

      h2("4. How will we know it worked?"),
      p("We agree on a measure of success, and a baseline, before building. Without a baseline, every improvement is an opinion."),
      ul(
        "Time: minutes per task, before and after.",
        "Quality: error rates, or accuracy on a test set that was agreed in advance.",
        "Money or reach: cost saved, enquiries handled, area covered.",
        "Adoption: how many people use it each week, and what they say.",
      ),
      p("We also agree a minimum result below which the idea needs to change, and a date to decide. A pilot with no decision date is a hobby."),

      h2("5. What happens when it is wrong?"),
      p("Every AI system makes mistakes, so the question is what they cost and who catches them. We list the likely errors and sort them by harm."),
      ul(
        "Low harm, easy to catch: a poor first draft that a person edits.",
        "Medium harm: a missed item that a later check will find.",
        "High harm: a wrong decision that affects people, money or safety, which needs human review and careful limits.",
      ),
      p("This conversation shapes the design. High-harm uses get a person in the loop. Low-harm uses can be automated further."),

      h2("6. Who owns it after launch?"),
      p("Software is not finished when it is delivered. Models need monitoring, data needs refreshing, documents change and users change jobs. We ask who will own the system in a year, and what time and budget they have. If the honest answer is “nobody”, we plan a simpler system that can survive without constant care, or we plan the handover and training as part of the project."),

      h2("7. What is the smallest version that proves the idea?"),
      p("Most ideas start too big. The cure is to ask what we could build in six to eight weeks that would answer the biggest uncertainty. That might be one district instead of the whole province, one document collection instead of every file or one task instead of a whole workflow. A small, real result teaches more than a large, theoretical plan."),

      h2("What a good answer looks like"),
      p("We ask clients to answer all seven in a single page. A strong page might read: “Field officers choose which villages to visit each month. They need a ranked list by Friday. We have three years of survey data and free satellite imagery, owned by the planning unit. Success is cutting wasted visits by a third, measured against last year. Wrong rankings cost a trip, so officers will review the top ten. The planning unit will own it. We will start with one district.” That is a project we can begin."),

      h2("Warning signs"),
      ul(
        "The goal is a technology, such as “we need a chatbot” or “we want machine learning”.",
        "There is no named owner who has time for the project.",
        "The data cannot be shown until after the contract.",
        "Success is described only as “innovation” or “modernisation”.",
        "Nobody has talked to the people who will use the result.",
      ),

      h2("When we say “not yet”"),
      p("Sometimes the right answer is to wait. If the data does not exist, we propose a short project to collect it. If the decision is unclear, we propose a workshop. If the budget is too small for the ambition, we suggest a smaller scope. We would rather tell a client this in the first week than deliver a disappointing system in the sixth month."),

      h2("A checklist to take away"),
      ul(
        "Can we state the decision this will change in one sentence?",
        "Have we spoken to two real users?",
        "Have we seen the data, and confirmed access and quality?",
        "Do we have a baseline and a success measure?",
        "Do we know the cost of a wrong answer and who reviews it?",
        "Is there an owner for after launch?",
        "Is the first version small enough to finish in two months?",
      ),

      h2("Frequently asked questions"),
      qa(
        ["What if we do not have good answers to some of these?", "That is normal. The questions are a map of what to do first. A project can start with the unanswered ones, such as a data audit or a user workshop."],
        ["How long does this take?", "Often a few days to two weeks, including looking at the data and talking to users. It is the cheapest part of the project and has the highest return."],
        ["Do we need a technical person to answer these?", "No. They are business questions. A technical partner helps with data access and feasibility."],
        ["What if our idea does not pass?", "Then you have saved money, and learned what to change. Many of the best projects began as an idea that failed the first review and came back smaller and sharper."],
      ),
      p("Good projects are chosen as much as they are built. Seven honest questions will not guarantee success, but they remove most of the reasons that projects fail, and they make the work that follows far more likely to matter."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    seed: true,
    slug: "estimating-an-ai-project-honestly",
    title: "How to estimate an AI project honestly: ranges, phases and the costs people forget",
    phase: "Planning",
    project: "Scoping and pricing",
    excerpt:
      "Why a single fixed number for an AI project is usually wrong, how to estimate in phases with ranges, and the hidden work that sinks budgets.",
    date: "2026-10-16",
    image: "/experience-photos/estimating.webp",
    takeaways: [
      "AI projects contain real uncertainty, so honest estimates are ranges that narrow as you learn.",
      "Split the work into phases with a decision at the end of each.",
      "Data preparation, labelling, testing, integration and training usually cost more than the model.",
      "Ask what is included, what is excluded and what would change the price.",
    ],
    body: [
      p("“How much will it cost, and how long will it take?” is the first question on every project, and the hardest one to answer honestly. Ordinary software can often be estimated from experience. AI work contains a different kind of unknown: until you try, you do not know whether your data is good enough, how accurate a model can become or how much effort the last ten percent of quality will take."),
      p("This does not mean estimates are useless. It means they must be built differently. Here is how we approach it, and what clients can do to get a number they can trust."),

      h2("Why a single fixed price is risky"),
      p("A fixed price for a whole AI project forces someone to guess the unknowns. If the supplier guesses low, they will cut corners or run out of money. If they guess high, the client overpays for risk that may never appear. Either way, the incentives are poor. The uncertainty is real, and pretending otherwise just hides it."),

      h2("Estimate in phases"),
      p("A better approach is to divide the project into stages, with a clear result and a decision after each. The early phases are small and fixed. Later ones are estimated as ranges that firm up as you learn."),
      ol(
        "Discovery (days to two weeks): clarify the decision, users, data and success measure. Result: a one-page scope and an honest feasibility view.",
        "Proof of concept (four to eight weeks): test the core idea on a small slice of real data. Result: evidence of what accuracy is realistic, and a refined estimate.",
        "Build (a range): develop the full solution, with integration, interface, security and testing.",
        "Pilot with users (four to eight weeks): run it in the real setting, and measure against the baseline.",
        "Rollout and handover: train people, document the system and agree who maintains it.",
      ),
      p("The first two phases are inexpensive, and they buy the information that makes the later estimates reliable."),

      h2("Give ranges, and say what moves them"),
      p("An honest estimate sounds like: “Between X and Y, most likely near the middle. It will be at the high end if the data needs more cleaning than the sample suggests, or if integration with your existing system is harder than expected.” That is more useful than a single number, because it tells you where to look for risk."),
      ul(
        "Ask for the assumptions behind every estimate.",
        "Ask what would make it higher, and what would make it lower.",
        "Agree how you will handle changes, so that small ones do not become disputes.",
      ),

      h2("The costs people forget"),
      p("The model is often the smaller part of the budget. These are the items that most often go missing."),
      ul(
        "Data preparation. Finding, cleaning, joining and documenting data is frequently the biggest single item.",
        "Labelling. Supervised models need examples of the right answer, and creating them takes expert time.",
        "Testing and evaluation. Building a good test set, running it and fixing what it finds is real work.",
        "Integration. Connecting to existing systems, logins, databases and workflows is slow, and full of surprises.",
        "Interface and design. Even a good model needs a screen that people can understand and trust.",
        "Security and privacy review. Especially with personal or sensitive data.",
        "Training and change management. People need to learn and want to use the system.",
        "Running costs. Cloud computing, storage, model usage fees, licences and monitoring continue after delivery.",
        "Maintenance. Models and data age, so budget for upkeep every year.",
      ),
      note("A useful rule of thumb: for many projects, the model itself is a minority of the total effort. Ask any estimate to show the rest."),

      h2("Questions to ask a supplier about their quote"),
      ul(
        "What phases is the work divided into, and what do I get at the end of each?",
        "What is included, and what is explicitly excluded?",
        "What assumptions about data, access and people does the estimate rely on?",
        "What happens if the first phase shows that the idea will not work?",
        "Who owns the code, the models and the data?",
        "What will it cost to run each month after launch?",
        "How are changes handled, and how are they priced?",
      ),

      h2("Reducing risk on the client side"),
      ul(
        "Name an owner with time and authority, and make decisions quickly. Waiting for approvals is the commonest source of delay.",
        "Give access to data and people in the first week.",
        "Agree the success measure and baseline early.",
        "Review progress with real users, not only with managers.",
        "Be ready to stop or change direction when the evidence says so.",
      ),

      h2("A worked example"),
      p("A tourism board wants an AI assistant that answers visitor questions from its documents. A single quote would have to guess the quality of those documents. Instead, the work is phased. Discovery takes a week: it finds that documents are mostly current but scattered, and defines 50 sample questions. A four-week proof of concept shows that 80 percent of questions are answered correctly, with a few document gaps that the board can fill. Build is then estimated as a narrower range, including a staff review screen and monthly document updates. The pilot runs in one visitor centre for six weeks, and the board decides to roll out only after comparing answers with its baseline. Nobody was surprised, because the uncertainty was reduced step by step."),

      h2("Mistakes that blow budgets"),
      ul(
        "Treating the first demonstration as proof that the full system is nearly finished.",
        "Skipping discovery, to “save time”.",
        "Letting scope grow without adjusting time or money.",
        "Leaving integration and security for the end.",
        "Choosing the lowest price without checking what it leaves out.",
      ),

      h2("Frequently asked questions"),
      qa(
        ["Can we still have a fixed price?", "Yes, for the well-defined phases such as discovery and a proof of concept. For later phases, a range or a capped time-and-materials arrangement is usually fairer for both sides."],
        ["How accurate is an estimate after discovery?", "Much better than before. It usually narrows to a range that can be defended, with named assumptions."],
        ["What if the proof of concept fails?", "Then you have spent a small amount to learn that, which is a good outcome. You can change the approach, fix the data or stop."],
        ["How do we compare quotes?", "Compare what is included, the phases, the assumptions and the running costs, not just the headline price."],
      ),
      p("An honest estimate admits what is not yet known and shows how it will be found out. That may feel less comforting than a single confident number, but it is far more likely to match what the project truly costs, and far less likely to end in an argument."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    seed: true,
    slug: "when-the-data-is-missing-late-or-wrong",
    title: "When the data is missing, late or wrong: what to do before and during a project",
    phase: "Planning",
    project: "Data readiness",
    excerpt:
      "Real data is never as clean as the sample suggested. A practical approach to auditing, repairing and living with imperfect data.",
    date: "2026-10-15",
    image: "/experience-photos/data-problems.webp",
    takeaways: [
      "Audit a real sample of the data in the first week, and never trust a description.",
      "Decide up front what the system will show when data is missing, late or suspicious.",
      "Make gaps visible, and give data owners feedback, so that quality improves over time.",
      "Fix problems at the source where you can, and document every rule you apply downstream.",
    ],
    body: [
      p("Almost every data-driven project meets the same moment. The sample file that was sent in the first week looked fine. Then the full data arrives, and it is a different story: dates in three formats, districts spelled five ways, a column that means different things in different years, and months of numbers that simply never came in."),
      p("This is normal, not a sign of a bad organisation. Real data reflects real people working under real pressure. The question is what you do about it. This article describes a practical approach, from a first audit to rules for living with imperfect data once the system is running."),

      h2("Step 1: audit before you promise anything"),
      p("Ask for a real extract of the data, not a polished example, and look at it in the first week. A simple audit answers a handful of questions."),
      ul(
        "Completeness: how much is missing, and is it missing at random or in patterns, such as certain regions or months?",
        "Consistency: are names, codes, units and date formats the same everywhere?",
        "Accuracy: do values fall in believable ranges, and do they agree with another source?",
        "Timeliness: how long after an event does the data arrive?",
        "Coverage: does it include the places, people and periods that matter for the decision?",
        "Meaning: does everyone agree on what each field means?",
      ),
      p("Write a short audit note with examples. It sets honest expectations, and often reveals fixes that cost very little."),

      h2("Step 2: sort the problems by cause"),
      ul(
        "Entry errors: typos, wrong units, misplaced decimals. Often fixable with checks at the point of entry.",
        "Process gaps: nobody is responsible for submitting data, or the form does not match the work. Needs a process fix.",
        "System differences: two systems define the same thing differently. Needs an agreed definition.",
        "Genuine absence: the data was never collected. Needs a collection plan or a different approach.",
        "Delay: the data exists but arrives late. Needs a schedule and reminders.",
      ),
      p("Treating the symptoms downstream, with ever more cleaning code, is expensive and fragile. Wherever possible, fix the cause."),

      h2("Step 3: agree rules for the hard cases"),
      p("Before building screens and models, decide what the system will do in each awkward case. These decisions belong to the people who own the data and the decisions, not only to the developers."),
      ul(
        "Missing value: leave blank and show it, estimate it and label it clearly, or exclude the record?",
        "Late data: show the last known value with its date, or flag the area as out of date?",
        "Suspicious value: accept it, hold it for review or reject it?",
        "Conflicting sources: which one wins, and why?",
      ),
      note("Never show a missing value as zero. A zero is a measurement. A blank is an absence, and people will make different decisions from each."),

      h2("Step 4: make gaps visible"),
      p("A system that hides data problems teaches people not to look at them. A system that shows them turns them into a to-do list."),
      ul(
        "Show the date of the last update next to every figure.",
        "Mark estimated or corrected values, and say how they were produced.",
        "Give each data owner a simple view of what they have and have not submitted.",
        "Report quality over time, for example the share of districts that reported on time.",
      ),
      p("In our experience, this single habit improves data quality more than any amount of retrospective cleaning, because the people who supply the numbers can see that someone is using them."),

      h2("Step 5: build checks into the pipeline"),
      ol(
        "Validate at the door: check formats, ranges and required fields when data arrives, and reject or flag bad rows with a clear message.",
        "Keep the raw data untouched, and apply cleaning in separate, documented steps.",
        "Record every change: what was changed, why and by which rule.",
        "Test the pipeline with a small set of known-bad examples, so that rules do not silently break.",
        "Alert a named person when something unusual happens, for example a sudden drop in records.",
      ),

      h2("Dealing with missing data in analysis"),
      ul(
        "First ask why it is missing. Missing at random is easier to handle than missing because of the very thing you want to measure.",
        "Simple fixes, such as using the last known value or an average, can be acceptable for display but can bias analysis.",
        "Models may need special handling. Some can accept gaps, and others need values filled in, which should be done using only training data to avoid leakage.",
        "Report the amount of missing data alongside any result, so that readers can judge it.",
      ),

      h2("A short example"),
      p("A programme collects monthly figures from many districts. In the audit, a third of districts report late, and a handful report numbers that are ten times too large because they entered totals in the wrong unit. The team agrees four rules: figures outside a plausible range are held for review, late districts are shown in grey with their last report date, unit mistakes are caught by a check at entry and a monthly quality report goes to every district office. Within a few months, on-time reporting rises, and the dashboard becomes something that officers rely on, because it is honest about what it does not know."),

      h2("When to stop cleaning"),
      p("Perfect data does not exist. Decide in advance what quality is good enough for the decision, and stop there. A map used to prioritise visits does not need the same precision as a financial audit. Spend the remaining effort on the biggest sources of error, and on improving data collection."),

      h2("A checklist to take away"),
      ul(
        "Have we audited a real extract, not a sample prepared for us?",
        "Do we know the causes of the biggest problems?",
        "Have the data owners agreed rules for missing, late and suspicious data?",
        "Does every number show its date and any estimate flag?",
        "Is the raw data preserved, and every cleaning step documented?",
        "Does someone own data quality, and see it reported regularly?",
      ),

      h2("Frequently asked questions"),
      qa(
        ["Should we clean everything before starting?", "No. Audit first, fix the worst and most important problems and build checks so that quality improves as you go. Waiting for perfect data means never starting."],
        ["Who is responsible for data quality?", "The people who collect and supply the data, supported by whoever owns the system. A named person should track quality and report on it."],
        ["Can AI clean the data for us?", "It can help find patterns of errors and suggest fixes, and it speeds up tedious work. People who understand the data must still review the rules, because a wrong automatic fix can silently spread."],
        ["What if the data is too poor to use?", "Then the first project is to improve collection, perhaps for a few indicators that matter most. A small, trustworthy dataset is more valuable than a large, doubtful one."],
      ),
      p("Imperfect data is the normal condition of real work. The teams that succeed are not the ones with the cleanest data. They are the ones that look at it early, agree rules for its flaws, show them honestly and keep improving the source."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    seed: true,
    slug: "getting-people-to-use-what-we-build",
    title: "Getting people to use what we build: training, trust and the first thirty days",
    phase: "Operationalizing",
    project: "Adoption and training",
    excerpt:
      "A technically excellent system that nobody uses has failed. How to plan training, earn trust and spot the early signs of an unused tool.",
    date: "2026-10-14",
    image: "/experience-photos/adoption.webp",
    takeaways: [
      "Adoption is designed, not hoped for. Plan training, champions and support from the start.",
      "Train people on their own tasks, with their own data, in short repeated sessions.",
      "Trust grows when the system shows its sources, admits its limits and responds to feedback.",
      "Watch usage in the first thirty days, and talk to the people who stopped using it.",
    ],
    body: [
      p("A system that is accurate, fast and beautifully designed can still fail, because the people it was built for do not use it. They go back to their spreadsheet, their phone call or their old habits. Nobody is to blame. The system simply never became part of how the work gets done."),
      p("This article describes what we have learned about helping people adopt the tools we build, whether it is a monitoring platform, a document assistant or an immersive training experience. Most of it applies to any new system."),

      h2("Why good systems go unused"),
      ul(
        "People were not involved, so the tool solves a problem they do not have, or solves it in an unfamiliar way.",
        "Training was a single demonstration, and nobody remembers the steps a month later.",
        "The new tool is extra work on top of the old one, with nothing taken away.",
        "People do not trust the results, and a single early mistake confirmed their doubts.",
        "Nobody senior uses it or expects others to.",
        "When something goes wrong, nobody knows who to ask.",
      ),

      h2("Start before launch"),
      p("Adoption work begins during design. Involve a few real users from the first week, and keep showing them early versions."),
      ul(
        "Ask people to describe how they do the work today, and watch them do it.",
        "Test early prototypes with them, and change the design when they struggle.",
        "Name a champion in each team: a respected, curious person who tries things first and helps colleagues.",
        "Agree with managers what will stop being done the old way, so that the tool replaces a task rather than adding one.",
      ),

      h2("Training that works"),
      p("The best training is short, practical and repeated."),
      ol(
        "Role-based: data entry staff, supervisors and administrators need different sessions. Do not train everyone on everything.",
        "Task-based: teach the five or six things each person does, using their own real examples, not made-up ones.",
        "Hands-on: people learn by doing, with a guide beside them, not by watching slides.",
        "Short and repeated: two or three sessions of an hour, spread over weeks, beat one long day.",
        "Backed by simple material: a one-page guide and a few short recordings that people can return to.",
        "Refreshed: staff change, and features change, so plan regular top-ups.",
      ),
      note("If a task needs more than a page of instructions, the design is probably too complicated. Training cannot fix a confusing screen."),

      h2("Earning trust"),
      p("People will not rely on a system that they do not trust, and they should not. Trust is built by the design, and by how mistakes are handled."),
      ul(
        "Show sources. Let people see where a number or an answer came from, so they can check it.",
        "Show confidence and limits. Say when the system is unsure or has no answer.",
        "Keep a person in the loop for important decisions, at least at first.",
        "Respond to errors quickly and openly. A fast fix after a reported mistake builds more trust than a flawless first week.",
        "Be honest about what the system cannot do.",
      ),

      h2("Make the first thirty days count"),
      p("The first month decides the habit. We run an intensive support period after launch."),
      ul(
        "Week 1: check in daily with the lead user, watch usage and fix urgent problems the same day.",
        "Week 2: short calls with each group to hear what is hard, and release one visible improvement based on it.",
        "Week 3: review the questions that keep coming up, update the guides and run a refresher.",
        "Week 4: review usage numbers with the sponsor, and agree what changes next.",
      ),

      h2("Measure adoption, not just delivery"),
      ul(
        "How many people log in each week, out of those who should?",
        "Which features are used, and which are ignored?",
        "How long do tasks take now compared with the baseline?",
        "What do people do outside the system, such as exporting to spreadsheets, and why?",
        "What do users say when asked what they would miss if it were taken away?",
      ),
      p("Talk to the people who stopped using it. Their reasons are the most valuable feedback you will get, and they are rarely the reasons that you expect."),

      h2("The role of leaders"),
      ul(
        "Use the system themselves, and ask for information from it in meetings.",
        "Say clearly what the new expectation is, and what no longer needs to be done.",
        "Give people time to learn. Adoption slows when it is squeezed into busy days.",
        "Celebrate real improvements, and share stories from the team.",
      ),

      h2("When people resist"),
      p("Resistance is information. Sometimes it signals a real flaw in the design. Sometimes it comes from fear about jobs or about being measured. Listen, and respond honestly. Make it clear what the system is for, what data is recorded and how it will and will not be used. Where concerns are legitimate, change the system or the process."),

      h2("A short checklist"),
      ul(
        "Did real users help to shape the design?",
        "Is there a champion in every team?",
        "Is training role-based, hands-on and repeated?",
        "Does the system show sources and limits?",
        "Is there a named person to ask, and a fast way to report problems?",
        "Are we measuring use and talking to people who stopped?",
      ),

      h2("Frequently asked questions"),
      qa(
        ["How much should we budget for training and adoption?", "Plan for it as a real part of the project, not an afterthought. For many projects, adoption work takes a meaningful share of the effort in the first three months."],
        ["What if the team is too busy to learn a new tool?", "Make the benefit visible quickly, remove an old task, and schedule short sessions in working time. If the tool does not save time within weeks, revisit the design."],
        ["Should we make the tool mandatory?", "Sometimes it must be, for example for records. But a tool that is good needs less force. Mandate it only after it works well, and support people through the change."],
        ["How do we know it is time to improve or retire a tool?", "When usage falls, when people build workarounds or when the task it was built for has changed. Review it at least once a year."],
      ),
      p("A system is finished not when it is delivered, but when people use it without being asked. Plan for that outcome from the start, and the technology you built will have a chance to make the difference that it was meant to."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    seed: true,
    slug: "keeping-an-ai-system-honest-after-launch",
    title: "Keeping an AI system honest after launch: monitoring, feedback and drift",
    phase: "Operationalizing",
    project: "Monitoring and maintenance",
    excerpt:
      "AI systems do not stay accurate by themselves. A practical routine for watching quality, collecting feedback and deciding when to retrain.",
    date: "2026-10-13",
    image: "/experience-photos/after-launch.webp",
    takeaways: [
      "Models and assistants degrade quietly, as the world, the data and the questions change.",
      "Monitor inputs, outputs and outcomes, and review a regular sample by hand.",
      "Give users an easy way to report bad results, and read what they send.",
      "Decide in advance what level of quality triggers a fix, a retrain or a rollback.",
    ],
    body: [
      p("Traditional software usually fails loudly. A page will not load, a calculation throws an error, an alarm sounds. AI systems often fail quietly. A model keeps producing answers, the dashboard stays green and the quality slowly erodes, until someone notices that the results no longer match what they see on the ground."),
      p("That is why launch is the beginning of the work, not the end. This article describes a practical routine for keeping an AI system honest over months and years, whether it is a land cover model, a document assistant or an agent that handles requests."),

      h2("Why AI systems drift"),
      ul(
        "The world changes. Seasons turn, new buildings appear, prices move, regulations are updated, and the patterns that the model learned no longer hold.",
        "The inputs change. A satellite sensor is replaced, a form is redesigned, a data source changes its format, or users start asking new kinds of questions.",
        "The documents change. An assistant that was accurate in January quotes outdated rules in June if the index is not updated.",
        "Upstream models change. If you use an outside model service, an update can shift behaviour without warning.",
        "People adapt. Users learn how to phrase things, or find ways around the system, and the mix of cases moves.",
      ),

      h2("Three levels of monitoring"),
      p("Watch the system at three levels. Each catches different problems."),
      ol(
        "Health: is it running? Uptime, errors, speed and cost. This is standard monitoring, and it tells you the system is alive, not that it is good.",
        "Behaviour: what is going in and coming out? The kinds of inputs, the spread of predictions, the share of answers that refuse or hand over to a person. Sudden shifts are a warning.",
        "Outcomes: is it right? Accuracy against checked examples, user ratings, corrections made by staff and results in the real world.",
      ),
      note("Most teams do the first level well, the second a little and the third rarely. The third is the one that matters."),

      h2("What to track"),
      ul(
        "Input statistics: for imagery, brightness and cloud cover. For text, length, topics and language. For tabular data, ranges and missing values.",
        "Output statistics: the share of each predicted class, the average confidence and the rate of “I do not know”.",
        "Quality samples: a few dozen results reviewed by a person each week or month.",
        "A fixed test set: re-run on a schedule, with scores kept in one place so you can see trends.",
        "User signals: thumbs up and down, corrections, escalations to a person and support requests.",
        "Cost and speed: because quality fixes can raise both.",
      ),

      h2("Build a feedback loop"),
      p("Users are your best sensors. Make it easy and safe to report a bad result, ideally in one click, with an optional note. Then read what they send."),
      ul(
        "Put a feedback button next to every result.",
        "Capture context automatically: the input, the output and the version of the system.",
        "Review reports every week, and sort them into causes: data, model, instructions, missing documents or user error.",
        "Add the interesting failures to your test set, so they are never forgotten.",
        "Tell users what was fixed. People report more when they see that it matters.",
      ),

      h2("Decide your triggers in advance"),
      p("It is far easier to act calmly if you decide beforehand what level of quality is unacceptable and what you will do about it."),
      ul(
        "Amber: quality drops by a small amount, or an input statistic drifts. Investigate, and review a larger sample.",
        "Red: quality falls below the agreed minimum, or a serious error reaches a user. Fix quickly, add a warning to the interface or temporarily restrict the system to cases it handles well.",
        "Rollback: keep the previous version available, so that you can return to it if an update makes things worse.",
      ),

      h2("When and how to retrain or update"),
      ul(
        "On a schedule, if the world changes quickly, for example before each growing season for a crop model.",
        "When monitoring shows a sustained drop in quality, not a single bad day.",
        "When new regions, sensors or document types are added.",
        "After collecting enough new, checked examples to make a real difference.",
      ),
      p("Treat every new model like a new release. Test it on the fixed test set, compare it with the current one, run it alongside the old one for a while if you can and keep the old one ready until you are confident."),

      h2("Keep records"),
      p("Keep a log of every version of the model, the data and the settings behind it, with the scores it achieved. When someone asks why this month’s results differ from last month’s, you should be able to answer in minutes. Also keep a short changelog of what was changed and why, so that the team and the users can follow."),

      h2("Governance and people"),
      ul(
        "Name an owner for the system’s quality, with time to do the job.",
        "Agree who may change prompts, models and data sources, and how changes are reviewed.",
        "Review performance with the business sponsor each quarter.",
        "Check that access controls and data handling still match the rules, especially as the system grows.",
        "Plan the end of life: when a system is no longer useful, retire it cleanly.",
      ),

      h2("A simple monthly routine"),
      ol(
        "Look at the health and behaviour dashboards for unusual changes.",
        "Review a sample of 30 to 50 results by hand, and mark them against the standard.",
        "Re-run the fixed test set, and compare it with last month.",
        "Read the user feedback, and sort it by cause.",
        "Decide on fixes, and add new failures to the test set.",
        "Write three lines on what changed, and share them with the team.",
      ),

      h2("Mistakes we try to avoid"),
      ul(
        "Relying on the green health light as proof of quality.",
        "Reviewing only the cases that users complained about, which hides the quiet failures.",
        "Updating the model without re-running the tests.",
        "Letting the documents behind an assistant go stale.",
        "Having no named owner, so that everyone assumes someone else is watching.",
      ),

      h2("Frequently asked questions"),
      qa(
        ["How often should we review quality?", "Monthly is a good start for most systems, and weekly in the first few months after launch or after any major change."],
        ["How do we measure accuracy without labels?", "Take a regular random sample of outputs, and have a person who knows the subject mark them. A small, honest sample beats none."],
        ["What if we use a model from an outside provider?", "Pin the version where you can, re-run your tests when it changes and watch for shifts in behaviour. Do not assume that an update is an improvement for your case."],
        ["Is it expensive to monitor?", "A basic routine costs a few hours a month. It is small compared with the cost of acting on wrong results for months before anyone notices."],
      ),
      p("A trustworthy AI system is not one that never fails. It is one whose owners are watching, listening and ready to fix it. Build that routine at the start, and your system will stay as useful as it was on the day it launched."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    seed: true,
    slug: "running-projects-across-time-zones",
    title: "Running a project across time zones: how a remote team keeps clients informed and in control",
    phase: "Operationalizing",
    project: "Remote delivery",
    excerpt:
      "Communication rhythms, decision logs and handovers that keep international AI and 3D projects moving without constant meetings.",
    date: "2026-10-12",
    image: "/experience-photos/time-zones.webp",
    takeaways: [
      "A steady, predictable rhythm of updates builds more trust than occasional long meetings.",
      "Write things down: decisions, assumptions and next steps, in one place anyone can find.",
      "Design the working day so that a few hours overlap, and everything else can be done asynchronously.",
      "Show progress with something real every week, such as a demo, a map or a model, not just a status report.",
    ],
    body: [
      p("Many projects today are delivered across borders and time zones. A client in one country works with a team in another, and the two sides share only a few hours of working day, if any. Done badly, this means delays, misunderstandings and a nagging feeling on the client’s side that they cannot see what is happening. Done well, it works smoothly, and sometimes better than a co-located project, because it forces habits that every team should have."),
      p("This article describes the working practices that help a distributed team keep clients informed and in control. They apply whether you are commissioning a GeoAI model, an assistant, a 3D capture or a website."),

      h2("Principle 1: make the rhythm predictable"),
      p("The most reassuring thing for a client is not constant contact, but a reliable pattern. They know when to expect news, and they know it will arrive."),
      ul(
        "A short written update every week, on the same day and in the same format: what was done, what is next, what is blocked and what decisions are needed.",
        "A regular call, perhaps every one or two weeks, kept to a fixed length with an agenda.",
        "A demonstration of something real at least every two weeks.",
        "A monthly review with the sponsor of progress against the plan, budget and risks.",
      ),

      h2("Principle 2: find and protect the overlap"),
      p("Look at both teams’ working hours, and agree a window of one to three hours that overlaps. Protect it for the things that need real-time conversation: planning, difficult decisions and demonstrations. Everything else can be handled in writing, at each side’s own pace."),
      ul(
        "Agree the overlap window and the time zone for all scheduling, and stick to one reference to avoid confusion.",
        "Keep calls short and focused. A good call has an agenda, notes and a list of decisions.",
        "Be careful with daylight saving changes, which shift the overlap twice a year in some places.",
        "Respect local holidays and festivals on both sides, and put them on a shared calendar.",
      ),

      h2("Principle 3: write it down"),
      p("In a distributed team, anything that is not written down does not exist. Notes from a call, a decision made in a chat or an assumption made by a developer are all invisible to people who were not there, and to the same people six weeks later."),
      ul(
        "Decision log: a simple list of what was decided, by whom, when and why.",
        "Assumptions and risks list: what we are assuming about data, access and people, and what could go wrong.",
        "Meeting notes with actions, shared within a day.",
        "A single project space where documents, designs, data descriptions and the plan live.",
      ),
      note("If a client has to ask “where can I see the current state?”, the project space is not doing its job. Aim for one place, always up to date."),

      h2("Principle 4: write for someone who is asleep"),
      p("Asynchronous messages should be understandable without a follow-up question, because the answer may take a day."),
      ul(
        "State the question or request clearly, with the context needed to answer it.",
        "Offer options and a recommendation, rather than an open question.",
        "Say what is needed, from whom and by when.",
        "Attach the screenshot, file or link, not a description of it.",
        "Confirm decisions in writing after a call.",
      ),
      p("A client who can answer in two minutes, because the question was well framed, will answer often. A client who must work out what is being asked will leave it until later."),

      h2("Principle 5: show, do not only tell"),
      p("Reports can say that everything is on track. A working demonstration shows it. Plan for something visible each cycle."),
      ul(
        "For GeoAI: a map of the latest results, with a note of what has improved and where the model is weak.",
        "For assistants: a live session answering real questions, including hard ones.",
        "For 3D and immersive work: a link to the current model, opened in the browser.",
        "For platforms: a staging site the client can click through.",
      ),
      p("Showing works in progress, flaws included, builds trust. Clients are usually more comfortable with honest roughness than with a polished surprise at the end."),

      h2("Handling decisions and approvals"),
      ul(
        "Name a single decision-maker on each side, and a backup.",
        "Agree what can be decided by the team and what must be escalated.",
        "Set response times for approvals, and say what happens if they are missed.",
        "Batch questions into the weekly update when they are not urgent, and flag urgent ones separately.",
      ),

      h2("Quality, handover and continuity"),
      ul(
        "Work in the open: shared code repositories, ticket lists and documents that the client can see.",
        "Review each other’s work, with written comments, before it is shown.",
        "Document as you go, so that handover is a matter of tidying, not remembering.",
        "Have a deputy for each key role, so that holidays and illness do not stop the project.",
        "Agree the handover early: what will be delivered, in what format, with what training.",
      ),

      h2("Building the relationship"),
      p("Trust is harder to build when people rarely meet. A few simple habits help."),
      ul(
        "Begin with a proper kick-off call where everyone introduces themselves and their role.",
        "Share a team page with photos and short descriptions, so that names have faces.",
        "Be quick to raise bad news. Clients are far more forgiving of a problem reported early than of one discovered late.",
        "Check in on how the process feels, not just on the work, every month or two.",
        "Meet in person once if you can, for example at a milestone.",
      ),

      h2("Tools that keep it simple"),
      ul(
        "A shared document or wiki for the plan, decisions and notes.",
        "A task board that both sides can see.",
        "A messaging channel for quick questions, with an agreement not to use it for decisions that must be recorded.",
        "A video call tool with recording or notes, where all participants agree.",
        "A shared folder or repository for deliverables, with clear naming.",
      ),

      h2("A weekly update template"),
      ol(
        "Done this week, in plain language, with links.",
        "Planned for next week.",
        "Blocked or at risk, and what we need from you.",
        "Decisions needed, with our recommendation and a deadline.",
        "A visible result: a link to a map, a model or a demonstration.",
        "Budget and timeline status in one line.",
      ),

      h2("Frequently asked questions"),
      qa(
        ["How many hours of overlap do we need?", "Often one to three hours is enough if the rest of the work is documented well. More helps in the first weeks, when mutual understanding is being built."],
        ["How do we avoid endless meetings?", "Replace status meetings with written updates, and use calls for decisions and demonstrations. Keep every call to an agenda."],
        ["Is a remote team slower?", "Not necessarily. Without constant interruptions, work can be faster. Delays happen when questions wait for answers, which is why clear writing and fast decisions matter."],
        ["How do we handle language and cultural differences?", "Use plain, direct wording and confirm key points in writing. Ask about local working patterns and holidays, and be patient with each other’s style."],
      ),
      p("Distance is not the enemy of a good project. Unclear communication is. A steady rhythm, clear writing, visible progress and quick, honest answers make a remote team feel close, and make the client feel, rightly, that the project is in good hands."),
    ],
  },
];
