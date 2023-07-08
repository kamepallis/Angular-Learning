Here we are going to use bootstap css files, instead of using default css

	1. install  bootstrap module
		#npm install --save bootstrap@3
	2. configure the bootstra css to application
		angular.json ---> styles --> provide the bootstrap css path
		
		
* Making our own file as loading
		-> Create your own html
		-> configure in angular.json as index file

* Creating components
	1. Manual
		* Create a component folder (server)
		* Create component.ts file (server.component.ts)
			@component({
				selector : 'app-server',
				templateURL: 'relative path to view'
			})
			export class ServerComponent{
			}
		* Create html view
		* Register the component in a module under declarations
			Angular can scan the components which are registered 
	2. CLS
		#ng generate component server
		#ng g c server
		CLI will automaticlly Registers the component in a module
