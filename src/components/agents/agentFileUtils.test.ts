import { describe, expect, it } from 'bun:test'
import { formatAgentAsMarkdown } from './agentFileUtils.js'

describe('formatAgentAsMarkdown', () => {
  it('formats a normal string whenToUse', () => {
    const md = formatAgentAsMarkdown(
      'my-agent',
      'Use this agent when X',
      ['Read'],
      'You are a helpful agent.',
    )
    expect(md).toContain('name: my-agent')
    expect(md).toContain('description: "Use this agent when X"')
    expect(md).toContain('You are a helpful agent.')
  })

  it('escapes embedded quotes, backslashes, and newlines in whenToUse', () => {
    const md = formatAgentAsMarkdown(
      'esc',
      'a "quoted" \\path\nand newline',
      undefined,
      'sp',
    )
    expect(md).toContain('description: "a \\"quoted\\" \\\\path\\\\nand newline"')
  })

  // Regression for #1086: weak local models (qwen3.5:9b in the report) can
  // return non-string values for whenToUse, which previously crashed agent
  // creation with "whenToUse.replace is not a function".
  it('does not crash when whenToUse is not a string (issue #1086)', () => {
    const cases: unknown[] = [
      undefined,
      null,
      42,
      ['array', 'value'],
      { nested: 'object' },
    ]
    for (const value of cases) {
      expect(() =>
        formatAgentAsMarkdown(
          'a',
          value as unknown as string,
          undefined,
          'sp',
        ),
      ).not.toThrow()
    }
  })
})
