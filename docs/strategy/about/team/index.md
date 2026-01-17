---
title: Team 
aside: false
---

<script setup>
const team = [
	{
		avatar: "kumar.webp",
		name: "Debra Kumar",
		what: "Design Research Manager",
		links: [
			{
				icon: "metawiki",
				ariaLabel: "Meta-Wiki",
				link: "https://meta.wikimedia.org/wiki/User:DKumar-WMF"
			}
		]
	},
	{
		avatar: "bethany.webp",
		name: "Bethany Gerdemann",
		what: "Program Manager",
		where: "Design Strategy",
		links: [
			{
				icon: "metawiki",
				ariaLabel: "Meta-Wiki",
				link: "https://meta.wikimedia.org/wiki/User:BGerdemann_(WMF)"
			}
		]
	},
	{
		avatar: "eli.webp",
		name: "Eli Asikin-Garmager",
		what: "Design Research Principal",
		where: "Languages & Inuka",
		links: [
			{
				icon: "metawiki",
				ariaLabel: "Meta-Wiki",
				link: "https://meta.wikimedia.org/wiki/User:EAsikingarmager_(WMF)"
			}
		]
	},
	{
		avatar: "mike.webp",
		name: "Michael Raish",
		what: "Design Research Lead",
		where: "Core Experiences",
		links: [
			{
				icon: "metawiki",
				ariaLabel: "Meta-Wiki",
				link: "https://meta.wikimedia.org/wiki/User:MRaish_(WMF)"
			}
		]
	},
	{
		avatar: "daisy.webp",
		name: "Daisy Chen",
		what: "Senior Design Researcher",
		where: "Product Design",
		links: [
			{
				icon: "metawiki",
				ariaLabel: "Meta-Wiki",
				link: "https://meta.wikimedia.org/wiki/User:Dchen_(WMF)"
			}
		]
	},
	{
		avatar: "claudia.webp",
		name: "Claudia Lo",
		what: "Senior Design Researcher",
		where: "Anti-harassment Tools",
		links: [
			{
				icon: "metawiki",
				ariaLabel: "Meta-Wiki",
				link: "https://meta.wikimedia.org/wiki/User:CLo_(WMF)"
			}
		]
	},
	{
		avatar: "barnstar.webp",
		name: "Design Research",
		what: "Contact Us",
		links: [
			{
				icon: "mediawiki",
				ariaLabel: "MediaWiki",
				link: "https://www.mediawiki.org/wiki/Wikimedia_Research/Design_Research"
			},
			{
				icon: "message",
				ariaLabel: "E-mail",
				link: "mailto:desresadmin@wikimedia.org"
			}
		]
	}
]
</script>

<LocalTeamGrid :team="team" />
