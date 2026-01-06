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
		links: [
			{
				icon: 'cdxIconLogoWikimedia',
				link: 'https://meta.wikimedia.org/wiki/User:MNovotny_(WMF)'
			},
			{ icon: 'linkedin', link: 'https://linkedin.com' }
		]
	},
	{
		avatar: 'gescalante.jpg',
		name: 'Gabriel Escalante',
		title: 'Manager @ Design Strategy',
		links: [
			{
				icon: 'cdxIconLogoWikimedia',
				link: 'https://meta.wikimedia.org/wiki/User:GEscalante_(WMF)'
			},
			{ icon: 'linkedin', link: 'https://linkedin.com' }
		]
	},
	{
		avatar: 'bethany.png',
		name: 'Bethany Gerdemann',
		title: 'Program Manager @ Design Strategy',
		links: [
			{
				icon: 'cdxIconLogoWikimedia',
				link: 'https://meta.wikimedia.org/wiki/User:BGerdemann_(WMF)'
			},
			{ icon: 'linkedin', link: 'https://linkedin.com' }
		]
	},
	{
		avatar: 'eli.jpg',
		name: 'Eli Asikin-Garmager',
		title: 'Design Research Principal @ Languages & Inuka',
		links: [
			{
				icon: 'cdxIconLogoWikimedia',
				link: 'https://meta.wikimedia.org/wiki/User:EAsikingarmager_(WMF)'
			},
			{ icon: 'linkedin', link: 'https://linkedin.com' }
		]
	},
	{
		avatar: 'mike.jpg',
		name: 'Michael Raish',
		title: 'Vice President @ Product Design & Strategy',
		links: [
			{
				icon: 'cdxIconLogoWikimedia',
				link: 'https://meta.wikimedia.org/wiki/User:MRaish_(WMF)'
			},
			{ icon: 'linkedin', link: 'https://linkedin.com' }
		]
	},
	{
		avatar: 'daisy.jpg',
		name: 'Daisy Chen',
		title: 'Senior Design Researcher @ Product Design',
		links: [
			{
				icon: 'cdxIconLogoWikimedia',
				link: 'https://meta.wikimedia.org/wiki/User:Dchen_(WMF)'
			},
			{ icon: 'linkedin', link: 'https://linkedin.com' }
		]
	},
	{
		avatar: 'claudia.jpg',
		name: 'Claudia Lo',
		title: 'Senior Design Researcher @ Anti-harassment Tools',
		links: [
			{
				icon: 'cdxIconLogoWikimedia',
				link: 'https://meta.wikimedia.org/wiki/User:CLo_(WMF)'
			},
			{ icon: 'linkedin', link: 'https://linkedin.com' }
		]
	},
	{
		avatar: 'barnstar.png',
		name: 'Design Research',
		title: 'Contact Us',
		links: [
			{ icon: 'github', link: 'https://www.mediawiki.org/wiki/Wikimedia_Research/Design_Research' },
			{ 
				icon: 'cdxIconMessage',
				link: 'mailto:desresadmin@wikimedia.org'
			}
		]
	}
]
</script>

<TeamGrid :data="data" />
