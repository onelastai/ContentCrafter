import { CONFIG } from '../config'

export function adjustTone(text: string, tone: string): string {
  const prompt = `Rewrite this in a ${tone} tone:\n${text}`
  return `Styled using ${CONFIG.llmModel}: [placeholder output]`
}

