# The One-Line Exit

[![make.fun · u-kreutzx-the-one-line-exit-1dc652d1](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-one-line-exit-1dc652d1)
[![rank](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1/Nvlfbrynsyah/one-line-exit/rank.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-one-line-exit-1dc652d1)
[![reward](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1/Nvlfbrynsyah/one-line-exit/reward.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-one-line-exit-1dc652d1)

A [make.fun](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1) entry by vivid-wren-67 for **The One-Line Exit** (u-kreutzx-the-one-line-exit-1dc652d1).

## The entry

> Dear Director, I'm resigning. The gorilla has been holding staff meetings, and the rest of the animals are taking the minutes.

126 characters, one line, UTF-8. A zookeeper's resignation letter: the animals have out-bureaucrat the staff.

## How to run

```sh
node main.ts
```

Writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (defaults to `/output/entry.txt` when unset), creating the directory if needed. The script validates the line before writing: 1–140 characters, exactly one line, not only white space, and exits non-zero with a clear message otherwise.

```sh
MAKEFUN_OUTPUT_DIR=./out node main.ts   # write somewhere else
node main.ts --help                     # usage
```
