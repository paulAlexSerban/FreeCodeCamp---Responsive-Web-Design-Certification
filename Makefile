include .env

install:
	cd ${SOURCE_DIR} && npm install

start:
	docker-compose up --build

stop:
	docker-compose down -v && sudo rm -rf ./docs/*

uninstall-npm:
	cd ${SOURCE_DIR} && rm -rf node_modules

uninstall: uninstall-npm
	sudo rm -rf ./docs/*

watch-linux:
	@while inotifywait -re modify --exclude "./build" ${SOURCE_DIR}; do \
		cd ${SOURCE_DIR} && npm run watch; \
  	cd .. && rsync -r --exclude-from='./config/watchexclude' ${SOURCE_DIR}/build/* ${DIST_DOCS_DIR} --info=progress2; \
	done
