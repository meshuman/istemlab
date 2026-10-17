// Learn > Guides. Practical, decision-oriented guides (about 1,300 to 1,800 words each).
// `seed: true` = drafted copy that still needs a subject-matter review before it is promoted.
// Reading time is calculated automatically (lib/readtime.js).

import { p, h2, ul, ol, note } from "./blocks";

export const guides = [
  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "guides",
    slug: "ai-readiness-checklist",
    title: "AI readiness checklist for your organization",
    excerpt: "Twelve questions across data, people, process and risk, with a simple way to score yourself and decide what to do first.",
    topic: "AI Strategy",
    level: "Beginner",
    date: "2026-10-10",
    takeaways: [
      "Most stalled AI projects fail on data access, ownership and change management, not on technology.",
      "Score yourself honestly: a gap you can see is a gap you can fix.",
      "Pick one use case with a clear owner and a measurable outcome.",
      "Decide governance and review steps before the pilot starts, not after.",
    ],
    body: [
      p("Almost every organisation is being asked the same question: what are we doing about AI? Plenty of them respond by buying a tool, running a demo and hoping. A few months later, the tool sits unused, and nobody can say what it was for. The cause is rarely the technology. It is usually that the organisation was not ready for it."),
      p("Readiness is not about being large or technical. A twelve-person company can be ready, and a ministry with a big budget can be nowhere near. This guide gives you twelve questions to answer together, a simple scoring method and a clear idea of what to do with the result."),

      h2("How to use this checklist"),
      ol(
        "Gather four to six people: someone who owns the outcome, someone who knows the data, someone who will use the result, and someone responsible for risk or compliance.",
        "Answer each question as a group with Yes, Partly or No. Argue about the answers. The disagreements are the most useful part.",
        "Score Yes as 2, Partly as 1 and No as 0, and total each section.",
        "Read the section on what to do next, based on where you scored lowest.",
      ),

      h2("Section 1: data"),
      ul(
        "Do we know where the relevant data lives, and who owns it?",
        "Are we legally and contractually allowed to use it for this purpose?",
        "Is it accurate, current and complete enough that we would act on it?",
      ),
      p("AI amplifies the quality of what you give it. If your records are scattered across spreadsheets, inboxes and individual laptops, the first project is not AI at all. It is gathering and tidying the data, and that work is worth doing anyway."),

      h2("Section 2: people"),
      ul(
        "Is there a named business owner who wants this outcome and will make time for it?",
        "Have we asked the people who will use the result what they need?",
        "Do staff have the basic skills to use AI tools and to question what they produce?",
      ),
      p("Technology projects fail when the people who must change how they work were never part of the conversation. An owner with authority, and users who feel heard, are the best predictors of adoption."),

      h2("Section 3: process"),
      ul(
        "Which specific task or decision will change, and how will we measure the improvement?",
        "What happens when the AI is wrong or unavailable?",
        "Who will maintain the solution after launch?",
      ),
      p("A good use case replaces a clearly defined, repeated task. “Improve customer service” is a wish. “Cut the time to answer routine policy questions from ten minutes to two” is a project."),

      h2("Section 4: risk and governance"),
      ul(
        "What personal, confidential or sensitive data is involved?",
        "At which points must a human review the result before it is used?",
        "Who is accountable for decisions made with the help of AI?",
      ),
      p("Governance sounds heavy, but at the start it can be one page: what data may be used, which tools are approved, where human review is required and who to ask. Writing it early prevents expensive arguments later."),

      h2("Reading your score"),
      ul(
        "18 to 24: you are ready for a focused pilot. Choose the use case and start.",
        "10 to 17: you can start, but fix your lowest-scoring section in parallel, ideally as part of the pilot.",
        "0 to 9: begin with a short readiness project: organise your data, name an owner and agree a first use case. Do not build anything yet.",
      ),
      note("Check the lowest section, not just the total. A strong total can hide one section, such as data access, that will stop the project on its own."),

      h2("Turning the result into a plan"),
      ol(
        "Shortlist three to five possible use cases, and score each for value, how easy it would be and how risky it is.",
        "Choose one with high value, modest difficulty and low risk. Avoid the grandest idea for the first project.",
        "Write the success measure and the baseline today, for example the current time per task.",
        "Set a short timeline, often six to ten weeks, and a clear point at which you will decide to continue, change or stop.",
        "Name the owner, the users and the person who will review the AI’s work.",
      ),

      h2("Mistakes we see often"),
      ul(
        "Choosing the tool before defining the problem.",
        "Starting with the most complex process in the organisation.",
        "Treating the pilot as a demo, with no baseline and no decision at the end.",
        "Leaving staff out until launch, then wondering why nobody uses it.",
        "Ignoring who will look after the system after the project team moves on.",
      ),

      h2("What good looks like after three months"),
      p("A ready organisation does not necessarily have a sophisticated AI system after three months. It has one working pilot, a measured result, a short list of lessons and a decision about what comes next. That is a strong place to be, and a far better one than a large, unfinished programme."),
      p("Run the checklist again after the pilot. Your scores will have moved, and so will your understanding of what you really need."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "guides",
    slug: "scoping-a-geoai-project",
    title: "How to scope a GeoAI project",
    excerpt: "A seven-step framework that turns a vague idea into a testable pilot, with the questions to settle before any model is built.",
    topic: "GeoAI",
    level: "Intermediate",
    date: "2026-10-12",
    takeaways: [
      "Define the question as a decision, then the area, season and update frequency.",
      "Check that imagery and labels exist before you promise any level of accuracy.",
      "Agree the success measure and a minimum acceptable score before you start.",
      "Run a small pilot, test on areas the model has not seen, and plan how results reach users.",
    ],
    body: [
      p("A GeoAI project that begins with “let’s apply AI to our satellite data” usually ends in a slide deck. A project that begins with a specific question usually ends in a map that someone uses. The difference is made in the first two weeks, in how the project is scoped."),
      p("This guide gives you a seven-step framework that you can run in a workshop with your team and any technical partner. By the end you should have a one-page scope that a data scientist could start from, and that a manager can approve with confidence."),

      h2("Step 1: write the question as a decision"),
      p("Start with the action someone will take. “Which fields need irrigation support this month?” is a decision. “Map crop health” is an activity. Decisions force clarity about who the user is, how often they need the answer and how accurate it must be."),
      ul(
        "Who will use the result, and what will they do differently?",
        "How often do they need it: once, monthly, weekly?",
        "How bad is a wrong answer, and in which direction?",
      ),

      h2("Step 2: set the area and the time window"),
      p("Define the boundary of the area precisely, with a file if possible, and the period you care about. A model that must work across a whole country, in every season, is a far bigger project than one for two districts during the growing season. Be honest about how much you actually need."),

      h2("Step 3: find suitable imagery"),
      p("Check that imagery exists that can answer the question. You need the right resolution, the right frequency and the right bands, and enough clear images after cloud is removed."),
      ul(
        "Resolution: can the smallest thing you care about be seen?",
        "Frequency: are there enough usable images in your window, allowing for cloud?",
        "Bands: do you need near-infrared, short-wave infrared or radar?",
        "Cost and licence: free data may be enough, and commercial data may restrict sharing.",
        "Archive: is there history if you need to compare against past years?",
      ),

      h2("Step 4: plan the labels"),
      p("Supervised models learn from labelled examples, and labels are usually the slowest, most expensive part of the project. Decide who will create them, from what source and how many are needed."),
      ul(
        "Field visits or survey data from local officers.",
        "Existing maps, which can be a starting point but may be out of date or inconsistent.",
        "Manual marking on high-resolution images by trained staff.",
        "A written guide so that everyone labels the same way.",
      ),
      note("If nobody can produce labels, you do not yet have a supervised GeoAI project. Resolve this before you spend on anything else."),

      h2("Step 5: choose the success measure first"),
      p("Pick the measure and a minimum acceptable score before building anything. Otherwise the target quietly moves to wherever the result lands."),
      ul(
        "For maps: overall and per-class accuracy, tested on areas the model has never seen.",
        "For detection: how many real objects were found, and how many false alarms were raised.",
        "For forecasts: error compared with a simple baseline, such as last year’s value.",
        "For the business: the time or money saved, or the decision made faster.",
      ),

      h2("Step 6: run a small pilot"),
      p("Choose a modest area, perhaps one district, and aim to produce a real result in four to eight weeks. Compare the output with ground truth, ask the intended users to try it and note what they would change. The pilot is not a smaller version of the final product. Its purpose is to answer the biggest uncertainty cheaply."),

      h2("Step 7: decide how results reach users"),
      p("Plan the delivery from the start. A beautiful model that produces a raster file nobody can open has not helped anyone. Options include a map on a web dashboard, a regular report, an alert by message or email, or an interface other systems can call."),
      ul(
        "Who needs to see it, on what device?",
        "How fresh must it be, and who updates it?",
        "How will users know how much to trust it, and what should they do when it looks wrong?",
      ),

      h2("A one-page scope template"),
      ol(
        "The decision and the user.",
        "Area and time window.",
        "Imagery source, resolution and frequency.",
        "Label source, size and owner.",
        "Success measure and minimum score.",
        "Pilot area, timeline and decision date.",
        "Delivery format and owner after launch.",
      ),

      h2("Common pitfalls"),
      ul(
        "Choosing a model before checking that the data can answer the question.",
        "Training and testing in the same area, which overstates accuracy.",
        "Skipping field validation with local knowledge.",
        "Promising accuracy before seeing any labelled data.",
        "Ignoring cloud, and discovering too late that few usable images exist.",
        "Forgetting the maintenance: models and maps age as the land and the sensors change.",
      ),
      p("A well-scoped GeoAI project feels almost boring. Everyone knows the question, the data, the target and the date. That clarity is exactly what lets the technical work go quickly and the result get used."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "guides",
    slug: "validate-a-startup-idea",
    title: "How to validate a startup idea in four weeks",
    excerpt: "A week-by-week plan to find out whether people really want what you plan to build, before you spend months building it.",
    topic: "Business Incubation",
    level: "Beginner",
    date: "2026-10-15",
    takeaways: [
      "Validate the problem before the product.",
      "Talk to 15 to 20 real potential customers, and ask about what they did, not what they might do.",
      "Test demand with something real: money, time or a signed commitment.",
      "Decide in advance what result will make you continue, and what will make you stop.",
    ],
    body: [
      p("Most startups do not fail because the product was built badly. They fail because they built something that not enough people needed. The sad part is that this can be discovered cheaply, in weeks, before the long, expensive work of building. A short, disciplined validation sprint is the best investment a new founder can make."),
      p("This guide is a four-week plan. It needs no code and little money. Its aim is not to prove that you are right. It is to find out the truth as quickly as you can, whichever way it points."),

      h2("Before you begin"),
      p("Write down your idea in one paragraph, and then write down what you believe has to be true for it to work. Founders usually hold three beliefs: that the problem is real and painful, that a specific group of people has it, and that they will pay for a solution. Each belief is a risk. The next four weeks are designed to test them in that order."),

      h2("Week 1: define the problem and the customer"),
      ol(
        "Write the problem in one sentence: who struggles with what, and when.",
        "Name the specific customer. “Small hotels in Pokhara” is a customer. “Everyone who travels” is not.",
        "List what these people do today about the problem, including doing nothing or using a spreadsheet. That is your real competition.",
        "Write your decision rule now, while you are calm, for example: “If 6 of 15 people describe this as a top-three problem and 3 agree to a paid pilot, we continue.”",
        "Make a list of 30 people you could talk to, and who could introduce you to more.",
      ),

      h2("Week 2: talk to people"),
      p("Interview 15 to 20 people who fit your customer description. Aim for 20 to 30 minutes each, in person or on a call. The goal is to learn, not to sell."),
      p("Ask about the past, not the future. People are poor at predicting what they will do, but good at describing what they did."),
      ul(
        "Tell me about the last time this problem happened. What did you do?",
        "What did it cost you, in time or money?",
        "What have you tried to fix it, and what happened?",
        "Who else is involved in deciding or paying?",
      ),
      p("Avoid pitching your idea or asking “Would you use this?”. Almost everyone says yes to be polite, and it tells you nothing. Take notes, record the exact words people use and look for patterns across conversations, not single opinions."),

      h2("Week 3: test demand with something real"),
      p("Words are cheap. In week three, ask for a small commitment, because it separates interest from intent. Choose the lightest test that fits your idea."),
      ul(
        "A simple page that explains the offer and asks for an email address, a deposit or a booking, with some effort to bring real visitors to it.",
        "A manual version of the service, which you deliver by hand to three to five customers. The service can be messy behind the scenes. You are testing whether people value the result.",
        "A pre-order, a paid pilot or a signed letter of intent.",
      ),
      note("Compliments are not evidence. Time, money or a signed commitment is."),

      h2("Week 4: decide"),
      p("Put your decision rule from week one beside what happened. Be as honest as you can."),
      ul(
        "Continue: the evidence met your rule. Plan the smallest version you can build and sell.",
        "Change: people have the problem, but your solution, price or customer was wrong. Adjust one thing and test again.",
        "Stop: the problem is not painful enough or the market is too small. Stopping now is a success, because it saved you months.",
      ),

      h2("What to do with what you learned"),
      p("Whatever you decide, write a one-page summary: the customer, the problem in their words, what they do today, what they were willing to commit to and the main surprises. If you continue, this page becomes the heart of your plan and your pitch. If you stop, it protects the next idea."),

      h2("Mistakes founders make"),
      ul(
        "Talking only to friends and family, who want to be kind.",
        "Describing the solution too early, and so biasing the answers.",
        "Counting enthusiasm as demand.",
        "Skipping the decision rule, then explaining away poor results.",
        "Building a polished product before testing a rough one by hand.",
      ),
      p("The aim of validation is not certainty. It is to replace hope with evidence, so that when you do start building, you are building something that real people have already told you, with their time and money, that they want."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "guides",
    slug: "evaluate-a-rag-assistant",
    title: "How to evaluate a RAG assistant before you trust it",
    excerpt: "A five-step test plan to measure whether an AI assistant answers correctly from your documents, and knows when not to answer.",
    topic: "RAG & Agents",
    level: "Intermediate",
    date: "2026-10-14",
    takeaways: [
      "Build a test set of real questions with known answers before launch.",
      "Measure retrieval and answer quality separately, so you know where problems start.",
      "A correct retrieval can still produce a wrong answer, so check the answer against the sources.",
      "Treat “I do not know” as a feature, and test for it as carefully as correct answers.",
    ],
    body: [
      p("A demo that answers three questions well proves very little. Before a RAG assistant reaches your staff or your customers, test it the way you would test any system that people will rely on. The good news is that careful evaluation does not need special software. It needs a good list of questions, an honest marking scheme and the discipline to repeat the test."),
      p("RAG systems can fail in two separate places, and it is important to tell them apart. Retrieval can fail, which means the right passage is never found. Or generation can fail, which means the right passage is found, and the answer is still wrong or unsupported. Good evaluation measures both."),

      h2("Step 1: build a test set"),
      p("Collect 30 to 50 real questions from the people who will use the assistant, drawn from emails, support tickets or chat logs. As the project matures, grow the set to 100 or more. For each question, write the correct answer and note the document and passage where it lives."),
      ul(
        "Easy questions, whose answer sits in a single clear paragraph.",
        "Hard questions, which need several passages or careful reading.",
        "Unanswerable questions, which your documents do not cover. The right response is to say so.",
        "Variations of the same question in different words, to test robustness.",
      ),
      p("Write the answers before you see what the system says, to keep yourself honest. Keep a part of the set aside that you never use while tuning, as a final fair test."),

      h2("Step 2: check retrieval first"),
      p("For every question, check whether the right passage appeared in the passages given to the model. Record the hit rate, which is the share of questions where it did. This single number tells you a great deal."),
      ul(
        "A low hit rate means the assistant cannot answer correctly however good the model is. Fix chunking, search settings, document quality or the embedding model first.",
        "A high hit rate shifts attention to the next step.",
        "Also look at the rank: if the right passage is usually fifth, not first, a re-ranker may help.",
      ),

      h2("Step 3: check the answers"),
      p("Read each answer against the correct one and the retrieved sources. Mark it on a few simple points."),
      ul(
        "Correct: does it match the right answer?",
        "Complete: does it include what the person needs, such as conditions and exceptions?",
        "Grounded: is every claim supported by the retrieved passages?",
        "Cited: do the citations point to passages that really support the statement?",
        "Appropriate: is the tone and length right for the audience?",
      ),
      p("Use at least two people to mark a sample, and compare. If they disagree often, your marking guide is unclear, and it needs sharpening before the numbers mean anything. Automated checks, such as using a second model to judge groundedness, can help at scale, but always check a sample by hand."),

      h2("Step 4: test the edges"),
      p("Real users will not stick to your tidy questions. Probe the awkward cases deliberately."),
      ul(
        "Out-of-scope questions: it should say it does not know, and point to a human or a better source.",
        "Contradictory documents, or an old version beside a current one: it should prefer the right one or flag the conflict.",
        "Vague or misspelled questions: it should ask for clarification rather than guess.",
        "Sensitive topics and access: it must not reveal documents the user is not allowed to see.",
        "Attempts to change its behaviour, including instructions hidden inside a document.",
      ),

      h2("Step 5: keep measuring after launch"),
      p("Quality drifts. Documents change, the people asking change, and models are updated. Build evaluation into routine."),
      ul(
        "Re-run the full test set after every change to documents, prompts, search settings or models.",
        "Each month, review a sample of real questions and add the failures to the test set.",
        "Give users an easy way to flag a bad answer, and read the flags.",
        "Track the share of questions where the assistant declined, and check that it declined for the right reasons.",
      ),

      h2("A simple scorecard"),
      ul(
        "Retrieval hit rate: the right passage found in the top results.",
        "Answer accuracy: marked correct and complete.",
        "Groundedness: no claims beyond the sources.",
        "Correct refusals: unanswerable questions handled properly.",
        "Escalations: questions passed to a person, and whether they should have been.",
      ),
      p("Decide the minimum score for each before launch, for example “at least 90 percent correct on answerable questions, and at least 95 percent correct refusals on unanswerable ones”. If the assistant does not reach it, you have a clear list of what to fix."),
      note("An assistant that says “I do not know” when the answer is missing is safer than one that always answers. Reward the first and fix the second."),

      h2("Common mistakes"),
      ul(
        "Judging quality from a handful of impressive demos.",
        "Testing only with questions written by the people who built the system.",
        "Looking only at the final answer, so that you cannot tell whether retrieval or generation failed.",
        "Never testing what happens when the answer is missing.",
        "Evaluating once, and not again after changes.",
      ),
      p("Evaluation is what turns an assistant from a clever demonstration into a tool people can depend on. It also gives you something rare in AI projects: evidence. When someone asks whether the assistant is good enough, you can show them the numbers."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "guides",
    slug: "your-first-ai-pilot",
    title: "Your first AI pilot: pick one task and measure it for 30 days",
    excerpt: "A practical plan for small teams: choose one repeated task, set a baseline, try a tool for a month and decide with evidence.",
    topic: "AI Strategy",
    level: "Beginner",
    date: "2026-10-17",
    takeaways: [
      "Start with one painful, repeated task, not a grand AI strategy.",
      "Record the time or cost per task before you begin, or you will have nothing to compare.",
      "Set a small, fixed budget and a calendar date for the decision.",
      "Keep a person responsible for checking what the AI produces.",
    ],
    body: [
      p("If you run a small team or a small organisation, the flood of advice about AI can be paralysing. Conferences talk about transformation. Vendors promise miracles. Meanwhile you have a full inbox and no time. The honest, effective answer is much smaller: pick one task, try one tool for thirty days, measure the result and decide."),
      p("This guide shows you how to run that first pilot. It needs no technical staff and little money, and it produces something precious: evidence from your own work, rather than someone else’s promises."),

      h2("Step 1: find the right task"),
      p("Look for a task that you or your team do often, that follows a fairly clear pattern and that takes more time than it deserves. List five or six candidates, and score each on three questions."),
      ul(
        "Frequency: how many times a week does it happen?",
        "Pattern: is it mostly rule-based, or does it need real human judgement?",
        "Time: how many hours does it take across the team each week?",
      ),
      p("Good first tasks tend to be writing and summarising jobs: first drafts of emails and documents, summaries of meetings and long reports, answering the same customer questions again and again, or pulling figures out of invoices and forms. Poor first tasks are those where a mistake is costly and hard to spot, such as legal advice or final financial decisions."),

      h2("Step 2: record the baseline"),
      p("Before you try anything, measure how the task is done today. Time several real examples, and note the quality and the number of corrections. Without a baseline, you will only have a feeling, and feelings about new technology are unreliable in both directions."),
      ul(
        "Minutes per task, averaged over at least ten examples.",
        "Number of tasks per week.",
        "Common errors or rework.",
        "Who does it, and how they feel about it.",
      ),

      h2("Step 3: choose the tool and set the guardrails"),
      p("Choose after you have chosen the task, not before. For a first pilot, a general-purpose assistant or a feature in a tool you already use is usually enough. Before anyone starts, agree three rules."),
      ol(
        "What information may and may not be entered. Do not paste confidential, personal or customer data into a service unless you have checked its terms.",
        "A human reviews everything before it leaves the building.",
        "A fixed monthly budget, a small one, with a named person who can stop the pilot at any time.",
      ),

      h2("Step 4: run it for thirty days"),
      p("Use the tool on the real task, every time it comes up, for the full month. Ask the same people to log the time taken and to mark each result as used as it was, edited or thrown away. A short note on what worked or failed takes seconds, and is worth a great deal."),
      p("Hold a ten-minute check-in each week. Teams that review early adjust early, and avoid the common story of trying a tool for a week, getting confused and giving up."),

      h2("Step 5: compare and decide"),
      p("At the end of the month, set the results beside your baseline."),
      ul(
        "Time saved per task, and across the month.",
        "Quality: how often the output was used with little or no change.",
        "Errors caught by the human review, which show the real risk.",
        "Cost: the subscription plus the time spent on review.",
        "Experience: would the team keep using it if it were optional?",
      ),
      p("Then decide with a clear rule. Keep it and extend it, change the task or the tool and run another month, or stop. All three are good outcomes, because all three are based on what you saw."),

      h2("What a good result looks like"),
      p("You do not need a dramatic number. If a weekly task that took four hours now takes two, and the team is happier, that is a real gain of about a hundred hours a year, from a small experiment. The pilot also teaches your team how to work with AI, and that skill grows with every use."),

      h2("Where first pilots go wrong"),
      ul(
        "Choosing a popular tool before defining the problem.",
        "Skipping the baseline, so nobody can say whether anything improved.",
        "Letting AI output go out unchecked.",
        "Choosing a task too important or too complex for a first try.",
        "Running it for a few days and judging from a bad first impression.",
        "Putting private data into a tool without checking where it goes.",
      ),
      note("Your first pilot is as much about learning how your team works with AI as about saving time. Treat early mistakes as information."),

      h2("After the pilot"),
      p("Write half a page: the task, the baseline, the result, the lessons and the decision. Share it with your team. Then pick the next task, and repeat. Over a year, a series of small, measured steps builds both real savings and real confidence, which is a far better route than one large programme that never quite lands."),
    ],
  },
];
