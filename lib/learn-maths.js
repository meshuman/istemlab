// Learn > "Applied mathematics: where and how it is used". Storytelling explainers in layman's terms.
// The people in the stories are fictional, and the numbers are chosen to be easy to check by hand.
// Reading time is calculated automatically (lib/readtime.js).

import { p, h2, ul, ol, note, qa, formula } from "./blocks";

export const maths = [
  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "concepts",
    slug: "story-ratios-percentages-and-rates",
    title: "The story of the two districts: ratios, percentages and why raw numbers lie",
    excerpt: "Why 200 cases can be better news than 120, what a percentage point really is, and how fair comparisons are made.",
    topic: "Applied Maths",
    level: "Beginner",
    date: "2026-10-17",
    takeaways: [
      "A raw count tells you little until you compare it with the size of the group. Ratios and rates make comparisons fair.",
      "A percentage change and a change in percentage points are different things.",
      "Always ask: percent of what? The answer decides what the number means.",
      "These simple tools sit under dashboards, maps, model accuracy scores and almost every report you read.",
    ],
    body: [
      p("Asha works in a provincial health office. On Monday morning her director slides two reports across the desk. In the hills district, the clinic recorded 120 cases of a stomach illness this month. In the river district, it recorded 200. “Send the extra medicine to the river district,” says the director. “They are clearly worse.”"),
      p("Asha pauses. She has learned to ask a question before she answers a number: out of how many people? It is a small habit, and it is the beginning of nearly all useful maths."),

      h2("The question that changes everything"),
      p("She looks up the populations. The hills district has 40,000 people. The river district has 100,000. Now she can compare fairly. In the hills, 120 cases among 40,000 people is 3 cases for every 1,000 people. In the river district, 200 cases among 100,000 is 2 cases for every 1,000 people."),
      p("The district with fewer cases has the higher rate. The extra medicine, it turns out, belongs in the hills. A raw count had pointed in the wrong direction, because the two districts were not the same size."),
      note("A count answers “how many?”. A rate answers “how likely?”. For comparisons, rates usually matter more."),

      h2("What a ratio really is"),
      p("A ratio compares two quantities by dividing one by the other. “3 per 1,000” is a ratio. So is “one teacher for every 25 students”, “5 litres of water per minute” and “1 centimetre on the map for every 50,000 centimetres on the ground”. Each tells you how much of one thing comes with a given amount of another."),
      ul(
        "Per capita means per person. Income per capita, or cases per capita, lets you compare places of different sizes.",
        "A scale such as 1 to 50,000 is a ratio. It explains how a map shrinks the world.",
        "Speed is a ratio of distance to time. Density is a ratio of mass to volume, or people to area.",
      ),

      h2("Percentages: ratios dressed in a hundred"),
      p("A percentage is a ratio where the second number is 100. “15 percent” means 15 out of every 100. Asha uses it constantly, because it is a language that everyone in a meeting understands."),
      p("Here is how she checks a claim. A clinic reports that 3 of its 20 patients missed a follow-up visit, and another says 30 of 400 did. The first number, 3, is much smaller, so it seems better. Turn both into percentages. Three out of 20 is 15 percent. Thirty out of 400 is 7.5 percent. The second clinic is, in fact, twice as good at keeping patients."),

      h2("The trap: percent change versus percentage points"),
      p("A month later, a newspaper reports that vaccination coverage rose from 10 percent to 15 percent. Two reporters write two headlines. One says coverage “rose by 5 percent”. The other says it “rose by 50 percent”. Both are correct, and they mean different things."),
      ul(
        "Percentage points compare the two percentages directly: 15 minus 10 is 5 percentage points.",
        "Percent change compares the new value with the old one: an increase of 5 on a base of 10 is a 50 percent increase.",
      ),
      p("When someone says a number rose by a percent, ask whether they mean points or relative change. The difference can turn a modest improvement into a dramatic-sounding one."),

      h2("Percent of what? The base matters"),
      p("Asha keeps a second habit. When she sees a percentage, she looks for the base. If a district’s school enrolment “fell by 20 percent”, was that 20 percent of 50 pupils or of 5,000? A 20 percent change of a tiny group can be one family moving away. The same percentage of a large group is a crisis."),
      p("Percentages also cannot be added carelessly. A price that rises 10 percent and then falls 10 percent does not return to where it began. Start at 100: up 10 percent gives 110. Down 10 percent from 110 removes 11, leaving 99."),

      h2("Where this shows up in AI, maps and 3D"),
      ul(
        "Model accuracy is a percentage. A model that is “95 percent accurate” on a test where 95 percent of the cases are easy tells you very little. Ask: 95 percent of what?",
        "Map scale is a ratio, and so is image resolution: a pixel covers a fixed number of metres on the ground.",
        "Heat maps and choropleth maps colour areas by a rate, not a count. A map of raw counts mostly shows where people live.",
        "A 3D model’s scale, for example 1 unit equals 1 metre, is a ratio. Get it wrong and a building appears the size of a toy.",
        "Cost and performance: a faster model that is 10 percent cheaper per query is a different claim from one that is 10 percentage points more accurate.",
      ),

      h2("The formulas behind the story"),
      p("Asha’s habits are three short formulas. Write them once, and you can check any report in seconds."),
      formula("rate = (count ÷ population) × 1,000", ["count: the number of cases, events or items", "population: the size of the group they come from", "× 1,000 (or 100,000): scales the answer to a number that is easy to read"]),
      p("In the story: the hills district gives (120 ÷ 40,000) × 1,000 = 3 per 1,000, and the river district gives (200 ÷ 100,000) × 1,000 = 2 per 1,000. The smaller count has the larger rate."),
      formula("percent change = (new − old) ÷ old × 100", ["old: the starting value, which is the base", "new: the value after the change", "percentage points = new% − old%, a plain subtraction"]),
      p("In the story: coverage moved from 10% to 15%. The change in points is 15 − 10 = 5 points. The percent change is (15 − 10) ÷ 10 × 100 = 50%. Same data, two honest numbers with different meanings."),
      formula("final = start × (1 + a) × (1 − b)", ["a: the first change written as a decimal, such as 0.10 for +10%", "b: the second change, such as 0.10 for −10%", "A rise followed by an equal fall does not return you to the start"]),
      p("In the story: 100 × 1.10 × 0.90 = 99. Percentages multiply. They do not cancel."),

      h2("Try it yourself"),
      ol(
        "Find a news report that gives two counts, for example cases, crimes or accidents in two places.",
        "Look up the populations, and turn each count into a rate per 1,000 or 100,000.",
        "Check whether the ranking changes.",
        "Find a percentage in the same report, and work out the base it applies to.",
      ),

      h2("A short checklist for any number"),
      ul(
        "Is it a count or a rate?",
        "If it is a percentage, a percentage of what?",
        "If it changed, is the change in points or in percent?",
        "Is the comparison fair: same period, same group size, same definition?",
        "Would the answer change if I used a different base?",
      ),

      h2("Frequently asked questions"),
      qa(
        ["Why do people use per 1,000 or per 100,000 instead of percentages?", "Because many events are rare. “0.003 percent” is hard to picture, while “3 per 100,000” is easier. They are the same ratio in different clothes."],
        ["Is a bigger percentage always worse or better?", "No. It depends on what is being measured and on the base. Fifteen percent unemployment is serious, but 15 percent growth in clean energy is welcome."],
        ["How do I turn a ratio into a percentage?", "Divide the first number by the second, and multiply by 100. For 3 out of 20, that is 3 divided by 20, which is 0.15, which is 15 percent."],
        ["What is a base rate?", "It is how common something is to begin with. Ignoring it is a classic way to misread numbers, and the next story in this path shows how."],
      ),
      p("Asha’s director sent the medicine to the hills. Nothing about the decision needed advanced mathematics. It needed one question, asked at the right moment: compared with what? Most good analysis starts there."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "concepts",
    slug: "story-averages-spread-and-outliers",
    title: "The story of the two rivers: averages, spread and the outlier that changes everything",
    excerpt: "Why an average can hide a flood, when the median tells the truth and how to describe how spread out a set of numbers is.",
    topic: "Applied Maths",
    level: "Beginner",
    date: "2026-10-17",
    takeaways: [
      "An average (mean) can be pulled far from what is typical by a few extreme values. The median is more resistant.",
      "Two sets of data with the same average can behave completely differently, so always look at the spread as well.",
      "Standard deviation measures typical distance from the average, and range shows the extremes.",
      "Outliers are either errors to fix or the most important facts in the data. Find out which.",
    ],
    body: [
      p("Tashi is an engineer hired to design a bridge across the Sunkhola, a river that runs through a farming valley. He is given a simple fact by the previous team: “The river carries an average of 10 cubic metres of water per second.” That sounds calm, even gentle. It sounds like a river that you could bridge with a modest design."),
      p("Tashi, who has worked on rivers before, does not stop at the average. He asks to see the daily records."),

      h2("Two rivers, one average"),
      p("To explain his worry, he draws two imaginary rivers. River A flows at exactly 10 cubic metres per second, every single day of the year. River B alternates: one day it trickles at 1, the next day it roars at 19, then trickles again. Add up the flows of river B over two days and you get 20. Divide by two days, and the average is 10."),
      p("Both rivers have the same average, and they could not be more different. One is a peaceful stream. The other washes bridges away. The average, taken alone, had told him nothing about the danger."),
      note("An average describes the middle. It says nothing about how far the numbers wander from it. Always ask for both."),

      h2("What the mean is, and what it is not"),
      p("The mean, or average, is the sum of the values divided by how many there are. It is the balance point of the data, like a see-saw that sits level when the average is placed under the pivot. It is a wonderful summary when values are fairly similar. It is a poor one when a few values are huge."),

      h2("The village and the millionaire"),
      p("On his way to the valley, Tashi stops in a village of five households. Their monthly incomes, in the local currency, are 20, 20, 22, 25 and 500 thousand. The last belongs to a family that owns the valley’s only hotel."),
      p("Add them up, and you get 587. Divide by five, and the mean is 117.4. “Average income here is 117 thousand,” says a brochure. But four of the five families earn about 20. The brochure’s number describes nobody."),
      p("The median fixes this. Put the values in order and pick the middle one: 20, 20, 22, 25, 500. The middle is 22. That is what a typical family earns. The median ignores how extreme the largest value is, so it is the right summary when the data is skewed by a few big numbers."),
      ul(
        "Use the mean when values are fairly symmetrical, such as heights of adults, and when you want totals, because mean times count gives the total.",
        "Use the median when values are skewed, such as incomes, house prices and rainfall in storms.",
        "The mode is the most common value, useful for categories such as the most popular bus route.",
        "When mean and median differ a lot, that gap is itself a clue that the data is skewed.",
      ),

      h2("Measuring the wander: spread"),
      p("Back at his desk, Tashi needs a number for how much the river’s flow wanders from its average. He has two tools."),
      ul(
        "Range: the highest value minus the lowest. For river B, that is 19 minus 1, which is 18. For river A, it is zero. Simple, but it depends entirely on two extreme days.",
        "Standard deviation: roughly, the typical distance of the values from the average. For river A it is zero, and for river B it is 9. A big standard deviation signals an unpredictable river.",
      ),
      p("A handy rule of thumb for bell-shaped data is that about two thirds of values fall within one standard deviation of the mean, and about 95 percent within two. If a river’s flow is typically 10 with a standard deviation of 9, then flows outside the range of about minus 8 and 28 are very rare. Flows reaching 28 are not something to design around lightly."),

      h2("The outlier: error or alarm?"),
      p("In the records, Tashi finds a strange entry: a flow of 480 cubic metres per second on a single day in July, when everything else is below 40. The previous team had quietly deleted it as a mistake."),
      p("He does not. He calls the gauge station. The reading is real: a cloudburst upstream caused a flash flood that destroyed two small footbridges. The outlier is not a mistake. It is the most important number in the dataset. His bridge must be designed to survive it."),
      p("This is the lesson of outliers. When a value is far from the rest, there are only two possibilities."),
      ul(
        "It is an error, such as a faulty sensor, a typo or a decimal in the wrong place. Fix or remove it, and write down why.",
        "It is real, rare and important. Study it, and design for it.",
      ),
      p("The worst response is to delete it without finding out which."),

      h2("Where this shows up in AI, maps and 3D"),
      ul(
        "Satellite imagery: the average brightness of an image can be thrown off by a few clouds or snow patches. Analysts use the median or mask the outliers first.",
        "Machine learning: models are sensitive to extreme values, so features are often scaled using the median and spread. Data errors, such as an elevation of 9,999 metres meaning “no data”, can wreck training.",
        "Quality control: a drone survey’s errors are summarised by an average and a spread, for example “accuracy 3 centimetres, with a standard deviation of 1”.",
        "VR comfort: the average frame rate may look healthy while rare, long stalls make people feel unwell. The worst frames matter more than the mean.",
        "Reports: averages of rates, such as the average of district percentages, need weighting by population to be meaningful.",
      ),

      h2("The formulas behind the story"),
      p("Tashi’s three summaries have exact definitions. Here they are, with the numbers from his valley."),
      formula("mean = (x₁ + x₂ + … + xₙ) ÷ n", ["x₁ … xₙ: the individual values", "n: how many values there are", "Σ is the shorthand for adding them up, so mean = Σx ÷ n"]),
      p("In the story: the village incomes give (20 + 20 + 22 + 25 + 500) ÷ 5 = 587 ÷ 5 = 117.4. The median is the middle value after sorting, which is 22."),
      formula("standard deviation σ = √( Σ(x − mean)² ÷ n )", ["x − mean: how far each value sits from the average", "squaring: makes every distance positive and punishes big gaps", "÷ n then √: averages the squares and returns to the original units"]),
      p("In the story: river B flows at 1 and 19 with a mean of 10. Each value is 9 away, so σ = √((9² + 9²) ÷ 2) = √81 = 9. River A has every distance equal to 0, so σ = 0."),
      formula("range = largest − smallest", ["Simple, but it depends entirely on the two most extreme values"]),
      p("In the story: river B has a range of 19 − 1 = 18. For bell-shaped data, about 68% of values lie within one σ of the mean, and about 95% within two."),

      h2("Try it yourself"),
      ol(
        "Write down the prices of ten items you bought recently, including one expensive one.",
        "Calculate the mean and the median. Which describes a normal purchase better?",
        "Remove the expensive one and recalculate. Which number moved more?",
        "Find the range. Does it tell you anything the other numbers do not?",
      ),

      h2("Frequently asked questions"),
      qa(
        ["Which is better, the mean or the median?", "Neither is better in all cases. The mean is right for balanced data and for totals. The median is right for skewed data. Reporting both is often the honest choice."],
        ["What does a standard deviation of zero mean?", "That every value is exactly the same. Real-world data almost never has that."],
        ["How do I decide if a value is an outlier?", "A common rule flags values more than two or three standard deviations from the mean, or far outside the middle half of the data. But the real test is to investigate the cause."],
        ["Should I always remove outliers before analysis?", "No. Remove only those you know to be errors. Real extremes are often the reason you are doing the analysis."],
      ),
      p("Tashi’s bridge stands high above the flood line. The number that saved it was not the average, but the spread, and the one odd day that someone nearly threw away. When you meet a summary number, ask what it is hiding."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "concepts",
    slug: "story-probability-and-the-positive-test",
    title: "The story of the positive test: probability, base rates and why surprising results are often wrong",
    excerpt: "A test that is 90 percent accurate can still be wrong most of the time. Learn why, with numbers you can check by hand.",
    topic: "Applied Maths",
    level: "Beginner",
    date: "2026-10-17",
    takeaways: [
      "Probability is a number from 0 to 1 that says how likely something is. It can be turned into counts to make it easier to think about.",
      "A rare event stays rare even after a positive test, because false alarms from the many outnumber true hits from the few.",
      "Always combine a test result with the base rate: how common the thing was before the test.",
      "The same reasoning applies to spam filters, fraud alerts, AI classifiers and any system that raises alarms.",
    ],
    body: [
      p("Mira runs a small clinic in a mountain town. One afternoon a farmer, Pema, arrives pale and anxious. A screening test for a rare condition has come back positive. “The leaflet says the test is 90 percent accurate,” Pema says. “So I almost certainly have it. Don’t I?”"),
      p("Mira has seen this moment before. She takes a pencil and a sheet of paper, and instead of using formulas, she draws a crowd."),

      h2("Probability, in one sentence"),
      p("Probability is a number between 0 and 1 (or 0 and 100 percent) that says how likely something is. A fair coin landing heads has a probability of 0.5. A day with no rain in the dry season might be 0.9. When something is certain, the probability is 1. When it is impossible, it is 0."),
      p("A powerful trick, which Mira uses every day, is to turn probabilities into counts of people. “One in a hundred” is easier to picture than “0.01”, and counts are much harder to misunderstand."),

      h2("Mira draws a crowd"),
      p("The condition affects about 1 percent of people in the area. That is the base rate: how common it is before anyone is tested. Mira imagines 1,000 people from the town."),
      ul(
        "Of the 1,000, about 10 truly have the condition, and about 990 do not.",
        "The test catches 90 percent of true cases. So of the 10 who have it, 9 test positive, and 1 is missed.",
        "The test also gives a false alarm for about 5 percent of healthy people. Five percent of 990 is roughly 50. So about 50 healthy people test positive.",
      ),
      p("Now count the positives. There are 9 true ones and 50 false ones, so 59 positive results in total. Pema is one of those 59. How many of them truly have the condition? Nine out of 59, which is about 15 percent."),
      p("The “90 percent accurate” test, when it says positive, is right only about one time in seven. Pema probably does not have the condition. A second, more careful test is needed, and Mira explains this calmly. Pema’s face softens."),
      note("The test’s accuracy was never the whole story. The rarity of the condition matters just as much. Ignoring it is called the base rate fallacy, and even experts fall into it."),

      h2("Why it happens"),
      p("When something is rare, there are very few people who can produce a true positive, and a great many who can produce a false one. Even a small false alarm rate, applied to a large healthy crowd, creates a pile of false positives that swamps the few real ones. The rarer the event, the worse this gets."),
      p("Change the story, and see the effect. If the condition affected 30 percent of people, the same test would be right about 87 percent of the time when it said positive. Same test, different crowd, very different meaning."),

      h2("The idea behind Bayes’ rule"),
      p("What Mira did on paper is the heart of Bayes’ rule, a way of updating beliefs with evidence. You start with what you believed before, the base rate. You see new evidence, the test result. You combine the two to get what you should believe now. Written without symbols: the chance you really have it, given a positive test, depends on how common it is, how good the test is at catching it and how often it cries wolf."),
      ul(
        "Prior: how likely was it before the test? Here, 1 in 100.",
        "Evidence: how much more likely is a positive result if you have it than if you do not? Here, 90 percent versus 5 percent, so about 18 times.",
        "Posterior: how likely is it now? Here, about 15 in 100.",
      ),

      h2("Where this shows up in AI, maps and 3D"),
      ul(
        "Spam and fraud filters: if only 1 in 1,000 transactions is fraud, a detector that flags 1 percent of honest transactions will raise many more false alarms than real catches.",
        "Satellite detection: a model that finds illegal mining, deforestation or buildings has the same problem when the thing it looks for is rare in the landscape. Evaluate with precision and recall, not accuracy alone.",
        "Medical imaging and screening programmes: positive results need confirmation, because most positives in a healthy population are false.",
        "AI assistants: a model’s “confidence” is not the same as the probability that it is right, and it ignores the base rate of questions it handles well.",
        "Weather: “30 percent chance of rain” is a probability about repeated similar days, not a statement that it will rain on 30 percent of the sky.",
        "Tracking in AR and VR: systems combine noisy sensor readings with what they expect, a close cousin of Bayes’ rule, to estimate where you are.",
      ),

      h2("The formula behind the story"),
      p("Mira’s crowd drawing is Bayes’ rule done with people instead of symbols. Written in symbols, it looks like this."),
      formula("P(D | +) = P(+ | D) × P(D) ÷ [ P(+ | D) × P(D) + P(+ | no D) × P(no D) ]", ["P(D | +): the chance of having the condition, given a positive test. This is what Pema wants to know", "P(D): the base rate, how common the condition is, here 0.01", "P(+ | D): the share of true cases the test catches (sensitivity), here 0.90", "P(+ | no D): the false alarm rate among healthy people, here 0.05", "P(no D) = 1 − P(D), here 0.99"]),
      p("In the story: the top is 0.90 × 0.01 = 0.009. The bottom adds the false alarms, 0.05 × 0.99 = 0.0495, to get 0.009 + 0.0495 = 0.0585. So P(D | +) = 0.009 ÷ 0.0585 ≈ 0.154, about 15%. It is the same answer as 9 true positives out of 59 positives in Mira’s crowd."),
      formula("odds after = odds before × likelihood ratio", ["odds before: P(D) ÷ (1 − P(D)), here 1 to 99", "likelihood ratio: P(+ | D) ÷ P(+ | no D), here 0.90 ÷ 0.05 = 18"]),
      p("In the story: 1 to 99, multiplied by 18, is 18 to 99, which is about 15% as a probability (18 ÷ 117). The test multiplies your belief by 18, but a belief that started tiny stays modest."),

      h2("Try it yourself"),
      ol(
        "Pick a rare event, such as 1 in 200.",
        "Imagine 10,000 people. How many truly have it?",
        "Suppose a test catches 95 percent of them and falsely flags 2 percent of the rest. How many positives are true, and how many false?",
        "What share of all positives is true? Surprised?",
      ),

      h2("Frequently asked questions"),
      qa(
        ["Does this mean tests are useless?", "No. They are valuable, especially for ruling things out and for guiding the next step. The lesson is to interpret a positive result in light of how common the condition is, and to confirm it when it matters."],
        ["What is the difference between sensitivity and specificity?", "Sensitivity is the share of true cases the test catches. Specificity is the share of non-cases the test correctly clears. A good screening test needs both to be high."],
        ["Is a 5 percent false positive rate a lot?", "It depends on the crowd. With a rare condition and a big healthy population, it produces many false alarms. That is why alerts are tuned and confirmed."],
        ["How can I check my own reasoning?", "Turn every probability into counts of people, as Mira did. If the counts and your gut feeling disagree, trust the counts."],
      ),
      p("Mira’s pencil sketch did more than a lecture could. It replaced a frightening number with a clear picture, and a picture is often the best tool in probability. When you hear that something is “90 percent accurate”, remember the crowd, and ask how many people stand in it."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "concepts",
    slug: "story-geometry-and-the-tallest-tree",
    title: "The story of the tallest tree: geometry, angles and how we measure what we cannot reach",
    excerpt: "How shadows, angles and triangles let you measure a tree, a mountain or a building, and how the same ideas drive surveying, GPS and 3D graphics.",
    topic: "Applied Maths",
    level: "Beginner",
    date: "2026-10-17",
    takeaways: [
      "Similar triangles let you measure something huge from something small, using shadows or sight lines.",
      "Pythagoras gives distances from two perpendicular measurements, and trigonometry turns an angle and a distance into a height.",
      "Triangulation finds a position by measuring angles or distances from two or more known points.",
      "The same ideas sit under surveying, GPS, photogrammetry and every 3D scene.",
    ],
    body: [
      p("In a village forest, a school has a challenge. Pema the teacher announces that the oldest pine in the schoolyard might be the tallest tree in the valley. “How tall is it?” asks a student called Sunil. Nobody has a ladder long enough, and nobody wants to climb it. “We do not need to touch the tree,” says Pema. “We need a stick, a measuring tape and a little geometry.”"),
      p("What follows is one of the oldest stories in mathematics. Versions of it have been told for thousands of years, from measuring the pyramids to mapping continents. It shows how triangles let us reach what our hands cannot."),

      h2("First method: the shadow and the stick"),
      p("It is a sunny afternoon. Pema pushes a 2 metre stick upright into the ground. Its shadow stretches 1.5 metres. At the same moment, the class measures the tree’s shadow along the ground: 12 metres."),
      p("The sunlight falls at the same angle on both. The stick, its shadow and the line of light form a small triangle. The tree, its shadow and the line of light form a bigger one with the same shape. They are similar triangles: one is a scaled-up copy of the other. In similar triangles, the ratios of matching sides are equal."),
      ul(
        "For the stick: height divided by shadow is 2 divided by 1.5, which is about 1.33.",
        "For the tree, the same ratio applies: height divided by 12 equals 1.33.",
        "So the tree’s height is 12 times 1.33, which is exactly 16 metres.",
      ),
      p("Sunil is amazed. A tree four storeys high has been measured using a stick, a tape and a sunny day."),

      h2("Second method: an angle and a distance"),
      p("The next day is cloudy, so there are no shadows. Pema borrows a simple angle-measuring tool called a clinometer, which can be made from a protractor and a string with a weight. Sunil stands 30 metres from the base of the tree and looks at the top. The clinometer reads 35 degrees above the horizontal."),
      p("Now the tree, the ground and Sunil’s line of sight form a right-angled triangle. The distance along the ground, 30 metres, is the side next to the angle. The tree’s height above eye level is the side opposite it. Trigonometry connects the two through the tangent: the tangent of the angle equals opposite divided by adjacent."),
      ul(
        "The tangent of 35 degrees is about 0.70.",
        "Height above eye level equals 30 times 0.70, which is about 21 metres.",
        "Sunil’s eyes are 1.6 metres above the ground, so the tree is about 22.6 metres tall.",
      ),
      p("The shadow method gave 16 metres and the angle method 22.6. They disagree, so the class must have made a mistake somewhere. They re-measure, and discover that the shadow measurement had been taken from the wrong spot, and that the stick had been leaning. Disagreement between two methods is a gift: it tells you to check your work, which is exactly what surveyors do."),
      note("When two independent methods give different answers, one has an error. That is why professionals measure the same thing more than one way."),

      h2("Pythagoras: the shortest way across"),
      p("Pema also shows the class how to make a perfect right angle without any tools. A rope with knots at 3, 4 and 5 units makes a triangle with a right angle between the 3 and the 4 sides, because three squared plus four squared equals five squared (9 plus 16 equals 25). This is the Pythagorean theorem: in a right-angled triangle, the square of the longest side equals the sum of the squares of the other two."),
      p("Builders have used the rope trick for thousands of years to lay out square foundations. The same theorem gives the distance between any two points on a flat map. If a village is 3 kilometres east and 4 kilometres north of another, the straight-line distance is 5 kilometres."),

      h2("Triangulation: finding where you are"),
      p("A week later, two students walk to opposite ends of the schoolyard, 50 metres apart, and each measures the angle to a distant temple. Because they know the distance between themselves and the two angles, the class can draw a triangle and find the temple’s distance, without ever walking there. This is triangulation, the method behind much of the world’s early mapmaking."),
      p("It works because a triangle is rigid. If you know one side and two angles, the whole shape is fixed. Surveyors measured whole countries this way, chaining triangle after triangle across land and mountains."),

      h2("From the schoolyard to satellites and screens"),
      ul(
        "GPS positioning uses a version of the same idea. Your receiver measures its distance from several satellites and finds where those distances meet. It needs at least four satellites, because it also solves for the error in its own clock.",
        "Photogrammetry uses two or more photographs of the same object, taken from different positions, to calculate depth by triangulation, exactly like the temple.",
        "Drone mapping computes the size of the ground covered by a pixel using similar triangles, from the height of the drone and the camera’s focal length.",
        "3D graphics rotates and scales shapes using sine, cosine and tangent, and uses dot products to work out how light strikes a surface.",
        "Laser scanners work out a distance from the time light takes to travel there and back, and then use angles to place each point in 3D.",
        "VR headsets compute the angle each eye sees, so that the scene appears at the right depth.",
      ),

      h2("The formulas behind the story"),
      p("Pema’s class used three formulas. Each fits on one line."),
      formula("H ÷ S = h ÷ s   so   H = h × S ÷ s", ["H: the tree’s height, the unknown", "S: the tree’s shadow, 12 m", "h: the stick’s height, 2 m", "s: the stick’s shadow, 1.5 m"]),
      p("In the story: H = 2 × 12 ÷ 1.5 = 16 m. This works because the two triangles are similar, so their matching sides share one ratio."),
      formula("tan(θ) = opposite ÷ adjacent   so   height = d × tan(θ) + eye height", ["θ: the angle read on the clinometer, 35°", "d: the distance along the ground to the tree, 30 m", "eye height: 1.6 m, added because the angle starts at eye level"]),
      p("In the story: 30 × tan 35° = 30 × 0.700 = 21.0 m, and adding 1.6 m gives 22.6 m."),
      formula("c² = a² + b²   so   c = √(a² + b²)", ["a and b: the two shorter sides of a right-angled triangle", "c: the longest side, opposite the right angle"]),
      p("In the story: the knotted rope has 3² + 4² = 9 + 16 = 25 = 5². The village 3 km east and 4 km north is √(3² + 4²) = 5 km away. In 3D, the same idea extends to d = √(x² + y² + z²), the distance used throughout maps and graphics."),

      h2("Try it yourself"),
      ol(
        "On a sunny day, measure a lamp post’s shadow and the shadow of a one-metre stick held upright at the same time. Calculate the lamp post’s height.",
        "Make a clinometer from a protractor and a string. Stand 20 metres from a building, measure the angle to its roof and calculate its height. Do not forget to add your eye height.",
        "Compare the two answers. If they differ by more than a metre, find out why.",
      ),

      h2("Frequently asked questions"),
      qa(
        ["What are sine, cosine and tangent for?", "They connect angles to side lengths in right-angled triangles. Sine and cosine are the heart of rotation and waves. Tangent is the one you use to find a height from an angle."],
        ["Why does GPS need four satellites?", "Three give a position in space, and the fourth lets the receiver correct the small timing error of its own clock."],
        ["Why do surveyors measure the same thing twice?", "Because every measurement has some error, and comparing two independent results reveals mistakes and tells you how reliable the answer is."],
        ["Are angles measured in degrees or radians?", "People use degrees. Computers and calculus use radians. Mixing them up is a common source of bugs, so check which one your tool expects."],
      ),
      p("The oldest tree in the valley is, in the end, 19 metres tall, after a second round of careful measurements. It is not the tallest, but the class found something better: a way of turning a stick, a string and a few triangles into knowledge about places they could not touch. That is geometry at its best."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "concepts",
    slug: "story-rates-of-change-the-water-tank",
    title: "The story of the water tank: rates of change, slopes and totals, with no fear of calculus",
    excerpt: "Calculus is just two questions: how fast is something changing right now, and how much has built up in total? A tank, a tap and a speedometer explain both.",
    topic: "Applied Maths",
    level: "Intermediate",
    date: "2026-10-17",
    takeaways: [
      "A rate of change tells you how fast something is changing at a moment. On a graph, it is the slope.",
      "A total adds up many small amounts over time. On a graph, it is the area under a curve.",
      "The two ideas are opposites: slope turns a total into a rate, and area turns a rate into a total.",
      "Machine learning, flood forecasting and animation all depend on these ideas, in the form of gradients and sums.",
    ],
    body: [
      p("At the edge of a mountain village stands a large water tank, and a young operator named Sunita looks after it. Every day she must answer two questions. The first, asked by the villagers: “How fast is the tank filling or emptying right now?” The second, asked by her supervisor: “How much water came in during the week?”"),
      p("These two questions are, secretly, the whole of calculus. Sunita has never studied it. She does it every day with a notebook, a clock and a depth gauge."),

      h2("Question one: how fast, right now?"),
      p("Sunita notes the water level every hour. At 6 in the morning, it is 100 centimetres. At 7, it is 110. At 8, it is 125. At 9, it is 145. The level is rising, and it is rising faster each hour: 10 centimetres in the first hour, 15 in the second and 20 in the third."),
      p("The speed at which the level changes is its rate of change. In the first hour, the rate is 10 centimetres per hour, and in the last it is 20. If she graphs level against time, the line curves upward, and the steepness of the line at any moment is the rate at that moment. Steeper means faster. Flat means no change. Sloping down means draining."),
      note("The slope of a graph is the rate of change. Reading slopes is the most useful graph skill you can have."),

      h2("From average speed to instant speed"),
      p("Think about a car journey. You drive 120 kilometres in 2 hours, so your average speed is 60 kilometres per hour. But your speedometer shows something else: how fast you are going at this very instant. It might read 40 on a hill and 90 on a highway."),
      p("The instant speed is what you get if you shrink the time window smaller and smaller. Measure the distance travelled in one hour, then in one minute, then in one second, and the average over that tiny window gets closer and closer to the speed at one instant. That limit is what mathematicians call the derivative. The name is grand. The idea is a speedometer."),

      h2("Question two: how much in total?"),
      p("Now the supervisor’s question. Over six hours, the tap fills the tank at different speeds: 5 litres per minute for the first two hours, 8 for the next two and 4 for the last two. How much water came in?"),
      ul(
        "First two hours: 120 minutes at 5 litres per minute is 600 litres.",
        "Next two hours: 120 minutes at 8 is 960 litres.",
        "Last two hours: 120 minutes at 4 is 480 litres.",
        "Total: 600 plus 960 plus 480 is 2,040 litres.",
      ),
      p("She multiplied a rate by a time, and added the pieces. If you draw the rate on a graph, with time along the bottom, each piece is a rectangle. The total water is the area of all the rectangles. When the rate changes smoothly, rather than in steps, you simply use thinner and thinner slices. The sum of all the slices is called the integral. Again, the name is grand. The idea is adding up."),

      h2("The two ideas are opposites"),
      p("Sunita notices something elegant. If she knows how much water is in the tank at every moment, she can work out the rate by looking at the slope. If she knows the rate at every moment, she can work out the total water by adding up the area. Slope takes you from a total to a rate. Area takes you from a rate to a total. They undo each other, like multiplying and dividing."),
      p("This relationship, called the fundamental theorem of calculus, is the reason the whole subject works. It lets engineers move freely between “how fast” and “how much”."),

      h2("Finding the highest or lowest point"),
      p("One more trick. When the tank is full and the level stops rising, the slope is flat. If Sunita wanted the exact moment when the daily level peaked, she would look for where the slope changes from rising to falling, passing through zero. Peaks and valleys of any curve are found where the slope is zero. This is how calculus finds the best, biggest or cheapest value of something."),

      h2("Where this shows up in AI, maps and 3D"),
      ul(
        "Machine learning: training a model means finding the lowest point of an error curve. The slope tells the computer which direction is downhill, and how steeply. That slope is called the gradient, and the method is gradient descent, which is described in another article in this series.",
        "Flood forecasting: the rate at which a river’s level rises matters as much as the level, because it tells you how much time you have. The total volume of a flood is the area under the flow curve.",
        "Rainfall and runoff: adding up rain per hour over a storm gives the total rainfall, and a map of total rainfall is a sum of rates.",
        "Animation and VR: a character’s position, speed and acceleration are linked by slopes and sums. Smooth motion needs smooth rates.",
        "Terrain: the slope of the ground, measured from an elevation map, decides where water flows and where landslides may happen. It is a rate of change of height over distance.",
        "Vegetation monitoring: the rate at which NDVI rises in spring shows how quickly crops are growing.",
      ),

      h2("The formulas behind the story"),
      p("Sunita’s two questions have two compact formulas. The notation looks grand, but each symbol maps to something in her notebook."),
      formula("rate = Δlevel ÷ Δtime     (derivative: dy/dt = lim Δy ÷ Δt as Δt → 0)", ["Δ (delta): a change, new value minus old value", "Δlevel ÷ Δtime: the average rate over a window", "lim as Δt → 0: shrink the window until it is an instant, like a speedometer reading"]),
      p("In the story: from 6 am to 7 am the level rose from 100 to 110 cm, so the rate is (110 − 100) ÷ 1 = 10 cm per hour. From 8 to 9 am it is (145 − 125) ÷ 1 = 20 cm per hour."),
      formula("total = ∫ r(t) dt  ≈  Σ r × Δt", ["r: the rate at a moment, here litres per minute", "Δt: the length of each slice of time", "∫ (the integral): the sum of infinitely thin slices, which is the area under the rate curve"]),
      p("In the story: the tap gave 5 × 120 + 8 × 120 + 4 × 120 = 600 + 960 + 480 = 2,040 litres."),
      formula("d/dt ∫ r(t) dt = r(t)   and   slope = 0 at a peak or valley", ["The first part says that slope and area undo each other, the fundamental theorem of calculus", "The second part says where to look for the best or worst value of anything"]),

      h2("Try it yourself"),
      ol(
        "Record the odometer, or the battery level on your phone, every hour for six hours.",
        "Work out the change each hour, which is the rate. Is it constant, or does it change?",
        "Draw both as graphs. Find the steepest part of the first one.",
        "Add up the rates over the day. Does it match the total change?",
      ),

      h2("Frequently asked questions"),
      qa(
        ["Do I need calculus to use AI?", "Not to use it. But the idea of a slope pointing downhill is what makes training work, so understanding it makes a lot of behaviour less mysterious."],
        ["What is acceleration?", "It is the rate of change of speed. If speed is how fast position changes, acceleration is how fast speed changes."],
        ["What if a curve is jagged and not smooth?", "Computers handle that by working with small steps, which is called numerical calculation. The idea of slope and area remains the same."],
        ["What does negative slope mean?", "That the quantity is falling. A tank that is emptying has a negative rate of change in its level."],
      ),
      p("Sunita never uses the words derivative or integral. She uses level, rate and total. But in answering her two daily questions, she does what engineers, scientists and machine learning systems do all day: she tracks how fast things change, and how much they add up to. It is one of the most useful ways of thinking ever invented."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "concepts",
    slug: "story-exponential-growth-the-lily-pond",
    title: "The story of the lily pond: exponential growth, compounding and doubling",
    excerpt: "Why things that double are so hard to feel, what the rule of 72 tells you, and how growth and decay shape money, data, epidemics and technology.",
    topic: "Applied Maths",
    level: "Beginner",
    date: "2026-10-17",
    takeaways: [
      "Exponential growth means multiplying by the same factor each step, so the increases themselves keep growing.",
      "Doubling is deceptive: a pond half covered is one day from being full.",
      "The rule of 72 gives a quick estimate of doubling time: divide 72 by the percentage growth rate.",
      "Exponential decay, such as half-life, is the same idea running backwards.",
    ],
    body: [
      p("A fisherman, Karma, owns a small pond at the edge of his village. One spring, a single water lily appears on it. It is pretty, so he leaves it. A neighbour warns him: “Lilies double in number every day. If they cover the pond in thirty days, the fish will suffocate.” Karma shrugs. One lily is nothing."),
      p("For a long time, he is right. On day 10 the lilies fill a tiny corner. On day 20, they cover less than a thousandth of the pond. Karma barely notices. Then he asks himself a question that makes his stomach drop: on which day is the pond half covered?"),

      h2("The day before the end"),
      p("The answer is day 29. If the lilies double every day, and the pond is completely full on day 30, then it was half full on day 29. On day 28, it was a quarter full. For almost the entire month, the pond looked nearly empty. The disaster arrived in the last few days, and by the time it became obvious, there was almost no time left."),
      p("This is the nature of exponential growth. It is quiet for a long time, and then it is suddenly overwhelming. It is hard to feel, because our intuition is built for steady, additive change: one more step each time. Exponential change multiplies instead. Each increase is bigger than the last."),
      note("Linear growth adds the same amount each step. Exponential growth multiplies by the same factor each step. The difference is small at first and enormous later."),

      h2("A counting experiment"),
      p("Karma does the numbers on a piece of paper. A single lily on day 0 becomes 2 on day 1, 4 on day 2, 8 on day 3 and 16 on day 4. After 10 days, he has 1,024 lilies. After 20 days, more than a million. After 30 days, more than a billion. Doubling thirty times multiplies the start by more than a billion, a number that no one can feel directly."),
      p("Compare this to adding one lily each day. After thirty days, there would be 31. Growth by addition and growth by multiplication look the same on day 3 and absurdly different on day 30."),

      h2("Compounding: growth on growth"),
      p("Karma’s sister Dolma saves a little money in a village cooperative that pays 7 percent a year. She puts in 10,000. After one year she has 10,700. In the second year, the 7 percent is calculated on 10,700, not on the original 10,000, so she earns 749. This is compound interest: interest that earns interest."),
      ul(
        "After 10 years at 7 percent a year, the 10,000 becomes about 19,700, almost double.",
        "After 30 years, it becomes about 76,100, more than seven times the start.",
        "Without compounding, simple interest of 700 a year would give only 31,000 after 30 years.",
      ),
      p("Loans compound in the same way, which is why a small debt at a high rate can balloon. The same arithmetic that helps savings grow makes debts harder to escape."),

      h2("The rule of 72"),
      p("Dolma learns a handy shortcut. To estimate how long money takes to double, divide 72 by the annual percentage rate. At 6 percent, it takes about 12 years. At 9 percent, about 8 years. At 2 percent, about 36 years. The shortcut works for anything that grows at a steady percentage, whether money, a population or a company’s sales."),
      ul(
        "A town growing at 3 percent a year doubles in about 24 years.",
        "A user base growing at 10 percent a month doubles in about 7 months.",
        "A cost rising at 8 percent a year doubles in about 9 years.",
      ),

      h2("Decay: growth in reverse"),
      p("The same pattern runs backwards. Karma buys a medicine for his fish that breaks down in water. Half of it disappears every 2 days. This period is called its half-life. Start with 100 units. After 2 days, there are 50. After 4 days, 25. After 6 days, 12.5. It never quite reaches zero, but it becomes small very quickly."),
      p("Half-life describes radioactive materials, drugs in the body, the strength of a signal fading and the loss of value in some assets. It is exponential decay, and it follows the same logic, with a factor smaller than one."),

      h2("Why growth rarely stays exponential"),
      p("In real life, the lilies cannot keep doubling forever. They run out of pond. Nutrients, space and light become limits. A graph that starts as an exponential curve eventually bends into an S-shape, called a logistic curve, as growth slows and levels off. Epidemics, adoption of new technologies and populations of animals follow this pattern. The early part looks exponential, and the later part meets limits."),
      p("Knowing this stops you from making two common mistakes: assuming that fast growth will go on forever, and assuming that slow early growth means that nothing will happen."),

      h2("Where this shows up in AI, maps and 3D"),
      ul(
        "Data growth: the amount of imagery, sensor data and text we produce grows rapidly, which is why storage and processing planning needs a doubling mindset.",
        "Model size and computing: the effort used to train large AI models has grown by large factors in short periods, which drives energy and cost questions.",
        "Epidemics and spreading processes: mapped growth of cases or wildfires depends on the factor by which each step multiplies.",
        "Levels of detail in 3D: each doubling of resolution in a grid multiplies the number of cells by four in two dimensions, and eight in three. That is why high-resolution 3D grows heavy so fast.",
        "Image pyramids and map tiles: each zoom level on a web map has four times as many tiles as the one before.",
        "Learning curves: a model’s error often falls quickly at first and then slowly, a form of decay.",
      ),

      h2("The formulas behind the story"),
      p("Karma’s pond, Dolma’s savings and the fading medicine are all one formula wearing different clothes."),
      formula("N(t) = N₀ × 2ᵗ     (doubling every step)", ["N₀: the starting amount, here 1 lily", "t: the number of doublings, here days", "2ᵗ: the multiplier after t doublings"]),
      p("In the story: after 30 days, 2³⁰ = 1,073,741,824 lilies. After 29 days it is half of that, which is why the pond is half full a day before it is full."),
      formula("A = P × (1 + r)ᵗ", ["P: the amount you start with (principal), 10,000", "r: the growth rate per period as a decimal, 0.07", "t: the number of periods, years here", "A: the amount after t periods"]),
      p("In the story: after 10 years, 10,000 × 1.07¹⁰ ≈ 19,672. After 30 years, 10,000 × 1.07³⁰ ≈ 76,123. Simple interest would be 10,000 + 700 × 30 = 31,000."),
      formula("doubling time ≈ 72 ÷ r%     (exactly: t = ln 2 ÷ ln(1 + r))", ["r%: the growth rate as a percentage, such as 6", "ln: the natural logarithm, the exact inverse of exponential growth"]),
      p("In the story: at 6% the rule gives 72 ÷ 6 = 12 years. The exact formula gives 0.693 ÷ 0.0583 ≈ 11.9 years."),
      formula("N(t) = N₀ × (½)^(t ÷ T)     (half-life T)", ["T: the half-life, the time for the amount to halve", "t ÷ T: how many half-lives have passed"]),
      p("In the story: the medicine has T = 2 days. After 6 days, t ÷ T = 3 halvings, so 100 × (½)³ = 12.5 units."),

      h2("Try it yourself"),
      ol(
        "Take a sheet of paper and fold it in half. Fold again. How many folds can you do? How thick would it be after 42 folds, if you could?",
        "Use the rule of 72 to estimate how long it takes your savings, or a price, to double at a rate you know.",
        "Open a web map and zoom in one level. Count how the number of tiles changes.",
      ),

      h2("Frequently asked questions"),
      qa(
        ["Is exponential the same as fast?", "No. Exponential means multiplied by a constant factor each step. It can start slowly. What makes it special is that it eventually outruns any steady, additive growth."],
        ["How accurate is the rule of 72?", "It is a good approximation for rates between about 2 and 15 percent. For an exact answer, use a calculator or logarithms."],
        ["What is a logarithm?", "It is the opposite of an exponent. It answers the question, “how many times do I multiply to reach this number?”. Logarithms turn multiplication into addition, which makes huge ranges easy to plot."],
        ["Why do charts of growth often use a log scale?", "Because on a log scale, steady percentage growth is a straight line, so it is easy to see whether growth is speeding up or slowing down."],
      ),
      p("Karma’s pond was saved, because on day 27 he began pulling lilies out. The lesson is one that applies far beyond ponds: when something doubles, the time to act is long before it looks serious. Learn to feel exponential change, and you can see problems, and opportunities, while they are still small."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "concepts",
    slug: "story-optimisation-the-delivery-rider",
    title: "The story of the delivery rider: optimisation, constraints and finding the best answer",
    excerpt: "How to pick the best route, the best mix or the best setting when there are too many choices to try, and why computers search instead of checking everything.",
    topic: "Applied Maths",
    level: "Intermediate",
    date: "2026-10-17",
    takeaways: [
      "Optimisation means finding the best choice under limits: maximise a good thing or minimise a bad thing, while obeying constraints.",
      "The number of possible solutions can explode, so smart methods search instead of trying everything.",
      "Simple heuristics give good answers quickly. Exact methods give the best answer when the problem is small or structured.",
      "Machine learning is optimisation: training a model searches for the settings with the lowest error.",
    ],
    body: [
      p("Bikram rides a motorbike for a small delivery business in a hill town. Each morning, he loads parcels for several customers scattered along winding roads. The company pays him by the day, and his bosses care about two things: fuel and time. “Just take the shortest way,” they say. Bikram smiles. “Which one is that?”"),
      p("That question, simple to ask and surprisingly hard to answer, is the beginning of optimisation. It is the mathematics of making the best choice when there are many possibilities and some rules you cannot break."),

      h2("The three ingredients"),
      p("Every optimisation problem has the same three parts."),
      ul(
        "The decision: what can you choose? Here, the order in which to visit the stops.",
        "The objective: what do you want as large or as small as possible? Here, the total distance, or the time.",
        "The constraints: what rules must be respected? Here, each parcel must be delivered, the bike carries only so much, and one customer is only at home after noon.",
      ),
      p("Writing the problem down in this way often solves half of it. Many disagreements in organisations come from people having different objectives without realising it, such as one wanting speed while another wants low cost."),

      h2("Too many routes to try"),
      p("On Monday, Bikram has four stops. He can try them all: four stops can be visited in 24 different orders, which is a small enough list to check by hand. On Friday, he has ten stops. Ten stops can be ordered in 3,628,800 ways, and no one can check that many on paper."),
      p("A delivery company with twenty stops faces about 2.4 quintillion possible orders, which is 24 followed by 17 zeros. Even a computer checking a billion routes every second would take decades. The number of choices explodes, and this is the central difficulty of optimisation. It is called a combinatorial explosion."),
      note("When the number of options grows faster than computers can keep up, the answer is not to check them all faster. It is to search more cleverly."),

      h2("Simple rules that work well enough"),
      p("Bikram invents a rule of thumb. Start at the depot, go to the nearest unvisited stop, and repeat. This greedy method, called nearest neighbour, is quick, needs no computer and gives a route that is often 20 to 25 percent longer than the best, but is perfectly sensible."),
      ul(
        "Greedy methods pick the best-looking move at each step. They are fast and simple, but can paint themselves into a corner.",
        "Heuristics are practical rules that give good answers without proof that they are the best.",
        "Improvement methods start with a route and keep making small changes, such as swapping two stops, as long as they help.",
      ),
      p("When Bikram looks at his greedy route on a map, he spots two roads that cross, which means he is doubling back. He swaps two stops, and the route uncrosses and gets shorter. This simple improvement step is the basis of many professional routing tools."),

      h2("Exact methods when the problem has structure"),
      p("Some problems can be solved exactly, even when they are large, because they have a helpful structure. A farmer, Lhamo, is deciding how to split 10 hectares between rice, which earns 5 units of profit per hectare, and vegetables, which earn 8. Rice needs 2 workers per hectare, vegetables need 3, and she has 24 workers. She wants to maximise profit."),
      ul(
        "Decision: hectares of rice and of vegetables.",
        "Objective: 5 times rice plus 8 times vegetables, as large as possible.",
        "Constraints: rice plus vegetables is at most 10, and 2 times rice plus 3 times vegetables is at most 24.",
      ),
      p("Try a few sensible plans. All rice: 10 hectares needs 20 workers and earns 50. All vegetables is limited by labour: 24 divided by 3 is 8 hectares, earning 64. A mix of 6 rice and 4 vegetables uses all land and 24 workers, and earns 30 plus 32, which is 62. The best of these is 8 hectares of vegetables, with 2 hectares left fallow, earning 64."),
      p("This kind of problem, with a straight-line objective and straight-line constraints, is called linear programming. Standard methods solve it exactly, even with thousands of variables. Many real planning problems, such as scheduling shifts, blending feeds or allocating budgets, are of this type."),

      h2("Walking downhill: how models are trained"),
      p("There is a third family of methods, for smooth problems with many settings. Imagine standing on a foggy hillside, trying to reach the lowest valley. You feel the slope under your feet and step downhill, again and again. This is gradient descent, and it is how machine learning models are trained: the hillside is the error of the model, the position is its settings and the slope tells you which way to adjust."),
      ul(
        "The model has millions of settings, and there are no ways to check them all.",
        "Each step reduces the error a little.",
        "The method can get stuck in a small dip that is not the lowest, which is why training involves tricks and restarts.",
      ),

      h2("Trade-offs and multiple goals"),
      p("Real problems rarely have a single objective. Bikram’s bosses want the shortest distance, but customers want early deliveries, and Bikram wants a route that does not take him down the dangerous road after dark. The answers often form a trade-off: a faster route is longer, or a cheaper plan is less reliable."),
      ul(
        "Combine the goals into one score with weights, such as cost plus a penalty for late delivery.",
        "Or set a limit on one and optimise the other: the cheapest route that arrives before 5 pm.",
        "Or show the set of best compromises, and let people choose.",
      ),

      h2("Where this shows up in AI, maps and 3D"),
      ul(
        "Routing: mapping services find the shortest or fastest path through a road network, using algorithms built for the purpose.",
        "Site selection: GIS analysts choose where to put a school or a clinic to minimise travel time for the most people.",
        "Machine learning: training, tuning settings and choosing which features to use are all optimisation.",
        "Photogrammetry: the step that adjusts camera positions and 3D points until errors are smallest, called bundle adjustment, is a huge optimisation.",
        "3D and VR: engines choose how much detail to draw to keep the frame rate high, trading quality against speed.",
        "Drone planning: choosing flight lines that cover an area with the least battery.",
      ),

      h2("The formulas behind the story"),
      p("Bikram and Lhamo faced the same structure: a number to make best, and rules to obey."),
      formula("n! = n × (n − 1) × … × 2 × 1", ["n: the number of stops", "n!: the number of different orders in which to visit them"]),
      p("In the story: 4! = 24 orders on Monday, 10! = 3,628,800 on Friday and 20! ≈ 2.4 × 10¹⁸ for twenty stops. This explosion is why searching cleverly beats checking everything."),
      formula("maximise  5x + 8y   subject to   x + y ≤ 10  and  2x + 3y ≤ 24,  x, y ≥ 0", ["x: hectares of rice, y: hectares of vegetables", "5x + 8y: the objective, the profit to make as large as possible", "the two inequalities: the constraints on land and on workers"]),
      p("In the story: the best corner is x = 0, y = 8, which gives 5 × 0 + 8 × 8 = 64. Check the constraints: 0 + 8 = 8 ≤ 10 and 2 × 0 + 3 × 8 = 24 ≤ 24. Linear programming proves that the best answer sits at a corner of the allowed region."),
      formula("θ_new = θ − η × ∇L(θ)", ["θ: the model’s settings", "L(θ): the error (loss) to make small", "∇L(θ): the gradient, the slope pointing uphill, so we subtract it to go downhill", "η (eta): the learning rate, the size of each step"]),
      p("In the story, as a tiny example: let L(θ) = (θ − 3)², so the gradient is 2(θ − 3). Start at θ = 0 with η = 0.1. The gradient is −6, so θ_new = 0 − 0.1 × (−6) = 0.6. Repeat, and θ creeps toward 3, the lowest point."),

      h2("Try it yourself"),
      ol(
        "List six places you visit on errands. Sketch them as dots on a page.",
        "Plan a route by always going to the nearest unvisited place. Measure its length.",
        "Look for crossing lines, swap two stops to remove them and measure again.",
        "Write down your objective and constraints. Did they change what you thought best?",
      ),

      h2("Frequently asked questions"),
      qa(
        ["Is the best answer always necessary?", "Often a good answer found quickly beats a perfect one found too late. Decide how much better the best could be, and what the search will cost."],
        ["What is a local optimum?", "A solution that is better than all its close neighbours, but not the best overall, like a small dip on a hillside that is not the lowest valley."],
        ["Why do navigation apps sometimes suggest strange routes?", "They optimise a combined score, such as predicted time with live traffic, and may weigh things you did not expect, such as turns, tolls or road class."],
        ["How is optimisation different from prediction?", "Prediction estimates what will happen. Optimisation chooses what to do about it. Many systems predict first and then optimise."],
      ),
      p("Bikram’s route today is not the mathematically perfect one. It is a good, safe, sensible one, found by a simple rule and a small improvement. That is how most optimisation works in the real world. State the goal and the limits clearly, search intelligently, and be satisfied with a very good answer found in good time."),
    ],
  },
];
