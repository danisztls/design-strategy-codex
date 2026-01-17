---
title: "Section Translation Entry Points"
description: "Improving discoverability of translation tools on Wikipedia."
hero:
    image:
        src: "/strategy/projects/sx-entry-points/hero.webp"
        alt: "Section translation entry points within a Wikipedia article"
---

## Overview

In 2020, a study of current and potential editors in seven small wikis revealed that most participants required direct support to find [Content Translation](https://www.mediawiki.org/wiki/Content_translation/Section_translation) - a tool used to translate Wikipedia articles ([read more about that study here](https://meta.wikimedia.org/w/index.php?title=File:Multilingual_Editor_Experiences_in_Small_Wikis_Research_Report.pdf&page=14)). At the same time, Content Translation has been used to create more than 800k articles, demonstrating the power of translation to help grow content and improve access to knowledge. Thus, helping to connect multilingual editors with translation tools is a promising strategy for increasing content available on small wikis.

To help solve the demonstrated problem of Content Translation discoverability, this project provided iterative evaluation of current concepts and prototypes for Section Translation entry points. Section Translation - a recently available (on Bengali Wikipedia) in 2021 mobile-friendly version of the Content Translation tool - currently lacks natural entry points. The entry points evaluated in this project included those designed for both current and new translators, but focused primarily on Section Translation and the mobile experience. They included concepts for both persistent and opportunistic entry points. The initial hypotheses upon which the prototypes were designed originate in part from findings from the Multilingual Editor Experiences in Small Wikis Project.

## Top High Level Takeaways

- This project provided contextualized evaluation of eight Section Translation (SX) entry point concepts through moderated research sessions with potential and current editors of the Bengali Wikipedia (the first wiki where SX is available).

- Using an iterative approach, one concept was eliminated after the first round, and further improvements were made and tested for the other concepts. This report provides follow-up recommendations for these seven other prototypes (*more details in results section*), and proposed priorities for implementation (*more details in general discussion*).

- SX currently lacks natural entry points, including a way of easily accessing it. A persistent entry point in the mobile menu was identified as promising, but improvements were needed to the visual treatment of embedded items.

- To increase the existing SX translator base, the language switcher entry point should be prioritized due to the translation editing opportunities (content gaps) it can present to both potential and current editors.

- Some entry point concepts should be exposed to specific segments of translators. For example, the machine translation (MT) sections for readers entry point can be targeted to registered editors, and newcomers may benefit from the recently translated notice being refined to display for articles requiring minimal (but much needed) improvements.

- Provided it’s displayed to editors who actively edit two or more language versions of Wikipedia, the entry point after a regular (non-translation) edit is perceived as of greater ease given it’s a natural task extension.

- This report focuses on designs and improvements made during two rounds of research sessions, as well as some final recommendations. The latest designs and development progress can be tracked at this [Phabricator ticket](https://phabricator.wikimedia.org/T286641).

- Although it doesn’t eliminate the need for additional research, the general discussion provides some concepts and ideas for what may be more generalizable findings relevant for other teams developing entry points for other projects and contribution tasks. (*more details at ‘entry points - beyond Section Translation’ section of report*)

## Findings

<script setup>
const findings = [
	{
		"title": "Project Objective",
		"url": "https://meta.wikimedia.org/wiki/Research:Section_Translation_Entry_Points_Design_Research",
	},
	{
		"title": "Full Report",
		"url": "https://commons.wikimedia.org/wiki/File:Section_Translation_Entry_Points_Research_-_Final_Report.pdf",
	},
]
</script>

<LocalCardsList :list="findings" />
