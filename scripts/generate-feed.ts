import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import { Feed } from 'feed'

interface Item {
	date: string	// "YYYY-MM" or "YYYY"
	initiative: string
	title: string
	description?: string
	url?: string
	lead?: string
}

const siteUrl = 'https://design.wikimedia.org'
const outDir = path.resolve('public/')
const dataFile = path.resolve('strategy/projects/projects.json')

function parseDate(value: string): Date {
	if (/^\d{4}-\d{2}$/.test(value)) {
		return new Date(`${value}-01T00:00:00Z`)
	}
	if (/^\d{4}$/.test(value)) {
		return new Date(`${value}-01-01T00:00:00Z`)
	}
	throw new Error(`Invalid date format: ${value}`)
}

function stableId(item: Item): string {
	if (item.url) return item.url

	const base = `${item.title}|${item.initiative}|${item.date}`
	const hash = crypto.createHash('sha1').update(base).digest('hex')

	return `urn:feed-item:${hash}`
}

const raw = fs.readFileSync(dataFile, 'utf8')
const items = JSON.parse(raw) as Item[]

const feed = new Feed({
	title: 'Wikimedia Design Strategy',
	description: 'Design and user research projects at Wikimedia Foundation.',
	id: siteUrl,
	link: siteUrl,
	language: 'en',
	updated: new Date(),
	feedLinks: {
		rss2: `${siteUrl}/rss.xml`,
		atom: `${siteUrl}/atom.xml`,
	},
})

items
	.sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime())
	.forEach((item) => {
		feed.addItem({
			title: item.title,
			id: stableId(item),
			link: item.url ? item.url : '',
			description: item.description ? item.description : '',
			content: `
${item.description ? `<p>${item.description}</p>` : ''}
Initiative: ${item.initiative}
${item.lead ? `<i>Lead: ${item.lead}</i><br/>` : ''}
			`.trim(),
			author: item.lead ? [{ name: item.lead }] : [],
			date: parseDate(item.date),
		})
	})

fs.mkdirSync(outDir, { recursive: true })

fs.writeFileSync(path.join(outDir, 'rss.xml'), feed.rss2())
fs.writeFileSync(path.join(outDir, 'atom.xml'), feed.atom1())
