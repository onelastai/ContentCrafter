import { CONFIG } from './config'
import { rewriteContent } from './services/rewriter'
import { adjustTone } from './services/tone'

export function startCrafter() {
  console.log(`📝 ContentCrafter v${CONFIG.version} online`)
  const raw = rewriteContent(CONFIG.inputPath)
  const styled = adjustTone(raw, CONFIG.tone)
  console.log('🎨 Final Output:', styled)
}

