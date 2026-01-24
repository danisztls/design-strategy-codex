---
title: "Article Section Translation"
description: "Evaluating new designs for tools that help editors translate article sections and receive translation support on mobile devices."
hero:
    image:
        src: "/strategy/projects/section-translation/hero.webp"
        alt: "Desktop and mobile views of the Wikipedia translation tool"
next: false
---

## Overview

Section Translation is a part of [Content Translation's Boost Initiative](https://www.mediawiki.org/wiki/Content_translation/Boost), which will help Wikipedia communities grow through the use of translation. Section Translation aims to solve current limitations of [Content Translation](https://www.mediawiki.org/wiki/Content_translation) by allowing users to create and modify sections of articles, prioritizing mobile-friendly design, and lowering the barrier to entry for new contributors. This project evaluated current mobile prototypes with two target small wikis - [Bengali](https://bn.wikipedia.org/wiki/%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%A7%E0%A6%BE%E0%A6%A8_%E0%A6%AA%E0%A6%BE%E0%A6%A4%E0%A6%BE) and [Javanese](https://jv.wikipedia.org/wiki/Tepas).

## Top High Level Takeaways

- Users perceive value in being able to expand and create articles by focusing on specific sections. However, the unit of the article still has significant value because it’s how small wikis are measured and track growth.

- The unit of the article section matches existing editor workflows well, but participants varied in whether they translated at the level of the sentence or at the level of the paragraph (opting to paraphrase). While the desktop version of Section Translation will allow both options, the mobile workflows only currently support the sentence-by-sentence workflow.

- Completing a section provides an easier, faster feeling of satisfaction. By highlighting progress, and progress towards high quality articles, we can help motivate editors and help them build habits.

- The bulk of the usability problems discovered and fixed in this project were in the part of the mobile flows when the user is previewing and improving the proposed machine translation (machine translation interaction).

- Because Section Translation targets a subset of article content, it raises questions around how editors may collaborate and co-translate articles and content. There is an opportunity to explore ‘collaborative translation’ features, such as key concept vocabulary flagging and dialectal variation tracking, among other possibilities.

- Users are sensitive to content gaps and motivated by closing these gaps and providing access to knowledge not available for monolingual readers in their regions/language communities. There is an opportunity to better surface the impact of translators’ work and progress through features such as translation views and thanks.

- Current mobile-only users represent a growing segment and are underserved by current translation tools. At the same time, laptop editing is a strong preference among users with access to both types of devices. Section and article recommendations could be more successful by factoring in device type and more user editing patterns.

- Device-specific adoption patterns of Section Translation are likely, as are device-specific feedback trends. Analytics and design research should collaborate to anticipate different ways of collecting initial feedback and understanding patterns of adoption, both by new and experienced translators.

- The social side of contributing may take different forms depending on the cultural context. For example, Javanese editors frequently discussed the importance of this social component, which could be built into translation tools more overtly.

- Although Content Translation gets equated with machine translation, users note many value props of the CX tool, including automatic references and interlinks as well as vocabulary suggestions and side-by-side presentation of the source and target text for faster translation.

## Findings

<script setup>
const findings = [
	{
		"title": "Project Objective",
		"url": "https://meta.wikimedia.org/wiki/Research:Section_Translation_Design_Research",
	},
	{
		"title": "Full Report",
		"url": "https://meta.wikimedia.org/wiki/File:Section_Translation_Design_Research.pdf",
	},
]
</script>

<CdxCardsList :list="findings" />
