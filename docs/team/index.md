---
layout: page
title: Team 
---

<script setup>
import {
	VPTeamPage,
	VPTeamPageTitle,
	VPTeamMembers
} from 'vitepress/theme'

// TODO: Extend icon support to codex-icons
// TODO: Fix Linkedin URLs 
const members = [
	{
		avatar: 'margeigh.jpg',
		name: 'Margeigh Novotny',
		title: 'Vice President @ Product Design & Strategy',
		links: [
			{
				icon: 'wikimediafoundation',
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
				icon: 'wikimediafoundation',
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
				icon: 'wikimediafoundation',
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
				icon: 'wikimediafoundation',
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
				icon: 'wikimediafoundation',
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
				icon: 'wikimediafoundation',
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
				icon: 'wikimediafoundation',
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
				icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><title>Mailing List</title><path d="M0 8v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-10 4z"/><path d="M2 2a2 2 0 0 0-2 2v2l10 4 10-4V4a2 2 0 0 0-2-2z"/></svg>' },
				link: 'mailto:desresadmin@wikimedia.org'
			}
		]
	}
]
</script>

<VPTeamPage>
	<VPTeamPageTitle>
		<template #title>
			Our Team
		</template>
		<template #lead>
		</template>
	</VPTeamPageTitle>
	<VPTeamMembers
		:members="members"
	/>
</VPTeamPage>
