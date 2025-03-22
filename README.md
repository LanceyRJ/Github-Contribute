# GitHub Contribution Graph Generator

A tool to generate custom GitHub contribution patterns by creating backdated commits.

## Prerequisites

- Node.js installed
- Git configured with your GitHub account

## Setup

1. Clone this repository

```bash
git clone https://github.com/yourusername/github-contribute.git
cd github-contribute
```

2. Install dependencies

```bash
npm install
```

3. Configure Git (if not already done)

```bash
git config --global user.name "Your Name"
git config --global user.email "your.github@email.com"
```

## Usage

1. Generate your custom dates using the Calendar Tool:
   [GitHub Contribution Calendar Generator](https://lanceyrj.github.io/contirbute-calendar/)

2. Copy the generated dates and paste them into the `dates` array in `index.js`

3. Run the script

```bash
node index.js
```

## Features

- Creates multiple commits per day (1-5 random commits)
- Backdates commits to specified dates
- Shows progress in console
- Automatically pushes to GitHub

## Warning

Use this tool responsibly and in accordance with GitHub's terms of service.
