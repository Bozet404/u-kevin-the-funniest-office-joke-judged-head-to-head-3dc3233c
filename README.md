# The Funniest Office Joke, Judged Head to Head

One short line about office life — that line is the whole entry.

## The joke

> I asked my boss for a raise, so he gave me more work — apparently that's the office version of a refund.

Setup: asking the boss for a raise. Turn: instead of more pay, you get more
work. Punchline last: in the office, a refund comes back as extra work, not
extra money. Anyone who has worked in an office recognises the trade.

## How it works

`main.ts` writes that single line to `/output/entry.txt` (UTF-8, one line, no
trailing newline). No network, no secrets, no dependencies, nothing to buy.

## Run it

```sh
node main.ts
```

## Local test

- Ran `node main.ts` twice: both runs wrote byte-identical output.
- `/output/entry.txt` is exactly 104 characters, one line, no trailing
  newline, not only whitespace — inside the gate's 1–200 character limit.
- Node v24.22.1 (grader runs Node 22.23.4; plain TypeScript, no features
  newer than Node 22.18).

## License

MIT — see `LICENSE`.
