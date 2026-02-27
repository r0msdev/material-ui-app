.PHONY: help dev build start clean type-check lint docker-dev docker-prod docker-down docker-logs docker-clean install test test-watch

# Default target
help:
	@echo "Available commands:"
	@echo ""
	@echo "Development:"
	@echo "  make dev              - Start development server"
	@echo "  make build            - Build production bundle"
	@echo "  make start            - Start production server"
	@echo ""
	@echo "Quality checks:"
	@echo "  make type-check       - Run TypeScript type checking"
	@echo "  make lint             - Run ESLint"
	@echo "  make lint-fix         - Run ESLint and fix issues"	@echo "  make test             - Run tests"
	@echo "  make test-watch       - Run tests in watch mode"	@echo ""
	@echo "Maintenance:"
	@echo "  make clean            - Clean build artifacts"
	@echo "  make install          - Install dependencies"
	@echo "  make analyze          - Analyze bundle size"
	@echo ""
	@echo "Docker commands:"
	@echo "  make docker-dev           - Start development in Docker"
	@echo "  make docker-dev-build     - Build and start development in Docker"
	@echo "  make docker-prod          - Start production in Docker"
	@echo "  make docker-prod-build    - Build and start production in Docker"
	@echo "  make docker-down          - Stop Docker containers"
	@echo "  make docker-down-volumes  - Stop Docker containers and remove volumes"
	@echo "  make docker-logs          - View Docker logs (follow mode)"
	@echo "  make docker-clean         - Clean Docker system (remove all)"

# Development
dev:
	npm run dev

build:
	npm run build

start:
	npm run start

# Quality checks
type-check:
	npm run type-check

lint:
	npm run lint

lint-fix:
	npm run lint:fix

test:
	npm run test

test-watch:
	npm run test:watch

# Maintenance
clean:
	npm run clean

install:
	npm install

# Docker commands
docker-dev:
	docker-compose --profile dev up

docker-dev-build:
	docker-compose --profile dev up --build

docker-prod:
	docker-compose --profile prod up

docker-prod-build:
	docker-compose --profile prod up --build

docker-down:
	docker-compose --profile dev --profile development --profile prod --profile production down

docker-down-volumes:
	docker-compose --profile dev --profile development --profile prod --profile production down -v

docker-logs:
	docker-compose logs -f

docker-clean:
	docker system prune -af --volumes

# Bundle analysis
analyze:
	npm run analyze
