# Story draft

## It started in 2013

In February 2013, I joined Microsoft as a Partner Technology Strategist, working with partners to help them become cloud-first. I had to make that change myself. I built on my on-premises infrastructure experience and evolved into a cloud-first infrastructure architect. I had to practice the change I was asking partners to make. I see a similar opportunity today: AI tools can help infrastructure architects and engineers extend their work beyond traditional infrastructure, while building on the experience they already have.

I work as a Microsoft Azure infrastructure architect. I'm telling this story for you, not about me. If I can do it, you can.

**For you:** You have changed before. Your experience is the foundation, not the obstacle.

## Where I was before AI

A piece of architecture work could involve capturing and documenting business outcomes, non-functional requirements (the reliability, security and performance a system must meet), compliance and regulatory requirements, budget and timelines. Then came the initial architecture, cost estimates, a Well-Architected review, alignment with the customer's Azure Policy constraints, infrastructure as code, deployment, adjustments and documentation.

Before AI, that could take me days or weeks.

I work across three continents, so time and scale are major constraints in my engagements. GitHub Copilot helps me scale my work and deliver faster. Before AI, I did not do much infrastructure-as-code work; I had limited time and did not feel especially strong in IaC. Now I can share Azure Verified Modules-based IaC, aligned with best practices, and code snippets with my audiences.

## The first change

In May 2025, I discovered that agents in GitHub could help me create architecture diagrams, Azure cost estimates and Well-Architected reviews much faster.

Azure MCP became part of my experience in June-July 2025. Skills followed in late 2025.

These dates describe my experience, not claims about when those technologies launched.

The first useful result came from an e-shop project. GitHub Copilot helped me create infrastructure as code, deploy it, and produce Python-based architecture and data-flow diagrams. Before deployment, I checked that the infrastructure as code aligned with my Azure Policy constraints. I worked on the e-shop project on my own. My rough estimate is that GitHub Copilot contributed about 60% of the implementation output and I contributed about 40%; I did not measure that split.

**For you:** Start with one task you repeat, not your whole job.

## Verify, you must

In May 2025, agentic AI was still new in my work, and I saw it build one hallucination on top of another. In my experience, it is more reliable now. That experience also taught me not to overload prompts: too much information can get you nowhere with AI. Less can be more.

