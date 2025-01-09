# Use an official Python image
FROM python:3.10-slim

# Install necessary tools
RUN apt-get update && apt-get install -y git curl && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /workspace

# Install Python dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt
