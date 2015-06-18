#List:
======
* keywords should be a collection
* generate a random id for each group 
* restrict the random id from being published with the group information -> OK
* restrict the random id from being updated by anymean by validation
* add the random id to the group creator
* option to add more authors
* address to be an object (street, numb., zip) -> for future stats
* check meteornic
* add spinner http://es.discovermeteor.com/chapters/routing/
* seed problem
* email confirmation for signup
* Separate the css from master_layout.css to the templates.
* deploy the app


#Marketing:
========== 
* Think of referral program from the beginning.

one group:
has one creator -> admin 
the creator can invite other users to be co-authors -> admin can assigm permissions to create/update/edit information -> each group has an Array of ids of allowed to change information
has many events

which groups I am permitted to modify?
-> give groups unique ids (hide info from client)
-> if i created a group i get the id of the group in my permissions (through internal server communication)
-> i can get the group id if an author authorized me
-> 

which authors can modify me(group)?
-> save list of ids of users
-> can insert with a fake id 

#To Read:
=========
* auto form: https://github.com/aldeed/meteor-autoform
* simple schema rules: https://github.com/aldeed/meteor-simple-schema
* collection2: https://atmospherejs.com/aldeed/collection2
* security: https://atmospherejs.com/ongoworks/security
* meteornic: https://github.com/meteoric/meteor-ionic
* meteor doc: http://docs.meteor.com/#/full/meteor_users
* meteor admin: https://atmospherejs.com/yogiben/admin

* why relational DB: http://www.sarahmei.com/blog/2013/11/11/why-you-should-never-use-mongodb/
* reactive join: https://www.discovermeteor.com/blog/reactive-joins-in-meteor/
* publish-composite: https://github.com/englue/meteor-publish-composite
* meteor collections hooks: https://github.com/matb33/meteor-collection-hooks
* new effort for relations: https://github.com/jagi/meteor-astronomy/wiki/Relations
* must have packages: https://gentlenode.com/journal/meteor-22-the-best-meteor-packages-you-must-know-to-code-faster-than-ever/52



