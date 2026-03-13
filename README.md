# Practical Cloud Assignment: CI/CD with GitHub Actions

**Project Title:** Cloud Beginner CI/CD Pages
**Student:** Mohammed Yousef
**Course:** Cloud Computing

## Description

This project is a beginner-friendly demonstration of implementing a Continuous Integration and Continuous Deployment (CI/CD) pipeline using GitHub Actions and GitHub Pages. It features a static HTML/CSS/JS website.

### What is CI/CD?
CI/CD stands for Continuous Integration and Continuous Deployment, a modern software development practice designed to streamline and automate the release process. Continuous Integration (CI) automatically builds and tests your code every time you make a change, ensuring that new updates don't break existing functionality. Continuous Deployment (CD) takes over after a successful build, automatically releasing those approved changes to a live production environment. Together, they eliminate manual, error-prone tasks from the development lifecycle. Ultimately, this allows teams to deliver updates faster, with higher quality, and with much greater confidence.

### My Pipeline
Whenever I push new code to the `main` branch, my GitHub Actions pipeline automatically triggers a build process to verify that all necessary files are present. Once these basic checks pass, the workflow packages the website files and securely deploys the latest version directly to GitHub Pages. This automated process ensures my live website is always perfectly in sync with my repository code without requiring any manual uploads.
