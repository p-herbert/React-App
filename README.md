# React App

## Introduction

This is a repository that serves as a starting point for building single page React applications.

## Starting

### Production
 
The application can be started with the command

	npm start

and stopped with the command

	npm stop
	
### Development
	
The application can be started in development mode with the command

	npm run dev-start
	
## Make

Development builds can be made with the command

	npm run make-dev
		
Production builds can be made with the command

	npm run make-pro

## Avoiding Relative Paths

The source application files have been symbolically linked to `node_modules/app` so you are able to require files by doing `require('app/scripts.js)`.



 