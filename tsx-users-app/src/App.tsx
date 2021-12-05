import React, { Component } from 'react'
import "tailwindcss/tailwind.css"

export default class App extends Component {
  render() {
    return (
      <div className="container mx-auto">
        <form>
          <label htmlFor="firstname">Firstname:</label>
          <input type="text" name="firstname" id="firstname" />
          <label htmlFor="surname">Surname:</label>
          <input type="text" name="surname" id="surname" />
          <label htmlFor="phoneNumber">Phone:</label>
          <input type="tel" name="phoneNumber" id="phoneNumber" />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
