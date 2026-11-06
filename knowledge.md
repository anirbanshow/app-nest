1. Application Start
2. Nest.Js scan module
3. provider will register
4. usersService instance will be create
5. controller will be create
6. usersService will be inject
7. request will come into controller
8. controller pull service call and send back response

IOC - Inversion of Control 
    - Framework will create the object
    - Developer won't have the control
    - without IOC develpoer need to create object again and again
    - with IOC we need to write one line -  constructor(private readonly appService: AppService) {}

Provider 
    - Provider is a class that is used to create the object
    - Only service file is not a provider, other class can be a provider
    - example: repository class, factory class, helper class, configuration class
    - Every service file is a provider, but every provider is not a service

Why need provider
    - suppose we have 10 controller, every controller need usersService
    - if no provider then need to create new usersService object
    - every controller will crate different object, momoey waste, code maintain wont be easy
    - Nest.js automatic create provider system, object create automatic, object manage automatic, inject when needed
    - need to write one line -  constructor(private readonly appService: AppService) {}


