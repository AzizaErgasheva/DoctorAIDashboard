# Use Node.js 18 with Python support
FROM node:18-bullseye

# Install Python and pip
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    python3-dev \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy entire project
COPY . .

# Install Python dependencies first
RUN cd backend && pip3 install --no-cache-dir -r requirements.txt

# Install Node.js dependencies
RUN cd backend && npm ci --only=production

# Create non-root user
RUN useradd -m -u 1001 appuser
USER appuser

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:3000/health || exit 1

# Start the application
WORKDIR /app/backend
CMD ["npm", "start"]