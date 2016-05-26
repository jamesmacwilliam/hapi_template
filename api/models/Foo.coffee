#/**
#* Foo.coffee
#*/

module.exports = sequelize.define("foo",
  #id:
    #type: Sequelize.UUID
    #primaryKey: true
    #defaultValue: Sequelize.UUIDV1
,
  getterMethods:
    #isFoo: ->
      #@id == "foo"
)
