.PHONY: help

help:
	@echo Do It Yourself

install:
	yarn install

development:
	@npm run dev

watch:
	@npm run watch

run:
	@npm run start

config:
	@cp -r dotvscode/* .vscode/*
