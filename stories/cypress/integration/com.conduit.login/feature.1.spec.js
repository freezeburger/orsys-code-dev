/// <reference types="Cypress" />

import { overall } from "../com.conduit.sla/overall.spec"

context('Overall For Feature', function() {
    overall('/login')
})