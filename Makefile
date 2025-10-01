start:
	docker-compose -f docker-compose.yml up --build -d
dev:
	npx docusaurus start
time:
	time docker build -t my-website:latest .
time-process:
	 time docker build --progress=plain -t my-website:latest .
stop:
	docker-compose -f docker-compose.yml down -v