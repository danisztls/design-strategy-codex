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
				icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><title>Wikimedia Foundation</title><path d="M6.08 5.555a6.048 6.048 0 0 0 3.055 10.593v-7.54L6.08 5.556zm7.828.004-3.05 3.05v7.536a6.048 6.048 0 0 0 3.05-10.587z"/><path d="M3.414 2.89C1.424 4.69.164 7.287.168 10.173c.007 5.406 4.42 9.806 9.828 9.806 5.407 0 9.82-4.4 9.828-9.806.004-2.886-1.255-5.482-3.246-7.285L14.865 4.6a7.355 7.355 0 0 1 2.524 5.568c-.007 4.09-3.3 7.375-7.394 7.375S2.61 14.26 2.604 10.17a7.355 7.355 0 0 1 2.523-5.568L3.414 2.89z"/><circle cx="10" cy="3.32" r="3.32"/></svg>' },
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
				icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><title>Wikimedia Foundation</title><path d="M6.08 5.555a6.048 6.048 0 0 0 3.055 10.593v-7.54L6.08 5.556zm7.828.004-3.05 3.05v7.536a6.048 6.048 0 0 0 3.05-10.587z"/><path d="M3.414 2.89C1.424 4.69.164 7.287.168 10.173c.007 5.406 4.42 9.806 9.828 9.806 5.407 0 9.82-4.4 9.828-9.806.004-2.886-1.255-5.482-3.246-7.285L14.865 4.6a7.355 7.355 0 0 1 2.524 5.568c-.007 4.09-3.3 7.375-7.394 7.375S2.61 14.26 2.604 10.17a7.355 7.355 0 0 1 2.523-5.568L3.414 2.89z"/><circle cx="10" cy="3.32" r="3.32"/></svg>' },
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
				icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><title>Wikimedia Foundation</title><path d="M6.08 5.555a6.048 6.048 0 0 0 3.055 10.593v-7.54L6.08 5.556zm7.828.004-3.05 3.05v7.536a6.048 6.048 0 0 0 3.05-10.587z"/><path d="M3.414 2.89C1.424 4.69.164 7.287.168 10.173c.007 5.406 4.42 9.806 9.828 9.806 5.407 0 9.82-4.4 9.828-9.806.004-2.886-1.255-5.482-3.246-7.285L14.865 4.6a7.355 7.355 0 0 1 2.524 5.568c-.007 4.09-3.3 7.375-7.394 7.375S2.61 14.26 2.604 10.17a7.355 7.355 0 0 1 2.523-5.568L3.414 2.89z"/><circle cx="10" cy="3.32" r="3.32"/></svg>' },
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
				icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><title>Wikimedia Foundation</title><path d="M6.08 5.555a6.048 6.048 0 0 0 3.055 10.593v-7.54L6.08 5.556zm7.828.004-3.05 3.05v7.536a6.048 6.048 0 0 0 3.05-10.587z"/><path d="M3.414 2.89C1.424 4.69.164 7.287.168 10.173c.007 5.406 4.42 9.806 9.828 9.806 5.407 0 9.82-4.4 9.828-9.806.004-2.886-1.255-5.482-3.246-7.285L14.865 4.6a7.355 7.355 0 0 1 2.524 5.568c-.007 4.09-3.3 7.375-7.394 7.375S2.61 14.26 2.604 10.17a7.355 7.355 0 0 1 2.523-5.568L3.414 2.89z"/><circle cx="10" cy="3.32" r="3.32"/></svg>' },
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
				icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><title>Wikimedia Foundation</title><path d="M6.08 5.555a6.048 6.048 0 0 0 3.055 10.593v-7.54L6.08 5.556zm7.828.004-3.05 3.05v7.536a6.048 6.048 0 0 0 3.05-10.587z"/><path d="M3.414 2.89C1.424 4.69.164 7.287.168 10.173c.007 5.406 4.42 9.806 9.828 9.806 5.407 0 9.82-4.4 9.828-9.806.004-2.886-1.255-5.482-3.246-7.285L14.865 4.6a7.355 7.355 0 0 1 2.524 5.568c-.007 4.09-3.3 7.375-7.394 7.375S2.61 14.26 2.604 10.17a7.355 7.355 0 0 1 2.523-5.568L3.414 2.89z"/><circle cx="10" cy="3.32" r="3.32"/></svg>' },
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
				icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><title>Wikimedia Foundation</title><path d="M6.08 5.555a6.048 6.048 0 0 0 3.055 10.593v-7.54L6.08 5.556zm7.828.004-3.05 3.05v7.536a6.048 6.048 0 0 0 3.05-10.587z"/><path d="M3.414 2.89C1.424 4.69.164 7.287.168 10.173c.007 5.406 4.42 9.806 9.828 9.806 5.407 0 9.82-4.4 9.828-9.806.004-2.886-1.255-5.482-3.246-7.285L14.865 4.6a7.355 7.355 0 0 1 2.524 5.568c-.007 4.09-3.3 7.375-7.394 7.375S2.61 14.26 2.604 10.17a7.355 7.355 0 0 1 2.523-5.568L3.414 2.89z"/><circle cx="10" cy="3.32" r="3.32"/></svg>' },
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
				icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><title>Wikimedia Foundation</title><path d="M6.08 5.555a6.048 6.048 0 0 0 3.055 10.593v-7.54L6.08 5.556zm7.828.004-3.05 3.05v7.536a6.048 6.048 0 0 0 3.05-10.587z"/><path d="M3.414 2.89C1.424 4.69.164 7.287.168 10.173c.007 5.406 4.42 9.806 9.828 9.806 5.407 0 9.82-4.4 9.828-9.806.004-2.886-1.255-5.482-3.246-7.285L14.865 4.6a7.355 7.355 0 0 1 2.524 5.568c-.007 4.09-3.3 7.375-7.394 7.375S2.61 14.26 2.604 10.17a7.355 7.355 0 0 1 2.523-5.568L3.414 2.89z"/><circle cx="10" cy="3.32" r="3.32"/></svg>' },
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
