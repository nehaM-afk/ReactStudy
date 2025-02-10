import React, { Component } from 'react'

const UserContext = React.createContext('Neha Old')
  
const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider , UserConsumer, UserContext}