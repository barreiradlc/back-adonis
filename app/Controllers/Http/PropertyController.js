'use strict'




const Property = use('App/Models/Property')


/**
 * Resourceful controller for interacting with properties
 */
class PropertyController {
  /**
   * Show a list of all properties.
   * GET properties
   */
  async index () {
    const properties = Property.all()
  
    return properties
  }

   /*   async index ({ request, response, view }) {
  }
 */
  /**
   * Render a form to be used for creating a new property.
   * GET properties/create
   */
/*   async create ({ request, response, view }) {
  }
 */
  /**
   * Create/save a new property.
   * POST properties
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single property.
   * GET properties/:id
   */
  async show ({ params /* , request, response, view */ }) {
    const property = await Property.findOrFail(params.id)
    
    await property.load('images')

    return property
  }

  /**
   * Render a form to update an existing property.
   * GET properties/:id/edit
   */
  /* async edit ({ params, request, response, view }) {
  }
 */
  /**
   * Update property details.
   * PUT or PATCH properties/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a property with id.
   * DELETE properties/:id
   */
  async destroy ({ params, auth, response }) {
    const property = await Property.findOrFail(params.id)

    if (property.user_id !== auth.user.id) {
      return response.status(401).send({ error: 'Not authorized' })

    }

    await property.delete()

  }

}

module.exports = PropertyController
