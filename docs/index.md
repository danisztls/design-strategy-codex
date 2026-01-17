---
layout: home
title: Design at Wikimedia Foundation
aside: false
sidebar: false
isHomepage: true
next: false
---

<header class="home-header" role="banner">
    <img class="home-hero" src="/logo-blueprint.svg" alt="Wikimedia logo, blueprint variant"/>
    <h1>Design at<br> Wikimedia Foundation</h1>
</header>

The Wikimedia Foundation product design team is a multidisciplinary group of people from around the world, working through the lens of our [Statement of Purpose](https://doc.wikimedia.org/codex/latest/style-guide/statement-of-purpose.html) and with the guide of our [Design Principles](https://doc.wikimedia.org/codex/latest/style-guide/design-principles-overview.html).

We work across user experience design and research, engineering, information architecture, human-computer interaction, and visual design.

[Job openings](https://wikimediafoundation.org/about/jobs/) •
[About the team](https://www.mediawiki.org/wiki/Design) •
[Research initiatives](/strategy/)

<script setup>
import { withBase } from 'vitepress'

const cards = [
	{
		title: "Codex",
		description: "Design system for Wikimedia",
		url: "https://doc.wikimedia.org/codex/latest/",
		image: {
			src: "/style-guide-icon.svg",
			alt: "Tags"
		}
	},
	{
		title: "Participate",
		description: "Collaborate with us on design for Wikimedia projects",
		url: "https://www.mediawiki.org/wiki/Design/Participate",
		image: {
			src: "/participate-icon.svg",
			alt: "Heart and hands"
		}
	},
	{
		title: "Blog",
		description: "Articles about how we approach design at Wikimedia",
		url: "https://design.wikimedia.org/blog/",
		image: {
			src: "/blog-icon.svg",
			alt: "Notebook and pen"
		}
	},
	{
		title: "Research",
		description: "Qualitative and quantitative studies by the Design Strategy Group",
		url: "/strategy/",
		image: {
			src: "/research-icon.svg",
			alt: "Microscope"
		}
	}
]
</script>

<div class="home-cards-list">
	<a
		v-for="item in cards"
		:key="item.title"
		class="home-card"
		:href="item.url"
		:target="_blank"
	>
		<img class="card-image" :src="withBase(item.image.src)" :alt="item.image.alt" width="50" height="50"/>
		<div class="card-title">{{ item.title }}</div>
		<div class="card-description">{{ item.description }}</div>
	</a>
</div>

<style>
.VPHome {
    margin-top: var(--spacing-400);
}

.home-header {
	display: flex;
	flex-flow: column nowrap;
	margin-bottom: 0;

	h1 {
		margin-bottom: 0;
		line-height: var(--line-height-xx-large);
	}

    img {
        margin: 0;
		max-height: unset;
		max-width: 150px;
    }
}

.home-cards-list {
	display: grid;
	grid-template-columns: repeat(auto-fill, calc(100% / var(--n-cards) - (var(--n-cards) - 1) * var(--spacing-50)));
	gap: var(--spacing-100);

	.home-card {
		display: flex;
		flex-flow: column nowrap;
		gap: var(--spacing-50);
		padding: var(--spacing-125);
		color: var(--color-base);
		text-decoration: none;
		border: 1px solid var(--border-color-base);

		.card-image {
			margin-top: 0;
		}

		.card-title {
			font-weight: var(--font-weight-bold);
			font-size: var(--font-size-large);
		}

		.card-description {
			font-size: var(--font-size-normal);
		}

		&:hover, &:focus-within {
			color: inherit;
			text-decoration: none;
			border-color: var(--border-color-interactive--hover);
		}
	}

}
@media (min-width: 640px) {
	.home-cards-list {
		--n-cards: 1;
	}
}

@media (min-width: 1120px) {
	.home-cards-list {
		--n-cards: 2;
	}
}

@media (min-width: 1680px) {
	.VPHome {
		font-size: var(--font-size-large);
	}

	.home-header h1 {
		font-size: 2em;
		line-height: 1.25;
	}

	.home-cards-list {
		.card-title {
			font-size: var(--font-size-x-large);
		}
	}
}
</style>
