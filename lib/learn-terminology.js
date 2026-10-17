// Learn > Concepts: the vocabulary article that opens the "Adopt AI in your organization" path.
// Reading time is calculated automatically (lib/readtime.js).

import { p, h2, ul, ol, note, qa } from "./blocks";

export const terminology = [
  {
    seed: true,
    type: "concepts",
    slug: "ai-basic-terminology",
    title: "AI basics: the essential terminology, in plain language",
    excerpt: "Sixty terms you will hear in every AI meeting, explained simply, so that you can ask better questions and spot buzzwords.",
    topic: "AI Strategy",
    level: "Beginner",
    date: "2026-10-17",
    takeaways: [
      "Shared vocabulary is the cheapest way to avoid expensive misunderstandings with vendors, teams and leaders.",
      "AI is the broad field, machine learning is one way of building it, and generative AI and language models are the part most people now meet.",
      "Know the difference between training a model, prompting it, giving it your documents and letting it act.",
      "Most project words, such as pilot, baseline and governance, are as important as the technical ones.",
    ],
    body: [
      p("Walk into almost any meeting about artificial intelligence, and the jargon arrives within a minute. Models, tokens, agents, hallucinations, fine-tuning. Some of it is precise and useful. Some of it is marketing. Many people nod along without being sure what a word means, and then make decisions on that uncertainty."),
      p("This article is a glossary written for people who are about to plan AI in their organisation. It is grouped by theme, with short, plain definitions, and ends with the pairs of terms that are most often confused. Read it once, then return to it whenever a new word appears."),

      h2("The big picture"),
      ul(
        "Artificial intelligence (AI). The broad field of making computers do tasks that normally need human intelligence, such as understanding language, recognising images or making predictions.",
        "Machine learning (ML). A way of building AI in which a computer learns patterns from examples, instead of following rules that a person wrote by hand.",
        "Deep learning. A kind of machine learning that uses large neural networks with many layers. It powers modern image, speech and language systems.",
        "Neural network. A system of connected units, loosely inspired by the brain, that learns by adjusting the strength of its connections.",
        "Generative AI. AI that creates new content, such as text, images, audio, code or 3D models, rather than only classifying or predicting.",
        "Algorithm. A set of steps for solving a problem. In machine learning, the algorithm describes how the system learns.",
      ),

      h2("How a model is built"),
      ul(
        "Data. The examples a system learns from or works on: records, images, text, sensor readings.",
        "Dataset. A collection of data prepared for a purpose, such as training or testing.",
        "Features. The pieces of information fed to a model, such as the size of a field or the month of the year.",
        "Label. The correct answer attached to an example, such as “flooded” or “not flooded”. Creating labels is often the slowest part of a project.",
        "Supervised learning. Learning from examples that have labels.",
        "Unsupervised learning. Finding groups or patterns in data with no labels.",
        "Model. The result of training: the thing that takes an input and gives an output.",
        "Training. The process of fitting a model to data, by adjusting its settings to reduce errors.",
        "Parameters (or weights). The adjustable numbers inside a model that training sets. Large language models have billions of them.",
        "Validation and test sets. Examples held back from training, used to choose settings and to measure real performance honestly.",
        "Inference. Using a trained model to produce an answer for new input. Training is learning. Inference is working.",
        "Pre-trained model. A model already trained on a large amount of data by someone else, ready to use or adapt.",
        "Fine-tuning. Continuing the training of a pre-trained model on your own examples, to specialise it for your task.",
      ),

      h2("Language AI: the words in every chatbot conversation"),
      ul(
        "Large language model (LLM). A very large model trained on huge amounts of text, which can read, write, summarise, translate and answer questions in natural language.",
        "Prompt. The instruction or question you give a language model.",
        "Prompt engineering. Writing prompts carefully, with context, examples and constraints, to get better results.",
        "System prompt. Standing instructions that set the model’s role and rules, usually hidden from the user.",
        "Token. A small chunk of text, roughly a short word or part of a word, that models read and write. Costs and limits are usually counted in tokens.",
        "Context window. How much text a model can consider at one time, including your question, the documents you supply and its answer.",
        "Temperature. A setting that controls randomness. Low values give steadier, more predictable answers. High values give more varied ones.",
        "Hallucination. When a model states something confidently that is false or unsupported. It is a normal failure mode of language models, not a rare glitch.",
        "Grounding. Tying an answer to real sources, so that it can be checked.",
        "Multimodal. Able to work with more than one kind of input, such as text, images and audio.",
      ),

      h2("Giving AI your knowledge and letting it act"),
      ul(
        "Embedding. A list of numbers that captures the meaning of a piece of text or an image, so that similar things sit close together. It powers meaning-based search.",
        "Vector database. A store built to find the closest embeddings quickly.",
        "Retrieval-augmented generation (RAG). Finding relevant passages in your documents and giving them to a language model, so that its answer is based on them.",
        "Chunking. Splitting documents into pieces for indexing and retrieval.",
        "Knowledge base. The collection of documents and data an assistant can draw on.",
        "Tool use (or function calling). Letting a model call outside functions, such as search, a calculator or a database lookup.",
        "AI agent. A system that pursues a goal over several steps, deciding what to do next, using tools and checking results.",
        "Workflow automation. Fixed, rule-based sequences of steps. Predictable and cheap, and often a better fit than an agent when the steps never change.",
        "Orchestration. Coordinating models, tools and data so that the parts work together.",
      ),

      h2("Measuring whether it works"),
      ul(
        "Accuracy. The share of answers that are right. It can mislead when one outcome is rare.",
        "Precision. Of the things the system flagged, how many really were what it said.",
        "Recall. Of the things that were really there, how many the system found.",
        "Baseline. How the task performs today, without the new system. It is what you compare against.",
        "Benchmark. A standard test used to compare models. Useful, but not a substitute for testing on your own tasks.",
        "Evaluation (or eval). A structured test of a system on a set of realistic examples.",
        "Overfitting. When a model memorises its training data and fails on anything new.",
        "Drift. When data or the world changes over time, so that a model that was accurate becomes less so.",
        "Confidence. How sure a model says it is. It is not always well matched to how often it is right.",
      ),

      h2("Responsible and safe use"),
      ul(
        "Bias. Systematic unfairness that can come from unrepresentative data or design, and cause worse results for some people or places.",
        "Explainability. How well a person can understand why a system gave a result.",
        "Human in the loop. A design in which a person reviews or approves the system’s output before it has an effect.",
        "Guardrails. Rules and limits that keep a system within safe behaviour, such as restricted topics and approval steps.",
        "Personal data (PII). Information that can identify a person. It needs special care and often legal protection.",
        "Data governance. The rules for who owns data, who may use it, how it is kept and for how long.",
        "AI governance. The policies, roles and review processes for how AI is chosen, used and monitored.",
        "Prompt injection. An attack in which text that a system reads contains instructions meant to override its own.",
        "Data residency. The requirement that data stays in a particular country or region.",
        "Audit trail. A record of what a system did and why, for review.",
      ),

      h2("Project and organisation words"),
      ul(
        "Use case. A specific task or decision where AI could help, such as answering routine policy questions.",
        "Proof of concept (PoC). A small test to show that an idea can work.",
        "Pilot. A limited trial of a working solution with real users and a clear success measure.",
        "MVP. The smallest version of a product that delivers real value and teaches you what to build next.",
        "Deployment. Putting a system into real use.",
        "Integration. Connecting a new system to the ones you already use.",
        "API. A way for software systems to talk to one another, for example to send a question to a model and get an answer.",
        "Cloud, on-premise and edge. Where a system runs: on a provider’s servers, on your own, or on a local device.",
        "Vendor lock-in. Becoming so dependent on one supplier’s tools or formats that changing becomes costly.",
        "Open source. Software whose code is shared under licences that allow use and modification, with conditions.",
        "Return on investment (ROI). The value gained compared with the cost, and best judged against a baseline.",
        "Readiness. How prepared an organisation is, in data, people, process and risk, to use AI well.",
      ),

      h2("Pairs of terms that are often confused"),
      ul(
        "AI versus automation. Automation follows fixed rules. AI learns or reasons from data. Many useful systems combine the two.",
        "Chatbot versus agent. A chatbot replies. An agent plans and acts, using tools.",
        "Training versus prompting. Training changes the model. Prompting only changes what you ask it.",
        "Fine-tuning versus RAG. Fine-tuning teaches style and skills. RAG gives the model current facts to read. Facts that change belong in RAG.",
        "Dashboard versus model. A dashboard shows data. A model produces predictions or classifications from it.",
        "Pilot versus production. A pilot is a controlled test. Production is the supported, monitored version that people depend on.",
        "Accuracy versus usefulness. A system can be accurate on average and still unhelpful where it matters.",
      ),

      h2("Questions that cut through buzzwords"),
      p("When someone uses an unfamiliar term, you do not need to bluff. A few questions work almost everywhere."),
      ol(
        "Can you explain that in one sentence, without the jargon?",
        "What would it look like in a real example from our work?",
        "How would we measure whether it works for us?",
        "What could go wrong, and who would notice?",
        "What do we need to provide, in data and in people’s time?",
      ),
      note("A good vendor or colleague welcomes these questions. If answers stay vague, that is information too."),

      h2("How to use this glossary"),
      ul(
        "Share it with the whole planning group before your first workshop, so that everyone starts with the same words.",
        "Add your own terms: the names of your systems, datasets and teams.",
        "Revisit it after your first pilot, and see which terms became real for you.",
        "Use it when reading vendor material, and look for terms that are used loosely.",
      ),

      h2("Frequently asked questions"),
      qa(
        ["Is ChatGPT an LLM or an agent?", "A chat product is built on a large language model. Depending on its features, it may also use tools and act in several steps, which makes it behave like an agent. The names describe different layers of the same product."],
        ["Do we need to understand all this to plan AI?", "You do not need the technical depth. You do need the shared vocabulary, so that decisions about data, risk and cost are made with the same meaning in everyone’s head."],
        ["What is the difference between AI and machine learning?", "AI is the goal and the broad field. Machine learning is one method of reaching it, by learning from data. Most modern AI relies on machine learning."],
        ["Why does everyone talk about tokens?", "Because language models read and write in tokens, and providers measure cost and limits in them. It is a practical unit for estimating price and for fitting text into a model’s context window."],
      ),
      p("Vocabulary is not the goal. It is the foundation for better conversations. With these terms in hand, you can read a proposal critically, brief a team clearly and plan your own organisation’s use of AI with more confidence and fewer surprises."),
    ],
  },
  {
    seed: true,
    type: "concepts",
    slug: "how-ai-works-and-branches-of-ai",
    title: "How does AI work, and what are the branches of AI?",
    excerpt: "A plain-language map of how modern AI learns from data, and the main branches, from machine learning and language to vision, robotics and agents.",
    topic: "AI Strategy",
    level: "Beginner",
    date: "2026-10-17",
    takeaways: [
      "Most modern AI is a pattern-finding system: it learns from many examples, then applies what it learned to new cases.",
      "AI is a family of fields, not one technology: machine learning, language, vision, speech, robotics, planning and more.",
      "Choosing the right branch for a problem matters more than choosing the newest model.",
      "Every AI system has limits that follow from how it learns, so knowing the mechanism helps you judge the risks.",
    ],
    body: [
      p("Ask ten people what AI is, and you will hear ten answers: a robot, a chatbot, a recommendation on a streaming site, a self-driving car. All of them are partly right, which is exactly why planning for AI in an organisation can feel slippery. Before deciding where AI could help you, it is worth knowing two things: how it works at a basic level, and which branch of AI fits which kind of problem."),
      p("This article gives you both, without equations. It follows the glossary in the previous article, so the terms should already feel familiar."),

      h2("The core idea: learning from examples"),
      p("Traditional software follows rules that a programmer writes by hand. If the customer is over 60, apply the discount. If the file is larger than 10 megabytes, reject it. This works well when you can describe the rules, and fails when you cannot. Nobody can write down, rule by rule, how to recognise a cat in a photograph, a flooded field in a satellite image or a sarcastic sentence."),
      p("Most modern AI takes a different route. Instead of writing the rules, you show the system many examples, and it works out the rules for itself. Show it thousands of photographs labelled cat and not cat, and it learns which patterns of pixels tend to go with cats. The result is not a list of rules a person can read, but a model: a large collection of numbers that, together, turn an input into an output."),
      note("Rules-based software is told what to do. Learning-based AI is shown what good looks like, and finds its own way there."),

      h2("How a model learns, step by step"),
      ol(
        "Collect examples. These are the data: photographs, documents, sensor readings, past decisions. The quality and variety of this data shapes everything that follows.",
        "Prepare and label them. For many tasks, each example needs a correct answer, such as flooded or not flooded. This is often the slowest and most expensive step.",
        "Make a first guess. The model begins with random settings, called parameters or weights, so its first answers are poor.",
        "Measure the error. For each example, the system compares its answer with the correct one, and calculates how wrong it was.",
        "Adjust the settings. A mathematical method nudges the parameters in the direction that reduces the error. This is the core of training, and gradient descent, described elsewhere in this library, is the best-known version.",
        "Repeat many times. Millions of small adjustments gradually turn a useless model into a useful one.",
        "Test on new examples. The model is checked on data it has never seen. If it performs well there, it has learned something general. If it only does well on its training data, it has memorised, which is called overfitting.",
        "Use and monitor it. In use, the trained model produces answers, called inference. Over time, the world changes, so the model must be watched and sometimes retrained.",
      ),
      p("That is the whole loop. The remarkable abilities of modern systems come from doing it at enormous scale, with huge amounts of data, very large models and a great deal of computing power."),

      h2("Inside a neural network"),
      p("Most of today’s headline systems use neural networks. Imagine a stack of layers. The first layer receives the input, for example the pixels of an image. Each layer passes its results to the next, and each connection has a weight that says how much one unit should influence another. Early layers pick up simple features, such as edges. Later layers combine them into larger ideas, such as eyes, wheels or roofs. The final layer gives the answer."),
      p("Training adjusts millions or billions of weights until the network’s answers become reliable. Nobody sets these numbers by hand, and no single number means anything on its own. The knowledge lives in the pattern of all of them together, which is why these systems can be hard to explain."),

      h2("What AI is not doing"),
      ul(
        "It is not thinking like a person. It finds statistical patterns, and does not understand the world as you do.",
        "It does not know what is true. A language model predicts plausible next words, so it can state falsehoods fluently.",
        "It does not learn from you in the moment, unless the system is specifically designed to. Most deployed models are fixed until their makers update them.",
        "It is not neutral. It reflects the data it was trained on, including gaps and biases.",
      ),

      h2("The branches of AI"),
      p("AI is better thought of as a family of fields that share a goal, which is to make machines do tasks that normally need human intelligence. The branches below overlap, and real products often combine several."),

      h2("Machine learning"),
      p("Machine learning is the branch that learns from data, and it underpins most of the others. It has three main styles."),
      ul(
        "Supervised learning learns from labelled examples. It is used to classify, such as spam or not spam, and to predict numbers, such as next month’s demand.",
        "Unsupervised learning looks for structure without labels, for example grouping customers with similar behaviour or spotting unusual readings.",
        "Reinforcement learning learns by trial and reward. A system tries actions, receives a score and improves over time. It is used in game playing, robotics and some scheduling problems.",
      ),
      p("Deep learning is a powerful form of machine learning that uses large neural networks. It is behind most of the recent progress in vision, speech and language."),

      h2("Natural language processing and language models"),
      p("This branch deals with human language: reading, writing, translating, summarising and answering questions. Modern large language models are trained on vast amounts of text to predict what comes next, and as a result they can draft, explain, translate and write code. Common uses include assistants that answer questions from your documents, tools that summarise long reports and systems that sort and route messages."),

      h2("Computer vision"),
      p("Computer vision lets machines interpret images and video. It recognises objects, reads text, measures things, detects change and segments a scene into parts. In geospatial work, it finds buildings, roads, crops and floods in satellite and drone imagery. In industry, it inspects products for defects. In immersive technology, it helps headsets understand the room around you."),

      h2("Speech and audio"),
      p("This branch converts speech to text, text to speech and recognises sounds. It powers transcription, voice assistants and call-centre analysis. Combined with language models, it allows natural spoken conversations with a system."),

      h2("Generative AI"),
      p("Generative AI creates new content, such as text, images, audio, video, code and 3D models, based on patterns learned from existing examples. It is built on machine learning, and overlaps with language and vision. It is excellent for drafts, ideas and variations, and needs human review wherever accuracy matters."),

      h2("Knowledge representation, reasoning and planning"),
      p("Before machine learning dominated, much AI work focused on writing knowledge down explicitly, in rules, graphs and logic, and reasoning over it. This branch is still valuable where decisions must be explained, rules are known and errors are costly, such as eligibility checks, configuration and scheduling. Planning algorithms work out sequences of actions to reach a goal, and are used in logistics, routing and robotics. Many modern systems combine learned models with explicit rules, to get flexibility and reliability together."),

      h2("Robotics and autonomous systems"),
      p("Robotics combines sensing, decision-making and physical action. Warehouse robots, drones, farm machines and self-driving vehicles all draw on vision, planning and control. The difficulty lies in the real world, which is messy, unpredictable and unforgiving of mistakes."),

      h2("AI agents"),
      p("An agent is a system that pursues a goal over several steps. It decides what to do next, uses tools such as search or a database, checks its results and tries again if needed. Agents typically combine a language model with planning and tool use. They are promising for multi-step tasks, and need careful limits and human oversight because errors can compound."),

      h2("Predictive analytics and recommendation"),
      p("These are among the most widely used, least glamorous forms of AI. They forecast demand, flag likely fraud, estimate risk and suggest the next product, article or route. Often a simple model on well-prepared data beats a sophisticated one on poor data."),

      h2("Choosing a branch for a problem"),
      ul(
        "Predicting a number or a category from past records points to machine learning on structured data.",
        "Reading or answering from documents points to language models, often with retrieval from your own knowledge base.",
        "Finding things in images or satellite data points to computer vision.",
        "Following known rules with a clear audit trail points to rules-based systems and knowledge representation.",
        "A multi-step task that crosses several systems may call for an agent, but a fixed workflow is often cheaper and safer.",
        "Creating drafts, images or variations points to generative AI, with a person reviewing the result.",
      ),
      note("The best question is not, which AI should we use? It is, what is the task, what data do we have and how will we know it works? The answer usually names the branch."),

      h2("Narrow AI and general AI"),
      p("Everything in use today is narrow AI: systems that are strong at particular tasks and weak outside them. A model that reads scans well cannot draft a contract. A language model that writes fluently cannot reliably measure a field. Artificial general intelligence, a system with human-level ability across almost any task, remains a goal and a subject of debate, not a product you can buy. Plan for what exists now."),

      h2("What this means for your organisation"),
      ul(
        "Data is the raw material. Without relevant, reasonably clean examples, a learning system has nothing to learn from.",
        "Different problems need different branches, so start with the problem.",
        "Models make mistakes in patterned ways, so design checks, human review and monitoring from the start.",
        "Systems age, because the world changes. Budget for upkeep, not only for building.",
        "A simple, explainable approach is often the right first step.",
      ),

      h2("Frequently asked questions"),
      qa(
        ["Is AI the same as machine learning?", "No. AI is the broad goal of making machines do intelligent tasks. Machine learning is the main method used today, in which systems learn from data. Some AI uses explicit rules and reasoning instead."],
        ["Does AI really learn like humans do?", "Only loosely. It adjusts numbers to reduce errors on examples, which needs far more data than a person usually needs, and it has no understanding or common sense in the human sense."],
        ["Why do language models make things up?", "Because they are built to produce plausible text, not to check facts. Connecting them to trusted documents and requiring sources reduces the problem, but does not remove it."],
        ["Which branch of AI is best for a small organisation to start with?", "Usually practical, well-defined uses: a document question-answering assistant, a simple forecast on your own records or automating a repetitive, rule-based task. Start where the data already exists and the benefit is easy to measure."],
        ["Do we need huge amounts of data?", "It depends on the approach. Training a model from scratch needs a lot. Using a pre-trained model, adapted with a modest amount of your own data or documents, needs far less."],
      ),
      p("AI works by finding patterns in examples, and it comes in many forms suited to different jobs. With that picture in your head, you can listen to vendors critically, match problems to the right branch and plan an AI project that is grounded in what the technology actually does."),
    ],
  },
];
