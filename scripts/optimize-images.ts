import fg from 'fast-glob'
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

type Rule = {
	src: string
	formats?: string[] | null
	width?: number | null
	height?: number | null
	quality?: number | null
	withoutEnlargement?: boolean | null
}

type Config = {
	defaults?: Partial<Omit<Rule, 'src'>>
	rules?: Rule[]
}

const PUBLIC = './'
const CONFIG = path.join(PUBLIC, 'optimize-images.json')

const cfg = JSON.parse(fs.readFileSync(CONFIG, 'utf8')) as Config
const defaults: Partial<Omit<Rule, 'src'>> = cfg.defaults ?? {}
const rules: Rule[] = cfg.rules ?? []

const isNum = (n: unknown): n is number => typeof n === 'number' && Number.isFinite(n)
const uniq = <T>(arr: Array<T | null | undefined | false | ''>): T[] =>
	[...new Set(arr.filter(Boolean) as T[])]

const optimizedSrcMap = new Map<string, true>()
const imageExtRe = /\.(png|apng|jpe?g|jfif|pjpeg|pjp|webp|gif|avif|svg)$/i
const optimizedImageExtRe = /\.opt\./i

for (const rule of rules) {
	const cfgFormats = rule.formats ?? defaults.formats
	const formats: string[] = uniq([
		...(Array.isArray(cfgFormats) ? cfgFormats : ['webp']),
		'webp'
	])

	const width = isNum(rule.width) ? rule.width : undefined
	const height = isNum(rule.height) ? rule.height : undefined
	const quality = rule.quality ?? defaults.quality ?? 90
	const withoutEnlargement = !!rule.withoutEnlargement

	const pattern = rule.src
	const files: string[] = await fg(pattern, {
		cwd: PUBLIC,
		onlyFiles: true,
		absolute: true,
		caseSensitiveMatch: false
	})

	for (const srcPath of files) {
		if (!imageExtRe.test(srcPath) || optimizedImageExtRe.test(srcPath)) continue
		if (optimizedSrcMap.has(srcPath)) continue
		optimizedSrcMap.set(srcPath, true)

		const { dir, name, base } = path.parse(srcPath)

		for (const fmt of formats) {
			const outPath = path.join(dir, `${name}.opt.${fmt}`)

			let img = sharp(srcPath)

			if (width != null || height != null) {
				img = img.resize({
					width,
					height,
					withoutEnlargement,
					fit: 'outside'
				})
			}

			console.log(`optimize-images: ${base} -> ${path.basename(outPath)}`)
			await img
				.toFormat(fmt as keyof sharp.FormatEnum, { quality })
				.toFile(outPath)
		}
	}
}

console.log('✔ sharp pipeline complete')
