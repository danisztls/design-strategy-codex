---
layout: page
title: Team 
---

<script setup>
const data = [
	{
		avatar: 'margeigh.jpg',
		name: 'Margeigh Novotny',
		title: 'Vice President @ Product Design & Strategy',
		links: {
			wikimedia: 'https://meta.wikimedia.org/wiki/User:MNovotny_(WMF)'
		}
	},
	{
		avatar: 'gescalante.jpg',
		name: 'Gabriel Escalante',
		title: 'Manager @ Design Strategy',
		links: {
			wikimedia: 'https://meta.wikimedia.org/wiki/User:GEscalante_(WMF)'
		}
	},
	{
		avatar: 'bethany.png',
		name: 'Bethany Gerdemann',
		title: 'Program Manager @ Design Strategy',
		links: {
			wikimedia: 'https://meta.wikimedia.org/wiki/User:BGerdemann_(WMF)'
		}
	},
	{
		avatar: 'eli.jpg',
		name: 'Eli Asikin-Garmager',
		title: 'Design Research Principal @ Languages & Inuka',
		links: {
			wikimedia: 'https://meta.wikimedia.org/wiki/User:EAsikingarmager_(WMF)'
		}
	},
	{
		avatar: 'mike.jpg',
		name: 'Michael Raish',
		title: 'Vice President @ Product Design & Strategy',
		links: {
			wikimedia: 'https://meta.wikimedia.org/wiki/User:MRaish_(WMF)'
		}
	},
	{
		avatar: 'daisy.jpg',
		name: 'Daisy Chen',
		title: 'Senior Design Researcher @ Product Design',
		links: {
			wikimedia: 'https://meta.wikimedia.org/wiki/User:Dchen_(WMF)'
		}
	},
	{
		avatar: 'claudia.jpg',
		name: 'Claudia Lo',
		title: 'Senior Design Researcher @ Anti-harassment Tools',
		links: {
			wikimedia: 'https://meta.wikimedia.org/wiki/User:CLo_(WMF)'
		}
	},
	{
		avatar: 'barnstar.png',
		name: 'Design Research',
		title: 'Contact Us',
		links: {
			message: 'mailto:desresadmin@wikimedia.org'
		}
	}
]
</script>

<TeamGrid :data="data" />
