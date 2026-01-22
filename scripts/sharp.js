import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const PUBLIC = 'docs/public'
const CONFIG = path.join(PUBLIC, 'sharp.json')

const cfg = JSON.parse(fs.readFileSync(CONFIG, 'utf8'))
const defaults = cfg.defaults ?? {}
const rules = cfg.rules ?? []
const map = {}

const isNum = (n) => typeof n === 'number' && Number.isFinite(n)

const uniq = (arr) => [...new Set(arr.filter(Boolean))]

const getSizes = (rule) => {
	const sizes = rule.sizes ?? defaults.sizes
	if (Array.isArray(sizes) && sizes.length) return sizes
	return [{ width: rule.width ?? defaults.width, height: rule.height ?? defaults.height }]
}

for (const rule of rules) {
	const dir = path.join(PUBLIC, rule.src)
	const sizes = getSizes(rule)

	const cfgFormats = rule.formats ?? defaults.formats
	const formats = uniq([...(Array.isArray(cfgFormats) ? cfgFormats : ['webp']), 'webp'])
	const quality = rule.quality ?? defaults.quality ?? 82
	const withoutEnlargement = !!rule.withoutEnlargement

	for (const file of fs.readdirSync(dir)) {
		if (!/\.(png|jpe?g|webp)$/i.test(file) || /\.opt\.(png|jpe?g|webp)$/i.test(file)) continue

		const srcPath = path.join(dir, file)
		const base = path.parse(file).name
		const relSrc = `/${rule.src}/${file}`

		map[relSrc] ??= {}

		for (const s of sizes) {
			const width = isNum(s?.width) ? s.width : undefined
			const height = isNum(s?.height) ? s.height : undefined

			for (const fmt of formats) {
				const outFile = `${base}.opt.${fmt}`

				let img = sharp(srcPath)

				if (width != null || height != null) {
					img = img.resize({ width, height, withoutEnlargement, fit: 'outside', })
				}

				await img.toFormat(fmt, { quality }).toFile(path.join(dir, outFile))

				map[relSrc][fmt] = `/${rule.src}/${outFile}`
			}
		}
	}
}

console.log('✔ sharp pipeline complete')
