import ColorThief from 'colorthief'

const extractColors = async (spriteUrl: string): Promise<string[]> => {
  if (!spriteUrl) return []

  const img = new window.Image()
  img.crossOrigin = 'Anonymous'

  return new Promise((resolve, reject) => {
    img.onload = () => {
      try {
        const colorThief = new ColorThief()
        const palette = colorThief.getPalette(img, 3)
        const rgbColors = palette.map((rgb: number[]) => {
          const [r, g, b] = rgb
          return `rgb(${r}, ${g}, ${b})`
        })
        resolve(rgbColors)
      } catch (error) {
        console.error('Error extracting colors:', error)
        reject(error)
      }
    }

    img.onerror = () => {
      console.error('Error loading image:', spriteUrl)
      reject(new Error('Failed to load image'))
    }

    img.src = spriteUrl
  })
}

const getContrastColor = (colors: string[]): string => {
  if (colors.length === 0) return 'rgb(255, 255, 255)' // Default to white if no colors

  // Simple contrast color logic: return black or white based on average brightness
  const rgb = colors[0].match(/\d+/g)?.map(Number)
  if (!rgb) return 'rgb(255, 255, 255)'

  const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000
  return brightness > 150 ? 'rgb(46, 46, 72)' : 'rgb(255, 255, 255)'
}

export const paletteExtractor = {
  extractColors,
  getContrastColor,
}
