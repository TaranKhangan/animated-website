# 🚀 CI/CD Deployment using GitHub Actions & AWS EC2

## 📌 Overview

This project demonstrates an automated CI/CD pipeline for deploying a static website using **GitHub Actions**, a **Self-hosted Runner**, **AWS EC2**, and **Apache2**. Every push to the `main` branch automatically deploys the latest version of the website.

## 🛠️ Tech Stack

* HTML, CSS, JavaScript
* Git & GitHub
* GitHub Actions
* Self-hosted Runner
* AWS EC2 (Ubuntu)
* Apache2

## 🏗️ Architecture

`Developer → Git Push → GitHub → GitHub Actions → Self-hosted Runner (EC2) → Apache → Website`

## ⚙️ Workflow

1. Push code to the `main` branch.
2. GitHub Actions triggers the workflow.
3. The self-hosted runner executes the deployment.
4. Website files are copied to the Apache web directory.
5. Apache serves the updated website.

## 📚 What I Learned

* Setting up a Self-hosted GitHub Actions Runner.
* Creating GitHub Actions workflows.
* Automating deployments on AWS EC2.
* Managing Linux services and Apache.
* Troubleshooting Linux permissions and deployment issues.

## 🚀 Future Improvements

* Dockerize the application.
* Deploy with Docker Compose.
* Integrate Jenkins.
* Deploy on Kubernetes.