While building my [Microsoft Sovereign Cloud Brain Trek](https://jonathan-vella.github.io/microsoft-sovereign-cloud-brain-trek/) around October 2025, Claude in GitHub Copilot told me Microsoft had announced six digital commitments in December 2024. When I challenged it, the agent produced a fake URL. I checked the official Microsoft announcement and found five digital commitments to Europe, announced on 30 April 2025. That episode reminded me to verify AI-generated claims and links rather than trust a confident answer.

*Why did the architect trust the confident answer? Because it had a great URL. It was fake.*

**For you:** Verify, you must. Every claim, every link.

## What AI let me take on

One partner engagement became a concrete example of what AI could help me take on. I owned the initial design for a multi-region AKS/PostgreSQL platform. AI helped me work through the CloudNativePG operator and PostgreSQL practices, build the load-testing setup, and create a Grafana dashboard.

We tested the documented non-functional requirements; I reviewed the reports and supporting evidence, and we had to iterate and troubleshoot rather than accept the first output. When an early suggestion to use Azure Container Instances for load testing caused too much friction, I switched to a separate AKS cluster with enough capacity to generate load. *Azure Container Instances could not contain my requirements. Sorry.*

In my tests, the system sustained 17,000 transactions per second for five minutes with zero data loss; an unexpected database-node outage triggered a failover in about eight seconds. The work took about 50 hours in under a week and addressed PCI and GDPR requirements.

AI did not make my infrastructure experience less important. It gave me room to extend it into application and database modernization. The Partner Modernization Factory is my clearest example. I built its technical and learning kit end to end with AI, apart from the Contoso University sample application. The kit brings together Azure foundations, application modernization, database migration and performance work, validation, and handover in a challenge-based learning experience for infrastructure architects. I built it alone over a matter of weeks. My estimate is that this would typically have taken two architects about two months; that is my estimate, not a measured comparison. I built the Factory to help infrastructure architects see how AI can broaden the work they can take on. The repository records lab validations and iterations, not a fully rehearsed partner event or a production deployment.

**For you:** When an approach causes friction, change the approach, not the goal.

## Turning it into APEX

As the results became repeatable, I stopped treating them as personal shortcuts and started building them into a workflow. [APEX](https://apexops.pro/) is that workflow: a multi-agent process that turns Azure platform engineering requirements into Bicep or Terraform, with human approval gates for requirements, architecture, plan and deployment. Its principle is "AI prepares, humans decide." It grew from a GitHub Copilot resource for IT pros that I built with input from colleagues, and became APEX in 2026.

*I asked AI to make my architecture highly available. It said it would be right back.*

**For you:** When something works twice, turn it into a workflow.

## One engagement, in numbers

AI lets me complete much of the architecture, assessment and Terraform preparation in about a day. That is a personal account, not a controlled benchmark or a promise for every project. In the example below, this work took under 18 hours; deployment followed on day three.

In one recent customer engagement, I used APEX to connect to Azure and create an architecture diagram of a deployed workload. I compared it with the customer’s diagram, and they matched. APEX then produced a Well-Architected assessment. I compared it with Azure Advisor, and every relevant Advisor finding appeared in the assessment.

I then used APEX to assess the customer’s Terraform, synthesize the workload’s non-functional requirements—including SLA, RTO, RPO and compliance—from the information gathered, and create updated Terraform using Azure Verified Modules so an improved version could be deployed in another region. That Terraform was deployed successfully on day three.

*My first AI-written Terraform had a lot of dependencies. Unlike my jokes, those were intentional.*

From the initial request to the completed Terraform took under 18 hours, including AI processing and waiting time. I spent about six hours hands-on: writing prompts, steering and iterating, interpreting results, and asking the customer questions to scope the work and discover requirements. AI helped me cover more ground, but the result depended on the context and direction I supplied and on checking its outputs against the customer’s diagram and Azure Advisor.

The customer told me that what we accomplished together in three days was something they had been trying to do for about six months. They also said the engagement showed them how they could use AI to work more efficiently.

## Scaling it through others

Once the workflow worked for me, the next question was whether others could use it. I built the material, and I deliver it together with colleagues. Over the past nine months I have delivered or co-delivered a webinar with about 600 attendees across EMEA, customer and partner bootcamps with about 150 attendees in total, and an internal bootcamp with about 400 attendees. These are my own approximate counts. Other people also deliver this material without me.

The Partner Modernization Factory, described above, is the same idea for partners: it helps them build a repeatable modernization practice.

Projects referenced:

- [APEX](https://github.com/jonathan-vella/apex)
- [APEX vNext](https://github.com/jonathan-vella/apex-vnext)
- [Partner Modernization Factory hackathon](https://github.com/jonathan-vella/apex-factory-hackathon)
- [The Ultimate CSA Toolkit](https://github.com/jonathan-vella/the-ultimate-csa-toolkit)

**For you:** Share it. Work only you can do does not scale.

## What I still own

My way of putting it is:

> ai has the intelligence, i have the wisdom.

I am always in the driving seat.

My infrastructure background still matters in that work. It helps me consider the platform, security, resilience, and operation of the modernized service, while AI helps me take on more of the application and database work. It does not make me the only specialist a real modernization effort needs. I have to work with people who bring deeper application or data expertise, and involve them in decisions beyond my own experience.

But I cannot approve that application for production on my own. I do not have all the development skills and experience needed to challenge some of the AI-generated outputs. A passing build and successful tests do not give me that experience. For production, I must team up with someone who has it, such as a senior developer, to review the code and make the development decisions I am not qualified to approve. AI expands the work I can do; it does not remove my responsibility to recognise where my expertise ends.

Much to learn, I still have.

**For you:** Know where your expertise ends, and bring in people who start there.

## Tools I use

- Microsoft Scout
- GitHub Copilot
- Visual Studio Code
- GitHub Copilot App
- Microsoft Copilot

Pick one. You don't need all five.

*I'd tell you a joke about UDP, but you might not get it.*

## Your turn

There is no try, as Yoda said, but there is a low-risk first step.

1. Use AI to help prepare the questions that uncover business requirements. As cloud solution architects, we need to know which problem or problems we are solving, why they need to be solved, and how we will measure success before we move on to technical architecture.
2. Pick one task you repeat. Let AI draft it, then check it against something you trust, such as an existing diagram or Azure Advisor.
3. Write down where your expertise ends and who you will ask beyond it.

In 2013, I had to practice the change I asked of partners. I still do. Your turn.
