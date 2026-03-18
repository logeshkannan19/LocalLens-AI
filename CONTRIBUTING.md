# Contributing to LocalLens AI

First off, thanks for taking the time to contribute! 🎉

The following is a set of guidelines for contributing to LocalLens AI. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## How Can I Contribute?

### Reporting Bugs
This section guides you through submitting a bug report for LocalLens AI.
- **Ensure the bug was not already reported** by searching on GitHub under Issues.
- If you're unable to find an open issue addressing the problem, open a new one. Be sure to include a **title and clear description**, as much relevant information as possible, and code examples demonstrating the expected behavior that is not occurring.

### Suggesting Enhancements
- Open a new discussion or issue detailing the enhancement.
- Explain *why* this enhancement would be useful to most LocalLens users.

### Pull Requests
1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs or n8n workflows, update the documentation.
4. Ensure the test suite passes (if applicable).
5. Ensure your code is thoroughly documented using JSDoc (for Node) or Python Docstrings.
6. Issue the pull request. We will review it as soon as possible.

## Code Style
- **JavaScript/Node.js**: Follow the standard ESLint configs. Prefer ES6 syntax. Add JSDoc comments to all public functions and APIs.
- **SQL**: Use explicit `UPPERCASE` for SQL keywords, define foreign keys rigorously.
- **JSON (Workflows)**: Always export n8n JSON payloads cleanly without sensitive credentials attached.

By contributing to this project, you agree that your contributions will be licensed under its MIT license.
