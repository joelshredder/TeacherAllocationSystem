const { hooks } = require('@adonisjs/ignitor')
// const Logger = use('Logger') //TODO: Fix logger installation

hooks.after.providersBooted(() => {
  const Exception = use('Exception')

  // Exception.handle('GenericException', async (error, { response, session }) => {
  //   session.withErrors(error.messages).flashAll()
  //   await session.commit()
  //   console.log(error)
  //   return response.redirect('/home')
  // })

})
