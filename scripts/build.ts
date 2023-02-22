import type { Options } from 'tsup'
import { build as tsupBuild } from 'tsup'
import { defaultConfig } from '../tsup.config'

async function build(opts: Options = {}) {
  await tsupBuild({
    ...defaultConfig,
    ...opts,
    config: false,
  })
}

export { build }
