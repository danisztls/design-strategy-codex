---
title: "Readability on Wikipedia"
description: "The web factors that affect reading on the internet."
hero:
    image:
        src: "/readability-on-wp/hero.webp"
        alt: "Person reading a Wikipedia article on a tablet device"
    caption: Photo by <a href="https://commons.wikimedia.org/wiki/File:Rafael_using_his_tablet.webp">ARipstra (WMF)</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.en">CC BY-SA 4.0</a>, via Wikimedia Commons</a> 
---


# Overview

Readers come to Wikipedia to fulfill a broad range of needs, ranging from quickly obtaining facts to diving deep into a topic. Such diversity in use cases necessitates an interface design that supports both in-depth reading and scanning of Wikipedia articles. This literature review examines the available academic literature on the relevant web factors that affect readability. As the Reader's Web team implements a series of changes aimed at [improving Wikipedia's desktop interface](https://www.mediawiki.org/wiki/Reading/Web/Desktop_Improvements), this literature review informs key decisions about text settings and line spacing to facilitate ease of in-depth reading and scanning.

## Top High Level Takeaways

### Scanning

- Users reading digital papers scan more and read less than traditional newspapers.
- Different contexts impact how scanning is done. Scanning emails usually happens faster than scanning other types of web content.
- New types of features of a web page such as buttons, hyperlinks, headers and more lead to users jumping around a page.

### Line Spacing

Larger line spacings (1.2 and 1.4) lead to faster readings than smaller line spacings of 1.1 or 0.8.

### Line Length

Users preferred shorter line lengths rather than full-screen line lengths. However, longer lines lead to better readability due to normal eye movement.

### Font Size

Larger than 12-point font was recommended for efficiency and comprehension. Rello et al. (2016) recommend 18-points font and Bernard et al. recommended 14-point.

### Font Type

Most studies showed that Verdana, a sans-serif font was preferred for readability.

### Font Style

Users were able to respond and read faster plain text versus italic text.

### Color Contrast

There needs to be a good combination of bright and dark colors for good readability. However, there lacks color contrast guidelines.

### Whitespace

Whitespace around headings and subheadings leads to good readability. However, too much whitespace can lead to unusual eye movements.

### Languages and Scripts

- In Japanese and Korean, a smaller font size on mobile screens made it difficult to read meaning that subjects had to move the screen closer to their face.
- Recommendations for 3-5mm font size or having the ability to magnify to almost twice the size is important.
- Arabic needs to be presented in larger fonts (16-point and higher). Simplified Arabic font is easier to read for adults and younger children.
- For Chinese, the combination of 12-point font size and 1:10 stroke width resulted in the best legibility for high and low character complexity levels.

### Users with Dyslexia

- Sans serif, monospaced, and roman font styles significantly improved the reading performance over serif, proportional, and italic fonts.
- Color pairs should have lower contrasts. The color pair which was the fastest to read by the participants with dyslexia was black and cream.
- Larger fonts, narrower content columns and no text styles such as italics and underlining.

### Users with Low Vision

- People with vision loss suffered from mainly three diseases: albinism, retinitis pigmentosa and glaucoma.
- Enlarge physical character size or reduce the viewing distance by putting their faces closer to the screen.
- Larger font sizes or screen sizes than those with normal vision. For those with loss of vision, magnification to over 20-points may be needed.
- Content needs to be farther apart to be easily recognizable.
- Higher contrast can also lead to higher readability for those with low vision.

## Findings

<script setup>
const findings = [
	{
		"title": "Literature Review",
		"url": "https://commons.wikimedia.org/wiki/File:WMF_-_Optimal_Text_Settings_-_Literature_Review_(03_22).pdf",
	},
	{
		"title": "Executive Summary",
		"url": "https://commons.wikimedia.org/wiki/File:Readability_%26_Optimal_Text_Settings_-_Executive_Summary_(03_22).pdf",
	},
	{
		"title": "List of Resources",
		"url": "https://commons.wikimedia.org/wiki/File:WMF_-_Optimal_Text_Settings_-_Study_Comparison_Table_(03_22)_-_Sheet1.pdf",
	},
	{
		"title": "Annotated Bibliography",
		"url": "https://commons.wikimedia.org/wiki/File:WMF_-_Optimal_Text_Settings_-_Annotated_Bibliography_(03_22).pdf",
	}
]
</script>

<LocalCardsList :list="findings" />
