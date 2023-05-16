---
marp: true
theme: uncover
paginate: true
header: Cloud & Devops - Eduard Bargués
footer: Barcelona Technology School S.L.
# **class: invert**
# **color: Set text color**
# **backgroundColor**
---

<!--
_class: invert
-->

# **Cloud and DevOps**

by Eduard Bargués

![bg opacity](images/barcelonaLandscape.png)

---

# **Hi!👋**

Principal Engineer at [Ohpen.com](https://Ohpen.com).

Volunteer at [Migracode](https://migracode.openculturalcenter.org).

Professor at [BTS](https://barcelonatechnologyschool.com).

Find me in [LinkedIn](https://www.linkedin.com/in/eduardbargues/).

![bg right:37%](images/eduard.jpg)

---

# **What about you?**

- What is your story?
- [Expectations from C&D?](https://admin.typeform.com/form/OexDBWj8/results#responses)

![bg right:37% h:86%](images/students.png)

---

# **What are we doing here?**

C&D in the context of _Digital Product Management_.

![bg right w:100%](images/cloudAndDevopsWinthinDigitalProductManagement.png)

---

# **You will (not) learn**

- ✅ What the ☁️ is (for).
- ✅ Defend your ground against 'techies'.
- ❎ How to be a software/cloud developer.

> **Cuando sepas lo que cuesta, sabrás lo que vale** _Jose Antonio Gili Ripoll, professor at UPC_

---

# **Not that many classes 😥**

1. Introduction
2. Classic vs Containers vs Serverless
3. Security in the cloud
4. Cost management
5. Introduction to Devops: CICD
6. Advanced Devops
7. Presentations & Guest

---

# **Evaluation**

**project 80%**

```markdown
content 60% + presentation 20%
```

**class engagement 20%**

![bg right w:100%](images/math.png)

---

# **How I reason about things**

- **Why?**: Situation at hand.
- **What for?**: Goal.
- **What?**: Thing to do.
- **How?**: Implementation.

![bg right:40% w:100%](images/thinking.png)

---

# **Information Technology**

A brief (hands on) story

![bg right w:80%](images/theItCrowd.png)

---

# **The first computer**

Why did Alan Turing invent it?

![bg right w:85%](images/theFirstComputerAlanTuringAndEnigmaMachine.png)

---

<!--
_header: ""
_footer: ""
-->

![bg w:81%](images/theImitationGame.png)
![bg w:81%](images/hiddenFigures.png)

---

# **On-premise world**

Bussiness used to run their own servers.

![bg right](images/onPremiseComputer.png)

---

# **Inside a computer**

![bg right w:100%](images/insideAComputer.png)

---

# **Virtualization**

Why do we need it?

Shared resources,
install what you need
and ready to go 💪!

![bg right:47% w:100%](images/virtualization.png)

---

# **Docker**

Why do we need [docker](https://youtu.be/Gjnup-PuquQ)?
How does it [work](https://youtu.be/gAkwW2tuIqE)?

![bg right w:100%](images/itWorksOnMyMachine.png)

---

# **The dawn of ☁️**

[Why do we need the ☁️?](https://youtu.be/JIbIYCM48to)

[How AWS was born](https://techcrunch.com/2016/07/02/andy-jassys-brief-history-of-the-genesis-of-aws/?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAANhKP1nzuECLYUEF5pFAzmJwFCe-5N0Drpfqymyhx_tq7IzldhD1ZxVl6C7wNNpHz8vGzdu7hEfNmYtzKkfi_ZOvq-5kE9CBtHxeKBQHFLa8u9PVXgUBWC7L1Uj8LaWjGNXcfEggM6Ag0xgpqVUo84A_-r7wx0Ytlh8AP0bIRpHe) with
[it's first service](https://aws.amazon.com/blogs/aws/amazon_simple_q/).

![bg right:43% w:100%](images/aws.png)

---

# **⚠️ Use it with caution**

> With great power, comes [great responsibility](https://youtu.be/N6lYcXjd4pg).

Companies look to [reduce costs](https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/more-for-less-five-ways-to-lower-cloud-costs-without-destroying-value) or even [leave the Cloud](https://world.hey.com/dhh/why-we-re-leaving-the-cloud-654b47e0) because of [high spending](https://dev.37signals.com/our-cloud-spend-in-2022/).

![bg right:23% w:100%](images/DavidHeinemeierHansson.png)

---

# **Create an AWS account**

- [Sign In/Up AWS](https://aws.amazon.com/)
- Enable [Multi Factor Authentication](https://aws.amazon.com/what-is/mfa/)
- Explore [free products in AWS](https://aws.amazon.com/free)

---

# **AWS console**

- **Compute**:Lambda, ECS, EC2.
- **Storage**:S3.
- **Database**:RDS, DynamoDB.
- **Networking**:API Gateway, VPC.
- **Management**:CloudWatch, IAM.

![bg right:35% w:100%](images/aws_architecture.png)

---

# **Types of ☁️**

**Infrastructure**
vs
**Platform**
vs
**Software**
(aaS: as a Service)

![bg right w:100%](images/iaasPaasSaas.png)

---

# **200+ services!**

- Instant access.
- Complete flexibility.
- ~~virtually~~ Infinite scalability.

> [You put the limits](https://youtu.be/JIbIYCM48to)

![bg right:44% w:75%](https://media4.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif?cid=ecf05e478tkbpeluqx837oznhyqia2dw9bedzyh42x0g12jf&rid=giphy.gif&ct=g)

---

# **Our first api in AWS**

With [Apigateway](https://docs.aws.amazon.com/apigateway/index.html)

![bg w:100% right:29%](images/our_first_api.png)

---

# **But, wait! 🤨**

How do urls [work](https://youtu.be/UVR9lhUGAyU)?

![bg w:100% right](images/url_example.png)

---

# **Is this flexible?**

With [Lambda](https://docs.aws.amazon.com/lambda/?icmpid=docs_homepage_featuredsvcs) it is.

![bg w:100% right:43%](images/apigw_and_lambda.png)

---

# **See? that wasn't that bad 😉**

![bg right](images/too_much_information.png)
